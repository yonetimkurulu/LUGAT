// prisma/seedClassicalLiteratureWords.js
// LÜGAT — Edebiyat, Şiir, Belâgat ve Devlet Istılahları Master Tohumu

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const LITERATURE_ROOTS_AND_WORDS = [
  // 1. H-S-N (ح-س-ن) -> HÜSN & İHSAN
  {
    root: {
      slug: "hsn",
      rootLettersModern: "H-S-N",
      rootLettersArabic: "ح-س-ن",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Güzel, iyi, cemil ve lâtif olmak; çirkinliğin (kubh) zıddı.",
      description: "Gözü ve aklı cezbeden her türlü maddi ve manevi güzelliktir. Tasavvuf edebiyatında Mutlak Güzellik (Cemâl-i İlâhî) manasındadır. Şeyh Gâlib'in Hüsn ü Aşk mesnevisinde tecessüm eden baş kahramandır.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Dıddü'l-kubh; el-hüsnü el-behcetü ve'l-kemâl.",
      ottomanUsageScope: "Divan edebiyatı (Hüsn ü Aşk), ahlak felsefesi (hüsn-i niyet), hat sanatı (hüsn-i hat).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 535; Lisânü'l-Arab C. 13 s. 114; Devellioğlu s. 370.",
    },
    words: [
      {
        slug: "husn",
        modernTurkish: "Hüsn",
        primaryOttoman: "حسن",
        transliteration: "Ḥüsn",
        origin: "Arapça",
        originDetail: "Arapça h-s-n kökünden fu'l vezninde masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fu'l (فُعْل) Masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar İsim)",
        contribution: "Güzellik, iyilik, cemal; Mutlak Güzellik.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Güzellik, cemâl, iyilik; tasavvufi edebiyatta Cenâb-ı Hakk'ın tecelli eden mutlak cemâli.",
        contemporaryMeaning: "Güzellik, iyilik (genelde tamlamalarda kullanılır: hüsn-i kabul, hüsn-i hat).",
        modernEquivalents: "güzellik, cemal, iyilik",
        definitions: [
          { orderIndex: 1, definition: "Güzellik, cemâl; ruha ve göze hoş gelen letafet.", register: "Edebiyat & Felsefe" },
          { orderIndex: 2, definition: "İyilik, lütuf, dürüstlük (hüsn-i zan, hüsn-i niyet).", register: "Ahlâk & İlim" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "535",
        entryHeadword: "حسن",
        citation: "Hüsn: Güzellik, cemâl, melâhat; iyilik; kubhun zıddı."
      },
      {
        slug: "ihsan",
        modernTurkish: "İhsân",
        primaryOttoman: "احسان",
        transliteration: "Iḥsān",
        origin: "Arapça",
        originDetail: "Arapça h-s-n kökünden if'âl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "İf'âl (اِفْعَال) Masdarı",
        morphologicalType: "İf'âl Bâbı Masdarları",
        contribution: "İyilik etmek, lütufta bulunmak, bir işi en güzel şekilde yapmak.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kerem, lütuf, in'am; padişah veya büyüklerin bahşettiği caize ve bağış; kulun Allah'ı görüyor gibi ibadet etmesi.",
        contemporaryMeaning: "Bağış, lütuf, iyilik.",
        modernEquivalents: "iyilik, bağış, lütuf",
        definitions: [
          { orderIndex: 1, definition: "Karşılık beklemeden yapılan iyilik, lütuf, kerem.", register: "Ahlâk" },
          { orderIndex: 2, definition: "Devlet ricali veya padişah tarafından verilen bahşiş, caize veya rütbe.", register: "Tarih & Teşrifat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "62",
        entryHeadword: "احسان",
        citation: "İhsan: İyilik etme, lütuf ve kerem gösterme; in'am kılınan şey."
      }
    ]
  },

  // 2. A-Ş-Q (ع-ش-ق) -> AŞK & ÂŞIK & MÂŞUK
  {
    root: {
      slug: "asq",
      rootLettersModern: "A-Ş-Q",
      rootLettersArabic: "ع-ش-ق",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Aşırı sevmek, sarmaşık gibi sarıp sarmalamak, şiddetli muhabbet.",
      description: "Arapça 'aşaka' (sarmaşık) kökünden geldiği rivayet edilir. Ağacı sarıp kurutan ve kendine bağlayan sarmaşık gibi, kalbi tamamen kuşatan ve fani alakaları silen aşırı muhabbettir. Divan ve tasavvuf edebiyatının merkez kavramıdır.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Ucbü bi'l-mahbûb ve ifrâtü'l-hubb; el-aşakatü şeceratün tahdarru sümme tasfarru.",
      ottomanUsageScope: "Bütün divan şiiri, mesneviler, tasavvufi tefsirler, musikî mecmuaları.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 941; Lisânü'l-Arab C. 10 s. 251; Devellioğlu s. 53.",
    },
    words: [
      {
        slug: "ask",
        modernTurkish: "Aşk",
        primaryOttoman: "عشق",
        transliteration: "'Işḳ",
        origin: "Arapça",
        originDetail: "Arapça a-ş-q kökünden fi'l vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fi'l (فِعْل) Masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Şiddetli sevgi, ilâhî vecd ve muhabbet.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Şiddetli ve aşırı sevgi, muhabbet-i müfrita; tasavvufta mâsivâdan geçip Hakk'a vasıl olma cezbesi.",
        contemporaryMeaning: "Bir kimseye veya şeye duyulan aşırı sevgi ve bağlılık duygusu.",
        modernEquivalents: "sevda, tutku, derin muhabbet",
        definitions: [
          { orderIndex: 1, definition: "Aşırı ve taşkın sevgi, şiddetli muhabbet.", register: "Genel Dil" },
          { orderIndex: 2, definition: "Varlığın gayesi sayılan, kalbi fenafillâha erdiren ilâhî cezbe ve sevgi.", register: "Tasavvuf & Divan Şiiri" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "941",
        entryHeadword: "عشق",
        citation: "Aşk: Şiddet-i muhabbet, sevda, ifrat-ı heves."
      },
      {
        slug: "asik",
        modernTurkish: "Âşık",
        primaryOttoman: "عاشق",
        transliteration: "'Āşıḳ",
        origin: "Arapça",
        originDetail: "Arapça a-ş-q kökünden fâ'il vezninde ism-i fâildir.",
        partOfSpeech: "İsim / Sıfat",
        pattern: "Fâ'il (فَاعِل) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Aşk ateşine tutulmuş, canından geçmiş seven kimse.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Gönlünü bir güzele kaptıran, aşk derdine düşen kimse; saz çalıp şiir söyleyen halk şairi; sâlik.",
        contemporaryMeaning: "Birine aşık olan, sevdalı; halk şairi.",
        modernEquivalents: "sevdalı, tutkun, ozan",
        definitions: [
          { orderIndex: 1, definition: "Bir kimseye veya ideale aşırı muhabbetle bağlanan kimse.", register: "Edebiyat" },
          { orderIndex: 2, definition: "Halk edebiyatında saz eşliğinde şiir terennüm eden ozan.", register: "Halk Edebiyatı" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "912",
        entryHeadword: "عاشق",
        citation: "Âşık: Birine gönül vermiş ve meftun olmuş kimse; saz şairi."
      }
    ]
  },

  // 3. H-R-R (ح-ر-ر) -> HÜRRİYET & HÜR
  {
    root: {
      slug: "hrr",
      rootLettersModern: "H-R-R",
      rootLettersArabic: "ح-ر-ر",
      origin: "Arapça (Muzaaf)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Köle olmamak, serbest olmak, asil ve pak olmak; sıcak olmak (hararet).",
      description: "Muzaaf köktür. Asalet, kölelik ve kulluk bağlarından berî olma ve hürriyettir. Namık Kemal'in meşhur Hürriyet Kasidesi ile Tanzimat sonrası Osmanlı siyasi ve edebi düşüncesinin en mühim mefhumu haline gelmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Dıddü'l-abd; el-hurriyye sıfatü'l-hurr; el-harru diddü'l-berd.",
      ottomanUsageScope: "Tanzimat edebiyatı (Namık Kemal, Şinasi), Kanun-ı Esasî, siyasi matbuat.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 531; Lisânü'l-Arab C. 4 s. 182; Devellioğlu s. 367.",
    },
    words: [
      {
        slug: "hurriyet",
        modernTurkish: "Hürriyet",
        primaryOttoman: "حريت",
        transliteration: "Ḥurriyyet",
        origin: "Arapça",
        originDetail: "Arapça h-r-r kökünden fı'liyyet vezninde masdar-ı sınâîdir.",
        partOfSpeech: "İsim",
        pattern: "Fı'liyyet (فِعْلِيَّة) Yapma Masdar",
        morphologicalType: "Masdar-ı Sınâî (Yapay Masdar)",
        contribution: "Hür ve serbest olma hali, istibdadın zıddı, özgürlük.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kölelikten ve ecnebi boyunduruğundan azade olma, serbestî; adalet dairesinde meşru serbestlik.",
        contemporaryMeaning: "Özgürlük, hür olma hali.",
        modernEquivalents: "özgürlük, serbestlik, erkinlik",
        definitions: [
          { orderIndex: 1, definition: "Herhangi bir kısıtlamaya veya zorbalığa uğramaksızın düşünebilme ve hareket edebilme serbestisi.", register: "Hukuk & Siyaset" },
          { orderIndex: 2, definition: "Kölelik ve esaret durumunda olmama, azadelik.", register: "Tarihî Dil" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "531",
        entryHeadword: "حريت",
        citation: "Hürriyet: Hür ve serbest olma hali, serbestî, esaret ve ubudiyetin zıddı."
      }
    ]
  },

  // 4. V-T-N (و-ط-ن) -> VATAN & VATANDAŞ
  {
    root: {
      slug: "vtn",
      rootLettersModern: "V-T-N",
      rootLettersArabic: "و-ط-ن",
      origin: "Arapça (Misâl-i Vâvî)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "İkamet etmek, yerleşmek, yurt edinmek.",
      description: "Misal köktür. Kişinin doğup büyüdüğü veya bağlandığı toprağa vatan denir. Osmanlı geleneğinde hem doğulan yer (vatan-ı aslî) hem de üzerinde bağımsız yaşanılan Osmanlı coğrafyasıdır.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Menzi'lü'l-ikâme ve mevtınu'l-insan.",
      ottomanUsageScope: "Namık Kemal (Vatan yahut Silistre), Divan edebiyatı (Hubbü'l-vatan mine'l-iman), mülkiye.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1500; Lisânü'l-Arab C. 13 s. 451; Devellioğlu s. 1150.",
    },
    words: [
      {
        slug: "vatan",
        modernTurkish: "Vatan",
        primaryOttoman: "وطن",
        transliteration: "Vaṭan",
        origin: "Arapça",
        originDetail: "Arapça v-t-n kökünden fe'al vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fe'al (فَعَل) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Yurt, sıla, üzerinde yaşanılan ve uğruna can verilen mukaddes memleket.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir kimsenin doğup büyüdüğü, sükna eylediği memleket; milletin üzerinde egemen olduğu mülk.",
        contemporaryMeaning: "Yurt, bir ulusun üzerinde yaşadığı ve bağımsız olduğu toprak parçası.",
        modernEquivalents: "yurt, memleket, sıla",
        definitions: [
          { orderIndex: 1, definition: "Bir milletin hakim olduğu, tarih boyunca kültürünü inşa ettiği topraklar, yurt.", register: "Siyaset & Edebiyat" },
          { orderIndex: 2, definition: "Doğulan ve yetişilen asıl memleket (Vatan-ı Aslî).", register: "Fıkıh & Coğrafya" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1500",
        entryHeadword: "وطن",
        citation: "Vatan: Bir kimsenin doğup büyüdüğü veya ikamet eylediği yer, memleket, yurt."
      }
    ]
  },

  // 5. N-Z-M (ن-ظ-م) -> NİZAM & TANZİMAT & NAZIM
  {
    root: {
      slug: "nzm",
      rootLettersModern: "N-Z-M",
      rootLettersArabic: "ن-ظ-م",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "İpe inci dizmek, sıraya koymak, intizam vermek, şiir söylemek.",
      description: "Dağınık olan şeyleri güzel bir tertip ve sırayla bir araya getirmektir. İpe dizilen inciler gibi tertipli sözlere 'nazım' (şiir), cemiyetteki intizam ve kanunlara 'nizam', devletin ıslahı için yapılan kanunî düzenlemelere ise 'tanzimat' denmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Te'lîfü'ş-şey'i ve dammu ba'zıhî ilâ ba'd; el-kelâmü'l-mevzûnü'l-mukaffâ.",
      ottomanUsageScope: "Hukuk (Tanzimat Fermanı, Nizamname), edebiyat (Nazım, Manzume), askeriyye (Nizâm-ı Cedîd).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1475; Lisânü'l-Arab C. 12 s. 578; Devellioğlu s. 910.",
    },
    words: [
      {
        slug: "nizam",
        modernTurkish: "Nizâm",
        primaryOttoman: "نظام",
        transliteration: "Niẓām",
        origin: "Arapça",
        originDetail: "Arapça n-z-m kökünden fi'âl vezninde masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fi'âl (فِعَال) Vezni",
        morphologicalType: "Doğrudan Müştaklar (Masdar İsim)",
        contribution: "Düzen, kural, intizam, kanun ve asayiş.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İntizam, tertip, kaide, kanun; cemiyetin asayiş ve intizamını sağlayan nizamname.",
        contemporaryMeaning: "Düzen, tertip; kural, yasa.",
        modernEquivalents: "düzen, kural, intizam",
        definitions: [
          { orderIndex: 1, definition: "Belirli kurallara göre kurulan düzen, intizam.", register: "Toplum & Hukuk" },
          { orderIndex: 2, definition: "Kanun, nizamname veya yönetmelik.", register: "İdare" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1475",
        entryHeadword: "نظام",
        citation: "Nizam: İntizam, tertip, kaide, usul; kanun ve rabıta."
      },
      {
        slug: "tanzimat",
        modernTurkish: "Tanzîmât",
        primaryOttoman: "تنظيمات",
        transliteration: "Tanẓīmāt",
        origin: "Arapça",
        originDetail: "Arapça n-z-m kökünden tef'îl masdarının cemisidir (tanzîm -> tanzîmât).",
        partOfSpeech: "İsim",
        pattern: "Tef'îlât (تَفْعِيلَات) Çoğul Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Düzenlemeler, ıslahatlar; Osmanlı reform dönemi (1839).",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Tanzimler, düzenlemeler; 1839 Gülhane Hatt-ı Hümayunu ile başlayan Osmanlı idarî ve hukukî yenileşme devri (Tanzîmât-ı Hayriyye).",
        contemporaryMeaning: "Osmanlı tarihinde 1839-1876 yılları arasındaki yenileşme ve anayasacılık dönemi.",
        modernEquivalents: "düzenlemeler, reform dönemi",
        definitions: [
          { orderIndex: 1, definition: "Osmanlı Devleti'nde 1839 fermanıyla başlayan siyasi, askeri ve idari ıslahatlar devri.", register: "Tarih" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "420",
        entryHeadword: "تنظيمات",
        citation: "Tanzimat: Tanzim kelimesinin cemisidir; Tanzimat-ı Hayriyye namıyla teceddüd devri."
      },
      {
        slug: "nazim",
        modernTurkish: "Nazım",
        primaryOttoman: "نظم",
        transliteration: "Naẓm",
        origin: "Arapça",
        originDetail: "Arapça n-z-m kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) Masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Vezinli ve kafiyeli söz dizisi, şiir (nesrin zıddı).",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Vezinli ve kafiyeli olarak söylenmiş söz, şiir, manzume; nesrin mukabili.",
        contemporaryMeaning: "Manzume, şiir, koşuk.",
        modernEquivalents: "şiir, koşuk, manzum söz",
        definitions: [
          { orderIndex: 1, definition: "Vezin ve kafiye kurallarına uygun olarak tertip edilen manzum söz.", register: "Edebiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1475",
        entryHeadword: "نظم",
        citation: "Nazım: İpe inci dizme; mevzun ve mukaffa kelam, şiir."
      }
    ]
  },

  // 6. A-D-L (ع-د-ل) -> ADALET & ÂDİL
  {
    root: {
      slug: "adl",
      rootLettersModern: "A-D-L",
      rootLettersArabic: "ع-د-ل",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Eşit ve denk kılmak, doğru davranmak, zulmün zıddı, hakkı sahibine vermek.",
      description: "Her şeyi layık olduğu yere koymak ve zulmü defetmektir. Mecelle'nin ve bütün İslâm-Osmanlı adalet dairesinin (Daire-i Adliyye) omurgasıdır.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Dıddü'l-cevr; vaz'u külli şey'in fî mevzı'ıhî.",
      ottomanUsageScope: "Mecelle (Mecelle-i Ahkâm-ı Adliyye), kadı sicilleri, siyasetnameler.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 928; Lisânü'l-Arab C. 11 s. 430; Devellioğlu s. 12.",
    },
    words: [
      {
        slug: "adalet",
        modernTurkish: "Adâlet",
        primaryOttoman: "عدالت",
        transliteration: "'Adālet",
        origin: "Arapça",
        originDetail: "Arapça a-d-l kökünden fe'âlet vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fe'âlet (فَعَالَة) Masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Hakkaniyet, doğruluk, eşitlik, zulmün ve cevrin zıddı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Hak ve hukuka riayet, zulüm ve gadrin zıddı, insaf; devletin bekasının temeli olan hakkaniyet düzeni.",
        contemporaryMeaning: "Hak ve hukuka uygunluk, hakkaniyet, türe.",
        modernEquivalents: "hakkaniyet, doğruluk, türe",
        definitions: [
          { orderIndex: 1, definition: "Hak ve hukuka riayet etme, hakkı sahibine teslim etme duygusu ve düzeni.", register: "Hukuk & Felsefe" },
          { orderIndex: 2, definition: "Bu düzeni tatbik eden mahkeme ve adliye teşkilatı.", register: "Yargı" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "928",
        entryHeadword: "عدالت",
        citation: "Adalet: Hakkaniyet, insaf, zulüm ve gadrin zıddı; her şeyi lâyık olduğu makama vaz' eylemek."
      }
    ]
  },

  // 7. S-Y-H (س-ي-ح) -> SEYAHAT & SEYYAH
  {
    root: {
      slug: "syh",
      rootLettersModern: "S-Y-H",
      rootLettersArabic: "س-ي-ح",
      origin: "Arapça (Ecvef-i Yâî)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Akıp gitmek (su gibi), yeryüzünde dolaşmak, gezip görmek.",
      description: "Suyun engelsiz akması gibi insanın yeryüzünü tefekkür ve ibret gayesiyle dolaşmasıdır. Evliya Çelebi'nin 10 ciltlik ölümsüz eseri Seyahatnâme'nin temel mefhumudur.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Cereyânü'l-mâi ve cerâ fi'l-ard; el-kesîru's-siyâha fi'l-bilâd.",
      ottomanUsageScope: "Seyahatnameler (Evliya Çelebi, Yirmisekiz Çelebi Mehmed Sefaretnâmesi), coğrafya.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 745; Lisânü'l-Arab C. 2 s. 501; Devellioğlu s. 985.",
    },
    words: [
      {
        slug: "seyahat",
        modernTurkish: "Seyahat",
        primaryOttoman: "سياحت",
        transliteration: "Seyāḥat",
        origin: "Arapça",
        originDetail: "Arapça s-y-h kökünden fe'âlet vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fe'âlet (فَعَالَة) Masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Gezip dolaşma, yolculuk, sefer.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yeryüzünü gezip dolaşma, bilad ve emsarı temaşa eyleme, sefer kılma.",
        contemporaryMeaning: "Gezi, yolculuk.",
        modernEquivalents: "gezi, yolculuk, sefer",
        definitions: [
          { orderIndex: 1, definition: "Görmek, tanımak, dinlenmek veya ilim tahsil etmek maksadıyla yapılan yolculuk.", register: "Genel Dil" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "745",
        entryHeadword: "سياحت",
        citation: "Seyahat: Gezip dolaşma, seyr ü sefer, temaşa-yı bilad."
      },
      {
        slug: "seyyah",
        modernTurkish: "Seyyâh",
        primaryOttoman: "سياح",
        transliteration: "Seyyāḥ",
        origin: "Arapça",
        originDetail: "Arapça s-y-h kökünden fa''âl mübalağa veznindedir.",
        partOfSpeech: "İsim",
        pattern: "Fa''âl (فَعَّال) Mübalağa Vezni",
        morphologicalType: "Mübalağa-i Fâiller",
        contribution: "Çok gezen, dünyayı dolaşan seyyah (gezgin).",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Memleketleri gezip gören, ahval ve acaib-i cihanı temaşa eden mütecessis kimse (Evliya Çelebi).",
        contemporaryMeaning: "Gezgin, turist.",
        modernEquivalents: "gezgin, turist",
        definitions: [
          { orderIndex: 1, definition: "Dünyayı veya çeşitli memleketleri gezip inceleyen kimse, gezgin.", register: "Coğrafya & Seyahat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "745",
        entryHeadword: "سياح",
        citation: "Seyyah: Pek çok gezen, seyahat düşkünü kimse, gezgin."
      }
    ]
  },

  // 8. Q-S-D (ق-ص-د) -> KASİDE & MAKSAT
  {
    root: {
      slug: "qsd",
      rootLettersModern: "Q-S-D",
      rootLettersArabic: "ق-ص-د",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Yönelmek, hedeflemek, niyet etmek, ifrat ve tefritten uzak orta yolu tutmak (iktisad).",
      description: "Şairin muayyen bir maksat ve niyetle (medih, tevhid, na't vb.) bir büyüğü veya hakikati vasfetmek üzere tanzim ettiği uzun manzumeye 'kaside' denir. Fuzûlî'nin Su Kasidesi bunun zirvesidir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-İ'timâd ve't-teveccüh; el-kasîdetü mine'ş-şi'r el-müstehsenetü't-tavîle.",
      ottomanUsageScope: "Divan edebiyatı kasideleri (Tevhid, Münacat, Naat, Medhiye, Mersiye), iktisat.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1060; Lisânü'l-Arab C. 3 s. 353; Devellioğlu s. 556.",
    },
    words: [
      {
        slug: "kaside",
        modernTurkish: "Kaside",
        primaryOttoman: "قصيده",
        transliteration: "Ḳaṣīde",
        origin: "Arapça",
        originDetail: "Arapça q-s-d kökünden fa'île vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'île (فَعِيلَة) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Belli bir vezin ve gaye ile yazılmış uzun nazım şekli.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İlk beytinin mısraları birbiriyle, sonraki beyitlerinin ikinci mısraları ilk beyitle kafiyeli olan ve ekseriya bir büyüğü övmek veya Cenab-ı Hakk'a niyaz için yazılan uzun manzume.",
        contemporaryMeaning: "Divan edebiyatında övgü veya dinî konular için yazılan manzum eser.",
        modernEquivalents: "övgü şiiri, koşuk",
        definitions: [
          { orderIndex: 1, definition: "Divan edebiyatında genellikle 33 ile 99 beyit arasında değişen, aruz vezniyle yazılan klasik nazım şekli.", register: "Edebiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1060",
        entryHeadword: "قصيده",
        citation: "Kaside: Nazm-ı mahsusa ile söylenmiş uzun ve mükemmel manzume."
      }
    ]
  },

  // 9. A-R-Z (ع-ر-ض) -> ARUZ & ARZ
  {
    root: {
      slug: "arz",
      rootLettersModern: "A-R-Z",
      rootLettersArabic: "ع-ر-ض",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Görünmek, ortaya çıkmak, sunmak (arz etmek); çadırın orta direği.",
      description: "Şiirin doğru olup olmadığını ortaya çıkaran ve ölçen miyar olduğu için veya beytin orta cüzü çadır direğine benzetildiği için şiir veznine 'aruz' denmiştir. Halîl bin Ahmed el-Ferâhîdî tarafından tedvin edilmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü't-tûl; mîzânü'ş-şi'r el-mülakkab bi'l-arûz.",
      ottomanUsageScope: "Bütün divan şiiri, aruz risaleleri, tezkireler.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 936; Lisânü'l-Arab C. 7 s. 165; Devellioğlu s. 50.",
    },
    words: [
      {
        slug: "aruz",
        modernTurkish: "Arûz",
        primaryOttoman: "عروض",
        transliteration: "'Arūż",
        origin: "Arapça",
        originDetail: "Arapça a-r-z kökünden fe'ûl vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fe'ûl (فَعُول) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Hecelerin açık ve kapalılık esasına dayanan kadim şiir vezni ilmi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Şiir vezinlerinin sağlamını bozuğundan ayıran ilim; hecelerin imtidad (uzunluk) ve kasr (kısalık) dengesi üzerine kurulan mizan.",
        contemporaryMeaning: "Hecelerin uzunluk ve kısalığına dayanan klasik şiir ölçüsü.",
        modernEquivalents: "hece uzunluğu ölçüsü, klasik vezin",
        definitions: [
          { orderIndex: 1, definition: "Hecelerin uzunluk (kapalı) ve kısalık (açık) değerlerine dayanan divan edebiyatı şiir ölçüsü.", register: "Edebiyat & Şiir" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "936",
        entryHeadword: "عروض",
        citation: "Aruz: Şiir vezinlerinin sıhhat ve sakamını bildiren ilim; şiir vezni."
      }
    ]
  }
];

async function seedLiterature() {
  console.log("🚀 LÜGAT Edebiyat, Belâgat ve Kütüphane Istılahları Tohumlanıyor...");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const item of LITERATURE_ROOTS_AND_WORDS) {
    const { root: rootData, words } = item;

    // 1. Upsert Root
    const root = await prisma.root.upsert({
      where: { slug: rootData.slug },
      update: {
        rootLettersModern: rootData.rootLettersModern,
        rootLettersArabic: rootData.rootLettersArabic,
        origin: rootData.origin,
        rootType: rootData.rootType,
        primaryMeaning: rootData.primaryMeaning,
        description: rootData.description,
        lexicalMeaningArabic: rootData.lexicalMeaningArabic,
        ottomanUsageScope: rootData.ottomanUsageScope,
        primarySourceCitation: rootData.primarySourceCitation,
      },
      create: {
        slug: rootData.slug,
        rootLettersModern: rootData.rootLettersModern,
        rootLettersArabic: rootData.rootLettersArabic,
        origin: rootData.origin,
        rootType: rootData.rootType,
        primaryMeaning: rootData.primaryMeaning,
        description: rootData.description,
        lexicalMeaningArabic: rootData.lexicalMeaningArabic,
        ottomanUsageScope: rootData.ottomanUsageScope,
        primarySourceCitation: rootData.primarySourceCitation,
      },
    });

    console.log(`📌 Kök işlendi: ${root.rootLettersModern} (${root.rootLettersArabic})`);

    // 2. Upsert Words
    let orderIndex = 1;
    for (const w of words) {
      const {
        definitions,
        pattern,
        morphologicalType,
        contribution,
        relationshipType,
        verificationLevel,
        sourceCode,
        volume,
        pageNumber,
        entryHeadword,
        citation,
        ...wordFields
      } = w;

      const word = await prisma.word.upsert({
        where: { slug: wordFields.slug },
        update: {
          modernTurkish: wordFields.modernTurkish,
          modernEquivalents: wordFields.modernEquivalents,
          primaryOttoman: wordFields.primaryOttoman,
          transliteration: wordFields.transliteration,
          origin: wordFields.origin,
          originDetail: wordFields.originDetail,
          partOfSpeech: wordFields.partOfSpeech,
          verificationStatus: "VERIFIED",
          historicalMeaning: wordFields.historicalMeaning,
          contemporaryMeaning: wordFields.contemporaryMeaning,
          linguisticNotes: `${root.rootLettersModern} kökünden ${pattern}.`,
        },
        create: {
          slug: wordFields.slug,
          modernTurkish: wordFields.modernTurkish,
          modernEquivalents: wordFields.modernEquivalents,
          primaryOttoman: wordFields.primaryOttoman,
          transliteration: wordFields.transliteration,
          origin: wordFields.origin,
          originDetail: wordFields.originDetail,
          partOfSpeech: wordFields.partOfSpeech,
          verificationStatus: "VERIFIED",
          historicalMeaning: wordFields.historicalMeaning,
          contemporaryMeaning: wordFields.contemporaryMeaning,
          linguisticNotes: `${root.rootLettersModern} kökünden ${pattern}.`,
        },
      });

      console.log(`   ✨ Kelime kaydedildi: ${word.modernTurkish} (${word.primaryOttoman})`);

      // Meanings
      for (const def of definitions) {
        const existingDef = await prisma.wordMeaning.findFirst({
          where: { wordId: word.id, orderIndex: def.orderIndex },
        });

        if (!existingDef) {
          await prisma.wordMeaning.create({
            data: {
              wordId: word.id,
              orderIndex: def.orderIndex,
              definition: def.definition,
              register: def.register,
            },
          });
        }
      }

      // Root relation
      const existingRel = await prisma.wordRootRelation.findFirst({
        where: { wordId: word.id, rootId: root.id },
      });

      if (!existingRel) {
        await prisma.wordRootRelation.create({
          data: {
            wordId: word.id,
            rootId: root.id,
            morphologicalPattern: pattern,
            morphologicalType: morphologicalType,
            meaningContribution: contribution,
            relationshipType: relationshipType,
            relationVerificationStatus: verificationLevel,
            orderIndex: orderIndex++,
          },
        });
      }

      // Source relation
      const sourceId = sourceMap.get(sourceCode);
      if (sourceId) {
        const existingSourceRel = await prisma.wordSourceRelation.findFirst({
          where: { wordId: word.id, sourceId },
        });

        if (!existingSourceRel) {
          await prisma.wordSourceRelation.create({
            data: {
              wordId: word.id,
              sourceId,
              volume: volume || null,
              pageNumber: pageNumber || null,
              entryHeadword: entryHeadword || word.primaryOttoman,
              citation: citation || null,
              verificationLevel: verificationLevel || "PRIMARY_VERIFIED",
              verifiedAt: new Date(),
            },
          });
        }
      }
    }
  }

  console.log("✅ Bütün klasik edebiyat ve belâgat kelimeleri başarıyla kaydedildi!");
}

seedLiterature()
  .catch((e) => {
    console.error("Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
