// prisma/seedVerifiedQuizzes.js
// LÜGAT — Phase 10: Doğrulanmış Kök ve Kelimelerden Eğitim ve Sınav Soruları

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const VERIFIED_QUIZ_QUESTIONS = [
  // ROOT_FINDING
  {
    type: "ROOT_FINDING",
    prompt: "'Muvacehe' (مواجهه) kelimesinin asıl sülâsî kökü aşağıdakilerden hangisidir?",
    targetScript: "مواجهه",
    options: JSON.stringify(["V-C-H (و-ج-ه)", "V-C-D (و-ج-د)", "C-H-D (ج-ه-د)", "M-V-C (م-و-ج)"]),
    correctAnswer: "V-C-H (و-ج-ه)",
    explanation: "Muvacehe kelimesi, 'yüz, çehre' manasındaki V-C-H (و-ج-ه) kökünden müfâ'ale bâbında masdardır; iki kimsenin yüz yüze gelmesini ifade eder.",
    wordSlug: "vech",
  },
  {
    type: "ROOT_FINDING",
    prompt: "'Tenvir' (تنوير) ve 'Münevver' (منور) kelimeleri hangi iştikak kökünden türetilmiştir?",
    targetScript: "تنوير",
    options: JSON.stringify(["N-V-R (ن-و-ر)", "N-V-L (ن-و-ل)", "N-Z-R (ن-ظ-ر)", "T-N-R (ت-ن-ر)"]),
    correctAnswer: "N-V-R (ن-و-ر)",
    explanation: "Her iki kelime de 'ışık, aydınlık' manasındaki Ecvef N-V-R (ن-و-ر) kökünden tef'îl bâbı vezinleridir.",
    wordSlug: "tenvir",
  },
  {
    type: "ROOT_FINDING",
    prompt: "'Tahkik' (تحقيق) ve 'Hukuk' (حقوق) kelimelerinin müşterek kök harfleri hangisidir?",
    targetScript: "تحقيق",
    options: JSON.stringify(["H-Q-Q (ح-ق-ق)", "H-K-M (ح-ك-م)", "H-Q-D (ح-ق-د)", "Q-H-Q (ق-ح-ق)"]),
    correctAnswer: "H-Q-Q (ح-ق-ق)",
    explanation: "Tahkik ve Hukuk kelimeleri 'sabit ve gerçek olmak' manasındaki Muzaaf H-Q-Q (ح-ق-ق) kökünden neşet etmiştir.",
    wordSlug: "tahkik",
  },
  {
    type: "ROOT_FINDING",
    prompt: "'İnkılap' (انقلاب) kelimesi hangi sülâsî kökten infi'âl bâbına nakledilmiştir?",
    targetScript: "انقلاب",
    options: JSON.stringify(["Q-L-B (ق-ل-ب)", "Q-L-M (ق-ل-م)", "K-L-P (ك-ل-پ)", "N-Q-L (ن-ق-ل)"]),
    correctAnswer: "Q-L-B (ق-L-B)",
    explanation: "İnkılap, 'bir şeyi altüst etmek, içini dışına çevirmek' manasındaki Q-L-B (ق-ل-ب) kökünün infi'âl bâbıdır.",
    wordSlug: "inkilap",
  },
  {
    type: "ROOT_FINDING",
    prompt: "'Tezkire' (تذكره) ve 'Müzakere' (مذاكره) kelimelerinin etimolojik kökü nedir?",
    targetScript: "تذكره",
    options: JSON.stringify(["Z-K-R (ذ-ك-ر)", "Z-K-Y (ذ-ك-ي)", "Z-K-R (ز-ك-ر)", "T-Z-K (ت-ذ-ك)"]),
    correctAnswer: "Z-K-R (ذ-ك-ر)",
    explanation: "Her iki kelime de 'unutulanı hatırlamak, yâd etmek' manasındaki Z-K-R (ذ-ك-ر) kökünden türemiştir.",
    wordSlug: "tezkire",
  },

  // READING_SCRIPT (İmla Okuma)
  {
    type: "READING_SCRIPT",
    prompt: "Arap harfleriyle 'مجموعه' şeklinde yazılan klasik terimin doğru okunuşu nedir?",
    targetScript: "مجموعه",
    options: JSON.stringify(["Mecmua", "Muhakeme", "Müsamaha", "Menzil"]),
    correctAnswer: "Mecmua",
    explanation: "C-M-A kökünden mef'ûle vezninde olan bu kelime 'Mecmua' okunur; derlenmiş şiir veya risale defteri demektir.",
    wordSlug: "mecmua",
  },
  {
    type: "READING_SCRIPT",
    prompt: "Klasik metinlerde 'بصيرت' şeklinde imla edilen kelimenin transkripsiyonu hangisidir?",
    targetScript: "بصيرت",
    options: JSON.stringify(["Baṣīret", "Beşâret", "Basîr", "Bâsıra"]),
    correctAnswer: "Baṣīret",
    explanation: "Kelime Sâd (ص) harfiyle Baṣīret şeklinde telaffuz olunur; kalp gözü ve seziş kabiliyetidir.",
    wordSlug: "basiret",
  },
  {
    type: "READING_SCRIPT",
    prompt: "Farsça terkip kuralına göre 'دانشمند' imlasının doğru okunuşu nedir?",
    targetScript: "دانشمند",
    options: JSON.stringify(["Dânişmend", "Dânendegân", "Dervişân", "Dânişgâh"]),
    correctAnswer: "Dânişmend",
    explanation: "Dâniş (bilgi) ve +mend (sahip) ekinden oluşan kelime 'Dânişmend' okunur; yüksek medrese talebesi ve âlim demektir.",
    wordSlug: "danismend",
  },

  // MEANING_CHOICE (Lügat Anlamı)
  {
    type: "MEANING_CHOICE",
    prompt: "'Müderris' (مدرس) kelimesinin Osmanlı ilmiye teşkilatındaki karşılığı nedir?",
    targetScript: "مدرس",
    options: JSON.stringify([
      "Medresede ders veren profesör / hoca",
      "Mahkemede dava dinleyen hâkim",
      "Posta menzilinde görevli ulak",
      "Kütüphane hafız-ı kütübü"
    ]),
    correctAnswer: "Medresede ders veren profesör / hoca",
    explanation: "Müderris, D-R-S kökünden tef'îl bâbı ism-i fâili olup medreselerde talebeye ders okutan ve icazet veren yüksek dereceli âlimdir.",
    wordSlug: "muderris",
  },
  {
    type: "MEANING_CHOICE",
    prompt: "'Vicdan' (وجدان) kelimesinin etimolojik kök manası hangi fiile dayanır?",
    targetScript: "وجدان",
    options: JSON.stringify([
      "V-C-D: Bulmak, var olmak ve içsel duyuş",
      "V-C-H: Yüz yüze gelmek",
      "V-H-D: Yalnız kalmak",
      "C-D-D: Yenilenmek"
    ]),
    correctAnswer: "V-C-D: Bulmak, var olmak ve içsel duyuş",
    explanation: "Vicdan, V-C-D (Bulmak) kökünden neşet eder; insanın kendi iç dünyasında iyiyi ve kötüyü sezip bulması manasındadır.",
    wordSlug: "vicdan",
  },

  // EQUIVALENT_MATCH (Karşılık Eşleştirme)
  {
    type: "EQUIVALENT_MATCH",
    prompt: "Öz Türkçe 'bil-' kökünden türetilen 'Bilge' kelimesinin klasik Arapçadaki kavramsal dengi hangisidir?",
    targetScript: "بيلكه",
    options: JSON.stringify(["Hakîm (حكيم)", "Câhil (جاهل)", "Münşi (منشئ)", "Zâhir (ظاهر)"]),
    correctAnswer: "Hakîm (حكيم)",
    explanation: "Eski Türkçede 'bilge', derin ilim ve hikmet sahibi kâmil kimse demektir; Arapçadaki karşılığı H-K-M kökünden 'Hakîm'dir.",
    wordSlug: "bilge",
  }
];

async function seedQuizzes() {
  console.log("📝 Doğrulanmış İştikak ve Lügat Sınav Soruları Ekleniyor...");

  for (const q of VERIFIED_QUIZ_QUESTIONS) {
    let wordId = null;
    if (q.wordSlug) {
      const word = await prisma.word.findUnique({ where: { slug: q.wordSlug } });
      if (word) wordId = word.id;
    }

    const existing = await prisma.quizQuestion.findFirst({
      where: { prompt: q.prompt },
    });

    if (!existing) {
      await prisma.quizQuestion.create({
        data: {
          type: q.type,
          prompt: q.prompt,
          targetScript: q.targetScript,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          relatedWordId: wordId,
        },
      });
    }
  }

  console.log("✅ Yeni doğrulanmış sınav soruları başarıyla kaydedildi!");
}

seedQuizzes()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
