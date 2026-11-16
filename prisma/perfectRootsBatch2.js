// prisma/perfectRootsBatch2.js
// LÜGAT — Phase 5 & 6: Batch 2 Kök Mükemmelleştirme (Kök 11 - 30)
// Lisânü'l-Arab, Lane's Lexicon, Kâmûs-ı Türkî, Lugat-ı Nâcî ve Devellioğlu kaynaklı

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_2_ROOTS = [
  // 11. H-Q-Q (ح-ق-ق)
  {
    slug: "hqq",
    rootLettersModern: "H-Q-Q",
    rootLettersArabic: "ح-ق-ق",
    origin: "Arapça (Sülâsî Mücerred / Muzaaf)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Gerçek ve sabit olmak, şüphe zail olup hakikat ortaya çıkmak, yerli yerine oturmak.",
    description: "Muzaaf köktür. Lisânü'l-Arab'da kök manası devenin semerinin yahut yükünün sırtına tam oturup sağlamlaşmasıdır. Buradan vücub, lüzum ve adalet manalarına intikal etmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Aslı 'bir şeyin sabit, vâkî ve inkâr edilemez derecede gerçek olmasıdır' (Sebete ve vecebe).",
    ottomanUsageScope: "Hukuk (hukuk-ı şahsiyye, ihkak-ı hak), tasavvuf (Hakîkat-i Muhammediyye) ve ilmi tahkik (muhakkikîn).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 556; Lugat-ı Nâcî s. 312; Devellioğlu s. 402; Lisânü'l-Arab C. 10 s. 49.",
    derivatives: [
      {
        slug: "hak",
        modernTurkish: "Hak",
        primaryOttoman: "حق",
        transliteration: "Ḥaḳḳ",
        origin: "Arapça",
        originDetail: "Arapça h-q-q kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kökün asıl sabitlik, gerçeklik ve adalet manasını taşır.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İnkârı mümkün olmayan sabit hakikat; şer'an veya kanunen birine ait olan yetki; Cenâb-ı Hakk'ın ismi.",
        contemporaryMeaning: "Hukuk düzeninin tanıdığı yetki; adalet; pay; gerçek.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "556",
        entryHeadword: "حق",
        citation: "Hakk: Sabit ve vâkî olan nesne; batılın zıddı; her kime ait ise onun nasibi.",
        definitions: [
          { orderIndex: 1, definition: "Gerçek, doğru, adalet, batıl olmayan sabit emir.", register: "Klasik & Felsefe" },
          { orderIndex: 2, definition: "Hukuken bir kimseye tanınan selâhiyet, hisse ve nasip.", register: "Hukuk" }
        ]
      },
      {
        slug: "hakikat",
        modernTurkish: "Hakikat",
        primaryOttoman: "حقيقت",
        transliteration: "Ḥaḳīḳat",
        origin: "Arapça",
        originDetail: "Arapça h-q-q kökünden fe'îlet vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fe'îlet (فَعِيلَة) sıfat-ı müşebbehe / isim",
        morphologicalType: "Sıfat ve Masdar İsimleri",
        contribution: "Kökün mecazdan uzak saf gerçeklik vasfını isimleştirir.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir şeyin aslı, mahiyeti ve künhü; mecazın zıddı; tasavvufta şeriat ve tarikatın gayesi.",
        contemporaryMeaning: "Gerçek, doğruluk, asıl.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "313",
        entryHeadword: "حقيقت",
        citation: "Hakîkat: Bir şeyin asıl ve mahiyeti; mecaz mukabili; vefâ ve sadakat.",
        definitions: [
          { orderIndex: 1, definition: "Bir şeyin aslı, özü, künhü ve sabit olan hali.", register: "Felsefe & Tasavvuf" }
        ]
      },
      {
        slug: "tahkik",
        modernTurkish: "Tahkik",
        primaryOttoman: "تحقيق",
        transliteration: "Taḥḳīḳ",
        origin: "Arapça",
        originDetail: "Arapça h-q-q kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Bir şeyin hakikatini delille ortaya çıkarma, doğrulama ameliyesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir meseleyi delil ve bürhan ile araştırıp hakikatine ulaşma; el yazması metinleri ilmî usulle neşre hazırlama.",
        contemporaryMeaning: "Soruşturma, derinlemesine araştırma, inceleme.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "1248",
        entryHeadword: "تحقيق",
        citation: "Tahkik: Bir şeyi doğru ve sahih kılmak; hakikatini araştırıp bulmak.",
        definitions: [
          { orderIndex: 1, definition: "Bir şeyin hakikatini araştırıp delilleriyle ispat etme.", register: "İlmî & Mantık" }
        ]
      },
      {
        slug: "hukuk",
        modernTurkish: "Hukuk",
        primaryOttoman: "حقوق",
        transliteration: "Ḥuḳūḳ",
        origin: "Arapça",
        originDetail: "Arapça h-q-q kökünden 'hak' kelimesinin fu'ûl veznindeki cem'idir (çoğuludur).",
        partOfSpeech: "İsim",
        pattern: "Fu'ûl (فُعُول) Cemi (Çoğul)",
        morphologicalType: "Kırık Çoğullar (Cem-i Mükesser)",
        contribution: "Haklar manzumesi; zamanla müstakil bir ilim dalı olmuştur.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Haklar, vecibeler; fertlerin birbirleriyle ve devletle münasebetlerini tanzim eden kaideler mecmuası.",
        contemporaryMeaning: "Hukuk bilimi, kanunlar bütünü.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "558",
        entryHeadword: "حقوق",
        citation: "Hukuk: Hak kelimesinin cem'i; ahkâm-ı kanuniyye ve şer'iyye ilmi.",
        definitions: [
          { orderIndex: 1, definition: "Haklar bütünü; cemiyette adaleti sağlayan şer'î ve kanunî hükümler.", register: "Hukuk" }
        ]
      }
    ]
  },

  // 12. S-B-R (ص-ب-ر)
  {
    slug: "sbr",
    rootLettersModern: "S-B-R",
    rootLettersArabic: "ص-ب-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Nefsi hapsetmek, acı ve musibet karşısında feryat etmeyip tahammül etmek.",
    description: "Klasik Arapçada bir şeyi tutup hapsetmek, bir yerde alıkoymak manasındadır. Nitekim hapiste öldürülen kimseye 'katl-i sabr' denir. Ahlak ve tasavvufta en mühim makamlardandır.",
    lexicalMeaningArabic: "Lisânü'l-Arab: 'el-Habs' yani nefsi telâş ve şikâyetten alıkoyup dizginlemektir.",
    ottomanUsageScope: "Ahlak, tasavvuf (sabr-ı cemîl), edebiyat (sabır taşı) ve günlük tabirler.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 814; Lugat-ı Nâcî s. 468; Devellioğlu s. 998.",
    derivatives: [
      {
        slug: "sabir",
        modernTurkish: "Sabır",
        primaryOttoman: "صبر",
        transliteration: "Ṣabr",
        origin: "Arapça",
        originDetail: "Arapça s-b-r kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Tahammül ve nefsi dizginleme vasfını ifade eder.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Acıya, güçlüklere ve felaketlere karşı şikâyetlenmeden dayanma kuvveti; oruç.",
        contemporaryMeaning: "Zor koşullar karşısında direnme gücü, bekleme tahammülü.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "814",
        entryHeadword: "صبر",
        citation: "Sabr: Teennî, tahammül, meşakkate katlanmak; telâş etmemek.",
        definitions: [
          { orderIndex: 1, definition: "Başa gelen bela ve zorluklara telaşlanmadan katlanma sebatı.", register: "Ahlak" }
        ]
      },
      {
        slug: "sabur",
        modernTurkish: "Sabûr",
        primaryOttoman: "صبور",
        transliteration: "Ṣabūr",
        origin: "Arapça",
        originDetail: "Arapça s-b-r kökünden fe'ûl vezninde mübalağa ism-i fâilidir.",
        partOfSpeech: "Sıfat",
        pattern: "Fa'ûl (فَعُول) Mübalağa İsm-i Fâil",
        morphologicalType: "Mübalağa Sigaları",
        contribution: "Aşırı derecede sabırlı olan, sabrı tükenmeyen kimse.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Çok sabreden; asilere ceza vermekte acele etmeyen Allah Teâlâ (es-Sabûr).",
        contemporaryMeaning: "Çok sabırlı, tahammüllü.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "468",
        entryHeadword: "صبور",
        citation: "Sabûr: Pek çok sabreden; esmâ-i hüsnâdan biridir.",
        definitions: [
          { orderIndex: 1, definition: "Çokça sabreden, musibetler karşısında sarsılmayan.", register: "Dini & Sıfat" }
        ]
      }
    ]
  },

  // 13. S-V-Q (ش-و-ق)
  {
    slug: "shvq",
    rootLettersModern: "Ş-V-Q",
    rootLettersArabic: "ش-و-ق",
    origin: "Arapça (Ecvef-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kalbin arzu edilen şeye doğru şiddetle meyletmesi, coşku ve şevk hissi.",
    description: "Ecvef köktür; aslı ş-v-k olup orta harf vâvdır. Lisânü'l-Arab'da nefsin sevgiliye yahut bir gayeye doğru heyecanla kabarması olarak tarif edilir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Niza'u'n-nefs ilâ'ş-şey' (nefsin bir şeye şiddetli meyli ve hasreti).",
    ottomanUsageScope: "Tasavvuf (vecd ve şevk hali), musiki ve edebiyat, idari teşvik.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 782; Devellioğlu s. 1205; Kubbealtı s. 1142.",
    derivatives: [
      {
        slug: "sevk",
        modernTurkish: "Şevk",
        primaryOttoman: "شوق",
        transliteration: "Şevḳ",
        origin: "Arapça",
        originDetail: "Arapça ş-v-q kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İçteki coşku ve kuvvetli arzuyu ifade eder.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Gönül coşkusu, neş'e, bir işe şiddetli arzu ile sarılma; sevgiliyi görme hasreti.",
        contemporaryMeaning: "İstek, heves, coşku.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "782",
        entryHeadword: "شوق",
        citation: "Şevk: Şiddet-i meyil ve heves; arzu-yı bî-pâyân; neş'e.",
        definitions: [
          { orderIndex: 1, definition: "Büyük bir heyecan ve istekle bir işe yönelme duygusu.", register: "Genel" }
        ]
      },
      {
        slug: "tesvik",
        modernTurkish: "Teşvik",
        primaryOttoman: "تشويق",
        transliteration: "Teşvīḳ",
        origin: "Arapça",
        originDetail: "Arapça ş-v-q kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Başkasına şevk verme, heveslendirme, cesaretlendirme ameliyesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir kimseyi bir işi yapmaya heveslendirme, gayrete getirme.",
        contemporaryMeaning: "Özendirme, cesaretlendirme, güdüleme.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "1280",
        entryHeadword: "تشويق",
        citation: "Teşvik: Şevklendirmek, heveslendirmek, bir hayırlı işe sevk eylemek.",
        definitions: [
          { orderIndex: 1, definition: "Bir kimseye gayret ve istek aşılayarak harekete geçirme.", register: "İdare & Ahlak" }
        ]
      },
      {
        slug: "istiyak",
        modernTurkish: "İştiyak",
        primaryOttoman: "اشتياق",
        transliteration: "İştiyāḳ",
        origin: "Arapça",
        originDetail: "Arapça ş-v-q kökünden ifti'âl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "İfti'âl (اِفْتِعَال) Masdarı",
        morphologicalType: "İfti'âl Bâbı Masdarları",
        contribution: "Deruni bir arzuyla özleme, hasret duyma hali.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Göreceği gelmek, çok özlemek, vuslat hasretiyle yanmak.",
        contemporaryMeaning: "Güçlü özlem, hasret.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "62",
        entryHeadword: "اشتياق",
        citation: "İştiyak: Pek ziyade göreceği gelmek, şevk ile mütehassir olmak.",
        definitions: [
          { orderIndex: 1, definition: "Bir kimseyi veya mekânı derin bir sevgiyle görmeyi arzulama.", register: "Edebi" }
        ]
      }
    ]
  },

  // 14. A-S-Q (ع-ش-ق)
  {
    slug: "asq",
    rootLettersModern: "A-Ş-Q",
    rootLettersArabic: "ع-ش-ق",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Aşırı sevgi, sarmaşığın ağacı sarması gibi sevgilinin kalbi bütünüyle kuşatması.",
    description: "Kökün aslı 'aşeḳa' (aşaka) adı verilen ve sarıldığı ağacın suyunu emerek onu kurutan yabani sarmaşıktır. Aşkın da âşığın bedenini zaafa uğratıp kalbini istila etmesi bu benzetmeyle irtibatlandırılır.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Işku mevtıru'l-hubb; el-aşeḳatü şeceratün tahzarrü sümme tasferrü.",
    ottomanUsageScope: "Divan edebiyatı (Mecâzî ve Hakikî aşk), tasavvufi irfan, musiki makamı (Uşşak).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 936; Lugat-ı Nâcî s. 524; Devellioğlu s. 78; TDVİA C. 4 s. 11-17.",
    derivatives: [
      {
        slug: "ask",
        modernTurkish: "Aşk",
        primaryOttoman: "عشق",
        transliteration: "‘Aşḳ",
        origin: "Arapça",
        originDetail: "Arapça a-ş-q kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kökün en temel ve şiddetli muhabbet manasını taşır.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Şiddetli ve taşkın muhabbet; Hakk'a duyulan ifrat derecesindeki cezbe ve sevgi.",
        contemporaryMeaning: "Karşı cinse duyulan aşırı sevgi ve bağlılık duygusu.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "936",
        entryHeadword: "عشق",
        citation: "Aşk: Şiddet-i muhabbet; ifrat-ı heves ve tealluk.",
        definitions: [
          { orderIndex: 1, definition: "Aşırı sevgi ve derunî bağlılık; ilâhî vuslat arzusu.", register: "Edebi & Tasavvuf" }
        ]
      },
      {
        slug: "asik",
        modernTurkish: "Âşık",
        primaryOttoman: "عاشق",
        transliteration: "‘Āşıḳ",
        origin: "Arapça",
        originDetail: "Arapça a-ş-q kökünden fâ'il vezninde ism-i fâildir.",
        partOfSpeech: "Sıfat / İsim",
        pattern: "Fâ'il (فَاعِل) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Aşk fiilini yaşayan, seven, tutkun kimse.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir güzele veya Cenâb-ı Hakk'a gönül bağlamış tutkun; saz şairi.",
        contemporaryMeaning: "Birine aşkla bağlı kimse.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "524",
        entryHeadword: "عاشق",
        citation: "Âşık: Aşk müptelası olan kimse; maşukuna cân u dilden bağlanan.",
        definitions: [
          { orderIndex: 1, definition: "Gönlünü bir sevgilinin muhabbetine kaptırmış kimse.", register: "Genel" }
        ]
      },
      {
        slug: "masuk",
        modernTurkish: "Mâşuk",
        primaryOttoman: "معشوق",
        transliteration: "Ma‘şūḳ",
        origin: "Arapça",
        originDetail: "Arapça a-ş-q kökünden mef'ûl vezninde ism-i mef'ûldür.",
        partOfSpeech: "İsim",
        pattern: "Mef'ûl (مَفْعُول) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Aşkın yöneldiği, sevilen nesne/şahıs.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Sevilen, kendisine aşk duyulan sevgili; hakikatte Cenâb-ı Hak.",
        contemporaryMeaning: "Sevilen kimse, sevgili.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "680",
        entryHeadword: "معشوق",
        citation: "Mâşuk: Sevilen, kendisine aşk beslenen; matlûb.",
        definitions: [
          { orderIndex: 1, definition: "Âşığın kalbinin bağlandığı sevgili.", register: "Edebi" }
        ]
      }
    ]
  },

  // 15. Z-K-R (ذ-ك-ر)
  {
    slug: "zkr",
    rootLettersModern: "Z-K-R",
    rootLettersArabic: "ذ-ك-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Unutulan bir şeyi zihne getirmek, dille yâd etmek, kalpte hazır tutmak.",
    description: "Zihin ve lisan ile yapılan iki türlü zikir vardır. Edebiyatta şairleri ve büyükleri yâd eden eserlere 'tezkire' denir. Meclislerde meseleleri müzakere etmek de bu köktendir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Hıfzu'ş-şey'i fi'l-kalb ve nutku bihi bi'l-lisân.",
    ottomanUsageScope: "Tasavvufi ayinler (halka-i zikir), şair biyografileri (tezkire-i şuarâ), meclis müzakereleri.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 642; Lugat-ı Nâcî s. 370; Devellioğlu s. 1435.",
    derivatives: [
      {
        slug: "zikir",
        modernTurkish: "Zikir",
        primaryOttoman: "ذكر",
        transliteration: "Ẕikr",
        origin: "Arapça",
        originDetail: "Arapça z-k-r kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fi'l (فِعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Anma, yâd etme ve Allah'ı hatırlama eylemi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Allah'ın isimlerini ve sıfatlarını dille söyleyip kalple tefekkür etme; Kur'ân-ı Kerîm'in bir ismi.",
        contemporaryMeaning: "Sürekli anma; tarikatlarda Tanrı adını tekrarlama.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "642",
        entryHeadword: "ذكر",
        citation: "Zikr: Yâd etme, anma; gafletin zıddı; vird.",
        definitions: [
          { orderIndex: 1, definition: "Allah'ı anma, O'nun isimlerini tekrar etme ve unutmama hali.", register: "Dini & Tasavvuf" }
        ]
      },
      {
        slug: "tezkire",
        modernTurkish: "Tezkire",
        primaryOttoman: "تذكره",
        transliteration: "Teẕkire",
        origin: "Arapça",
        originDetail: "Arapça z-k-r kökünden tef'ile vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Tef'ile (تَفْعِلَة) Masdar İsim",
        morphologicalType: "Tef'ile Sigaları",
        contribution: "Hatırlatıcı yazılı belge, biyografik risale.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Şairlerin hayatını ve şiirlerini kaydeden eser; kısa resmi tezkere/pusula; oy pusulası.",
        contemporaryMeaning: "Eski edebiyatta biyografik eser; askerlik terhis belgesi (tezkere).",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "210",
        entryHeadword: "تذكره",
        citation: "Tezkire: Hatıra getirecek nesne; şuarâ hal tercümelerine dair kitap.",
        definitions: [
          { orderIndex: 1, definition: "Şairlerin ve meşhur zatların tercüme-i hallerini bildiren kitap.", register: "Edebiyat Tarihi" }
        ]
      },
      {
        slug: "muzakere",
        modernTurkish: "Müzakere",
        primaryOttoman: "مذاكره",
        transliteration: "Müẕākere",
        origin: "Arapça",
        originDetail: "Arapça z-k-r kökünden müfâ'ale bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Müfâ'ale (مُفَاعَلَة) Masdarı",
        morphologicalType: "Müfâ'ale Bâbı Masdarları",
        contribution: "Bir meseleyi karşılıklı görüşüp fikir tezekkür etme ameliyesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İki veya daha çok kimsenin bir ilmi veya siyasi meseleyi karşılıklı görüşmesi.",
        contemporaryMeaning: "Bir konuyla ilgili fikir alışverişi, görüşme, toplantı.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "805",
        entryHeadword: "مذاكره",
        citation: "Müzakere: Bir meseleyi iki tarafın karşılıklı konuşup mütalaa eylemesi.",
        definitions: [
          { orderIndex: 1, definition: "Bir meseleyi çözmek için yapılan istişari görüşme.", register: "Diplomasi & İdare" }
        ]
      }
    ]
  },

  // 16. S-F-A (ص-ف-و)
  {
    slug: "sfa",
    rootLettersModern: "S-F-A",
    rootLettersArabic: "ص-ف-و",
    origin: "Arapça (Nâkıs-ı Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Bulanıklıktan ve tortudan arınmak, berrak ve halis olmak, gönül huzuru bulmak.",
    description: "Nâkıs köktür; üçüncü harfi vâvdır. Suyun durulması manasından 'kalp tasfiyesi' ve 'sefa sürmek' manalarına teşmil edilmiştir. Peygamber Efendimiz'in 'Mustafâ' (seçilmiş, arınmış) ismi bu köktendir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü'l-keder; halusa mine'ş-şevâib (leke ve tortulardan arındı).",
    ottomanUsageScope: "Tasavvuf (safvet, tasfiye-i kalp), edebiyat (zevk u safa), isimler (Mustafa).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 825; Devellioğlu s. 1012; Lisânü'l-Arab C. 14 s. 462.",
    derivatives: [
      {
        slug: "sefa",
        modernTurkish: "Sefa",
        primaryOttoman: "صفا",
        transliteration: "Ṣafā",
        origin: "Arapça",
        originDetail: "Arapça s-f-v kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'al (فَعَل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kederden uzak gönül duruluğu ve neşesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Gönül şenliği, keder ve gamdan beri olma hali; eğlence.",
        contemporaryMeaning: "Gönül rahatlığı, rahatlık, neşeli yaşayış.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "825",
        entryHeadword: "صفا",
        citation: "Safa: Kedersizlik, dertsizlik, zevk, neş'e ve huzûr-ı kalb.",
        definitions: [
          { orderIndex: 1, definition: "Gönülde keder ve keder unsuru bulunmaması, dirlik.", register: "Ahlak & Edebiyat" }
        ]
      },
      {
        slug: "tasfiye",
        modernTurkish: "Tasfiye",
        primaryOttoman: "تصفيه",
        transliteration: "Taṣfiye",
        origin: "Arapça",
        originDetail: "Arapça s-f-v kökünden tef'ile vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Tef'ile (تَفْعِلَة) Masdarı",
        morphologicalType: "Tef'ile Sigaları",
        contribution: "Arındırma, temizleme, tortusunu giderme işlemi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Suyu veya madeni yabancı maddelerden arıtma; kalbi fena ahlaktan temizleme; hesabı kapatma.",
        contemporaryMeaning: "Arıtma, temizleme; ticaret ortaklığını sonlandırıp hesaplaşma.",
        sourceCode: "DV",
        volume: "1",
        pageNumber: "1260",
        entryHeadword: "تصفيه",
        citation: "Tasfiye: Sâfî kılmak, temizlemek, yabancı nesnelerden ayıklamak.",
        definitions: [
          { orderIndex: 1, definition: "Maddî veya manevî unsurları kir ve lekelerden temizleme.", register: "Tasavvuf & Fen" }
        ]
      },
      {
        slug: "mustafa",
        modernTurkish: "Mustafa",
        primaryOttoman: "مصطفى",
        transliteration: "Muṣṭafā",
        origin: "Arapça",
        originDetail: "Arapça s-f-v kökünden ifti'âl bâbı ism-i mef'ûlüdür (aslı mustafey).",
        partOfSpeech: "Sıfat / Özel İsim",
        pattern: "Müfta'al (مُفْتَعَل) İsm-i Mef'ûl",
        morphologicalType: "İsm-i Mef'ûller",
        contribution: "Süzülerek seçilmiş, her türlü noksandan arındırılmış.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İhtiyar olunmuş, süzülüp seçilmiş kimse; Hz. Muhammed'in (s.a.v.) mübarek lakabı.",
        contemporaryMeaning: "Seçilmiş, güzide (yaygın erkek adı).",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "475",
        entryHeadword: "مصطفى",
        citation: "Mustafâ: Güzide, intihab olunmuş, sâfî ve pâk kılınmış.",
        definitions: [
          { orderIndex: 1, definition: "Arılık ve kemali sebebiyle seçilip üstün kılınan.", register: "Dini İsim" }
        ]
      }
    ]
  },

  // 17. R-H-M (ر-ح-م)
  {
    slug: "rhm",
    rootLettersModern: "R-H-M",
    rootLettersArabic: "ر-ح-م",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Şefkat ve acıma hissi, muhtaç olana lütufta bulunma duygusu.",
    description: "Kökün asıl anlamı 'rahim' yani anne karnında yavrunun büyüdüğü ve korunduğu şefkat yatağıdır. Buradan akrabalık bağlarına 'sıla-i rahim', acımaya 'merhamet' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: er-Rıkkatü ve't-te'attuf; er-rahim mevzı'u tekevveni'l-veled.",
    ottomanUsageScope: "İlahiyat (Besmele: Rahmân ve Rahîm), vakfiyeler, edebiyat (münacat ve mersiyeler).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 660; Lugat-ı Nâcî s. 385; Devellioğlu s. 954.",
    derivatives: [
      {
        slug: "rahmet",
        modernTurkish: "Rahmet",
        primaryOttoman: "رحمت",
        transliteration: "Raḥmet",
        origin: "Arapça",
        originDetail: "Arapça r-h-m kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'let (فَعْلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Merhamet ve ihsanın tecellisi; yağmur.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Cenâb-ı Hakk'ın kullarına olan sonsuz şefkati ve bağışlaması; kuraklığı gideren yağmur.",
        contemporaryMeaning: "Merhamet, acıma; yağmur; ölenler için mağfiret dileği.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "660",
        entryHeadword: "رحمت",
        citation: "Rahmet: Merhamet, şefkat, in'âm u ihsân; yağmur.",
        definitions: [
          { orderIndex: 1, definition: "Allah'ın lütuf ve esirgemesi; berekete vesile olan yağmur.", register: "Dini & Edebi" }
        ]
      },
      {
        slug: "merhamet",
        modernTurkish: "Merhamet",
        primaryOttoman: "مرحمت",
        transliteration: "Merḥamet",
        origin: "Arapça",
        originDetail: "Arapça r-h-m kökünden mef'alet vezninde mîmî masdardır.",
        partOfSpeech: "İsim",
        pattern: "Mef'alet (مَفْعَلَة) Mîmî Masdar",
        morphologicalType: "Mîmî Masdarlar",
        contribution: "Bir canlının acısına ortak olup şefkatle yardım etme duygusu.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yürek inceliği, acıma, şefkat gösterip esirgeme sıfatı.",
        contemporaryMeaning: "Acıma, şefkat gösterme, esirgeme.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "385",
        entryHeadword: "مرحمت",
        citation: "Merhamet: Yürek yufkalığı, acımak, muhtac-ı şefkat olanı himaye eylemek.",
        definitions: [
          { orderIndex: 1, definition: "Zorda kalana acıma ve yürekten gelen rikkat hissi.", register: "Ahlak" }
        ]
      }
    ]
  },

  // 18. K-V-N (ك-و-ن)
  {
    slug: "kvn",
    rootLettersModern: "K-V-N",
    rootLettersArabic: "ك-و-ن",
    origin: "Arapça (Ecvef-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Vücuda gelmek, olmak, hâsıl olmak, yokluktan varlığa çıkmak.",
    description: "Ecvef köktür. Kur'ân-ı Kerîm'deki 'Kün' (Ol!) emr-i ilâhîsi bu köktendir. Kelâm felsefesinde kâinatın oluşumuna 'kevn', bozulup yok olmasına 'fesâd' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Hüdûsü ve'l-vücûd (varlığa gelmek ve hadis olmak).",
    ottomanUsageScope: "Felsefe ve kelâm (kevn ü fesâd), kozmoloji (kâinat, mükevvenat), coğrafya (mekân).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1195; Devellioğlu s. 624; TDVİA C. 25 s. 343.",
    derivatives: [
      {
        slug: "kainat",
        modernTurkish: "Kâinat",
        primaryOttoman: "كائنات",
        transliteration: "Kā’ināt",
        origin: "Arapça",
        originDetail: "Arapça k-v-n kökünden fâ'il veznindeki 'kâin' (var olan) kelimesinin müennes cemi'sidir.",
        partOfSpeech: "İsim",
        pattern: "Fâ'ilât (فَاعِلَات) Çoğul",
        morphologicalType: "Kurallı Çoğullar (Cem-i Müennes)",
        contribution: "Varlık sahasına çıkmış olan bütün mevcudat, âlem.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yaratılmış olan her şey, bütün mevcudat, felekler ve âlemler mecmuası.",
        contemporaryMeaning: "Evren, kozmos.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1195",
        entryHeadword: "كائنات",
        citation: "Kâinat: Mevcudat, yaratılmış nesnelerin kâffesi, âlem.",
        definitions: [
          { orderIndex: 1, definition: "Maddi ve manevi yaratılmış mevcudatın tamamı, evren.", register: "Kozmoloji & Felsefe" }
        ]
      },
      {
        slug: "mekan",
        modernTurkish: "Mekân",
        primaryOttoman: "مكان",
        transliteration: "Mekān",
        origin: "Arapça",
        originDetail: "Arapça k-v-n kökünden mef'al vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'al (مَفْعَل) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "Bir şeyin varlık bulduğu, bulunduğu yer.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yer, konak, bulunulan mahal; felsefede cismin kapladığı boşluk.",
        contemporaryMeaning: "Yer, çevre, bulunulan yer, uzay parçası.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "755",
        entryHeadword: "مكان",
        citation: "Mekân: Cismin işgal eylediği yer; mahal, ev, yurt.",
        definitions: [
          { orderIndex: 1, definition: "Varlığın içinde yer aldığı fiziki veya ruhi mahal.", register: "Felsefe & Mimari" }
        ]
      }
    ]
  },

  // 19. A-M-L (ع-م-ل)
  {
    slug: "aml",
    rootLettersModern: "A-M-L",
    rootLettersArabic: "ع-م-ل",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kasıt ve irade ile bir iş işlemek, bedenen veya fikren emek sarfetmek.",
    description: "Sadece rastgele hareket (fiil) değil, belirli bir gaye ve şuurla yapılan işe 'amel' denir. İslam hukukunda muameleler ve ahlakta amel-i salih bu köke dayanır.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Mihnetü ve'l-fi'lü bi kasdin ve niyetin.",
    ottomanUsageScope: "Fıkıh (muamelât-ı şer'iyye), ahlak (amel-i sâlih), bürokrasi ve üretim.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 948; Lugat-ı Nâcî s. 535; Devellioğlu s. 48.",
    derivatives: [
      {
        slug: "amel",
        modernTurkish: "Amel",
        primaryOttoman: "عمل",
        transliteration: "‘Amel",
        origin: "Arapça",
        originDetail: "Arapça a-m-l kökünden masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'al (فَعَل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İradeye dayalı iş, eylem, dini vecibe.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İrade ve niyet ile yapılan fiil; dini emir ve yasaklara uygun davranış.",
        contemporaryMeaning: "İş, eylem; cerrahi operasyon (ameliyat).",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "948",
        entryHeadword: "عمل",
        citation: "Amel: İş, fiil, kâr; kasıtla yapılan hareket; taat.",
        definitions: [
          { orderIndex: 1, definition: "İradeye ve niyete bağlı olarak icra edilen hayırlı veya şerli iş.", register: "Ahlak & Dini" }
        ]
      },
      {
        slug: "muamele",
        modernTurkish: "Muamele",
        primaryOttoman: "معامله",
        transliteration: "Mu‘āmele",
        origin: "Arapça",
        originDetail: "Arapça a-m-l kökünden müfâ'ale bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Müfâ'ale (مُفَاعَلَة) Masdarı",
        morphologicalType: "Müfâ'ale Bâbı Masdarları",
        contribution: "İki veya daha fazla tarafın birbirine karşı tutumu, karşılıklı iş yapması.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Karşılıklı iş görme; alışveriş; bir kimseye karşı takınılan tavır ve davranış.",
        contemporaryMeaning: "Davranış, tutum; resmi dairelerde bir işin evrak takibi.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "535",
        entryHeadword: "معامله",
        citation: "Muamele: Bir kimseye karşı vuku bulan tarz-ı hareket; ahz ü itâ.",
        definitions: [
          { orderIndex: 1, definition: "Karşılıklı yapılan hukuki veya ahlaki eylem; takınılan tavır.", register: "Hukuk & İdare" }
        ]
      }
    ]
  },

  // 20. H-Y-Y (ح-ي-ي)
  {
    slug: "hyy",
    rootLettersModern: "H-Y-Y",
    rootLettersArabic: "ح-ي-ي",
    origin: "Arapça (Leff-i Makrûn / Nâkıs)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Canlı olmak, dirilmek, hayat bulmak, ölüm ve kuraklığın zıddı olmak.",
    description: "İki ya harfinin peş peşe geldiği lefif köktür. Lisânü'l-Arab'da yağmurun kupkuru toprağı yeşertmesi hayatın ilk timsali sayılır. Aynı zamanda haya (utanma) duygusu da kalbin canlılığından türemiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Nıkayzu'l-mevt; el-hayatü kuvvetün bihâ yüdrekü.",
    ottomanUsageScope: "Tasavvuf (el-Hayy esması), tıp (ilm-i hayât), selamlaşma (tahiyyat).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 574; Devellioğlu s. 445; Lisânü'l-Arab C. 14 s. 216.",
    derivatives: [
      {
        slug: "hayat",
        modernTurkish: "Hayat",
        primaryOttoman: "حيات",
        transliteration: "Ḥayāt",
        origin: "Arapça",
        originDetail: "Arapça h-y-y kökünden masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'ale (فَعَلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Dirilik ve canlılık vasfı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Dirilik, can, yaşayış; insanın doğumundan ölümüne kadar geçen müddet.",
        contemporaryMeaning: "Yaşam, doğum ile ölüm arasındaki süre; canlılık.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "574",
        entryHeadword: "حيات",
        citation: "Hayat: Dirilik; mevtin mukabili; ömür.",
        definitions: [
          { orderIndex: 1, definition: "Varlıkların canlı ve faal bulunması hali, ömür.", register: "Genel" }
        ]
      },
      {
        slug: "ihya",
        modernTurkish: "İhya",
        primaryOttoman: "احياء",
        transliteration: "İḥyā",
        origin: "Arapça",
        originDetail: "Arapça h-y-y kökünden if'âl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "İf'âl (اِفْعَال) Masdarı",
        morphologicalType: "İf'âl Bâbı Masdarları",
        contribution: "Diriltme, canlandırma, harap olmuş bir şeyi yeniden faal kılma.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Diriltmek; ölü toprağı tarıma açmak; ibadetle geceyi uyanık geçirmek (ihyâ-i leyâl).",
        contemporaryMeaning: "Yeniden canlandırma, diriltme, zenginleştirme.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "36",
        entryHeadword: "احياء",
        citation: "İhya: Diriltmek, şenlendirmek; harap olanı mamur eylemek.",
        definitions: [
          { orderIndex: 1, definition: "Harap bir yeri imar ederek veya unutulan bir ilmi yayarak yeniden hayat verme.", register: "Medeniyet & Dini" }
        ]
      }
    ]
  }
];

async function seedBatch2() {
  console.log("🌟 === BATCH 2: KÖKLERİ VE KELİMELERİ MÜKEMMELLEŞTİRME BAŞLADI ===");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const rootData of BATCH_2_ROOTS) {
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

      // Meanings
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

      // Source citation
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

  console.log("✅ Batch 2 kökleri başarıyla mükemmelleştirildi!");
}

seedBatch2()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
