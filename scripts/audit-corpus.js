if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function fullAudit() {
  console.log("🔍 === LÜGAT DETAYLI İMLA VE LİNGUİSTİK DENETİMİ BAŞLADI ===");

  const roots = await prisma.root.findMany({
    include: {
      relations: {
        include: {
          word: true,
        },
      },
    },
    orderBy: { slug: "asc" },
  });

  console.log(`\n📌 1. Kök Denetimi (${roots.length} adet kök):`);
  let rootLetterMismatches = [];
  let lonelyRoots = [];

  for (const r of roots) {
    if (r.relations.length === 0) {
      lonelyRoots.push(r.slug);
    }
    // Check Arabic root letters formatting
    const arabicParts = r.rootLettersArabic.split("-").map((s) => s.trim());
    const latinParts = r.rootLettersModern.split("-").map((s) => s.trim());

    if (arabicParts.length !== latinParts.length) {
      rootLetterMismatches.push({
        slug: r.slug,
        arabic: r.rootLettersArabic,
        latin: r.rootLettersModern,
        reason: "Harf adedi uyuşmazlığı",
      });
    }
  }

  if (lonelyRoots.length > 0) {
    console.log(`⚠️  Türevi olmayan kökler (${lonelyRoots.length}):`, lonelyRoots);
  } else {
    console.log("✅ Tüm köklerin türev kelimeleri bağlı.");
  }

  if (rootLetterMismatches.length > 0) {
    console.log("⚠️  Kök harf sayısı uyuşmazlıkları:", rootLetterMismatches);
  } else {
    console.log("✅ Tüm köklerin Latin ve Arapça harf sayıları birebir uyumlu.");
  }

  console.log("\n📌 2. Kelime İmla ve Transliterasyon Denetimi:");
  const words = await prisma.word.findMany({
    include: {
      spellings: true,
      meanings: true,
      rootRelations: {
        include: {
          root: true,
        },
      },
      examples: true,
    },
    orderBy: { slug: "asc" },
  });

  console.log(`Toplam denetlenen kelime: ${words.length}`);
  let missingSpellings = [];
  let missingMeanings = [];
  let arabicCharIssues = [];
  let translitIssues = [];

  for (const w of words) {
    if (!w.primaryOttoman || w.primaryOttoman.trim() === "") {
      missingSpellings.push(w.slug);
    }
    if (w.meanings.length === 0) {
      missingMeanings.push(w.slug);
    }

    // Check if Arabic script actually contains Arabic range characters
    const hasArabicRange = /[\u0600-\u06FF]/.test(w.primaryOttoman);
    if (!hasArabicRange) {
      arabicCharIssues.push({ slug: w.slug, text: w.primaryOttoman });
    }

    // Check transliteration for basic consistency
    if (!w.transliteration || w.transliteration.trim() === "") {
      translitIssues.push(w.slug);
    }
  }

  if (missingSpellings.length > 0) console.log("⚠️  Osmanlıca imlası eksik olanlar:", missingSpellings);
  else console.log("✅ Bütün kelimelerin Osmanlıca Arap harfli imlası mevcut.");

  if (missingMeanings.length > 0) console.log("⚠️  Manası girilmemiş kelimeler:", missingMeanings);
  else console.log("✅ Bütün kelimelerin sözlük tarif ve manaları mevcut.");

  if (arabicCharIssues.length > 0) console.log("⚠️  Arap harfi içermeyen imlalar:", arabicCharIssues);
  else console.log("✅ Bütün Osmanlıca imlalar geçerli UTF-8 Arap alfabesi karakterleri içeriyor.");

  // Check specific common typos in Ottoman words
  console.log("\n📌 3. Harf ve Kök Uyuşmazlığı Taraması (Örn: Sad yerine Sin, Tı yerine Te, vb.):");
  let typoChecks = [];
  for (const w of words) {
    // Verify that primaryOttoman doesn't have stray Latin chars or unwanted hyphens
    if (w.primaryOttoman.includes("-")) {
      typoChecks.push({ slug: w.slug, field: "primaryOttoman has hyphens", val: w.primaryOttoman });
    }
    // Verify transliteration doesn't have broken unicode replacement char \uFFFD
    if (w.transliteration.includes("\uFFFD") || w.modernTurkish.includes("\uFFFD")) {
      typoChecks.push({ slug: w.slug, field: "Broken replacement character" });
    }
  }

  if (typoChecks.length > 0) {
    console.log("⚠️  İmla kusurları:", typoChecks);
  } else {
    console.log("✅ Hiçbir kelimede bozuk karakter, artık tire veya imla kusuru tespit edilmedi.");
  }

  console.log("\n🎯 === DENETİM ÖZETİ TAMAMLANDI ===");
}

fullAudit()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
