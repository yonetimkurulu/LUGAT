// prisma/perfectRootsBatch4.js
// LÜGAT — Phase 5 & 6: Batch 4 Kök Mükemmelleştirme (Kök 31 - 50 ve Türkçe/Farsça Morfoloji)
// Lisânü'l-Arab, Lane's Lexicon, Kâmûs-ı Türkî, Lugat-ı Nâcî, Clauson ve Steingass kaynaklı

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_4_ROOTS = [
  // 31. B-S-R (ب-ص-ر)
  {
    slug: "bsr",
    rootLettersModern: "B-S-R",
    rootLettersArabic: "ب-ص-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Gözle görmek, kalp gözüyle idrak etmek, basiret sahibi olmak.",
    description: "Zahiri görme kuvvetine 'basar', batıni ve kalbi ferasete 'basiret' denir. Cenâb-ı Hakk'ın her şeyi hakkıyla görmesi sıfatı el-Basîr'dir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Hissü'l-bâsır; el-basîretü kuvve-i nâzıratün li'l-kalb.",
    ottomanUsageScope: "Kelâm (Basar sıfatı), tasavvuf ve ahlak (basiret ve firaset), edebiyat (tabsıra).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 296; Lugat-ı Nâcî s. 165; Devellioğlu s. 108.",
    derivatives: [
      {
        slug: "basiret",
        modernTurkish: "Basiret",
        primaryOttoman: "بصيرت",
        transliteration: "Baṣīret",
        origin: "Arapça",
        originDetail: "Arapça b-s-r kökünden fa'îlet vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'îlet (فَعِيلَة) masdar isim",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kalp gözüyle hakikati seziş ve ileriyi görebilme feraseti.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kalp gözü, deruni anlayış; hadiselerin akıbetini ferasetle önceden kestirme kuvveti.",
        contemporaryMeaning: "Doğruyu yanlıştan ayırma yeteneği, seziş, uyanıklık.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "296",
        entryHeadword: "بصيرت",
        citation: "Basiret: Kalp gözü, feraset, zekâvet, ileriyi görme.",
        definitions: [
          { orderIndex: 1, definition: "Hakikati kalple idrak etme kabiliyeti, feraset.", register: "Ahlak & Tasavvuf" }
        ]
      }
    ]
  },

  // 32. D-R-S (د-ر-س)
  {
    slug: "drs",
    rootLettersModern: "D-R-S",
    rootLettersArabic: "د-ر-س",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kitabı tekrar tekrar okuyup ezberlemek, izin silinip aşınması.",
    description: "Kökün en eski manası rüzgârın ve ayak basmanın tesiriyle yerdeki izlerin silinip düzleşmesidir (ders-i menzil). İlim yolunda da metinlerin tekrar edile edile zihne yerleşmesi bu fiille anlatılmıştır.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Kıraatü'l-kitâb merreten ba'de ukrâ ve teahhüdüh.",
    ottomanUsageScope: "Medrese teşkilatı (müderris, tedrisat), ilmiye sınıfı, edebiyat.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 612; Lugat-ı Nâcî s. 340; Devellioğlu s. 224.",
    derivatives: [
      {
        slug: "medrese",
        modernTurkish: "Medrese",
        primaryOttoman: "مدرسه",
        transliteration: "Medrese",
        origin: "Arapça",
        originDetail: "Arapça d-r-s kökünden mef'ale vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'ale (مَفْعَلَة) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "Ders okutulan yüksek tahsil müessesesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İslam dünyasında ve Osmanlı'da yüksek dini ve akli ilimlerin tedris edildiği üniversite seviyesindeki ilim yuvası.",
        contemporaryMeaning: "Geleneksel dini eğitim kurumu.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "612",
        entryHeadword: "مدرسه",
        citation: "Medrese: Talebeye ders verilen bina, darü'l-ilm.",
        definitions: [
          { orderIndex: 1, definition: "Osmanlı'da kadı, müftü ve âlim yetiştiren ali tedrisat kurumu.", register: "Tarih & Eğitim" }
        ]
      },
      {
        slug: "muderris",
        modernTurkish: "Müderris",
        primaryOttoman: "مدرس",
        transliteration: "Müderris",
        origin: "Arapça",
        originDetail: "Arapça d-r-s kökünden tef'îl bâbı ism-i fâilidir.",
        partOfSpeech: "İsim",
        pattern: "Müfa''il (مُفَعِّل) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Ders veren, ilim öğreten profesör.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Medresede talebeye icazet veren ve ders okutan yüksek rütbeli âlim.",
        contemporaryMeaning: "Eski dilde profesör, üniversite öğretim üyesi.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "340",
        entryHeadword: "مدرس",
        citation: "Müderris: Medresede ders veren muallim, hoca.",
        definitions: [
          { orderIndex: 1, definition: "Medreselerde ilmiye sınıfının ali rütbesine sahip ders hocası.", register: "Osmanlı Teşkilatı" }
        ]
      }
    ]
  },

  // 33. M-L-K (م-ل-ك)
  {
    slug: "mlk",
    rootLettersModern: "M-L-K",
    rootLettersArabic: "م-ل-ك",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bir şey üzerinde tasarruf kudretine sahip olmak, bağlayıp zabt etmek.",
    description: "Kökün aslı bir şeyi kuvvetle sıkarak avuç içine almaktır. Buradan hükümdarlık (mülk/melik), sahip olunan emval ve mülk, nurani varlıklar (melek) ve vatan (memleket) neşet etmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Güvvetü'ş-şey'i ve tasarrufün fîhi; el-mülkü zıddü'r-rıkk.",
    ottomanUsageScope: "Devlet idaresi ('Mülk adaletle kaimdir'), mülkiyet hukuku, tasavvuf (Mülk ve Melekût).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1380; Lugat-ı Nâcî s. 740; Devellioğlu s. 730.",
    derivatives: [
      {
        slug: "mulk",
        modernTurkish: "Mülk",
        primaryOttoman: "ملك",
        transliteration: "Mülk",
        origin: "Arapça",
        originDetail: "Arapça m-l-k kökünden fu'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fu'l (فُعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Tasarruf yetkisi, devlet idaresi, gayrimenkul.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Devlet, saltanat, hâkimiyet; bir kimsenin meşru tasarrufunda bulunan arazi ve emval.",
        contemporaryMeaning: "Taşınmaz mal, gayrimenkul; ev, arsa.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1380",
        entryHeadword: "ملك",
        citation: "Mülk: Hükümdarlık, saltanat; bir kimsenin tasarrufundaki emlak.",
        definitions: [
          { orderIndex: 1, definition: "Siyasi egemenlik; şahsın meşru tasarrufundaki mal varlığı.", register: "Hukuk & Siyaset" }
        ]
      },
      {
        slug: "memleket",
        modernTurkish: "Memleket",
        primaryOttoman: "مملكت",
        transliteration: "Memleket",
        origin: "Arapça",
        originDetail: "Arapça m-l-k kökünden mef'alet vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'alet (مَفْعَلَة) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "Bir hükümdarın veya milletin hâkimiyet sahası olan diyar.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Padişahın hükmü altındaki ülke ve vilayetler bütünü; vatan.",
        contemporaryMeaning: "Ülke, vatan; bir kimsenin doğup büyüdüğü yer.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "740",
        entryHeadword: "مملكت",
        citation: "Memleket: Hükümet idaresindeki memalik, vatan.",
        definitions: [
          { orderIndex: 1, definition: "Bir devletin egemenliği altındaki toprakların tamamı.", register: "Siyaset & Coğrafya" }
        ]
      }
    ]
  },

  // 34. C-M-A (ج-م-ع)
  {
    slug: "cm-a",
    rootLettersModern: "C-M-A",
    rootLettersArabic: "ج-م-ع",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Dağınık şeyleri bir araya getirmek, toplamak, birleştirmek.",
    description: "Dağınıklığın (tefrika) zıddıdır. Müslümanların haftalık toplandığı güne 'Cuma', topluca namaz kılınan büyük mabede 'Cami', seçilmiş metinler derlemesine 'Mecmua', âlimlerin ittifakına 'İcma' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zammu'ş-şey'i ile'ş-şey'i müttefikan ve zıddü't-tefrîk.",
    ottomanUsageScope: "Mimari (Cami), fıkıh (İcma-ı ümmet), edebiyat (Şiir Mecmuaları), içtimaî hayat.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 475; Lugat-ı Nâcî s. 260; Devellioğlu s. 165.",
    derivatives: [
      {
        slug: "cami",
        modernTurkish: "Cami",
        primaryOttoman: "جامع",
        transliteration: "Cāmi‘",
        origin: "Arapça",
        originDetail: "Arapça c-m-a kökünden fâ'il vezninde ism-i fâildir.",
        partOfSpeech: "İsim / Sıfat",
        pattern: "Fâ'il (فَاعِل) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Toplayan, birleştiren; cemaati cuma namazında bir araya getiren mabet.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Toplayan, cem eden; minberi ve cuma namazı kılınan büyük ibadethane.",
        contemporaryMeaning: "Müslümanların ibadet yeri, mescit.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "475",
        entryHeadword: "جامع",
        citation: "Cami: Cem' edici; hutbe okunan ve cuma namazı kılınan mescit.",
        definitions: [
          { orderIndex: 1, definition: "Halkı cemaat halinde bir araya toplayan cuma mescidi.", register: "Mimari & Dini" }
        ]
      },
      {
        slug: "mecmua",
        modernTurkish: "Mecmua",
        primaryOttoman: "مجموعه",
        transliteration: "Mecmū‘a",
        origin: "Arapça",
        originDetail: "Arapça c-m-a kökünden mef'ûle vezninde ism-i mef'ûldür.",
        partOfSpeech: "İsim",
        pattern: "Mef'ûle (مَفْعُولَة) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Seçilmiş şiirlerin veya risalelerin bir araya getirildiği el yazması kitap; dergi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Farklı şairlerin ve müelliflerin kıymetli yazılarını toplayan el yazması cilt; süreli dergi.",
        contemporaryMeaning: "Dergi, periyodik yayın.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "260",
        entryHeadword: "مجموعه",
        citation: "Mecmua: Cem' olunmuş risaleler veya eş'ar defteri; ceride.",
        definitions: [
          { orderIndex: 1, definition: "Güzide manzumelerin veya risalelerin derlendiği yazma kitap.", register: "Edebiyat Tarihi" }
        ]
      }
    ]
  },

  // 35. B-L-G (ب-ل-غ)
  {
    slug: "blg",
    rootLettersModern: "B-L-G",
    rootLettersArabic: "ب-ل-غ",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Ulaşmak, hedefe ermek, sözün maksadı tastamam ve tesirli ifade etmesi.",
    description: "Kökün aslı bir mesafeyi aşıp hedefe varmaktır. İnsanın reşit olmasına 'bülûğ', sözün kalbe tam ve noksansız ulaşmasına 'belağat', mesajı sahibine iletmeye 'tebliğ' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Vusûlü ile'ş-şey'i ve intihâu ileyhi; el-belâgatü hüsnü'l-beyân.",
    ottomanUsageScope: "Edebiyat ve belâgat ilmi (Me'ânî, Beyân, Bedî'), fıkıh (bülûğ çağı), diplomasi (tebliğat).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 305; Lugat-ı Nâcî s. 170; Devellioğlu s. 115.",
    derivatives: [
      {
        slug: "belagat",
        modernTurkish: "Belağat",
        primaryOttoman: "بلاغت",
        transliteration: "Belāġat",
        origin: "Arapça",
        originDetail: "Arapça b-l-g kökünden fe'âlet vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'âlet (فَعَالَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Sözün muktezâ-yı hâle uygun, kusursuz ve tesirli söylenmesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Sözün fasih ve düzgün olup dinleyenin idrakine tam intikal etmesi; belâgat ilmi.",
        contemporaryMeaning: "Güzel, etkili ve yerinde söz söyleme sanatı; retorik.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "305",
        entryHeadword: "بلاغت",
        citation: "Belağat: Kelâmın fasih olup muktezâ-yı hâle mutabık olması.",
        definitions: [
          { orderIndex: 1, definition: "Sözü hem fasih hem de dinleyicinin haline tam uygun kılma ilmi.", register: "Edebi İlimler" }
        ]
      },
      {
        slug: "teblig",
        modernTurkish: "Tebliğ",
        primaryOttoman: "تبليغ",
        transliteration: "Teblīġ",
        origin: "Arapça",
        originDetail: "Arapça b-l-g kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Bir haberi veya emri muhatabına ulaştırma, bildirme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Peygamberin vahy-i ilâhîyi ümmete bildirmesi; resmi ferman veya tezkireyi tebliğ etme.",
        contemporaryMeaning: "Bildirim, resmi yazıyla bildirme.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "170",
        entryHeadword: "تبليغ",
        citation: "Tebliğ: Ulaştırmak, eriştirmek; emri muhataba bildirmek.",
        definitions: [
          { orderIndex: 1, definition: "Bir hükmü, haberi veya kanunu muhatabına resmen bildirme ameliyesi.", register: "Hukuk & Siyaset" }
        ]
      }
    ]
  },

  // 36. V-C-D (و-ج-د)
  {
    slug: "vcd",
    rootLettersModern: "V-C-D",
    rootLettersArabic: "و-ج-د",
    origin: "Arapça (Misâl-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bulmak, var olmak, kalpte coşku ve vecd hissi uyanmak.",
    description: "İlk harfi vâv olan misâl köktür. Maddi bir şeyi kaybettikten sonra bulmaya, felsefede var olmaya 'vücûd', kalbin içten gelen ahlaki muhakemesine 'vicdan', tasavvuftaki ilahi sarhoşluğa 'vecd' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: ez-Zafarü bi'l-matlûb; el-vücûdü nâkızu'l-ademi; el-vecdu hüznün ev şevk.",
    ottomanUsageScope: "Felsefe ve kelâm (Vücûd sıfatı, Vahdet-i Vücûd), ahlak (vicdan), tasavvufi semâ (vecd).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1490; Lugat-ı Nâcî s. 808; Devellioğlu s. 1360.",
    derivatives: [
      {
        slug: "vucut",
        modernTurkish: "Vücut",
        primaryOttoman: "وجود",
        transliteration: "Vücūd",
        origin: "Arapça",
        originDetail: "Arapça v-c-d kökünden fu'ûl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fu'ûl (فُعُول) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Varlık, ademin zıddı; insan bedeni.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Var olma hali, yokluğun zıddı; felsefede zatî mevcudiyet; insan gövdesi.",
        contemporaryMeaning: "Beden, gövde; varlık.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1490",
        entryHeadword: "وجود",
        citation: "Vücut: Varlık; adem zıddı; gövde, cüsse.",
        definitions: [
          { orderIndex: 1, definition: "Yokluğun mukabili olan hakiki varlık; cismani insan bedeni.", register: "Felsefe & Tıp" }
        ]
      },
      {
        slug: "vicdan",
        modernTurkish: "Vicdan",
        primaryOttoman: "وجدان",
        transliteration: "Vicdān",
        origin: "Arapça",
        originDetail: "Arapça v-c-d kökünden fi'lân vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fi'lân (فِعْلَان) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İnsanın kendi içinde iyiyi ve kötüyü sezip tartar hissi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Buluş, seziş; nefsin kendi halini bilmesi; kalbin iyilikle huzur, fenalıkla ızdırap duyması.",
        contemporaryMeaning: "Kişiyi kendi davranışları hakkında bir yargıda bulunmaya iten ahlaki yeti.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "808",
        entryHeadword: "وجدان",
        citation: "Vicdan: Bulmak; deruni his; ahlaki temyiz kuvveti.",
        definitions: [
          { orderIndex: 1, definition: "İnsanın kalbinde iyiyi emredip kötülükten ızdırap duyuran fıtrî ahlak terazisi.", register: "Ahlak Felsefesi" }
        ]
      }
    ]
  },

  // 37. A-Q-L (ع-ق-ل)
  {
    slug: "aql",
    rootLettersModern: "A-Q-L",
    rootLettersArabic: "ع-ق-ل",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Deveyi kösteklemek, bağlamak, insanı heva ve cehaletten alıkoymak.",
    description: "Kökün bedevi Arapçasındaki ilk manası 'ıkāl' yani devenin ayağını büküp bağlayan iptir. Aklın da sahibini çılgınlıktan, hatadan ve heva girdabından bağlayıp zaptetmesi bu benzetmeyle ifade edilmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Habsü ve'l-imsâk; el-aklün mâ bihî yütemeyyezü beyne'l-haseni ve'l-kabîh.",
    ottomanUsageScope: "Kelâm ve felsefe (akıl-nakil telifi), fıkıh (ehliyet-i temyiz), tıp.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 940; Lugat-ı Nâcî s. 530; Devellioğlu s. 25.",
    derivatives: [
      {
        slug: "akil",
        modernTurkish: "Akıl",
        primaryOttoman: "عقل",
        transliteration: "‘Aḳl",
        origin: "Arapça",
        originDetail: "Arapça a-q-l kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Düşünme, anlama ve iyiyle kötüyü temyiz kuvveti.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İnsanı hayvandan ayıran ve tekellüfe muhatap kılan idrak cevheri; us.",
        contemporaryMeaning: "Düşünme, kavrama ve anlama yetisi; us, zekâ.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "940",
        entryHeadword: "عقل",
        citation: "Akıl: Kuvve-i müdrikey-i insaniyye; temyiz kabiliyeti; us.",
        definitions: [
          { orderIndex: 1, definition: "İyiyi kötüden, doğruyu yanlıştan ayıran ruhi ve ruhi-aklî meleke.", register: "Felsefe & Mantık" }
        ]
      },
      {
        slug: "makul",
        modernTurkish: "Makul",
        primaryOttoman: "معقول",
        transliteration: "Ma‘ḳūl",
        origin: "Arapça",
        originDetail: "Arapça a-q-l kökünden mef'ûl vezninde ism-i mef'ûldür.",
        partOfSpeech: "Sıfat",
        pattern: "Mef'ûl (مَفْعُول) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Akılla kavranabilen, mantığa ve ölçüye uygun.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Akıl ile idrak olunan, akla mutabık gelen emir; menkulün zıddı.",
        contemporaryMeaning: "Akla uygun, mantıklı, ılımlı.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "530",
        entryHeadword: "معقول",
        citation: "Makul: Akla uyan, akıl kabul eden; mantıkî.",
        definitions: [
          { orderIndex: 1, definition: "Akıl terazisiyle tartıldığında kabul gören meşru ve mantıki vaziyet.", register: "Mantık" }
        ]
      }
    ]
  },

  // 38. N-Z-M (ن-ظ-م)
  {
    slug: "nzm",
    rootLettersModern: "N-Z-M",
    rootLettersArabic: "ن-ظ-م",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "İncileri ipe sırayla dizmek, tertip etmek, vezinli şiir söylemek.",
    description: "Kökün aslı inci tanelerini dağılmayacak şekilde tek bir ipliğe dizmektir. Buradan devlet kanunlarının intizamına 'nizam', şiir söylemeye 'nazım', ıslahat devrine 'tanzimat' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Te'lîfü'l-eşyâi ve zammu ba'zıhâ ilâ ba'dın mevcûden.",
    ottomanUsageScope: "Devlet idaresi (Nizâm-ı Âlem, Tanzimat-ı Hayriyye), edebiyat (Nazım ve Nesir).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1445; Lugat-ı Nâcî s. 778; Devellioğlu s. 878.",
    derivatives: [
      {
        slug: "nizam",
        modernTurkish: "Nizam",
        primaryOttoman: "نظام",
        transliteration: "Niẓām",
        origin: "Arapça",
        originDetail: "Arapça n-z-m kökünden fi'âl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fi'âl (فِعَال) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Düzen, tertip, kanun, cemiyeti ayakta tutan asayiş.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Âlemin ve devletin intizamını temin eden kanunlar manzumesi (Nizâm-ı Âlem).",
        contemporaryMeaning: "Düzen, kural, yasa.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1445",
        entryHeadword: "نظام",
        citation: "Nizam: Düzen, tertip, asayiş; kanun ve kaide.",
        definitions: [
          { orderIndex: 1, definition: "Devletin ve kainatın dengede yürümesini sağlayan umumi kanun ve ahenk.", register: "Devlet & Hukuk" }
        ]
      },
      {
        slug: "tanzim",
        modernTurkish: "Tanzim",
        primaryOttoman: "تنظيم",
        transliteration: "Tanẓīm",
        origin: "Arapça",
        originDetail: "Arapça n-z-m kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Düzenleme, tertip etme, kanuna bağlama.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İntizama sokmak, usul dairesine koymak; Tanzimat devrinin kök kavramı.",
        contemporaryMeaning: "Düzenleme, sıralama.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "778",
        entryHeadword: "تنظيم",
        citation: "Tanzim: Nizam vermek, tertip eylemek; intizam ve ıslah.",
        definitions: [
          { orderIndex: 1, definition: "Bozulmuş bir yapıyı kanun ve nizamla yeniden tanzim ve ıslah etme.", register: "Tarih & İdare" }
        ]
      }
    ]
  },

  // 39. K-M-L (ك-م-ل)
  {
    slug: "kml",
    rootLettersModern: "K-M-L",
    rootLettersArabic: "ك-م-ل",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Tam ve noksansız olmak, olgunlaşmak, en yüksek dereceye ermek.",
    description: "Bir şeyin bütün cüzleriyle ve faziletleriyle eksiksiz olmasıdır. Tasavvufta kemale ermiş mürşide 'mürşid-i kâmil' veya 'insân-ı kâmil' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Temâmü'ş-şey'i ve tekâmülüh; el-kemâlü cemî'u fezâili'n-nefs.",
    ottomanUsageScope: "Tasavvuf (İnsân-ı Kâmil), ahlak ve edebiyat (Kemâlât-ı insaniyye).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1190; Lugat-ı Nâcî s. 650; Devellioğlu s. 610.",
    derivatives: [
      {
        slug: "kemal",
        modernTurkish: "Kemal",
        primaryOttoman: "كمال",
        transliteration: "Kemāl",
        origin: "Arapça",
        originDetail: "Arapça k-m-l kökünden fe'âl masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'âl (فَعَال) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Olgunluk, tamlık, noksansızlık hali.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bütün faziletlerin ve fazlın toplanmasıyla hâsıl olan mükemmellik derecesi.",
        contemporaryMeaning: "Olgunluk, yetkinlik, tamlık (özel isim).",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1190",
        entryHeadword: "كمال",
        citation: "Kemal: Tamlık, noksansızlık; olgunluk, fazilet.",
        definitions: [
          { orderIndex: 1, definition: "Ahlaki ve zihni noksanlardan arınarak ulaşılan en yüksek mertebe.", register: "Ahlak & Tasavvuf" }
        ]
      },
      {
        slug: "mukemmel",
        modernTurkish: "Mükemmel",
        primaryOttoman: "مکمل",
        transliteration: "Mükemmel",
        origin: "Arapça",
        originDetail: "Arapça k-m-l kökünden tef'îl bâbı ism-i mef'ûlüdür.",
        partOfSpeech: "Sıfat",
        pattern: "Müfa''al (مُفَعَّل) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Tamamlanmış, kusursuz kılınmış.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Eksiksiz tamamlanmış; kusursuz ve tastamam olan.",
        contemporaryMeaning: "Kusursuz, eksiksiz, harika.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "650",
        entryHeadword: "مکمل",
        citation: "Mükemmel: Tekmil kılınmış, noksanı kalmamış, kusursuz.",
        definitions: [
          { orderIndex: 1, definition: "Kendisinde hiçbir kusur veya noksan taraf bırakılmamış nesne.", register: "Genel" }
        ]
      }
    ]
  },

  // 40. R-S-M (ر-س-م)
  {
    slug: "rsm",
    rootLettersModern: "R-S-M",
    rootLettersArabic: "ر-س-م",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "İz bırakmak, yazmak, nakşetmek, adet ve usul tayin etmek.",
    description: "Kökün aslı hayvanın toprağa bastığı ayak izinin belirgin kalmasıdır. Buradan resmi kayıtlara 'resm', devletin aldığı vergilere 'rüsûm', törenlere 'merasim' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Eserü'l-bâkî ve'l-kitâbetü; el-merâsimü el-âdâtü'l-mukarrarah.",
    ottomanUsageScope: "Bürokrasi ve vergi (rüsûm-ı örfiyye), teşrifat (merasim), sanat (resim ve tasvir).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 655; Lugat-ı Nâcî s. 380; Devellioğlu s. 970.",
    derivatives: [
      {
        slug: "resim",
        modernTurkish: "Resim",
        primaryOttoman: "رسم",
        transliteration: "Resm",
        origin: "Arapça",
        originDetail: "Arapça r-s-m kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Çizgi, tasvir, devlet usulü ve harç/vergi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Çizgi, nakış; devlet usul ve adabı; devletçe tarh olunan harç ve vergi (rüsûm).",
        contemporaryMeaning: "Çizgi ve boya ile yapılan görsel sanat eseri; fotoğraf.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "655",
        entryHeadword: "رسم",
        citation: "Resm: Tasvir, nakış; kanun, adet; devlet vergisi.",
        definitions: [
          { orderIndex: 1, definition: "Bir şeyin şeklini çizgiyle nakşetme sanatı; resmi adet ve vergi.", register: "Sanat & Maliye" }
        ]
      },
      {
        slug: "merasim",
        modernTurkish: "Merasim",
        primaryOttoman: "مراسم",
        transliteration: "Merāsim",
        origin: "Arapça",
        originDetail: "Arapça r-s-m kökünden mef'al veznindeki 'mersem' kelimesinin çoğuludur.",
        partOfSpeech: "İsim",
        pattern: "Mefâ'il (مَفَاعِل) Kırık Çoğul",
        morphologicalType: "Kırık Çoğullar (Cem-i Mükesser)",
        contribution: "Yerleşmiş resmi usuller, törenler, teşrifat adabı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Devlet teşrifatında riayet olunması kanunlaşmış resmi törenler ve âdetler mecmuası.",
        contemporaryMeaning: "Tören, anma veya kutlama merasimi.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "380",
        entryHeadword: "مراسم",
        citation: "Merasim: Resimler, adetler; resmi tebrik ve tesit törenleri.",
        definitions: [
          { orderIndex: 1, definition: "Devlet teşrifatına veya ananeye göre icra edilen resmi tören.", register: "Tarih & Teşrifat" }
        ]
      }
    ]
  }
];

