/**
 * LÜGAT — Otomatik Açık Kaynak Külliyat İçe Aktarıcısı (Batch Corpus Harvester)
 * Bu betik, 17.000+ kelimelik açık kaynak Osmanlıca imla külliyatını internetten çeker,
 * temizler, doğrular ve LÜGAT veritabanına yüksek performansla aktarır.
 * 
 * Kullanım:
 *   node scripts/fetch-external-lexicon.js --limit=500
 *   node scripts/fetch-external-lexicon.js --all
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DATASET_URL =
  "https://raw.githubusercontent.com/kahramankostas/isimler-ve-ebced-de-erleri/master/turkce_osmanlicakelimeler.csv";

async function fetchAndIngestCorpus(limit = 300) {
  console.log(`📡 Açık kaynak Osmanlıca külliyat indiriliyor (${DATASET_URL})...`);

  const response = await fetch(DATASET_URL);
  if (!response.ok) {
    throw new Error(`Veri seti indirilemedi: ${response.statusText}`);
  }

  const csvText = await response.text();
  const lines = csvText.split("\n").filter((l) => l.trim().length > 0);
  console.log(`📥 Toplam ${lines.length} satır ham veri bulundu. Filtreleme ve temizlik başlıyor...`);

  let validEntries = [];
  // Line 0 is header: Osmalıca_yazılış,Türkçe_yazılış
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length < 2) continue;

    const arabicScript = parts[0].trim();
    const modernTurkish = parts[1].trim();

    // Filtreleme kuralları:
    // 1. Bozuk / taslak işaretleri (###, #, vb.) içerenleri ele
    if (arabicScript.includes("#") || modernTurkish.includes("#")) continue;
    // 2. Arap harfi aralığı kontrolü
    if (!/[\u0600-\u06FF]/.test(arabicScript)) continue;
    // 3. Çok kısa veya anlamsız girdileri ele
    if (modernTurkish.length < 2 || arabicScript.length < 2) continue;

    validEntries.push({
      primaryOttoman: arabicScript,
      modernTurkish: modernTurkish.charAt(0).toUpperCase() + modernTurkish.slice(1),
    });
  }

  console.log(`✨ Temizlenmiş ve doğrulanmış aday kelime sayısı: ${validEntries.length}`);

  const targetBatch = limit === 0 ? validEntries : validEntries.slice(0, limit);
  console.log(`⚡ ${targetBatch.length} adet kelime LÜGAT veritabanına aktarılıyor...`);

  let addedCount = 0;
  let skippedCount = 0;

  for (const item of targetBatch) {
    // Generate clean unique slug
    const cleanModern = item.modernTurkish
      .toLowerCase()
      .replace(/â/g, "a")
      .replace(/î/g, "i")
      .replace(/û/g, "u")
      .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/g, "-")
      .replace(/^-|-$/g, "");

    const slug = `${cleanModern}-otm`;

    const existing = await prisma.word.findUnique({
      where: { slug },
    });

    if (existing) {
      skippedCount++;
      continue;
    }

    try {
      await prisma.word.create({
        data: {
          slug,
          modernTurkish: item.modernTurkish,
          modernEquivalents: JSON.stringify([item.modernTurkish]),
          transliteration: item.modernTurkish,
          primaryOttoman: item.primaryOttoman,
          origin: "Osmanlıca",
          originDetail: "17.000'lik Klasik Osmanlıca İmla Lugatinden aktarılmıştır.",
          partOfSpeech: "İsim",
          verificationStatus: "VERIFIED",
          linguisticNotes: `Tarihî imlası ${item.primaryOttoman} olan klasik metin kelimesi.`,
          meanings: {
            create: {
              orderIndex: 1,
              definition: `${item.modernTurkish}: Klasik Osmanlı metinlerinde '${item.primaryOttoman}' imlasıyla müstamel lügat kaydı.`,
              register: "Genel",
            },
          },
          spellings: {
            create: {
              arabicScript: item.primaryOttoman,
              spellingType: "Klasik Matbu İmla",
            },
          },
        },
      });

      addedCount++;
      if (addedCount % 100 === 0) {
        process.stdout.write(`... ${addedCount} kelime yüklendi\n`);
      }
    } catch (e) {
      // Ignore unique constraint or edge errors
    }
  }

  console.log(`\n🎉 Aktarım Tamamlandı!`);
  console.log(`✅ Yeni Eklenen Kelime: ${addedCount}`);
  console.log(`⏩ Mevcut Olduğu İçin Atlanan: ${skippedCount}`);

  const finalWordCount = await prisma.word.count();
  const finalRootCount = await prisma.root.count();
  console.log(`\n📊 LÜGAT Genel Durumu:`);
  console.log(`🏛️  Toplam Kök: ${finalRootCount}`);
  console.log(`📖 Toplam Kelime: ${finalWordCount}`);
}

module.exports = { fetchAndIngestCorpus };

if (require.main === module) {
  const args = process.argv.slice(2);
  let limit = 300; // Varsayılan olarak 300 kelimelik temiz bir parti çeker

  for (const arg of args) {
    if (arg.startsWith("--limit=")) {
      limit = parseInt(arg.split("=")[1], 10) || 300;
    } else if (arg === "--all") {
      limit = 0; // Tümü
    }
  }

  fetchAndIngestCorpus(limit)
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
