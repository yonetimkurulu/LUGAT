const { PrismaClient } = require("@prisma/client");
const seedData = require("./seedData");
const additional = require("./additionalWords");
const expanded = require("./expandedWords");
const masterVocab = require("./masterVocabulary");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 LÜGAT veritabanı tohumlama işlemi başlıyor...");

  // Clear existing data in reverse order of foreign keys
  await prisma.quizQuestion.deleteMany({});
  await prisma.collectionItem.deleteMany({});
  await prisma.vocabularyCollection.deleteMany({});
  await prisma.synonymRelation.deleteMany({});
  await prisma.wordCategoryRelation.deleteMany({});
  await prisma.wordSourceRelation.deleteMany({});
  await prisma.exampleSentence.deleteMany({});
  await prisma.wordMeaning.deleteMany({});
  await prisma.wordSpelling.deleteMany({});
  await prisma.wordRootRelation.deleteMany({});
  await prisma.word.deleteMany({});
  await prisma.root.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.source.deleteMany({});

  console.log("🧹 Eski kayıtlar temizlendi.");

  // 1. Seed Sources
  for (const src of seedData.sources) {
    await prisma.source.create({
      data: src,
    });
  }
  console.log(`✅ ${seedData.sources.length} adet muteber kaynak kaydedildi.`);

  // 2. Seed Categories
  for (const cat of seedData.categories) {
    await prisma.category.create({
      data: cat,
    });
  }
  console.log(`✅ ${seedData.categories.length} adet kategori kaydedildi.`);

  // 3. Seed Roots
  const allRoots = [
    ...seedData.roots,
    ...additional.roots,
    ...(expanded.roots || []),
    ...(masterVocab.roots || [])
  ];
  const rootMap = new Map();
  for (const r of allRoots) {
    const createdRoot = await prisma.root.create({
      data: {
        slug: r.slug,
        rootLettersModern: r.rootLettersModern,
        rootLettersArabic: r.rootLettersArabic,
        origin: r.origin,
        primaryMeaning: r.primaryMeaning,
        description: r.description,
      },
    });
    rootMap.set(r.slug, createdRoot.id);
  }
  console.log(`✅ ${allRoots.length} adet etimolojik kök kaydedildi.`);

  // 4. Seed Words
  const allWords = [
    ...seedData.words,
    ...additional.words,
    ...(expanded.words || []),
    ...(masterVocab.words || [])
  ];
  console.log(`📚 Toplam işlenecek kelime sayısı: ${allWords.length}`);

  const wordMap = new Map(); // slug -> id

  // Pick one word of the day
  let wordOfDaySlug = "tenkit";

  for (const w of allWords) {
    const isWOD = w.slug === wordOfDaySlug;
    const createdWord = await prisma.word.create({
      data: {
        slug: w.slug,
        modernTurkish: w.modernTurkish,
        modernEquivalents: w.modernEquivalents,
        transliteration: w.transliteration,
        primaryOttoman: w.primaryOttoman,
        origin: w.origin,
        originDetail: w.originDetail || null,
        partOfSpeech: w.partOfSpeech,
        verificationStatus: w.verificationStatus || "VERIFIED",
        linguisticNotes: w.linguisticNotes || null,
        isWordOfDay: isWOD,
        viewCount: Math.floor(Math.random() * 250) + 20,
      },
    });

    wordMap.set(w.slug, createdWord.id);

    // Spellings
    if (w.spellings && w.spellings.length > 0) {
      for (const sp of w.spellings) {
        await prisma.wordSpelling.create({
          data: {
            wordId: createdWord.id,
            arabicScript: sp.arabicScript,
            spellingType: sp.spellingType,
            translit: sp.translit || null,
            notes: sp.notes || null,
          },
        });
      }
    } else {
      // Default primary spelling
      await prisma.wordSpelling.create({
        data: {
          wordId: createdWord.id,
          arabicScript: w.primaryOttoman,
          spellingType: "Klasik İmla",
          translit: w.transliteration,
        },
      });
    }

    // Meanings
    if (w.meanings && w.meanings.length > 0) {
      for (const m of w.meanings) {
        await prisma.wordMeaning.create({
          data: {
            wordId: createdWord.id,
            orderIndex: m.orderIndex,
            definition: m.definition,
            register: m.register || null,
          },
        });
      }
    }

    // Examples
    if (w.examples && w.examples.length > 0) {
      for (const ex of w.examples) {
        await prisma.exampleSentence.create({
          data: {
            wordId: createdWord.id,
            sentenceModern: ex.sentenceModern,
            sentenceOttoman: ex.sentenceOttoman || null,
            sentenceTranslit: ex.sentenceTranslit || null,
            author: ex.author || null,
            sourceWork: ex.sourceWork || null,
          },
        });
      }
    }

    // Sources
    if (w.sources && w.sources.length > 0) {
      for (const s of w.sources) {
        await prisma.wordSourceRelation.create({
          data: {
            wordId: createdWord.id,
            sourceId: s.sourceId,
            pageNumber: s.pageNumber || null,
            citation: s.citation || null,
          },
        });
      }
    } else {
      // Connect to Kâmûs-ı Türkî by default for verified words
      await prisma.wordSourceRelation.create({
        data: {
          wordId: createdWord.id,
          sourceId: "src-kamus",
          pageNumber: "Lügat maddesi",
          citation: `${w.modernTurkish}: Muteber Osmanlı lügatlerinde kayıtlıdır.`,
        },
      });
    }

    // Categories
    if (w.categories && w.categories.length > 0) {
      for (const catSlug of w.categories) {
        const cat = seedData.categories.find((c) => c.slug === catSlug);
        if (cat) {
          const catRecord = await prisma.category.findUnique({ where: { slug: catSlug } });
          if (catRecord) {
            await prisma.wordCategoryRelation.create({
              data: {
                wordId: createdWord.id,
                categoryId: catRecord.id,
              },
            });
          }
        }
      }
    }

    // Root relation
    if (w.rootSlug && rootMap.has(w.rootSlug)) {
      const rootId = rootMap.get(w.rootSlug);
      await prisma.wordRootRelation.create({
        data: {
          wordId: createdWord.id,
          rootId: rootId,
          morphologicalPattern: w.morphPattern || "Mücerred Masdar",
          morphologicalType: w.morphType || "Masdar",
          meaningContribution: w.morphContrib || "Kök manasının vezne dökülmüş şekli.",
        },
      });
    }

    // Synonyms
    if (w.synonyms && w.synonyms.length > 0) {
      for (const syn of w.synonyms) {
        await prisma.synonymRelation.create({
          data: {
            wordId: createdWord.id,
            synonymText: syn.synonymText,
            nuanceNote: syn.nuanceNote || null,
          },
        });
      }
    }
  }

  console.log(`✅ ${allWords.length} adet kelime tüm münasebetleriyle veritabanına işlendi.`);

  // 5. Seed Collections
  for (const col of seedData.collections) {
    const createdCol = await prisma.vocabularyCollection.create({
      data: {
        slug: col.slug,
        title: col.title,
        description: col.description,
        isFeatured: col.isFeatured || false,
      },
    });

    for (const wSlug of col.wordSlugs) {
      const wId = wordMap.get(wSlug);
      if (wId) {
        await prisma.collectionItem.create({
          data: {
            collectionId: createdCol.id,
            wordId: wId,
          },
        });
      }
    }
  }
  console.log(`✅ ${seedData.collections.length} adet lügat koleksiyonu kaydedildi.`);

  // 6. Seed Quizzes
  for (const q of seedData.quizzes) {
    const relWordId = q.relatedWordSlug ? wordMap.get(q.relatedWordSlug) || null : null;
    await prisma.quizQuestion.create({
      data: {
        type: q.type,
        prompt: q.prompt,
        targetScript: q.targetScript || null,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        relatedWordId: relWordId,
      },
    });
  }
  console.log(`✅ ${seedData.quizzes.length} adet interaktif talim ve sınav sorusu kaydedildi.`);

  console.log("🎉 LÜGAT veritabanı tohumlama başarıyla tamamlandı!");
}

main()
  .catch((e) => {
    console.error("❌ Tohumlama hatası:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
