// prisma/perfectRootsBatch3.js
// LÜGAT — Phase 5 & 6: Batch 3 Kök Mükemmelleştirme (Kök 21 - 40)
// Lisânü'l-Arab, Lane's Lexicon, Kâmûs-ı Türkî, Lugat-ı Nâcî ve Devellioğlu kaynaklı

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_3_ROOTS = [
  // 21. N-V-R (ن-و-ر)
  {
    slug: "nvr",
    rootLettersModern: "N-V-R",
    rootLettersArabic: "ن-و-ر",
    origin: "Arapça (Ecvef-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Karanlığı gideren aydınlık, ışık saçmak, basireti açan ziya.",
    description: "Ecvef-i Vâvî köktür. Asıl manası ateşteki yakıcı olmayan arı ışıktır. Buradan hakikati aydınlatan ilim ve basirete intikal etmiştir. Tanzimat devrinde aydın/entelektüel zümreye 'münevver' denmesi bu kökün en mühim semantik sıçramalarındandır.",
    lexicalMeaningArabic: "Lisânü'l-Arab: ed-Dav'u ve'ş-şuâ'; nûru'l-akli bihî yühdedü.",
    ottomanUsageScope: "Tasavvuf (Nûr-ı Muhammedî, Nûr-ı çeşm), fikir tarihi (münevver zümre), mimari (menâre/minare).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1450; Lugat-ı Nâcî s. 782; Devellioğlu s. 885.",
    derivatives: [
      {
        slug: "nur",
        modernTurkish: "Nur",
        primaryOttoman: "نور",
        transliteration: "Nūr",
        origin: "Arapça",
        originDetail: "Arapça n-v-r kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fu'l (فُعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Karanlığı yok eden aydınlık ve ilahi parıltı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Zulmeti bertaraf eden aydınlık, ruhanî ve melekûtî parlaklık; Hakk'ın nûru.",
        contemporaryMeaning: "Işık, parıltı, aydınlık; kutsal ışık.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1450",
        entryHeadword: "نور",
        citation: "Nûr: Zulmet mukabili olan ziya; ruhanî parlaklık.",
        definitions: [
          { orderIndex: 1, definition: "Karanlığı gideren aydınlık; kalbe inşirah veren parlaklık.", register: "Tasavvuf & Kelam" }
        ]
      },
      {
        slug: "munevver",
        modernTurkish: "Münevver",
        primaryOttoman: "منور",
        transliteration: "Münevver",
        origin: "Arapça",
        originDetail: "Arapça n-v-r kökünden tef'îl bâbı ism-i mef'ûlüdür.",
        partOfSpeech: "Sıfat / İsim",
        pattern: "Müfa''al (مُفَعَّل) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Nûr ile tenvir edilmiş, fikren aydınlatılmış şahıs.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Nurlanmış, aydınlatılmış; fikri açık, tahsilli ve basiret sahibi âlim/entelektüel.",
        contemporaryMeaning: "Aydın, entelektüel.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "782",
        entryHeadword: "منور",
        citation: "Münevver: Tenvir kılınmış, rûşen, nurlu; zihni açık zât.",
        definitions: [
          { orderIndex: 1, definition: "İlim ve tefekkürle zihni nurlanmış, mütefekkir aydın.", register: "Fikir Tarihi" }
        ]
      },
      {
        slug: "tenvir",
        modernTurkish: "Tenvir",
        primaryOttoman: "تنوير",
        transliteration: "Tenvīr",
        origin: "Arapça",
        originDetail: "Arapça n-v-r kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Aydınlatma, ışıklandırma, bir meseleyi vuzuha kavuşturma eylemi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Işıklandırmak; zihinleri ilim ve irfanla aydınlatmak; mübhem bir meseleyi tavzih etmek.",
        contemporaryMeaning: "Aydınlatma, bilgilendirme.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "1275",
        entryHeadword: "تنوير",
        citation: "Tenvir: Nurlu kılmak, ışıklandırmak; bir emri vuzuha eriştirmek.",
        definitions: [
          { orderIndex: 1, definition: "Karanlık bir mahalli ışıkla veya müphem bir fikri delille aydınlatma.", register: "İlmî & Fikrî" }
        ]
      }
    ]
  },

  // 22. Q-L-B (ق-ل-ب)
  {
    slug: "qlb",
    rootLettersModern: "Q-L-B",
    rootLettersArabic: "ق-ل-ب",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bir şeyi altüst etmek, içini dışına çevirmek, halden hale değişmek.",
    description: "Sürekli halden hale dönmesi ve kararsızlığı sebebiyle göğüsteki yüreğe 'kalb' denmiştir. Siyasi sahada nizamın tamamen tersyüz edilip yeni bir şekil almasına 'inkılâp' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Tahvîlü'ş-şey'i an vechihi ve zahran li batnin; semmiye'l-kalbü li kesreti tekallübihi.",
    ottomanUsageScope: "Tasavvuf (kalp tasfiyesi), siyaset (inkılâp/ihtilal), sarf ve nahiv (ibdâl ve kalb).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1062; Lugat-ı Nâcî s. 598; Devellioğlu s. 572.",
    derivatives: [
      {
        slug: "kalp",
        modernTurkish: "Kalp",
        primaryOttoman: "قلب",
        transliteration: "Ḳalb",
        origin: "Arapça",
        originDetail: "Arapça q-l-b kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Göğüsteki et parçası ve deruni idrak merkezi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yürek; his, duygu ve ilahî marifetin merkezi olan letife-i insaniyye.",
        contemporaryMeaning: "Kanı vücuda pompalayan organ; duygu ve sevgi merkezi.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1062",
        entryHeadword: "قلب",
        citation: "Kalb: Yürek; his ve vicdan mahalli; sahte ve halis olmayan para (kalp akçe).",
        definitions: [
          { orderIndex: 1, definition: "İnsanın manevi idrak ve his merkezi olan deruni cevher.", register: "Tasavvuf & Edebiyat" }
        ]
      },
      {
        slug: "inkilap",
        modernTurkish: "İnkılap",
        primaryOttoman: "انقلاب",
        transliteration: "İnḳılāb",
        origin: "Arapça",
        originDetail: "Arapça q-l-b kökünden infi'âl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "İnfi'âl (اِنْفِعَال) Masdarı",
        morphologicalType: "İnfi'âl Bâbı Masdarları",
        contribution: "Bir durumdan tamamen başka bir duruma dönüşme, köklü değişim.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir halden diğer hale dönme; cemiyet ve devlet nizamının kökünden değişmesi.",
        contemporaryMeaning: "Devrim, köklü toplumsal ve siyasi değişim.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "68",
        entryHeadword: "انقلاب",
        citation: "İnkılâp: Bir halden diğer hale tebeddül eylemek; tehavvül.",
        definitions: [
          { orderIndex: 1, definition: "Mevcut düzenin tamamen değişerek yeni bir yapıya bürünmesi.", register: "Siyaset & Tarih" }
        ]
      }
    ]
  },

  // 23. V-C-H (و-ج-ه)
  {
    slug: "vch",
    rootLettersModern: "V-C-H",
    rootLettersArabic: "و-ج-ه",
    origin: "Arapça (Misâl-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Yüz, çehre, bir şeyin insana ilk karşı gelen ön tarafı, yön ve itibar.",
    description: "İlk harfi vâv olan misâl köktür. Bir şeye yüzünü dönmeye 'teveccüh', karşılıklı yüz yüze gelmeye 'muvacehe', yön ve cihet tayinine 'cihet' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Müstakbelü külli şey'in; el-vechü me'rûf.",
    ottomanUsageScope: "Hukuk ve diplomasi (vech-i meşrû), teşrifat (hüsn-i teveccüh), mantık (vech-i şebeh).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1492; Lugat-ı Nâcî s. 810; Devellioğlu s. 1362.",
    derivatives: [
      {
        slug: "vech",
        modernTurkish: "Vech",
        primaryOttoman: "وجه",
        transliteration: "Vech",
        origin: "Arapça",
        originDetail: "Arapça v-c-h kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Yüz, cephe, yön, tarz ve sebep.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yüz, çehre; suret, tarz; bir meselenin dayandığı sebep ve cihet (vech-i meşrû).",
        contemporaryMeaning: "Yön, taraf, tarz.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1492",
        entryHeadword: "وجه",
        citation: "Vech: Yüz, sima; cihet, tarz, sebep ve münasebet.",
        definitions: [
          { orderIndex: 1, definition: "Bir meselenin görünüşü, açısı veya dayanağı olan yön.", register: "Hukuk & Mantık" }
        ]
      },
      {
        slug: "teveccuh",
        modernTurkish: "Teveccüh",
        primaryOttoman: "توجه",
        transliteration: "Teveccüh",
        origin: "Arapça",
        originDetail: "Arapça v-c-h kökünden tefe''ul bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tefa''ul (تَفَعُّل) Masdarı",
        morphologicalType: "Tefa''ul Bâbı Masdarları",
        contribution: "Yüzünü ve gönlünü birine çevirme, iltifat etme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir tarafa yönelme; bir kimseye iltifat, sevgi ve hürmetle muamele etme.",
        contemporaryMeaning: "Güler yüz gösterme, yakınlık duyma, sempati.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "1302",
        entryHeadword: "توجه",
        citation: "Teveccüh: Bir tarafa dönmek; birine meyil ve muhabbet göstermek.",
        definitions: [
          { orderIndex: 1, definition: "Gönülden gelen ilgi ve lütufla bir kimseye yönelme.", register: "Ahlak & Teşrifat" }
        ]
      }
    ]
  },

  // 24. H-V-L (ح-و-ل)
  {
    slug: "hvl",
    rootLettersModern: "H-V-L",
    rootLettersArabic: "ح-و-ل",
    origin: "Arapça (Ecvef-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bir durumdan başka bir duruma geçmek, dönmek, hareket etmek, üzerinden bir yıl geçmek.",
    description: "Ecvef köktür. Bir insanın ruhi veya bedeni durumuna 'hâl', bir borcun veya vazifenin başkasına devredilmesine 'havale', kıymetli kağıtların tahviline 'tahvil' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Mürûru ve'l-intikāl mine'l-hâli ile'l-hâl.",
    ottomanUsageScope: "Tasavvuf (Hâl ve Makam), maliye (tahvilat, havale), felsefe (istihale).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 505; Lugat-ı Nâcî s. 280; Devellioğlu s. 420.",
    derivatives: [
      {
        slug: "hal",
        modernTurkish: "Hâl",
        primaryOttoman: "حال",
        transliteration: "Ḥāl",
        origin: "Arapça",
        originDetail: "Arapça h-v-l kökünden fa'l masdarıdır (aslı havl).",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İnsanın veya nesnenin içinde bulunduğu vaziyet.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Durum, vaziyet; şimdiki zaman; tasavvufta irade dışı kalbe gelen vecd ve coşku hali.",
        contemporaryMeaning: "Durum, vaziyet; pazar yeri.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "505",
        entryHeadword: "حال",
        citation: "Hâl: Vaziyet, keyfiyet; zaman-ı hazır; cezbe.",
        definitions: [
          { orderIndex: 1, definition: "Varlığın o andaki ruhi veya cismani vaziyeti.", register: "Tasavvuf & Felsefe" }
        ]
      },
      {
        slug: "havale",
        modernTurkish: "Havale",
        primaryOttoman: "حواله",
        transliteration: "Ḥavāle",
        origin: "Arapça",
        originDetail: "Arapça h-v-l kökünden fe'âle vezninde masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'âle (فَعَالَة) Masdar İsim",
        morphologicalType: "Fa'âle Sigaları",
        contribution: "Bir işi, parayı veya vazifeyi bir başkasına devretme eylemi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir borcun ifasını veya bir işin rü'yetini başkasına devretme; ısmarlama.",
        contemporaryMeaning: "Para transferi; resmi evrakı ilgili makama iletme; çocukluk nöbeti.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "280",
        entryHeadword: "حواله",
        citation: "Havale: Bir kimsenin zimmetindeki hakkı diğerine ısmarlaması.",
        definitions: [
          { orderIndex: 1, definition: "Bir mesuliyetin veya hakkın başkasına intikali.", register: "Hukuk & Maliye" }
        ]
      }
    ]
  },

  // 25. S-L-K (س-ل-ك)
  {
    slug: "slk",
    rootLettersModern: "S-L-K",
    rootLettersArabic: "س-ل-ك",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bir yola girmek, dar yolda yürümek, ipliği iğne deliğinden geçirmek.",
    description: "Kök manası iplik gibi bir şeyi bir deliğe sokup yürütmektir. Tasavvufta manevi yola intisap edip terbiye görmeye 'sülûk', bu yolu yürüyene 'sâlik', takip edilen yola ve ihtisas sahasına 'meslek' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Nefâzü'ş-şey'i fî gayrihi ve meşyü't-tarîk.",
    ottomanUsageScope: "Tasavvuf (Seyr-i Sülûk), bürokrasi ve meslek teşkilatı (meslek-i memuriyet).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 726; Lugat-ı Nâcî s. 422; Devellioğlu s. 1074.",
    derivatives: [
      {
        slug: "suluk",
        modernTurkish: "Sülûk",
        primaryOttoman: "سلوك",
        transliteration: "Sülūk",
        origin: "Arapça",
        originDetail: "Arapça s-l-k kökünden fu'ûl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fu'ûl (فُعُول) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Bir yola girip o yolda yürüyüşü tamamlama.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Manevi bir terbiye yoluna girip mürşid rehberliğinde kemale yürüme (seyr ü sülûk).",
        contemporaryMeaning: "Bir mesleğe veya yola intisap etme.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "726",
        entryHeadword: "سلوك",
        citation: "Sülûk: Tarika girmek; bir mesleğe intisap eylemek.",
        definitions: [
          { orderIndex: 1, definition: "Nefsi tezkiye etmek üzere manevi terbiyeden geçme süreci.", register: "Tasavvuf" }
        ]
      },
      {
        slug: "meslek",
        modernTurkish: "Meslek",
        primaryOttoman: "مسلك",
        transliteration: "Meslek",
        origin: "Arapça",
        originDetail: "Arapça s-l-k kökünden mef'al vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'al (مَفْعَل) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "Yürünülen yol, takip edilen usul, maişet vasıtası olan uzmanlık.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yol, tutulan çığır, hayat tarzı, itikadi meşrep.",
        contemporaryMeaning: "Uzmanlık alanı, profesyonel uğraş.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "422",
        entryHeadword: "مسلك",
        citation: "Meslek: Gidilecek yol, tarîk, çığır; tarz-ı hareket.",
        definitions: [
          { orderIndex: 1, definition: "Kişinin hayatı boyunca benimsediği yol ve maişet temin ettiği ihtisas alanı.", register: "Sosyoloji & İdare" }
        ]
      }
    ]
  },

  // 26. N-Z-L (ن-ز-ل)
  {
    slug: "nzl",
    rootLettersModern: "N-Z-L",
    rootLettersArabic: "ن-ز-ل",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Yukarıdan aşağıya inmek, bir yere konaklamak, kervanın konması.",
    description: "Göç ve kervan kültürünün merkezindedir. Vahyin peygamber kalbine inmesine 'inzal/tenzil', kervanların ve ulakların durakladığı Osmanlı istasyonlarına 'menzil', yüksek mevkiden alçakgönüllülükle inmeye 'tenezzül' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Hübûtu min ulyin ile's-süfl; nüzûlü'l-kavm.",
    ottomanUsageScope: "Kelâm (tenzîl-i Kur'ân), Osmanlı posta teşkilatı (Menzilhâne), ahlak (tevazu ve tenezzül).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1432; Lugat-ı Nâcî s. 770; Devellioğlu s. 860.",
    derivatives: [
      {
        slug: "menzil",
        modernTurkish: "Menzil",
        primaryOttoman: "منزل",
        transliteration: "Menzil",
        origin: "Arapça",
        originDetail: "Arapça n-z-l kökünden mef'il vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'il (مَفْعِل) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "İnilen, konaklanan yer; mesafe; atların değiştirildiği istasyon.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İki konak arası mesafe; Osmanlı posta ve haberleşme teşkilatının istasyonu (menzilhâne).",
        contemporaryMeaning: "Mesafe, erim; gidilecek yer.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1432",
        entryHeadword: "منزل",
        citation: "Menzil: İnecek ve konacak yer; bir günlük yol mesafesi.",
        definitions: [
          { orderIndex: 1, definition: "Yolcuların ve orduların konakladığı istasyon; iki konak arası mesafe.", register: "Osmanlı Teşkilatı" }
        ]
      },
      {
        slug: "tenezzul",
        modernTurkish: "Tenezzül",
        primaryOttoman: "تنزل",
        transliteration: "Tenezzül",
        origin: "Arapça",
        originDetail: "Arapça n-z-l kökünden tefe''ul bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tefa''ul (تَفَعُّل) Masdarı",
        morphologicalType: "Tefa''ul Bâbı Masdarları",
        contribution: "Yüksekten kendi rızasıyla aşağıya inme, alçakgönüllülük gösterme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kibrini kırıp alçakgönüllü olmak; yüksek mertebeden aşağı inmek.",
        contemporaryMeaning: "Alçalmayı kabul etme; kibirlenmeyip küçümseneni kabul etme.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "770",
        entryHeadword: "تنزل",
        citation: "Tenezzül: Aşağı inmek; tevazu ve mahviyet göstermek.",
        definitions: [
          { orderIndex: 1, definition: "Kendi mertebesinden aşağıda olan bir duruma lütuf veya tevazu ile inme.", register: "Ahlak" }
        ]
      }
    ]
  },

  // 27. Q-S-M (ق-س-م)
  {
    slug: "qsm",
    rootLettersModern: "Q-S-M",
    rootLettersArabic: "ق-س-م",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bir bütünü parçalara ayırmak, paylaştırmak, nasip takdir etmek.",
    description: "Suyu, mirası veya ganimeti paylaştırma aslından doğmuştur. İstanbul'un meşhur Taksim meydanı, Belgrad ormanlarından gelen suyun şehre paylaştırıldığı 'maksem'den adını almıştır. Nasip ve talihe de 'kısmet' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Tefrikatü'ş-şey'i eczâen; el-kısmetü'l-hazzü ve'n-nasîb.",
    ottomanUsageScope: "Şehir su mimarisi (Taksim/Maksem), miras hukuku (kısmet-i şer'iyye), kader akidesi (kısmet).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1045; Lugat-ı Nâcî s. 590; Devellioğlu s. 560.",
    derivatives: [
      {
        slug: "taksim",
        modernTurkish: "Taksim",
        primaryOttoman: "تقسيم",
        transliteration: "Taḳsīm",
        origin: "Arapça",
        originDetail: "Arapça q-s-m kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Parçalara ayırma, bölme; suyu şehre dağıtma.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bölüştürme, hisselere ayırma; suyun debisini ölçüp mahallelere pay etme teşkilatı; musiki taksimi.",
        contemporaryMeaning: "Bölme işlemi, paylaştırma; İstanbul semti; müzik icrası.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1045",
        entryHeadword: "تقسيم",
        citation: "Taksim: Kısımlara ayırmak; hisselere tevzi etmek; su tevziatı.",
        definitions: [
          { orderIndex: 1, definition: "Bir bütünü hisselere ayırıp hak sahiplerine paylaştırma.", register: "Hukuk & Şehircilik" }
        ]
      },
      {
        slug: "kismet",
        modernTurkish: "Kısmet",
        primaryOttoman: "قسمت",
        transliteration: "Ḳısmet",
        origin: "Arapça",
        originDetail: "Arapça q-s-m kökünden fi'let vezninde masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fi'let (فِعْلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İlahî takdirle kula düşen nasip ve pay.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Cenâb-ı Hakk'ın ezelde her kula taksim eylediği rızık ve nasip; talih; evlilik nasibi.",
        contemporaryMeaning: "Talih, baht, nasip; evlenme fırsatı.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "590",
        entryHeadword: "قسمت",
        citation: "Kısmet: Halka taksim olunan rızık ve nasip; baht.",
        definitions: [
          { orderIndex: 1, definition: "Ezelde takdir olunan rızık, baht ve hisse.", register: "Kelam & Günlük" }
        ]
      }
    ]
  },

  // 28. H-B-B (ح-ب-ب)
  {
    slug: "hbb",
    rootLettersModern: "H-B-B",
    rootLettersArabic: "ح-ب-ب",
    origin: "Arapça (Muzaaf)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Sevmek, gönülden bağlanmak, tohum ve çekirdek gibi özde yeşermek.",
    description: "Muzaaf köktür. Kökün aslı 'habbe' yani bitki tohumudur. Tane ve tohumun içinde hayat potansiyeli saklaması gibi, kalbin derinindeki en halis meyil merkezine 'habbe-i kalb' ve bu duyguya 'muhabbet' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Vüddu ve'l-üns; habbetü'l-kalbi süveydâuh.",
    ottomanUsageScope: "Tasavvuf (muhabbet-i zâtiyye), edebiyat (habib ve mahbûb), gündelik dil.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 518; Lugat-ı Nâcî s. 290; Devellioğlu s. 430.",
    derivatives: [
      {
        slug: "muhabbet",
        modernTurkish: "Muhabbet",
        primaryOttoman: "محبت",
        transliteration: "Muḥabbet",
        origin: "Arapça",
        originDetail: "Arapça h-b-b kökünden mufâ'ale bâbı mîmî masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Müfa''ale / Mef'alet masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Sevgi, dostluk, cana yakın sohbet ve ünsiyet.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Sevgi, dostluk; Allah'a veya Peygamber'e duyulan arı muhabbet; dostça sohbet.",
        contemporaryMeaning: "Sevgi; dostça, samimi konuşma.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "518",
        entryHeadword: "محبت",
        citation: "Muhabbet: Sevgi, dostluk, ülfet; zevkli mükâleme.",
        definitions: [
          { orderIndex: 1, definition: "Gönülden duyulan derin sevgi ve samimiyet.", register: "Ahlak & Tasavvuf" }
        ]
      },
      {
        slug: "habib",
        modernTurkish: "Habib",
        primaryOttoman: "حبيب",
        transliteration: "Ḥabīb",
        origin: "Arapça",
        originDetail: "Arapça h-b-b kökünden fe'îl vezninde sıfat-ı müşebbehedir.",
        partOfSpeech: "Sıfat / İsim",
        pattern: "Fa'îl (فَعِيل) Sıfat-ı Müşebbehe",
        morphologicalType: "Sıfat-ı Müşebbeheler",
        contribution: "Sevilen ve seven kimse, sevgili dost.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Sevilen zat, sevgili; Hz. Muhammed'in (s.a.v.) mübarek vasfı (Habîbullâh).",
        contemporaryMeaning: "Sevgili, dost (özel isim).",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "290",
        entryHeadword: "حبيب",
        citation: "Habib: Mahbûb, dost; Cenâb-ı Hakk'ın sevgilisi.",
        definitions: [
          { orderIndex: 1, definition: "Gönülden sevilen en yakın dost ve sevgili.", register: "Dini & Sıfat" }
        ]
      }
    ]
  },

  // 29. V-H-D (و-ح-د)
  {
    slug: "vhd",
    rootLettersModern: "V-H-D",
    rootLettersArabic: "و-ح-د",
    origin: "Arapça (Misâl-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Tek ve yalnız olmak, eşi ve dengi bulunmamak, bölünmez bütünlük arz etmek.",
    description: "İlk harfi vâv olan misâl köktür. İslam inancının kalbi olan 'Tevhid' inancı, varlığın birliğini ifade eden 'Vahdet-i Vücûd' nazariyesi bu kökten neşet etmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-İnfrâdü ve lâ şerîke leh; el-Vâhidu'l-ferdü's-samed.",
    ottomanUsageScope: "Kelâm ve akide (Tevhid), tasavvuf (Vahdet, Vahdetnâme), hat sanatı levhaları.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1485; Lugat-ı Nâcî s. 805; Devellioğlu s. 1350.",
    derivatives: [
      {
        slug: "tevhid",
        modernTurkish: "Tevhid",
        primaryOttoman: "توحيد",
        transliteration: "Tevḥīd",
        origin: "Arapça",
        originDetail: "Arapça v-h-d kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Bir bilme, bir kılma, Allah'ın tekliğine iman etme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Allah'ın birliğine iman ve ikrar etme (Lâ ilâhe illallâh); divan edebiyatında Allah'ın birliğini terennüm eden kaside.",
        contemporaryMeaning: "Birleme, birleştirme; İslam'ın tek tanrı inancı.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1485",
        entryHeadword: "توحيد",
        citation: "Tevhid: Bir kılmak, bir bilmek; Cenâb-ı Hakk'ın vahdaniyetini tasdik.",
        definitions: [
          { orderIndex: 1, definition: "Cenâb-ı Hakk'ın zatında, sıfatlarında ve fiillerinde tek ve şeriksiz olduğunu ikrar etme.", register: "Akide & Kelam" }
        ]
      },
      {
        slug: "vahdet",
        modernTurkish: "Vahdet",
        primaryOttoman: "وحدت",
        transliteration: "Vaḥdet",
        origin: "Arapça",
        originDetail: "Arapça v-h-d kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'let (فَعْلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Birlik, teklik, çokluk (kesret) zıddı olan mutlak birlik.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yalnızlık, teklik; tasavvufta kesretin zıddı olan ilahî birlik tecellisi.",
        contemporaryMeaning: "Birlik, teklik.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "805",
        entryHeadword: "وحدت",
        citation: "Vahdet: Birlik, teklik; kesret mukabili; halvet.",
        definitions: [
          { orderIndex: 1, definition: "Bütün çokluğun kaynağı olan mutlak ilahî teklik.", register: "Tasavvuf & Felsefe" }
        ]
      }
    ]
  },

  // 30. Q-D-S (ق-د-س)
  {
    slug: "qds",
    rootLettersModern: "Q-D-S",
    rootLettersArabic: "ق-د-س",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Arılık, her türlü leke ve noksanlıktan berî olmak, mübarek ve mukaddes kılınmak.",
    description: "Kökün aslı tertemiz ve saf olmaktır. Buradan cennete 'hazîretü'l-kuds', Cebrail'e 'Rûhu'l-Kuds', peygamberler yurdu şehre 'Kudüs-i Şerif' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: et-Tathîrü ve't-tenzîhu an külli aybin; el-Kuddûsü el-mübârek.",
    ottomanUsageScope: "İlahiyat (Hadis-i Kudsî, Kuddûs esması), coğrafya (Kudüs-i Şerif), hürmet (mukaddesat).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1030; Lugat-ı Nâcî s. 582; Devellioğlu s. 550.",
    derivatives: [
      {
        slug: "mukaddes",
        modernTurkish: "Mukaddes",
        primaryOttoman: "مقدس",
        transliteration: "Muḳaddes",
        origin: "Arapça",
        originDetail: "Arapça q-d-s kökünden tef'îl bâbı ism-i mef'ûlüdür.",
        partOfSpeech: "Sıfat",
        pattern: "Müfa''al (مُفَعَّل) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Kutsanmış, temiz ve mübarek kılınmış.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Her türlü ayıptan tenzih olunmuş, kutsî kılınmış, hürmete layık mukaddes şey.",
        contemporaryMeaning: "Kutsal, mübarek, dokunulmaz.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1030",
        entryHeadword: "مقدس",
        citation: "Mukaddes: Mübarek, kudsî, takdis olunmuş.",
        definitions: [
          { orderIndex: 1, definition: "Dini veya ahlaki hürmete layık olan kutsal varlık veya mekân.", register: "Dini & Ahlak" }
        ]
      },
      {
        slug: "kudus",
        modernTurkish: "Kudüs",
        primaryOttoman: "قدس",
        transliteration: "Ḳuds",
        origin: "Arapça",
        originDetail: "Arapça q-d-s kökünden masdar isimdir.",
        partOfSpeech: "Özel İsim",
        pattern: "Fu'l (فُعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kutsal şehir, bereketli harem beldesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kudüs-i Şerif şehri; Mescid-i Aksâ'nın bulunduğu mübarek belde; Cennet bahçesi.",
        contemporaryMeaning: "Kudüs şehri (Filistin).",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "582",
        entryHeadword: "قدس",
        citation: "Kuds: Mübarek kılınmış belde; Beytü'l-Makdis.",
        definitions: [
          { orderIndex: 1, definition: "Peygamberler yurdu ve ilk kıble olan kutsal şehir.", register: "Tarih & Coğrafya" }
        ]
      }
    ]
  }
];

async function seedBatch3() {
  console.log("🌟 === BATCH 3: KÖKLERİ VE KELİMELERİ MÜKEMMELLEŞTİRME BAŞLADI ===");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const rootData of BATCH_3_ROOTS) {
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

  console.log("✅ Batch 3 kökleri başarıyla mükemmelleştirildi!");
}

seedBatch3()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
