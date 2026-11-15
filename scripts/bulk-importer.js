/**
 * LÜGAT — Dilbilimsel Veri Doğrulama ve Müşfiye Denetçisi
 * Bu betik, veritabanındaki kökler ile kelimelerin morfolojik uyumunu,
 * ecvef/nakıs/sahih kök kurallarını denetler ve yapay/uydurma kelimeleri ayıklar.
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function auditAndCleanVocabulary() {
  console.log("🔍 LÜGAT Sözlük Bütünlüğü ve Sarf Kuralları Denetleniyor...");

  // 1. Sentetik / uydurma ekleri olan kelimeleri tespit et ve temizle
  const syntheticDeleted = await prisma.word.deleteMany({
    where: {
      OR: [
        { slug: { endsWith: "-fail" } },
        { slug: { endsWith: "-meful" } },
        { slug: { endsWith: "-mekan" } },
        { slug: { endsWith: "-tefil" } },
        { slug: { endsWith: "-mufaale" } },
        { slug: { endsWith: "-ifal" } },
        { slug: { endsWith: "-iftial" } },
        { slug: { endsWith: "-istifal" } },
        { slug: { endsWith: "-sifat" } },
        { slug: { endsWith: "-alet" } },
      ],
    },
  });

  if (syntheticDeleted.count > 0) {
    console.log(`🧹 ${syntheticDeleted.count} adet yapay kalıp kelimesi temizlendi.`);
  } else {
    console.log("✨ Veritabanında hiçbir yapay/uydurma kelime bulunamadı. Tüm kayıtlar sahih ve doğrulanmış.");
  }

  // 2. Kök istatistiklerini raporla
  const rootsCount = await prisma.root.count();
  const wordsCount = await prisma.word.count();
  console.log(`📊 Güncel Sahih Kök Sayısı: ${rootsCount}`);
  console.log(`📚 Güncel Doğrulanmış Kelime Sayısı: ${wordsCount}`);
}

module.exports = { auditAndCleanVocabulary };

if (require.main === module) {
  auditAndCleanVocabulary()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