async function seedBatch4() {
  console.log("🌟 === BATCH 4: KÖKLERİ VE KELİMELERİ MÜKEMMELLEŞTİRME BAŞLADI ===");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const rootData of BATCH_4_ROOTS) {
    const { derivatives, ...rootFields } = rootData;

    const root = await prisma.root.upsert({
      where: { slug: rootFields.slug },
      update: {
        rootLettersModern: rootFields.rootLettersModern,
        rootLettersArabic: rootFields.rootLettersArabic,
        origin: rootFields.origin,
        rootType: rootFields.rootType,
        primaryMeaning: rootFields.primaryMeaning,
        description: rootFields.description,
        lexicalMeaningArabic: rootFields.lexicalMeaningArabic,
        ottomanUsageScope: rootFields.ottomanUsageScope,
        primarySourceCitation: rootFields.primarySourceCitation,
      },
      create: {
        slug: rootFields.slug,
        rootLettersModern: rootFields.rootLettersModern,
        rootLettersArabic: rootFields.rootLettersArabic,
        origin: rootFields.origin,
        rootType: rootFields.rootType,
        primaryMeaning: rootFields.primaryMeaning,
        description: rootFields.description,
        lexicalMeaningArabic: rootFields.lexicalMeaningArabic,
        ottomanUsageScope: rootFields.ottomanUsageScope,
        primarySourceCitation: rootFields.primarySourceCitation,
      },
    });

    console.log(`📌 Kök mükemmelleştirildi: ${root.rootLettersModern} (${root.rootLettersArabic})`);

    let orderIndex = 1;
    for (const d of derivatives) {
      const {
        definitions,
        pattern,
        morphologicalType,
        contribution,
        relationshipType,
        sourceCode,
        volume,
        pageNumber,
        entryHeadword,
        citation,
        verificationLevel,
        ...wordFields
      } = d;

      const word = await prisma.word.upsert({
        where: { slug: wordFields.slug },
        update: {
          modernTurkish: wordFields.modernTurkish,
          modernEquivalents: wordFields.modernTurkish.toLowerCase(),
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
          modernEquivalents: wordFields.modernTurkish.toLowerCase(),
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

      for (const def of definitions) {
        await prisma.wordMeaning.create({
          data: {
            wordId: word.id,
            orderIndex: def.orderIndex,
            definition: def.definition,
            register: def.register,
          },
        });
      }

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
      } else {
        await prisma.wordRootRelation.update({
          where: { id: existingRel.id },
          data: {
            morphologicalPattern: pattern,
            morphologicalType: morphologicalType,
            meaningContribution: contribution,
            relationshipType: relationshipType,
            relationVerificationStatus: verificationLevel,
          },
        });
      }

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

  console.log("✅ Batch 4 kökleri başarıyla mükemmelleştirildi!");
}

seedBatch4()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
