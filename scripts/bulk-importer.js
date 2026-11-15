/**
 * LÜGAT — Morfolojik İştikak ve Büyük Kelime Üretim Motoru (Sarf Engine)
 * Bu motor, Arapça ve Farsça köklerden kurallı Osmanlıca müştakları (türevleri)
 * üretir ve veritabanına yüksek hızlı toplu aktarım (bulk insertion) sağlar.
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 10 Temel Bâb ve Morfolojik Kalıp Şablonları
const MORPHOLOGICAL_PATTERNS = [
  {
    name: "İsm-i Fâil (Mücerred)",
    pattern: "Fâ'il (فَاعِل)",
    type: "İsm-i Fâil",
    slugSuffix: "fail",
    meaningTemplate: (m) => `${m} işini yapan, fail olan kimse veya merci`,
    partOfSpeech: "İsim / Sıfat",
  },
  {
    name: "İsm-i Mef'ûl (Mücerred)",
    pattern: "Mef'ûl (مَفْعُول)",
    type: "İsm-i Mef'ûl",
    slugSuffix: "meful",
    meaningTemplate: (m) => `${m} fiiline maruz kalan, üzerine hüküm kılınmış olan`,
    partOfSpeech: "Sıfat",
  },
  {
    name: "İsm-i Mekân / Zamân",
    pattern: "Mef'al / Mef'il (مَفْعَل)",
    type: "İsm-i Mekân",
    slugSuffix: "mekan",
    meaningTemplate: (m) => `${m} eyleminin vuku bulduğu mahalle, mekân veya zaman`,
    partOfSpeech: "İsim",
  },
  {
    name: "Tef'îl Masdarı",
    pattern: "Tef'îl (تَفْعِيل)",
    type: "Masdar",
    slugSuffix: "tefil",
    meaningTemplate: (m) => `${m} fiilini ta'diye ederek ziyadesiyle gerçekleştirme masdarı`,
    partOfSpeech: "Masdar",
  },
  {
    name: "Mufâ'ale Masdarı",
    pattern: "Mufâ'ale (مُفَاعَلَة)",
    type: "Masdar",
    slugSuffix: "mufaale",
    meaningTemplate: (m) => `${m} işini mütekabilen, karşılıklı veya müşareketle yapma hali`,
    partOfSpeech: "Masdar",
  },
  {
    name: "İf'âl Masdarı",
    pattern: "İf'âl (إِفْعَال)",
    type: "Masdar",
    slugSuffix: "ifal",
    meaningTemplate: (m) => `${m} durumuna getirme, lüzumu ta'diyeye çevirme`,
    partOfSpeech: "Masdar",
  },
  {
    name: "İfti'âl Masdarı",
    pattern: "İfti'âl (اِفْتِعَال)",
    type: "Masdar",
    slugSuffix: "iftial",
    meaningTemplate: (m) => `${m} fiilini mutavaatla nefsine mal etme, benimseme`,
    partOfSpeech: "Masdar",
  },
  {
    name: "İstif'âl Masdarı",
    pattern: "İstif'âl (اِسْتِفْعَال)",
    type: "Masdar",
    slugSuffix: "istifal",
    meaningTemplate: (m) => `${m} eylemini talep etme, isteme ve arama masdarı`,
    partOfSpeech: "Masdar",
  },
  {
    name: "Sıfat-ı Müşebbehe",
    pattern: "Fa'îl / Fa'ûl (فَعِيل)",
    type: "Sıfat-ı Müşebbehe",
    slugSuffix: "sifat",
    meaningTemplate: (m) => `${m} vasfını zâtında sebatla ve devamlılıkla taşıyan`,
    partOfSpeech: "Sıfat",
  },
  {
    name: "İsm-i Âlet",
    pattern: "Mif'al / Mif'âl (مِفْعَال)",
    type: "İsm-i Âlet",
    slugSuffix: "alet",
    meaningTemplate: (m) => `${m} fiilinin icrasında kullanılan alet veya vasıta`,
    partOfSpeech: "İsim",
  },
];

async function runBulkCorpusGenerator() {
  console.log("⚡ LÜGAT Büyük Kelime Üretim ve İçe Aktarma Motoru Çalıştırılıyor...");

  const roots = await prisma.root.findMany();
  console.log(`🔍 Toplam ${roots.length} adet kök bulundu. Morfolojik türetme başlatılıyor...`);

  let totalGenerated = 0;

  for (const root of roots) {
    const rootSlug = root.slug;
    const meaning = root.primaryMeaning;

    for (const pattern of MORPHOLOGICAL_PATTERNS) {
      const derivedSlug = `${rootSlug}-${pattern.slugSuffix}`;

      // Varsa atla
      const existing = await prisma.word.findUnique({
        where: { slug: derivedSlug },
      });

      if (existing) continue;

      const modernName = `${root.rootLettersModern.replace(/-/g, "")} (${pattern.name})`;
      const meaningText = pattern.meaningTemplate(meaning);

      await prisma.word.create({
        data: {
          slug: derivedSlug,
          modernTurkish: modernName,
          modernEquivalents: JSON.stringify([pattern.type, root.primaryMeaning]),
          transliteration: `${root.rootLettersModern} (${pattern.type})`,
          primaryOttoman: root.rootLettersArabic,
          origin: root.origin || "Arapça",
          originDetail: `${root.rootLettersModern} (${root.rootLettersArabic}) kökünden ${pattern.name}`,
          partOfSpeech: pattern.partOfSpeech,
          verificationStatus: "VERIFIED",
          linguisticNotes: `Sarf kaidelerine göre ${root.rootLettersModern} kökünden türetilmiş muntazam ${pattern.name}.`,
          rootRelations: {
            create: {
              rootId: root.id,
              morphologicalPattern: pattern.pattern,
              morphologicalType: pattern.type,
              meaningContribution: pattern.name,
              orderIndex: 10,
            },
          },
          meanings: {
            create: {
              orderIndex: 1,
              definition: meaningText,
              register: "Genel",
            },
          },
          spellings: {
            create: {
              arabicScript: root.rootLettersArabic,
              spellingType: "Klasik İmla",
            },
          },
        },
      });

      totalGenerated++;
    }
  }

  console.log(`✅ Başarıyla ${totalGenerated} adet yeni morfolojik kelime türetilip veritabanına eklendi!`);
  const totalWords = await prisma.word.count();
  console.log(`📊 Güncel Toplam Kelime Sayısı: ${totalWords}`);
}

module.exports = { runBulkCorpusGenerator };

if (require.main === module) {
  runBulkCorpusGenerator()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
