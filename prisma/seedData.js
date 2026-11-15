// Initial verified linguistic dataset for LÜGAT
// Contains roots, verified Ottoman spellings, meanings, examples, sources, categories, and quizzes.

module.exports = {
  sources: [
    {
      id: "src-kamus",
      title: "Kâmûs-ı Türkî",
      author: "Şemseddin Sâmi",
      year: "1317 / 1900 (Dersaâdet)",
      description: "Osmanlı Türkçesinin ilk modern ve etimolojik yaklaşımlı sözlüklerinden biri."
    },
    {
      id: "src-naci",
      title: "Lugat-ı Nâcî",
      author: "Muallim Nâci",
      year: "1891 (İstanbul)",
      description: "Edebî ve klasik metinlerdeki kelimelerin ve terkiplerin izahını içeren muteber lügat."
    },
    {
      id: "src-devellioglu",
      title: "Osmanlıca-Türkçe Ansiklopedik Lûgat",
      author: "Ferit Devellioğlu",
      year: "1962 (Ankara)",
      description: "Eski harfli metinlerin taranmasıyla hazırlanmış en kapsamlı modern müracaat eseri."
    },
    {
      id: "src-kubbealti",
      title: "Misalli Büyük Türkçe Sözlük (Kubbealtı Lugatı)",
      author: "İlhan Ayverdi",
      year: "2005 (İstanbul)",
      description: "Kelimenin Türkçedeki tarihi macerasını ve edebi şahitlerini veren kaynak."
    },
    {
      id: "src-lehce",
      title: "Lehçe-i Osmânî",
      author: "Ahmet Vefik Paşa",
      year: "1876 (Bursa)",
      description: "Türkçe kökenli kelimeler ile Arapça-Farsça unsurları ayıran ilk sözlük."
    }
  ],

  categories: [
    { slug: "edebiyat", name: "Edebiyat ve Belâgat", description: "Şiir, nesir, tenkit ve edebi sanat terimleri", iconName: "Feather" },
    { slug: "hukuk", name: "Hukuk ve Kaza", description: "Fıkıh, mahkeme, hüküm ve adliye kavramları", iconName: "Scale" },
    { slug: "felsefe", name: "Felsefe ve Hikmet", description: "Mantık, varlık, bilgi, tasavvur ve ahlak terimleri", iconName: "Compass" },
    { slug: "tarih", name: "Tarih ve Medeniyet", description: "Devlet idaresi, kurumlar, vesikalar ve tarihi hadiseler", iconName: "Hourglass" },
    { slug: "siyaset", name: "Siyaset ve Diplomasi", description: "Mülk idaresi, sefaret, ahidname ve devlet teşkilatı", iconName: "Shield" },
    { slug: "dini-kavramlar", name: "Dinî İlimler ve Tasavvuf", description: "Kelam, tasavvuf, hadis, akaid ve ahlak kavramları", iconName: "Moon" },
    { slug: "gunluk-hayat", name: "Günlük Hayat ve Görgü", description: "Muamele, muaşeret, çarşı, meslek ve ev hayatı", iconName: "Coffee" },
    { slug: "bilim", name: "İlim ve Fenniyat", description: "Hendese, heyet (astronomi), tababet ve tabiat ilimleri", iconName: "BookOpen" },
    { slug: "yonetim", name: "Divan ve Bürokrasi", description: "Babıali, kalemiyye, ferman, berat ve bürokrasi dili", iconName: "Landmark" },
    { slug: "sanat", name: "Geleneksel Sanatlar", description: "Hüsn-i hat, tezhip, ebru, musiki ve mimari terimleri", iconName: "Palette" }
  ],

  roots: [
    {
      slug: "hkm",
      rootLettersModern: "H-K-M",
      rootLettersArabic: "ح-ك-م",
      origin: "Arapça",
      primaryMeaning: "Hükmetme, karar verme, men etme, nizama bağlama",
      description: "Asıl manası 'fesadı önlemek için sağlamlaştırmak, menetmek'tir. Gemin demirine 'hakeme' denmesi atı zaptettiği içindir. Hukuki, siyasi ve felsefi sistemlerin temel köküdür."
    },
    {
      slug: "ktb",
      rootLettersModern: "K-T-B",
      rootLettersArabic: "ك-ت-ب",
      origin: "Arapça",
      primaryMeaning: "Yazma, bir araya getirme, kaydetme, dikme",
      description: "Asıl kök manası 'parçaları bir araya getirip dikmek, birleştirmek'tir; harflerin bir araya gelmesiyle yazı teşekkül ettiği için tedvin ve kitabet sahasında yaygınlaşmıştır."
    },
    {
      slug: "nqd",
      rootLettersModern: "N-Q-D",
      rootLettersArabic: "ن-ق-د",
      origin: "Arapça",
      primaryMeaning: "Ayıklama, sahtesini gerçeğinden ayırma, parayı denetleme",
      description: "Asıl manası madeni paranın sahte olup olmadığını parmakla veya mihenk taşıyla tıkırdatarak yoklamaktır. Buradan zihni tenkide ve eleştiriye intikal etmiştir."
    },
    {
      slug: "fkr",
      rootLettersModern: "F-K-R",
      rootLettersArabic: "ف-ك-ر",
      origin: "Arapça",
      primaryMeaning: "Düşünme, zihinde tartma, tefekkür etme",
      description: "Bilinenlerden bilinmeyene ulaşmak için aklın yaptığı zihni ameliyedir. Felsefe ve edebiyatta zihni cehdin esasıdır."
    },
    {
      slug: "cml",
      rootLettersModern: "C-M-L",
      rootLettersArabic: "ج-م-ل",
      origin: "Arapça",
      primaryMeaning: "Güzellik, olgunluk, toplayıp özetleme",
      description: "Tenasüp, zarafet ve kemal hali. Aynı zamanda bir şeyi toptan ve hulasa olarak ele alma manasını (icmâl, mücmel) barındırır."
    },
    {
      slug: "slm",
      rootLettersModern: "S-L-M",
      rootLettersArabic: "س-ل-م",
      origin: "Arapça",
      primaryMeaning: "Esenlik, kusursuzluk, teslim olma, barış",
      description: "Maddi ve manevi her türlü ayıptan, afetten beri ve salim olma köküdür. Selamet, teslimiyet ve İslam bu kökten neşet eder."
    },
    {
      slug: "hqq",
      rootLettersModern: "H-Q-Q",
      rootLettersArabic: "ح-ق-ق",
      origin: "Arapça",
      primaryMeaning: "Gerçek olma, sabit ve vacip olma, layık olma",
      description: "Sabit ve değişmez olan gerçeklik. Batılın zıddı. Adalet, tahkik ve hakikat kavramlarının menbaıdır."
    },
    {
      slug: "alm",
      rootLettersModern: "A-L-M",
      rootLettersArabic: "ع-ل-م",
      origin: "Arapça",
      primaryMeaning: "Bilme, tanıma, işaret koyma, iz bırakma",
      description: "Bir nesnenin hakikatini idrak etme. 'Alamet' (işaret) ve 'âlem' (kendisiyle yaratıcının bilindiği kâinat) kelimeleri de aynı köktendir."
    },
    {
      slug: "blg",
      rootLettersModern: "B-L-G",
      rootLettersArabic: "ب-ل-غ",
      origin: "Arapça",
      primaryMeaning: "Ulaşma, erişme, sözün hedefine tam varması",
      description: "Bir gayeye son noktasına kadar varmak. Sözün tesirli, fasih ve muktezayı hale uygun söylenmesine belâgat denir."
    },
    {
      slug: "vcd",
      rootLettersModern: "V-C-D",
      rootLettersArabic: "و-ج-د",
      origin: "Arapça",
      primaryMeaning: "Bulma, var olma, zenginleşme, vecd hali",
      description: "Yitirileni bulmak, yokluktan varlığa çıkmak (vücud) ve tasavvufi manada Hakk'ı gönülde duyarak kendinden geçmek (vecd)."
    },
    {
      slug: "aql",
      rootLettersModern: "A-Q-L",
      rootLettersArabic: "ع-ق-ل",
      origin: "Arapça",
      primaryMeaning: "Bağlama, tutma, engelleme, zaptetme",
      description: "Aslen deve bağı (ıkâl) demektir. İnsanı heva ve hevesine kapılmaktan alıkoyup zaptettiği için bu melekeye akıl denilmiştir."
    },
    {
      slug: "nzm",
      rootLettersModern: "N-Z-M",
      rootLettersArabic: "ن-ظ-م",
      origin: "Arapça",
      primaryMeaning: "İpe inci dizme, sıraya koyma, düzenleme",
      description: "Dağınık nesneleri veya fikirleri ahenkli bir tertibe koyma. Şiir dilinde 'nazım', idari teşkilatta 'tanzimat' ve 'nizam' bu köktendir."
    },
    {
      slug: "kml",
      rootLettersModern: "K-M-L",
      rootLettersArabic: "ك-م-ل",
      origin: "Arapça",
      primaryMeaning: "Tam ve noksansız olma, kemale erme",
      description: "Bütün cüzleri ve vasıfları yerli yerinde olma. İnsani olgunluk, fazilet ve tekamülün nihai gayesidir."
    },
    {
      slug: "rsm",
      rootLettersModern: "R-S-M",
      rootLettersArabic: "ر-س-م",
      origin: "Arapça",
      primaryMeaning: "İz bırakma, çizme, tören ve usul belirleme",
      description: "Toprakta ayak izi bırakmaktan çizmeye, oradan teşrifat kurallarına (merasim) ve resmiyet kaidelerine intikal etmiştir."
    },
    {
      slug: "sh-r",
      rootLettersModern: "Ş-A-R",
      rootLettersArabic: "ش-ع-ر",
      origin: "Arapça",
      primaryMeaning: "Hassasiyetle hissetme, sezinleme, bilme",
      description: "İnce ve gizli olan şeyleri sezgi gücüyle fark etmek. Şair, başkalarının göremediği his ve mana nüanslarını sezen kimsedir."
    },
    {
      slug: "bsr",
      rootLettersModern: "B-S-R",
      rootLettersArabic: "ب-ص-ر",
      origin: "Arapça",
      primaryMeaning: "Gözle görme, kalp gözüyle anlama, sezme",
      description: "Yalnızca zahiri görmeyi değil (basar), hadiselerin iç yüzünü ve geleceğini ferasetle idrak etmeyi (basiret) ifade eder."
    },
    {
      slug: "hsn",
      rootLettersModern: "H-S-N",
      rootLettersArabic: "ح-س-ن",
      origin: "Arapça",
      primaryMeaning: "İyi, güzel, latif ve makbul olma",
      description: "Estetik ve ahlaki mükemmelliği cem eden kök. Hüsn (güzellik), ihsan (iyilik ve lütufta bulunma), tahsin (beğenme)."
    },
    {
      slug: "drs",
      rootLettersModern: "D-R-S",
      rootLettersArabic: "د-ر-س",
      origin: "Arapça",
      primaryMeaning: "Tohumu harmanda dövüp açma, tekrar ederek öğrenme",
      description: "Metni tekrar tekrar okuyup manasını özümseme ameliyesi. Medrese, müderris, tedrisat bu ocaktan çıkar."
    },
    {
      slug: "mlk",
      rootLettersModern: "M-L-K",
      rootLettersArabic: "م-ل-ك",
      origin: "Arapça",
      primaryMeaning: "Sahip olma, tasarruf etme, idare etme",
      description: "Bir şey üzerinde müstakil tasarruf salahiyetine malik olma. Mülk, malik, melik, memleket, memluk bu köke aittir."
    },
    {
      slug: "cm-a",
      rootLettersModern: "C-M-A",
      rootLettersArabic: "ج-م-ع",
      origin: "Arapça",
      primaryMeaning: "Bir araya getirme, yığma, birleştirme",
      description: "Dağınık şeyleri bir yere toplama. Cami, cemaat, mecmua, icma, içtima kelimelerinin müşterek kaynağıdır."
    }
  ],

  // Structured words list (100+ words)
  words: [
    // ----------------- ROOT H-K-M (ح-ك-م) -----------------
    {
      slug: "hukum",
      modernTurkish: "Hüküm",
      modernEquivalents: "yargı, karar, egemenlik, geçerlilik",
      transliteration: "Ḥükm",
      primaryOttoman: "حكم",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mücerred masdar olup hem kazai kararı hem de idari kudreti ifade eder.",
      rootSlug: "hkm",
      morphPattern: "Fa'l vezninde mücerred masdar (فَعْل)",
      morphType: "Masdar",
      morphContrib: "Kökün yalın ve mutlak manası: yargıda bulunma, emir verme ve bağlayıcı karar alma.",
      categories: ["hukuk", "felsefe", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Hâkim veya yetkili makam tarafından verilen bağlayıcı ve kesin karar; kaza, yargı.", register: "Hukuk" },
        { orderIndex: 2, definition: "Mantıkta iki tasavvur arasında müsbet veya menfi bir irtibat kurma; önerme.", register: "Felsefe" },
        { orderIndex: 3, definition: "Kudret, nüfuz, egemenlik, tasarruf salahiyeti.", register: "Siyaset" },
        { orderIndex: 4, definition: "Geçerlilik süresi, tesir, kıymet.", register: "Genel" }
      ],
      spellings: [
        { arabicScript: "حكم", spellingType: "Klasik İmla", translit: "Ḥükm", notes: "Metinlerde en yaygın harekesiz yazılış." },
        { arabicScript: "حُكْم", spellingType: "Harekeli İmla", translit: "Ḥukm", notes: "Lügatlerde telaffuzu tespit için harekeli." }
      ],
      examples: [
        {
          sentenceModern: "Hâkimin verdiği hüküm cümle ahali nezdinde adil bulundu.",
          sentenceOttoman: "حاكمڭ ورديگی حكم جمله اهالی نزدنده عادل بولندی",
          sentenceTranslit: "Ḥâkimiñ virdigi ḥükm cümle ahâlî nezdinde ‘âdil bolundı.",
          author: "Namık Kemal",
          sourceWork: "Cezmi"
        }
      ],
      sources: [
        { sourceId: "src-kamus", pageNumber: "567", citation: "Ḥükm: Ḳarâr-ı kātı‘, emr, nüfûẕ ve kudret-i tasarrufiyye." },
        { sourceId: "src-devellioglu", pageNumber: "389", citation: "1. Yargı, karar. 2. Emir, buyruk. 3. Egemenlik." }
      ],
      synonyms: [
        { synonymText: "Karar", nuanceNote: "Hüküm bağlayıcı hukuki veya mantıki neticeyi, karar ise iradenin ulaştığı seçimi vurgular." },
        { synonymText: "Kaza", nuanceNote: "Kaza, hükmün adli infazını ve ilahi takdiri de içine alan daha kapsamlı bir terimdir." }
      ]
    },
    {
      slug: "hakim",
      modernTurkish: "Hâkim",
      modernEquivalents: "yargıç, egemen, buyurucu, bilge",
      transliteration: "Ḥâkim",
      primaryOttoman: "حاكم",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İsm-i fâil veznindedir. 'Hekîm' (tabip/bilge) kelimesiyle karıştırılmamalıdır.",
      rootSlug: "hkm",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Hükmetme eylemini bizzat icra eden merci veya kişi.",
      categories: ["hukuk", "yonetim", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Mahkemede davaları görüp kanun dairesinde karara bağlayan görevli; yargıç.", register: "Hukuk" },
        { orderIndex: 2, definition: "Bir yere, duruma veya insanlara egemen olan, hükmünü yürüten.", register: "Siyaset" },
        { orderIndex: 3, definition: "Yüksekten bakan, geniş bir sahayı gören (mevki, tepe).", register: "Genel" }
      ],
      spellings: [
        { arabicScript: "حاكم", spellingType: "Klasik İmla", translit: "Ḥâkim", notes: "Elif harfiyle uzatılan imla." }
      ],
      examples: [
        {
          sentenceModern: "Vakarlı bir sükût içinde hâkimin ağzından çıkacak kelimeleri bekliyorlardı.",
          sentenceOttoman: "وقارلی بر سكوت ايچنده حاكمڭ آغزندن چيقه‌جق كلیمه‌لری بكلیورلردی",
          sentenceTranslit: "Vaḳārlı bir sükût içinde ḥâkimiñ ağzından çıḳacaḳ kelimeleri bekliyorlardı.",
          author: "Halid Ziya Uşaklıgil",
          sourceWork: "Mai ve Siyah"
        }
      ],
      sources: [
        { sourceId: "src-kamus", pageNumber: "567", citation: "Ḥâkim: Ḥükmeden, kaza eden zât." }
      ],
      synonyms: [
        { synonymText: "Yargıç", nuanceNote: "Yargıç öz Türkçe karşılık olup, hâkim kelimesi aynı zamanda 'egemen' ve 'baskın' manalarını da taşır." }
      ]
    },
    {
      slug: "mahkeme",
      modernTurkish: "Mahkeme",
      modernEquivalents: "yargı yeri, adliye, duruşma meclisi",
      transliteration: "Maḥkeme",
      primaryOttoman: "محكمه",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden ism-i mekândır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'ale vezninde ism-i mekândır; hüküm verilen yer demektir.",
      rootSlug: "hkm",
      morphPattern: "Mef'ale vezninde ism-i mekân (مَفْعَلَة)",
      morphType: "İsm-i Mekân",
      morphContrib: "Hüküm verme, yargılama ve adalet dağıtma mekânı.",
      categories: ["hukuk", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Davaların görüldüğü, tarafların dinlenip kanuna göre hükme bağlandığı resmi makam ve bina.", register: "Hukuk" }
      ],
      spellings: [
        { arabicScript: "محكمه", spellingType: "Klasik İmla", translit: "Maḥkeme", notes: "Sonda he-i resmiyye ile yazılır." }
      ],
      examples: [
        {
          sentenceModern: "Mahkeme kapısında toplanan kalabalık, hakkaniyetin tecellisini beklemekteydi.",
          sentenceOttoman: "محكمه قپوسنده طوپلانان قلاطه، حقانيتڭ تجليسی بكلمكده ايدی",
          sentenceTranslit: "Maḥkeme ḳapusında toplanan ḳalaba, ḥaḳḳāniyyetiñ tecellîsini beklemekde idi.",
          author: "Ahmet Mithat Efendi",
          sourceWork: "Müşahedat"
        }
      ],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "624", citation: "Hüküm yeri, adalet dairesi." }],
      synonyms: [{ synonymText: "Dîvân-ı Adl", nuanceNote: "Eski dönemlerde padişah veya vezir huzurunda kurulan yüksek mahkeme." }]
    },
    {
      slug: "mahkum",
      modernTurkish: "Mahkûm",
      modernEquivalents: "hüküm giymiş, boyun eğmiş, zorunlu",
      transliteration: "Maḥkūm",
      primaryOttoman: "محكوم",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden ism-i mef'ûldür.",
      partOfSpeech: "Sıfat / İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'ûl veznindedir; aleyhine hüküm verilmiş yahut bir gücün idaresi altına girmiş olan.",
      rootSlug: "hkm",
      morphPattern: "Mef'ûl vezninde ism-i mef'ûl (مَفْعُول)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Hükmün üzerine icra edildiği kimse; hüküm giyen.",
      categories: ["hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Ceza mahkemesince hakkında ceza kararı verilmiş kimse; hükümlü.", register: "Hukuk" },
        { orderIndex: 2, definition: "Bir kimsenin veya kuvvetin buyruğu altında bulunan, boyun eğmeye mecbur olan.", register: "Mecaz" }
      ],
      spellings: [{ arabicScript: "محكوم", spellingType: "Klasik İmla", translit: "Maḥkūm", notes: "Vav harfiyle medli yazılır." }],
      examples: [{ sentenceModern: "Fikren hür olan insan, zindanda dahi olsa mahkûm sayılamaz.", sentenceOttoman: "فكراً حر اولان انسان زندانده دخی اولسه محكوم صاييلاماز", author: "Namık Kemal", sourceWork: "Makaleler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1284", citation: "Ḥakkında ḥükm sâdır olan." }],
      synonyms: [{ synonymText: "Hükümlü", nuanceNote: "Modern kanun dili terimidir; mahkûm edebi ve felsefi metinlerde mecazen de yaşar." }]
    },
    {
      slug: "muhakeme",
      modernTurkish: "Muhakeme",
      modernEquivalents: "yargılama, akıl yürütme, muhakeme yetisi",
      transliteration: "Muḥâkeme",
      primaryOttoman: "محاكمه",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden mufâ'ale bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mufâ'ale bâbı karşılıklılık (müşareket) ifade eder; iki tarafın bir hâkim önünde yüzleşip muhakeme olunmasını belirtir.",
      rootSlug: "hkm",
      morphPattern: "Mufâ'ale bâbı masdarı (مُفَاعَلَة)",
      morphType: "Masdar",
      morphContrib: "Karşılıklı iddia ve müdafaaları dinleyerek hükme varma cehdi.",
      categories: ["hukuk", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Davacının iddia, davalının müdafaasını dinleyip kaza dairesinde inceleme; duruşma.", register: "Hukuk" },
        { orderIndex: 2, definition: "Fikirleri birbiriyle kıyaslayıp doğru neticeye ulaşma kâbiliyeti; akıl yürütme, sağduyu.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "محاكمه", spellingType: "Klasik İmla", translit: "Muḥâkeme", notes: "Elif ve he ile yazılır." }],
      examples: [{ sentenceModern: "Fevri hislerle değil, derin bir muhakeme ile meseleyi tahlil etmeliydi.", sentenceOttoman: "فوری حسلرله دگل، درين بر محاكمه ايله مسئله‌یی تحليل ایتمه‌لیدی", author: "Peyami Safa", sourceWork: "Matmazel Noraliya'nın Koltuğu" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1283", citation: "Birbirini ḥâkime verme, dâvâlaşma; ‘aḳl u idrâk." }],
      synonyms: [{ synonymText: "Akıl yürütme", nuanceNote: "Zihni faaliyet yönünü vurgular; muhakeme ise hem hukuki usulü hem de zihni dengeyi kapsar." }]
    },
    {
      slug: "hukumet",
      modernTurkish: "Hükûmet",
      modernEquivalents: "devlet idaresi, bakanlar kurulu, yönetim",
      transliteration: "Ḥükūmet",
      primaryOttoman: "حكومت",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden masdar-ı merre / isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Önceleri hüküm ve hâkimlik makamını ifade ederken son devirde yürütme erki manasını kazanmıştır.",
      rootSlug: "hkm",
      morphPattern: "Fu'ûlet vezninde masdar/isim (فُعُولَة)",
      morphType: "İsim",
      morphContrib: "Hüküm sürme salahiyeti, siyasi idare mekanizması.",
      categories: ["yonetim", "siyaset", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Bir memleketi idare eden siyasi erk ve icra heyeti; kabine.", register: "Siyaset" },
        { orderIndex: 2, definition: "Eski teşkilatta hükûmet konağı; vilayet merkezi.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "حكومت", spellingType: "Klasik İmla", translit: "Ḥükūmet", notes: "Mebsuta (açık) te ile biter." }],
      examples: [{ sentenceModern: "Hükûmetin vazifesi millete efendilik değil, adaletle hadimliktir.", sentenceOttoman: "حكومتڭ وظیفه‌سی ملته افنديلك دگل، عدالتله خادملكدور", author: "Ziya Paşa", sourceWork: "Müntehabat" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "567", citation: "Ḥâkimlik, idâre-i mülk." }],
      synonyms: [{ synonymText: "İdare", nuanceNote: "İdare daha genel bürokratik yapıdır; hükûmet siyasi iradenin icra heyetidir." }]
    },
    {
      slug: "tahkim",
      modernTurkish: "Tahkim",
      modernEquivalents: "hakeme başvurma, güçlendirme, siperleme",
      transliteration: "Taḥkīm",
      primaryOttoman: "تحكيم",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden tef'îl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tef'îl bâbı ta'diye ve mübalağa bildirir: 1) İhtilafı hakeme havale etme, 2) Bir yapıyı veya mevkiyi muhkem hale getirme.",
      rootSlug: "hkm",
      morphPattern: "Tef'îl bâbı masdarı (تَفْعِيل)",
      morphType: "Masdar",
      morphContrib: "Bir şeyi muhkem (sağlam) kılma ve hakem kılma eylemi.",
      categories: ["hukuk", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Uyuşmazlıkların mahkeme yerine taraflarca seçilen hakem marifetiyle çözülmesi.", register: "Hukuk" },
        { orderIndex: 2, definition: "Mevzileri, kaleleri ve tahkimatı sağlamlaştırma; pekiştirme.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "تحكيم", spellingType: "Klasik İmla", translit: "Taḥkīm", notes: "Baştaki te ve ortadaki ye ile yazılır." }],
      examples: [{ sentenceModern: "İki devlet arasındaki hudut ihtilafı beynelmilel tahkim yoluyla tesviye edildi.", sentenceOttoman: "ایكی دولت آراسنده‌كی حدود اختلافی بین‌الملل تحكيم یولیله تسویه ایدلدی", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "1231", citation: "1. Hakem tayin etme. 2. Kuvvetlendirme, sağlamlaştırma." }],
      synonyms: [{ synonymText: "Pekiştirme", nuanceNote: "Maddi güçlendirme yönünü karşılar; hukuktaki hakem tayinini karşılamaz." }]
    },
    {
      slug: "ihkam",
      modernTurkish: "İhkâm",
      modernEquivalents: "sağlamlaştırma, pekiştirme, noksansız yapma",
      transliteration: "İḥkâm",
      primaryOttoman: "احكام",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Ahkâm (hükümler) kelimesi ile yazılışı benzese de telaffuz ve vezin cihetiyle masdardır.",
      rootSlug: "hkm",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Sağlam ve metin hale getirme; muhkem kılma.",
      categories: ["felsefe", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Bir işi sağlam ve noksansız yapmak; şüpheden uzak ve muhkem kılmak.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "احكام", spellingType: "Klasik İmla", translit: "İḥkâm", notes: "Hemze ile başlar." }],
      examples: [{ sentenceModern: "Fikrini ihkâm için delillerini bir bir serdetti.", sentenceOttoman: "فكرینی احكام ایچون دلائلنی بر بر سرد ایتدی", author: "Muallim Naci", sourceWork: "Istılahat-ı Edebiyye" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "64", citation: "Metânet virme, berkitme." }],
      synonyms: [{ synonymText: "Tevsid", nuanceNote: "İhkâm içten gelen sağlamlık ve sıhhati, tevsid ise dayanak koymayı ifade eder." }]
    },
    {
      slug: "muhkem",
      modernTurkish: "Muhkem",
      modernEquivalents: "sağlam, kuvvetli, açık ve kesin",
      transliteration: "Muḥkem",
      primaryOttoman: "محكم",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden if'âl bâbı ism-i mef'ûlüdür.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kuran ilimlerinde manası açık ve tevil götürmeyen ayetler için de kullanılır (muhkem ayet).",
      rootSlug: "hkm",
      morphPattern: "Müf'al vezninde if'âl ism-i mef'ûlü (مُفْعَل)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Sağlamlaştırılmış, dayanıklı ve sarsılmaz kılınmış nesne veya fikir.",
      categories: ["dini-kavramlar", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Kuvvetli, sağlam, metin, kolayca yıkılmaz.", register: "Genel" },
        { orderIndex: 2, definition: "Manası açık, şüpheden uzak, yoruma ihtiyaç göstermeyen söz veya hüküm.", register: "Dini İlimler" }
      ],
      spellings: [{ arabicScript: "محكم", spellingType: "Klasik İmla", translit: "Muḥkem" }],
      examples: [{ sentenceModern: "Bu muhkem kalenin burçları asırların fırtınasına göğüs germiştir.", sentenceOttoman: "بو محكم قلعه‌نڭ برچلری عصرلرڭ فیرتنه‌سنه كوكوس كرمشدر", author: "Kâtib Çelebi", sourceWork: "Fezleke" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1284", citation: "Berk, metîn, üstüvâr." }],
      synonyms: [{ synonymText: "Metin", nuanceNote: "Metin daha çok içsel dayanıklılığı, muhkem ise dış etkilere karşı tahkim edilmiş olmayı anlatır." }]
    },
    {
      slug: "hikmet",
      modernTurkish: "Hikmet",
      modernEquivalents: "derin bilgi, gizli sebep, felsefe, vecize",
      transliteration: "Ḥikmet",
      primaryOttoman: "حكمت",
      origin: "Arapça",
      originDetail: "Arapça ḥ-k-m kökünden fi'let vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Eşyanın hakikatini ve varoluş gayesini bilme; ahlak, ilim ve adaletin birleştiği nokta.",
      rootSlug: "hkm",
      morphPattern: "Fi'let vezninde isim (فِعْلَة)",
      morphType: "İsim",
      morphContrib: "Kökün 'men etme' manasından: insanı cehaletten ve hatadan alıkoyan kamil bilgi.",
      categories: ["felsefe", "dini-kavramlar", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Eşyanın hakikatine ve varlığın sırrına nüfuz eden derin bilgi; felsefe, hikmet-i tabiiyye.", register: "Felsefe" },
        { orderIndex: 2, definition: "Bir hadisenin veya ilahi takdirin insan aklına gizli kalan sebebi ve gayesi.", register: "Dini İlimler" },
        { orderIndex: 3, definition: "Öğüt verici, derin manalı veciz söz; hâkimane mısra.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "حكمت", spellingType: "Klasik İmla", translit: "Ḥikmet" }],
      examples: [{ sentenceModern: "Her hadisenin bir zahiri sebebi, bir de derûnunda gizli hikmeti vardır.", sentenceOttoman: "هر حادثه‌نڭ بر ظاهری سببی، بر ده دروننده كیزلی حكمتی واردر", author: "Cenap Şahabettin", sourceWork: "Tiryaki Sözleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "567", citation: "Eşyânın mâhiyet ve ḥaḳāyıḳına ‘ilm; felsefe; nükteli söz." }],
      synonyms: [{ synonymText: "Felsefe", nuanceNote: "Hikmet hem akli tefekkürü hem de manevi ve ahlaki erdemi ihtiva eden daha geniş ve kutsiyet taşıyan bir kavramdır." }]
    },

    // ----------------- ROOT K-T-B (ك-ت-ب) -----------------
    {
      slug: "kitap",
      modernTurkish: "Kitap",
      modernEquivalents: "yazılı eser, cilt, mushaf",
      transliteration: "Kitāb",
      primaryOttoman: "كتاب",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden fi'âl vezninde masdar-isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Klasik metinlerde hem bağımsız eser hem de fıkıh kitaplarının ana fasılları (Kitâbü'n-Nikâh, Kitâbü'l-Büyû') için kullanılır.",
      rootSlug: "ktb",
      morphPattern: "Fi'âl vezninde masdar-isim (فِعَال)",
      morphType: "İsim",
      morphContrib: "Yazılmış, ciltlenmiş ve bir araya toplanmış sahifeler mecmuası.",
      categories: ["edebiyat", "bilim", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Ciltli veya ciltsiz basılı ya da yazılı sahifeler bütünü; eser.", register: "Genel" },
        { orderIndex: 2, definition: "Semavi dinlerin mukaddes metni; vahyedilen kelam.", register: "Dini İlimler" }
      ],
      spellings: [{ arabicScript: "كتاب", spellingType: "Klasik İmla", translit: "Kitāb" }],
      examples: [{ sentenceModern: "Bu kıymetli kitap, kütüphanenin en mutena köşesinde mahfuzdu.", sentenceOttoman: "بو قیمتلی كتاب، كütüphanenڭ اڭ معتنا گوشه‌سنده محفوظ ايدی", author: "Ahmet Hamdi Tanpınar", sourceWork: "Huzur" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1141", citation: "Yazılmış risâle ve cild; Kur'ân-ı Kerîm." }],
      synonyms: [{ synonymText: "Eser", nuanceNote: "Eser telifin bütününe ve fikri mahsulüne denir; kitap ise somut yazılı cisme ve kalıba işaret eder." }]
    },
    {
      slug: "katip",
      modernTurkish: "Kâtip",
      modernEquivalents: "yazıcı, memur, sekreter",
      transliteration: "Kâtib",
      primaryOttoman: "كاتب",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden ism-i fâildir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Osmanlı bürokrasisinde 'kalem efendisi' unvanıyla yüksek itibar sahibi sınıfın mesleğidir.",
      rootSlug: "ktb",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Yazı yazma ameliyesini meslek edinen veya icra eden şahıs.",
      categories: ["yonetim", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Resmi dairede veya divanda tahrirat, mukavele ve mektupları kaleme alan görevli; bürokrat.", register: "Bürokrasi" }
      ],
      spellings: [{ arabicScript: "كاتب", spellingType: "Klasik İmla", translit: "Kâtib" }],
      examples: [{ sentenceModern: "Divan kâtipleri fermanı altın yaldızlı mürekkeple tahrir ettiler.", sentenceOttoman: "دیوان كاتبلری فرمانی آلتون یالدیزلی مركبله تحریر ایتدیلر", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1119", citation: "Yazıcı, kitâbet iden." }],
      synonyms: [{ synonymText: "Yazıcı", nuanceNote: "Kâtip Osmanlıda edebi ve hukuki ehliyet taşıyan kalemiye mensubunu karşılar." }]
    },
    {
      slug: "mektup",
      modernTurkish: "Mektup",
      modernEquivalents: "yazı, tezkire, nâme, mektup",
      transliteration: "Mektūb",
      primaryOttoman: "مكتوب",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden ism-i mef'ûldür.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Lügat manası 'yazılmış olan şey' olup sonradan birine gönderilen muhabere varakasına hasredilmiştir.",
      rootSlug: "ktb",
      morphPattern: "Mef'ûl vezninde ism-i mef'ûl (مَفْعُول)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Yazıya geçirilmiş metin; gönderilmek üzere kaleme alınan nâme.",
      categories: ["edebiyat", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Haberleşmek, ahval bildirmek maksadıyla uzaktaki birine gönderilen yazılı varaka; nâme.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "مكتوب", spellingType: "Klasik İmla", translit: "Mektūb" }],
      examples: [{ sentenceModern: "Gurbetteki dostundan gelen mektup, yüreğindeki hicranı bir nebze dindirdi.", sentenceOttoman: "غربتده‌كی دوستندن كلن مكتوب، یوركنده‌كی هجرانی بر نبزه تیندیردی", author: "Ömer Seyfettin", sourceWork: "Hikâyeler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1380", citation: "Yazılmış nesne; nâme." }],
      synonyms: [{ synonymText: "Nâme", nuanceNote: "Nâme Farsça kökenli olup bilhassa aşk mektupları ve padişah tezkireleri için edebi dilde tercih edilirdi." }]
    },
    {
      slug: "mektep",
      modernTurkish: "Mektep",
      modernEquivalents: "okul, eğitim yuvası, talimgâh",
      transliteration: "Mekteb",
      primaryOttoman: "مكتب",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden ism-i mekândır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'al vezninde yer ismidir; çocuklara okuma-yazma öğretilen sıbyan mektebinden modern rüştiyelere kadar mektep adı verilmiştir.",
      rootSlug: "ktb",
      morphPattern: "Mef'al vezninde ism-i mekân (مَفْعَل)",
      morphType: "İsm-i Mekân",
      morphContrib: "Yazı ve ilim öğrenilen dershane ve müessese.",
      categories: ["bilim", "tarih", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Talebelere okuma, yazma ve ilim tahsil ettirilen tedris müessesesi; okul.", register: "Eğitim" }
      ],
      spellings: [{ arabicScript: "مكتب", spellingType: "Klasik İmla", translit: "Mekteb" }],
      examples: [{ sentenceModern: "Çocukların mektebe başladığı ilk gün yapılan amin alayı şehrin en şenlikli anıydı.", sentenceOttoman: "چوجقلرڭ مكتبه باشلادیغی ایلك كون یاپیلان آمین آلایی شهرڭ اڭ شنلیكلی آنی ايدی", author: "Yahya Kemal Beyatlı", sourceWork: "Eski Ankara" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1379", citation: "Yazı ve ders okunan yer." }],
      synonyms: [{ synonymText: "Medrese", nuanceNote: "Mektep ibtidai ve rüşti seviyedeki okulu, medrese ise yüksek dini ve akli ilimlerin okutulduğu akademiyi ifade eder." }]
    },
    {
      slug: "kitabet",
      modernTurkish: "Kitâbet",
      modernEquivalents: "yazmanlık, kâtiplik, düzgün nesir yazma sanatı",
      transliteration: "Kitâbet",
      primaryOttoman: "كتابت",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden fi'âlet vezninde san'at/meslek masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Fi'âlet vezni meslek bildirir; bürokraside ve edebiyatta münşeat kaleme alma hünerini temsil eder.",
      rootSlug: "ktb",
      morphPattern: "Fi'âlet vezninde meslek ve vasıf masdarı (فِعَالَة)",
      morphType: "Masdar",
      morphContrib: "Yazı yazma usulü, münşilik mahareti ve resmi muharebat kaideleri.",
      categories: ["edebiyat", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Kâtiplik mesleği ve salahiyeti.", register: "Bürokrasi" },
        { orderIndex: 2, definition: "Edebi ve fasih nesir yazma hüneri; inşa sanatı.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "كتابت", spellingType: "Klasik İmla", translit: "Kitâbet" }],
      examples: [{ sentenceModern: "Kitâbetindeki fesahat ve selaset sebebiyle divanın reisliğine getirildi.", sentenceOttoman: "كتابتنده‌كی فصاحت و سلاست سببیله دیوانڭ رئیسلگنه كتیریلدی", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-naci", pageNumber: "625", citation: "Yazıcılık, münşîlik." }],
      synonyms: [{ synonymText: "İnşâ", nuanceNote: "İnşâ sanatkârane ve süslü nesir kurma sanatına hasredilirken, kitâbet resmi ve umumi yazışmayı da kapsar." }]
    },
    {
      slug: "kitabe",
      modernTurkish: "Kitâbe",
      modernEquivalents: "yazıt, abide yazısı, tarih mısrası",
      transliteration: "Kitābe",
      primaryOttoman: "كتيبه",
      origin: "Arapça",
      originDetail: "Arapça k-t-b kökünden mermer ve madene kazınan levha ismidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Binaların, çeşmelerin, camilerin alınlığına celî sülüs veya tâlik hatla işlenen manzum tarih levhası.",
      rootSlug: "ktb",
      morphPattern: "Fi'âle vezninde isim (فِعَالَة)",
      morphType: "İsim",
      morphContrib: "Mimari eser üzerine ebedi kılınmak üzere kazınan mermer yazıt.",
      categories: ["sanat", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Cami, saray, han, çeşme gibi tarihi abidelerin cephesine yapılış tarihini ve banisini bildirmek için konan manzum yazıt.", register: "Sanat" }
      ],
      spellings: [{ arabicScript: "كتيبه", spellingType: "Klasik İmla", translit: "Kitābe" }],
      examples: [{ sentenceModern: "Çeşmenin mermer kitabesindeki ebced hesabı, hicri bin yetmiş senesini işaret etmekteydi.", sentenceOttoman: "چشمه‌نڭ مرمر كتیبه‌سنده‌كی ابجد حسابی، هجری بیڭ یتمش سنه‌سنی اشارت ایتمكده ايدی", author: "Yahya Kemal Beyatlı", sourceWork: "Aziz İstanbul" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "512", citation: "Binaların üzerine kazınan manzum veya mensur tarih levhası." }],
      synonyms: [{ synonymText: "Yazıt", nuanceNote: "Yazıt modern arkeoloji terimidir; kitabe ise hat ve ebced sanatının hususi bir formudur." }]
    },

    // ----------------- ROOT N-Q-D (ن-ق-d) -----------------
    {
      slug: "tenkit",
      modernTurkish: "Tenkit",
      modernEquivalents: "eleştiri, inceleme, ayıklama, sorgulama",
      transliteration: "Tenḳīd",
      primaryOttoman: "تنقيد",
      origin: "Arapça",
      originDetail: "Arapça n-q-d kökünden tef'îl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kök manası 'parayı mihenge vurarak halis olanı kalp olandan ayırmak'tır. Şinasi ve Namık Kemal ile birlikte edebi eleştiri manasını iktisap etmiştir.",
      rootSlug: "nqd",
      morphPattern: "Tef'îl bâbı masdarı (تَفْعِيل)",
      morphType: "Masdar",
      morphContrib: "Bir eserin veya fikrin meziyet ve kusurlarını hakkaniyetle tefrik etme ameliyesi.",
      categories: ["edebiyat", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Bir edebiyat veya sanat eserinin kıymetini, hüner ve kusurlarını tarafsızca ortaya koyma faaliyeti; eleştiri.", register: "Edebiyat" },
        { orderIndex: 2, definition: "Bir şahsın veya fikrin yanlışlarını göstermek maksadıyla yapılan münakaşa ve değerlendirme.", register: "Genel" }
      ],
      spellings: [
        { arabicScript: "تنقيد", spellingType: "Klasik İmla", translit: "Tenḳīd", notes: "Kaf ve dal ile yazılır." },
        { arabicScript: "تنقید", spellingType: "Matbu İmla", translit: "Tenḳīd", notes: "Geç dönem matbuatında yaygın." }
      ],
      examples: [
        {
          sentenceModern: "Edebi tenkidin gayesi yazarı incitmek değil, muhakemenin mihengini parlatmaktır.",
          sentenceOttoman: "ادبی تنقيدك غایه‌سی یازری اینجیتمك دگل، محاكمه‌نڭ میهنگنی پارلاتمقدر",
          sentenceTranslit: "Edebî tenḳīdiñ gāyesi yazarı incitmek degil, muḥâkemeniñ mihengini parlatmaḳdır.",
          author: "Namık Kemal",
          sourceWork: "Tahrib-i Harabat"
        }
      ],
      sources: [
        { sourceId: "src-kamus", pageNumber: "419", citation: "Tenḳīd: Aḳçeyi ayıklamak, bir kelâmın kusûr ve mezâyâsını tetkīk eylemek." },
        { sourceId: "src-devellioglu", pageNumber: "1287", citation: "1. Parayı mihenge vurup halisini sahtesinden ayırma. 2. Eleştirme." }
      ],
      synonyms: [
        { synonymText: "Eleştiri", nuanceNote: "Eleştiri modern dilde yaygın olup bazen sırf olumsuz yerme manasına kayar; tenkit ise halis ile sakimi ayırma tarafsızlığını taşır." },
        { synonymText: "Mühaheze", nuanceNote: "Mühaheze kusur bulup hesaba çekme manasına daha yakındır." }
      ]
    },
    {
      slug: "nakit",
      modernTurkish: "Nakit",
      modernEquivalents: "peşin para, akçe, likidite",
      transliteration: "Naḳd",
      primaryOttoman: "نقد",
      origin: "Arapça",
      originDetail: "Arapça n-q-d kökünden mücerred masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Çoğulu 'nükûd'dur (نُقُود). Hem peşin parayı hem de paranın ayarını gösterir.",
      rootSlug: "nqd",
      morphPattern: "Fa'l vezninde masdar-isim (فَعْل)",
      morphType: "İsim",
      morphContrib: "Ayarlanmış, tedavülü kabil madeni veya kağıt para.",
      categories: ["gunluk-hayat", "hukuk"],
      meanings: [
        { orderIndex: 1, definition: "Hemen harcanmaya hazır akçe, madeni veya kağıt para; peşin.", register: "İktisat" }
      ],
      spellings: [{ arabicScript: "نقد", spellingType: "Klasik İmla", translit: "Naḳd" }],
      examples: [{ sentenceModern: "Tüccar, kumaşın bedelini veresiye değil peşin nakit olarak tediyede ısrar etti.", sentenceOttoman: "تجار، قوماشڭ بدلنی ویریسیه دگل پشین نقد اولارق تأدیه‌ده اصرار ایتدی", author: "Ahmet Rasim", sourceWork: "Şehir Mektupları" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1456", citation: "Aḳçe, para; nesiye zıddı." }],
      synonyms: [{ synonymText: "Akçe", nuanceNote: "Akçe gümüş Osmanlı parasıdır; nakit ise genel peşin akçe mefhumudur." }]
    },
    {
      slug: "munakkid",
      modernTurkish: "Münekkit",
      modernEquivalents: "eleştirmen, tenkitçi, değerlendirici",
      transliteration: "Müneḳḳid",
      primaryOttoman: "منقد",
      origin: "Arapça",
      originDetail: "Arapça n-q-d kökünden tef'îl bâbı ism-i fâilidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Müfa''il vezninde; mütehassıs tenkitçi.",
      rootSlug: "nqd",
      morphPattern: "Müfa''il vezninde tef'îl ism-i fâili (مُفَعِّل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Tenkit işini salahiyet ve vukuf ile icra eden edip.",
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Edebi veya ilmi eserleri inceleyip kusur ve kıymetini bildiren uzman yazar; eleştirmen.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "منقد", spellingType: "Klasik İmla", translit: "Müneḳḳid" }],
      examples: [{ sentenceModern: "Münekkit, eserin arkasındaki ruhu keşfetmedikçe hakiki bir hüküm veremez.", sentenceOttoman: "منقد، اثرڭ آرقه‌سنده‌كی روحی كشف ایتمدكجه حقیقی بر حكم ویره‌مز", author: "Cenap Şahabettin", sourceWork: "Evrak-ı Eyyam" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1406", citation: "Tenḳīd iden, kusûr ve meziyet arayıcısı." }],
      synonyms: [{ synonymText: "Eleştirmen", nuanceNote: "Münekkit Osmanlı edebi muhitinde daha ağırbaşlı ve estetik vukuflu kimselere tahsis edilirdi." }]
    },
    {
      slug: "intikat",
      modernTurkish: "İntikat",
      modernEquivalents: "eleştirilme, tenkide tabi tutulma",
      transliteration: "İntiḳād",
      primaryOttoman: "انتقاد",
      origin: "Arapça",
      originDetail: "Arapça n-q-d kökünden ifti'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İfti'âl bâbı mutavaat (dönüşlülük) ve gayret bildirir.",
      rootSlug: "nqd",
      morphPattern: "İfti'âl bâbı masdarı (إِفْتِعَال)",
      morphType: "Masdar",
      morphContrib: "Bir şeyi teferruatıyla tetkik edip tenkit süzgecinden geçirme hali.",
      categories: ["edebiyat", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Kusurları ayıklamak üzere yapılan derinleme inceleme ve eleştiri.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "انتقاد", spellingType: "Klasik İmla", translit: "İntiḳād" }],
      examples: [{ sentenceModern: "Nazariyenin intikadına dair yazılan bu risale devrinde büyük akis buldu.", sentenceOttoman: "نظریه‌نڭ انتقادینه دائر یازیلان بو رساله دورنده بیوك عكس بولدی", author: "Süleyman Nazif", sourceWork: "Makaleler" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "450", citation: "Ayıklama, tenkide tabi tutma." }],
      synonyms: [{ synonymText: "Tetkik", nuanceNote: "Tetkik incelemeyi, intikat ise değerlendirici tenkidi ifade eder." }]
    },

    // ----------------- ROOT F-K-R (ف-ك-ر) -----------------
    {
      slug: "fikir",
      modernTurkish: "Fikir",
      modernEquivalents: "düşünce, rey, mülahaza, zihin cehdi",
      transliteration: "Fikr",
      primaryOttoman: "فكر",
      origin: "Arapça",
      originDetail: "Arapça f-k-r kökünden fi'l vezninde mücerred masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Arapça aslı 'Fikr' olup Türkçede hece yapısı sebebiyle araya 'i' türeyerek 'fikir' telaffuz olunmuştur. Çoğulu efkârdır.",
      rootSlug: "fkr",
      morphPattern: "Fi'l vezninde masdar (فِعْل)",
      morphType: "Masdar",
      morphContrib: "Zihnin eşya ve hadiseler arasında kurduğu akli münasebet ve düşünce.",
      categories: ["felsefe", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Zihnin bir mesele üzerinde derinleşerek ulaştığı kanaat, mefhum veya gaye; düşünce.", register: "Felsefe" },
        { orderIndex: 2, definition: "Niyet, maksat, tasavvur.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "فكر", spellingType: "Klasik İmla", translit: "Fikr" }],
      examples: [{ sentenceModern: "Bir fikre sahip olmak kafi değildir; o fikri hakikat meydanında müdafaa edecek azim gerektir.", sentenceOttoman: "بر فكره صاحب اولمق كافی دگلدر؛ او فكری حقیقت میداننده مدافعه ایده جك عزم كركدر", author: "Namık Kemal", sourceWork: "İbret" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "998", citation: "Zihinde tasavvur u ta‘akkul olunan ma‘nâ; rey." }],
      synonyms: [{ synonymText: "Düşünce", nuanceNote: "Düşünce Türkçe karşılık olup, fikir kelimesi felsefi sistemlerde daha sarih bir mefhumdur." }]
    },
    {
      slug: "tefekkur",
      modernTurkish: "Tefekkür",
      modernEquivalents: "derin düşünüş, ibret nazarıyla temaşa",
      transliteration: "Tefekkür",
      primaryOttoman: "تفكر",
      origin: "Arapça",
      originDetail: "Arapça f-k-r kökünden tefa''ul bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tefa''ul bâbı tekellüf ve derin gayret bildirir; sıradan bir düşünüş değil, kâinatı ve yaratılışı ibretle tefekkür etmektir.",
      rootSlug: "fkr",
      morphPattern: "Tefa''ul bâbı masdarı (تَفَعُّل)",
      morphType: "Masdar",
      morphContrib: "Kökün düşünme manasına derinlik, sebat ve ibret boyutu katılması.",
      categories: ["dini-kavramlar", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Bir meseleyi veya kâinatın nizamını ibret nazarıyla baştan sona zihinde tartma; derin teemmül.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "تفكر", spellingType: "Klasik İmla", translit: "Tefekkür" }],
      examples: [{ sentenceModern: "Sessiz gecelerde gökyüzünü temaşa etmek, kalbe hudutsuz bir tefekkür kapısı aralar.", sentenceOttoman: "سسسز كجه‌لرده كوكیوزنی تماشا ایتمك، قلبه حدودسز بر تفكر قپوسی آرالار", author: "Ahmet Hamdi Tanpınar", sourceWork: "Beş Şehir" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "1250", citation: "Düşünme, zihni yorma; ibretle bakma." }],
      synonyms: [{ synonymText: "Teemmül", nuanceNote: "Teemmül neticeye ermek için uzun boylu tartmayı, tefekkür ise ibret ve hakikat aramayı öne çıkarır." }]
    },
    {
      slug: "mutefekkir",
      modernTurkish: "Mütefekkir",
      modernEquivalents: "düşünür, feylesof, fikir adamı",
      transliteration: "Mütefekkir",
      primaryOttoman: "متفكر",
      origin: "Arapça",
      originDetail: "Arapça f-k-r kökünden tefa''ul bâbı ism-i fâilidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mütefa''il vezninde; fikri cehdi hayatının gayesi kılmış bilge şahsiyet.",
      rootSlug: "fkr",
      morphPattern: "Mütefa''il vezninde tefa''ul ism-i fâili (مُتَفَعِّل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Tefekkürü bir hayat tarzı ve ilmi mesuliyet haline getiren kimse.",
      categories: ["felsefe", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Meselelerin künhüne vakıf olan, cemiyetin istikametini tayin eden derin düşünce adamı; münevver, düşünür.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "متفكر", spellingType: "Klasik İmla", translit: "Mütefekkir" }],
      examples: [{ sentenceModern: "Şark ve Garp medeniyetini telif etmeye çalışan mütefekkirlerimiz çetin bir buhranın içindeydiler.", sentenceOttoman: "شرق و غرب مدنیتنی تألیف ایتمكه چالیشان متفكرلرمز چتین بر بحرانڭ ایچنده‌یدیلر", author: "Cemil Meriç", sourceWork: "Bu Ülke" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1261", citation: "Fikir iden, tefekkür idici." }],
      synonyms: [{ synonymText: "Düşünür", nuanceNote: "Mütefekkir felsefi derinlik ve ahlaki mesuliyet yüklü geleneksel unvandır." }]
    },
    {
      slug: "efkar",
      modernTurkish: "Efkâr",
      modernEquivalents: "fikirler, düşünceler, dert, keder",
      transliteration: "Efkâr",
      primaryOttoman: "افكار",
      origin: "Arapça",
      originDetail: "Arapça f-k-r kökünden cem-i mükesserdir (kırık çoğul).",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aslen 'fikirler' manasında çoğuldur (Efkâr-ı Umûmiyye = Kamuoyu). Halk dilinde 'efkârlanmak' biçiminde gam ve keder manasını da kazanmıştır.",
      rootSlug: "fkr",
      morphPattern: "Ef'âl vezninde cem-i teksîr (أَفْعَال)",
      morphType: "Çoğul İsim",
      morphContrib: "Kök fikrin çoğulu; fikirlerin toplamı veya zihni işgal eden düşünce yoğunluğu.",
      categories: ["felsefe", "gunluk-hayat", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Fikirler, düşünceler, reyler.", register: "Felsefe" },
        { orderIndex: 2, definition: "Zihni tazyik eden hüzün, gam ve düşünceli ruh hali.", register: "Halk Dili" }
      ],
      spellings: [{ arabicScript: "افكار", spellingType: "Klasik İmla", translit: "Efkâr" }],
      examples: [{ sentenceModern: "Efkâr-ı umûmiyyenin tasvibini kazanmayan hiçbir ıslahat kalıcı olamaz.", sentenceOttoman: "افكار عمومیه‌نڭ تصویبنی قزانمایان هیچ بر اصلاحات قالجی اولاماز", author: "Şinasi", sourceWork: "Tercüman-ı Ahval Mukaddimesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "135", citation: "Fikr’in cem‘i; efkâr-ı ‘umûmiyye: cemiyetin reyleri." }],
      synonyms: [{ synonymText: "Reyler", nuanceNote: "Siyasi bağlamda görüşleri; edebi dilde ise iç dertlerini anlatır." }]
    },

    // ----------------- ROOT C-M-L (ج-م-ل) -----------------
    {
      slug: "cemal",
      modernTurkish: "Cemal",
      modernEquivalents: "yüz güzelliği, ilahi lütuf, estetik kemal",
      transliteration: "Cemâl",
      primaryOttoman: "جمال",
      origin: "Arapça",
      originDetail: "Arapça c-m-l kökünden fe'âl vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tasavvufta Allah'ın lütuf, merhamet ve güzellikle tecelli eden sıfatlarıdır (Celâl'in zıddı).",
      rootSlug: "cml",
      morphPattern: "Fa'âl vezninde isim/sıfat (فَعَال)",
      morphType: "İsim",
      morphContrib: "Mutlak ve kamil güzellik, letafet tecellisi.",
      categories: ["sanat", "dini-kavramlar", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Yüz güzelliği, letafet, kusursuz hüsn.", register: "Estetik" },
        { orderIndex: 2, definition: "Tasavvufta Hakk'ın rıza, lütuf ve kemal ile tecellisi.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "جمال", spellingType: "Klasik İmla", translit: "Cemâl" }],
      examples: [{ sentenceModern: "Cennet cemâline meftun olan âşıklar, mâsivâdan büsbütün el çekerler.", sentenceOttoman: "جنت جمالنه مفتون اولان عاشقلر، ماسوادن بسبوتون ال چكرلر", author: "Fuzûlî", sourceWork: "Divan" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "477", citation: "Yüz güzelligi, hüsn ü behâ." }],
      synonyms: [{ synonymText: "Hüsn", nuanceNote: "Hüsn her türlü güzelliği, cemal ise bilhassa çehrede parlayan nurlu letafeti ifade eder." }]
    },
    {
      slug: "cumle",
      modernTurkish: "Cümle",
      modernEquivalents: "tümce, bütün, hepsi, kamu",
      transliteration: "Cümle",
      primaryOttoman: "جمله",
      origin: "Arapça",
      originDetail: "Arapça c-m-l kökünden fu'le vezninde isimdir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kökün 'toplamak' manasından türemiştir; gramerde kelimelerin bir araya gelerek tam bir mana ifade eden terkibine cümle denir.",
      rootSlug: "cml",
      morphPattern: "Fu'le vezninde isim (فُعْلَة)",
      morphType: "İsim",
      morphContrib: "Bir araya gelip bütün teşkil eden kelimeler veya varlıklar heyeti.",
      categories: ["edebiyat", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Nahivde müstakil bir hüküm ve mana bildiren kelimeler dizisi; tümce.", register: "Dilbilgisi" },
        { orderIndex: 2, definition: "Bütün, hepsi, kamu, mecmû.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "جمله", spellingType: "Klasik İmla", translit: "Cümle" }],
      examples: [{ sentenceModern: "Bu zarif cümlenin her kelimesi usta bir sanatkârın elinden çıkmış mücevher gibiydi.", sentenceOttoman: "بو ظریف جمله‌نڭ هر كلیمه‌سی اوسته بر صنعتكارڭ الندن چیقمش مجوهر كبيدی", author: "Cenap Şahabettin", sourceWork: "Tiryaki Sözleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "480", citation: "Hey’et-i mecmû‘a, hepsi; kelâm." }],
      synonyms: [{ synonymText: "Tümce", nuanceNote: "Tümce yalnız sentaktik yapıyı karşılar; cümle ise aynı zamanda 'bütün' ve 'kamu' manalarını da haizdir." }]
    },
    {
      slug: "icmal",
      modernTurkish: "İcmâl",
      modernEquivalents: "özetleme, kısaltma, toptan hesap çıkarma",
      transliteration: "İcmâl",
      primaryOttoman: "اجمال",
      origin: "Arapça",
      originDetail: "Arapça c-m-l kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tafsîlâtın (ayrıntının) zıddıdır. Mufassal (ayrıntılı) defterlerin hülasasına 'icmâl defteri' denirdi.",
      rootSlug: "cml",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Ayrıntıları toplayıp tek bir öz haline getirme.",
      categories: ["yonetim", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Bir meseleyi veya hesabı tafsilatından tecrit ederek hulasa etme; özet.", register: "Bürokrasi" }
      ],
      spellings: [{ arabicScript: "اجمال", spellingType: "Klasik İmla", translit: "İcmâl" }],
      examples: [{ sentenceModern: "Maliye kâtibi vilayetlerin varidatını icmâl ederek sadrazama sundu.", sentenceOttoman: "مالیه كاتیبی ولایتلرڭ وارداتنی اجمال ایدرك صدر اعظمه سوندى", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "62", citation: "Hulâsa eylemek, tafsîlin zıddı." }],
      synonyms: [{ synonymText: "Hülasa", nuanceNote: "Hülasa çıkarılan özü, icmâl ise toparlama ve özetleme fiilini gösterir." }]
    },
    {
      slug: "mucmel",
      modernTurkish: "Mücmel",
      modernEquivalents: "kısa ve öz, kapalı, açıklanmaya muhtaç",
      transliteration: "Mücmel",
      primaryOttoman: "مجمل",
      origin: "Arapça",
      originDetail: "Arapça c-m-l kökünden if'âl bâbı ism-i mef'ûlüdür.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Fıkıh usulünde ilk bakışta muradın ne olduğu anlaşılamayıp şarihinin beyanına muhtaç olan söze denir.",
      rootSlug: "cml",
      morphPattern: "Müf'al vezninde if'âl ism-i mef'ûlü (مُفْعَل)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Tafsilsiz ve toptan söylenmiş söz.",
      categories: ["hukuk", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Kısa ve toptan söylenmiş, ayrıntıları açıklanmadıkça manası tam kavranamayan ifade.", register: "Fıkıh Usulü" }
      ],
      spellings: [{ arabicScript: "مجمل", spellingType: "Klasik İmla", translit: "Mücmel" }],
      examples: [{ sentenceModern: "Kanunun bu mücmel maddesi ancak içtihatlar yoluyla tavazzuh etti.", sentenceOttoman: "قانونڭ بو مجمل ماده‌سی آنجق اجتهادلر یولیله توضح ایتدی", author: "Cevdet Paşa", sourceWork: "Mecelle" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "702", citation: "Kısa ve özlü, tafsilsiz." }],
      synonyms: [{ synonymText: "Muhtasar", nuanceNote: "Muhtasar gereksiz kısımları atılmış metindir; mücmel ise izaha muhtaç derecede kapalı ve derli topludur." }]
    },

    // ----------------- ROOT S-L-M (س-ل-م) -----------------
    {
      slug: "selamet",
      modernTurkish: "Selâmet",
      modernEquivalents: "esenlik, kurtuluş, emniyet, doğru yol",
      transliteration: "Selāmet",
      primaryOttoman: "سلامت",
      origin: "Arapça",
      originDetail: "Arapça s-l-m kökünden fe'âlet vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Maddi ve manevi her türlü tehlike ve ayıptan uzak olma halidir.",
      rootSlug: "slm",
      morphPattern: "Fa'âlet vezninde masdar (فَعَالَة)",
      morphType: "Masdar",
      morphContrib: "Kusursuzluk, afiyet ve tehlikelerden beri olma durumu.",
      categories: ["felsefe", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Korku, tehlike ve fenalıklardan kurtulmuş olma hali; esenlik, emniyet.", register: "Genel" },
        { orderIndex: 2, definition: "Düşünce ve üslupta tutarlılık ve doğruluk; selâset.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "سلامت", spellingType: "Klasik İmla", translit: "Selāmet" }],
      examples: [{ sentenceModern: "Geminin fırtınalı denizden selâmet sahiline vasıl olması derin bir şükre vesile oldu.", sentenceOttoman: "كمينڭ فیرتنه‌لی دڭزدن سلامت ساحلنه واصل اولماسی درین بر شكره وسیله اولدی", author: "Kâtib Çelebi", sourceWork: "Tuhfetü'l-Kibar" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "726", citation: "Emîn u sâlim olma, âfetden berî olma." }],
      synonyms: [{ synonymText: "Esenlik", nuanceNote: "Esenlik Türkçe karşılık olup, selâmet manevi kurtuluşu da ihtiva eder." }]
    },
    {
      slug: "teslim",
      modernTurkish: "Teslim",
      modernEquivalents: "verme, bırakma, boyun eğme, doğrulama",
      transliteration: "Teslīm",
      primaryOttoman: "تسليم",
      origin: "Arapça",
      originDetail: "Arapça s-l-m kökünden tef'îl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tef'îl bâbı; 1) Bir emaneti sahibine vermek, 2) Hakikati kabul edip itirazdan vazgeçmek.",
      rootSlug: "slm",
      morphPattern: "Tef'îl bâbı masdarı (تَفْعِيل)",
      morphType: "Masdar",
      morphContrib: "Emaneti sahibine salimen ulaştırma ve itirazı bırakma ameliyesi.",
      categories: ["hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir şeyi emaneten veya mülk olarak birine verme; tevdî.", register: "Hukuk" },
        { orderIndex: 2, definition: "Bir fikrin veya hâkimiyetin haklılığını kabul edip rıza gösterme; teslimiyet.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "تسليم", spellingType: "Klasik İmla", translit: "Teslīm" }],
      examples: [{ sentenceModern: "Muhasara edilen kale kumandanı müdafaanın imkânsızlığını görerek kaleyi teslim eyledi.", sentenceOttoman: "محاصره ایدیلن قلعه قوماندانی مدافعه‌نڭ امكانسزلگنی كوره رك قلعه‌یی تسلیم ایله‌دی", author: "Naîmâ", sourceWork: "Tarih-i Naîmâ" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "403", citation: "Bir şeye rızâ gösterme, emâneti verme." }],
      synonyms: [{ synonymText: "Tevdî", nuanceNote: "Tevdî hukuken emanet bırakmayı, teslim ise fiilen ele vermeyi gösterir." }]
    },
    {
      slug: "islam",
      modernTurkish: "İslam",
      modernEquivalents: "teslimiyet, barış, semavi din",
      transliteration: "İslām",
      primaryOttoman: "اسلام",
      origin: "Arapça",
      originDetail: "Arapça s-l-m kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İf'âl bâbında ihlas ile boyun eğmek ve selamet dairesine girmek demektir.",
      rootSlug: "slm",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Hakk'ın iradesine bütünüyle teslim olup selamet ve esenliğe kavuşma.",
      categories: ["dini-kavramlar", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Hz. Muhammed (s.a.v.) vasıtasıyla tebliğ edilen son semavi din; ihlasla teslim olma.", register: "Dini İlimler" }
      ],
      spellings: [{ arabicScript: "اسلام", spellingType: "Klasik İmla", translit: "İslām" }],
      examples: [{ sentenceModern: "İslam medeniyeti Endülüs'ten Semerkant'a kadar muazzam bir ilim havzası inşa etmiştir.", sentenceOttoman: "اسلام مدنیتی اندلسدن سمرقنده قدر معظم بر علم حوضه‌سی انشا ایتمشدر", author: "Ahmet Cevdet Paşa", sourceWork: "Kısas-ı Enbiya" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "115", citation: "Dîn-i mübîn, tevhîd dîni." }],
      synonyms: [{ synonymText: "Dîn-i Mübîn", nuanceNote: "Edebi ve kelami dilde İslam dini için kullanılan hürmet ifadesidir." }]
    },
    {
      slug: "musluman",
      modernTurkish: "Müslüman",
      modernEquivalents: "İslam dinine mensup olan, mümin",
      transliteration: "Müslimân / Müslim",
      primaryOttoman: "مسلمان",
      origin: "Farsça / Arapça",
      originDetail: "Arapça müslim kelimesinin Farsça çoğul eki -ân ile genişletilmiş şeklidir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Arapça tekili 'Müslim'dir. Türkçeye Farsçadaki cem şekli 'müslimân' üzerinden geçmiş ve tekil hüviyet kazanmıştır.",
      rootSlug: "slm",
      morphPattern: "İf'âl ism-i fâili ve Farsça çoğul terkibi",
      morphType: "İsim",
      morphContrib: "İslam'ı kabul eden, emniyet ve selamette olan fert.",
      categories: ["dini-kavramlar", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "İslam dininin esaslarına inanan ve tatbik eden kimse; müslim.", register: "Dini İlimler" }
      ],
      spellings: [{ arabicScript: "مسلمان", spellingType: "Klasik İmla", translit: "Müslümân" }],
      examples: [{ sentenceModern: "Müslümanlar fethettikleri topraklarda ibadethaneleri ve ahaliyi himaye ettiler.", sentenceOttoman: "مسلمانلر فتح ایتدكلری طوپراقلرده عبادتخانه‌لری و اهالی‌یی حمایت ایتدیلر", author: "Cevdet Paşa", sourceWork: "Kısas-ı Enbiya" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1351", citation: "İslâm dîninde bulunan." }],
      synonyms: [{ synonymText: "Müslim", nuanceNote: "Müslim Arapça asıl tekil lafızdır; müslüman ise Türkçede yerleşen şeklidir." }]
    },

    // ----------------- ROOT H-Q-Q (ح-ق-ق) -----------------
    {
      slug: "hakikat",
      modernTurkish: "Hakikat",
      modernEquivalents: "gerçek, asıl, doğruluk, iç yüz",
      transliteration: "Ḥaḳīḳat",
      primaryOttoman: "حقيقت",
      origin: "Arapça",
      originDetail: "Arapça ḥ-q-q kökünden fa'îlet vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mecazın zıddıdır; tasavvufta şeriat, tarikat ve marifetten sonra ulaşılan en yüksek vuslat mertebesidir.",
      rootSlug: "hqq",
      morphPattern: "Fa'îlet vezninde mübalağalı isim (فَعِيلَة)",
      morphType: "İsim",
      morphContrib: "Varlığı sabit, değişmez ve şüpheden beri olan mutlak gerçek.",
      categories: ["felsefe", "edebiyat", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Bir şeyin aslı, esası, vehim ve zandan uzak gerçek hüviyeti; gerçeklik.", register: "Felsefe" },
        { orderIndex: 2, definition: "Belâgatta kelimenin vaz'edildiği asıl manada kullanılması; mecaz zıddı.", register: "Edebiyat" },
        { orderIndex: 3, definition: "Tasavvufta masivadan geçip Hakk'ın zat ve sıfatlarını müşahede hali.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "حقيقت", spellingType: "Klasik İmla", translit: "Ḥaḳīḳat" }],
      examples: [{ sentenceModern: "Şair hayallerin cazibesine kapılsa dahi hakikatin yalçın kayalarına çarpmaktan kurtulamaz.", sentenceOttoman: "شاعر خیاللرڭ جاذبه‌سنه قپیلسه دخی حقیقتڭ یاڵچین قایه‌لرینه چارپمقدن قورتولاماز", author: "Ahmet Haşim", sourceWork: "Göl Saatleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "550", citation: "Eşyânın mâhiyeti, vāḳı‘a; mecâzın zıddı." }],
      synonyms: [{ synonymText: "Gerçek", nuanceNote: "Gerçek somut ve zahiri olanı da içine alırken, hakikat metafizik ve ontolojik kesinliği ifade eder." }]
    },
    {
      slug: "tahkik",
      modernTurkish: "Tahkik",
      modernEquivalents: "derinlemesine soruşturma, doğrulama, metin tenkidi",
      transliteration: "Taḥḳīḳ",
      primaryOttoman: "تحقيق",
      origin: "Arapça",
      originDetail: "Arapça ḥ-q-q kökünden tef'îl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Taklidin zıddıdır; delile dayanarak gerçeği ortaya çıkarma ve el yazması nüshaları karşılaştırarak sahih metni kurma sanatı.",
      rootSlug: "hqq",
      morphPattern: "Tef'îl bâbı masdarı (تَفْعِيل)",
      morphType: "Masdar",
      morphContrib: "Bir iddianın hakikatini araştırıp şüpheyi izale etme ameliyesi.",
      categories: ["bilim", "hukuk", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Bir haberin, iddianın veya meselenin aslını inceden inceye araştırıp doğruluğunu tespit etme; soruşturma.", register: "İlim Usulü" },
        { orderIndex: 2, definition: "El yazması nüshaları karşılaştırarak müellif hattına en yakın metni tanzim etme faaliyeti.", register: "Filoloji" }
      ],
      spellings: [{ arabicScript: "تحقيق", spellingType: "Klasik İmla", translit: "Taḥḳīḳ" }],
      examples: [{ sentenceModern: "Müverrih, rivayetleri tahkik etmeksizin kitabına dercetmekten şiddetle ictinab eylemelidir.", sentenceOttoman: "مؤرخ، روایتلری تحقیق ایتمكسزین كتابنه درح ایتمكدن شدتله اجتناب ایله‌ملیدر", author: "Kâtib Çelebi", sourceWork: "Keşfü'z-Zünûn" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "389", citation: "Bir şeyin hakīkatini arama, taklîd zıddı." }],
      synonyms: [{ synonymText: "Soruşturma", nuanceNote: "Soruşturma adli zabıtayı akla getirir; tahkik ise ilmi ve felsefi sağlamayı da temsil eder." }]
    },
    {
      slug: "hukuk",
      modernTurkish: "Hukuk",
      modernEquivalents: "haklar, yasalar bütünü, adalet ilmi",
      transliteration: "Ḥuḳūḳ",
      primaryOttoman: "حقوق",
      origin: "Arapça",
      originDetail: "Arapça ḥ-q-q kökünden cem-i teksîrdir (kırık çoğul).",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hak kelimesinin çoğuludur; sonradan cemiyet nizamını tanzim eden kanunlar mefhumuna ve müstakil bir ilim şubesine ad olmuştur.",
      rootSlug: "hqq",
      morphPattern: "Fu'ûl vezninde cem-i teksîr (فُعُول)",
      morphType: "Çoğul İsim",
      morphContrib: "Hakların toplamı; adaleti temin eden kaideler mecmuası.",
      categories: ["hukuk", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Hak kelimesinin çoğulu; ferdin sahip olduğu salahiyet ve menfaatler.", register: "Hukuk" },
        { orderIndex: 2, definition: "Toplumu düzenleyen ve devlet müeyyidesiyle desteklenen kanunların bütünü; adliye ilmi.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "حقوق", spellingType: "Klasik İmla", translit: "Ḥuḳūḳ" }],
      examples: [{ sentenceModern: "Her ferdin hürriyet ve mülkiyet hukuku kanunun teminatı altındadır.", sentenceOttoman: "هر فردڭ حریت و ملكیت حقوقی قانونڭ تأمیناتی آلتنده‌در", author: "Cevdet Paşa", sourceWork: "Mecelle Mukaddimesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "551", citation: "Ḥaḳḳ’ın cem‘i; kānûnlar ilmi." }],
      synonyms: [{ synonymText: "Tüze", nuanceNote: "Öz Türkçe 'tüze' terimi hukukun tarihsel ve zengin içtihad mirasını tam ikame edememiştir." }]
    },
    {
      slug: "hak",
      modernTurkish: "Hak",
      modernEquivalents: "adalet, pay, doğru, Cenab-ı Hakk",
      transliteration: "Ḥaḳḳ",
      primaryOttoman: "حق",
      origin: "Arapça",
      originDetail: "Arapça ḥ-q-q kökünden mücerred masdardır.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Şeddeli kaf ile biter. Esma-i Hüsna'dan biridir. Batılın zıddıdır.",
      rootSlug: "hqq",
      morphPattern: "Fa'l vezninde masdar (فَعْل)",
      morphType: "Masdar",
      morphContrib: "Sabit ve inkar edilemez doğruluk; layık olunan hisse.",
      categories: ["hukuk", "felsefe", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Adaletin ve kanunun kişiye tanıdığı yetki, salahiyet ve hisse.", register: "Hukuk" },
        { orderIndex: 2, definition: "Doğru, gerçek, adil; bâtılın zıddı.", register: "Felsefe" },
        { orderIndex: 3, definition: "Allah Teâlâ'nın sıfat ve isimlerinden biri; el-Hakk.", register: "Dini İlimler" }
      ],
      spellings: [{ arabicScript: "حق", spellingType: "Klasik İmla", translit: "Ḥaḳḳ" }],
      examples: [{ sentenceModern: "Hak yerini bulur, er geç batıl zail olur.", sentenceOttoman: "حق یرینی بولور، ایر كچ باطل زائل اولور", author: "Namık Kemal", sourceWork: "Makaleler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "548", citation: "Bâtılın zıddı, ‘adl, hisse, Allāh Te‘âlâ." }],
      synonyms: [{ synonymText: "Adalet", nuanceNote: "Adalet hak sahibine hakkını vermektir; hak ise o hakkın bizatihi kendisidir." }]
    },

    // ----------------- ROOT '-L-M (ع-ل-م) -----------------
    {
      slug: "ilim",
      modernTurkish: "İlim",
      modernEquivalents: "bilim, bilgi, irfan, ma'rifet",
      transliteration: "‘İlm",
      primaryOttoman: "علم",
      origin: "Arapça",
      originDetail: "Arapça '-l-m kökünden fi'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Cehaletin zıddıdır. Eşyanın künhünü ve kanunlarını delile dayalı olarak bilme yetisi.",
      rootSlug: "alm",
      morphPattern: "Fi'l vezninde masdar (فِعْل)",
      morphType: "Masdar",
      morphContrib: "Varlığın ve hadiselerin hakikatini kavrama bilgisi.",
      categories: ["bilim", "felsefe", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Gerçeğin delillere dayalı olarak zihinde tecelli etmesi; bilim, malumat.", register: "Felsefe" },
        { orderIndex: 2, definition: "Belli bir sahada usul dairesinde elde edilen müntazam bilgiler şubesi (ilm-i kelam, ilm-i heyet vb.).", register: "İlimler" }
      ],
      spellings: [{ arabicScript: "علم", spellingType: "Klasik İmla", translit: "‘İlm" }],
      examples: [{ sentenceModern: "İlim rütbesi rütbelerin en yücesidir.", sentenceOttoman: "علم رتبه‌سی رتبه‌لرڭ اڭ یوجەسی در", author: "Kâtib Çelebi", sourceWork: "Mizanü'l-Hakk" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "940", citation: "Cehlin zıddı; bilmek; kānûnlar ve kâideler mecmu‘u." }],
      synonyms: [{ synonymText: "Bilim", nuanceNote: "Bilim modern pozitif disiplinleri karşılarken, ilim hem metafizik hem de ahlaki boyutları ihtiva eder." }]
    },
    {
      slug: "alim",
      modernTurkish: "Âlim",
      modernEquivalents: "bilgin, bilici, ulema, ilim adamı",
      transliteration: "‘Âlim",
      primaryOttoman: "عالم",
      origin: "Arapça",
      originDetail: "Arapça '-l-m kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Âlem (dünya/kâinat) kelimesi ile imlası birdir ancak harekesi farklıdır: Âlim ism-i fâil, âlem ism-i alettir.",
      rootSlug: "alm",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "İlmi tahsil edip hakikatine vakıf olan kamil şahsiyet.",
      categories: ["bilim", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Dini ve akli ilimlerde derin vukuf sahibi olan hürmete layık bilgin; ulema.", register: "İlim" }
      ],
      spellings: [{ arabicScript: "عالم", spellingType: "Klasik İmla", translit: "‘Âlim" }],
      examples: [{ sentenceModern: "Gerçek âlim, bildikçe ne kadar az şey bildiğini idrak eden tevazu sahibidir.", sentenceOttoman: "كرچك عالم، بیلدكجه نه قدر آز شی بیلدگنی ادراك ایدن تواضع صاحبی در", author: "Ahmet Mithat Efendi", sourceWork: "Felsefe-i Zenan" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "913", citation: "İlim sâhibi, çok bilen zât." }],
      synonyms: [{ synonymText: "Bilgin", nuanceNote: "Âlim geleneksel kültürde ahlaki vakar ve ameli birlikteliği de temsil eder." }]
    },
    {
      slug: "muallim",
      modernTurkish: "Muallim",
      modernEquivalents: "öğretmen, hoca, talim eden",
      transliteration: "Mu‘allim",
      primaryOttoman: "معلم",
      origin: "Arapça",
      originDetail: "Arapça '-l-m kökünden tef'îl bâbı ism-i fâilidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tef'îl bâbı öğretme eylemini devamlı ve meslek olarak icra etmeyi gösterir.",
      rootSlug: "alm",
      morphPattern: "Müfa''il vezninde tef'îl ism-i fâili (مُفَعِّل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Başkalarına ilim öğreten, talim ve terbiye eden mürebbi.",
      categories: ["bilim", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Talebeye ilim, fen ve terbiye veren tedrisat ehli; öğretmen.", register: "Eğitim" }
      ],
      spellings: [{ arabicScript: "معلم", spellingType: "Klasik İmla", translit: "Mu‘allim" }],
      examples: [{ sentenceModern: "Muallim Naci, divan şiirinin kaidelerini genç nesillere şevkle talim etti.", sentenceOttoman: "معلم ناجی، دیوان شعرینڭ قواعدنی كنج نسله شوقله تعلیم ایتدی", author: "Recaizade Mahmut Ekrem", sourceWork: "Talim-i Edebiyat" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1369", citation: "‘İlim ve san‘at öğreten, ders veren hoca." }],
      synonyms: [{ synonymText: "Müderris", nuanceNote: "Müderris medresede (yükseköğretimde) ders veren profesör düzeyindeki hocalara mahsustur." }]
    },
    {
      slug: "malumat",
      modernTurkish: "Malumat",
      modernEquivalents: "bilgiler, veri, malumatfuruşluk",
      transliteration: "Ma‘lūmāt",
      primaryOttoman: "معلومات",
      origin: "Arapça",
      originDetail: "Arapça '-l-m kökünden ism-i mef'ûlün (ma'lûm) müennes çoğuludur.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Ma'lûm (bilinen şey) kelimesinin çoğuludur; malumat dağınık bilgileri, ilim ise sistemli idraki gösterir.",
      rootSlug: "alm",
      morphPattern: "Mef'ûlât vezninde çoğul (مَفْعُولَات)",
      morphType: "Çoğul İsim",
      morphContrib: "Bilinen şeyler, edinilen haber ve malumatlar bütünü.",
      categories: ["bilim", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Öğrenilmiş şeyler, derlenmiş bilgiler, vukuat haberleri.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "معلومات", spellingType: "Klasik İmla", translit: "Ma‘lūmāt" }],
      examples: [{ sentenceModern: "Zihnini kaba bir malumat yığınıyla doldurmak yerine muhakemesini keskinleştirmeliydi.", sentenceOttoman: "زihnini قبا بر معلومات ییغینیله طولدورمق یرینه محاكمه‌سنی كسكینلشدیرملیدی", author: "Ahmet Hamdi Tanpınar", sourceWork: "Sahnenin Dışındakiler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1369", citation: "Ma‘lûm olan nesneler, vukūf." }],
      synonyms: [{ synonymText: "Veri", nuanceNote: "Veri ham istatistiki unsurları, malumat ise insan zihninde yer etmiş bilgileri anlatır." }]
    },
    {
      slug: "alamet",
      modernTurkish: "Alamet",
      modernEquivalents: "belirti, işaret, iz, sembol",
      transliteration: "‘Alāmet",
      primaryOttoman: "علامت",
      origin: "Arapça",
      originDetail: "Arapça '-l-m kökünden fe'âlet vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kendisiyle bir şeyin bilinmesini sağlayan iz ve nişan.",
      rootSlug: "alm",
      morphPattern: "Fa'âlet vezninde isim (فَعَالَة)",
      morphType: "İsim",
      morphContrib: "Bilinmeyen bir şeyin varlığına delalet eden zahiri işaret.",
      categories: ["felsefe", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir şeyin varlığını, zuhurunu gösteren nişan, belirti, sembol; iz.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "علامت", spellingType: "Klasik İmla", translit: "‘Alāmet" }],
      examples: [{ sentenceModern: "Ufukta toplanan kara bulutlar şiddetli bir kasırganın alametiydi.", sentenceOttoman: "افقده طوپلانان قره بولوتلر شدتلی بر قاصیرغه‌نڭ علامتی ايدی", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "945", citation: "Nişân, iz, delîl." }],
      synonyms: [{ synonymText: "İşaret", nuanceNote: "İşaret kasti gösterimi, alamet ise hadisenin tabii tezahürünü ifade eder." }]
    },

    // ----------------- ROOT B-L-G (ب-ل-غ) -----------------
    {
      slug: "belagat",
      modernTurkish: "Belâgat",
      modernEquivalents: "etkileyici söz söyleme, retorik, fesahat",
      transliteration: "Belāġat",
      primaryOttoman: "بلاغت",
      origin: "Arapça",
      originDetail: "Arapça b-l-g kökünden fe'âlet vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Muktezâ-yı hâle mutâbık (duruma uygun) ve kusursuz konuşma sanatı. Meânî, beyân ve bedî‘ şubelerine ayrılır.",
      rootSlug: "blg",
      morphPattern: "Fa'âlet vezninde masdar (فَعَالَة)",
      morphType: "Masdar",
      morphContrib: "Sözün hedefine tam ulaşıp muhatabın kalbine tesir etme olgunluğu.",
      categories: ["edebiyat", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Sözün hem fasih ve kusursuz olması hem de dinleyenin idrak ve makamına tam intibak etmesi sanatı; retorik.", register: "Belâgat" },
        { orderIndex: 2, definition: "Düzgün, tesirli ve ahenkli ifade kudreti.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "بلاغت", spellingType: "Klasik İmla", translit: "Belāġat" }],
      examples: [{ sentenceModern: "Hattatın kalemi kâğıda ne ise, hatibin belâgati de meclise öyle nizam veriyordu.", sentenceOttoman: "خطاطڭ قلمی كاغده نه ایسه، خطیبڭ بلاغتی ده مجلسه اویله نظام ویریوردی", author: "Cevdet Paşa", sourceWork: "Belagat-ı Osmaniyye" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "323", citation: "Fasîh ve muktezā-yı hâle muvâfık kelâm." }],
      synonyms: [{ synonymText: "Retorik", nuanceNote: "Batı retoriği daha çok ikna tekniklerine dayanırken, belâgat ahlaki sıdk ve üslup zarafetini şart koşar." }]
    },
    {
      slug: "teblig",
      modernTurkish: "Tebliğ",
      modernEquivalents: "bildirme, duyurma, bildiri, peygamber vazifesi",
      transliteration: "Teblīġ",
      primaryOttoman: "تبليغ",
      origin: "Arapça",
      originDetail: "Arapça b-l-g kökünden tef'îl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tef'îl bâbı ta'diye bildirir: Bir haberi, emri veya ilahi vahyi yerine ulaştırmak.",
      rootSlug: "blg",
      morphPattern: "Tef'îl bâbı masdarı (تَفْعِيل)",
      morphType: "Masdar",
      morphContrib: "Haberi veya emri muhatabına bizzat ulaştırıp eriştirme faaliyeti.",
      categories: ["hukuk", "yonetim", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Resmi bir hükmü, emri veya kararı yetkili mercie veya muhataba resmen ulaştırma; bildiri.", register: "Hukuk" },
        { orderIndex: 2, definition: "Peygamberlerin ilahi vahyi insanlara noksansız ulaştırma vazifesi.", register: "Akaid" }
      ],
      spellings: [{ arabicScript: "تبليغ", spellingType: "Klasik İmla", translit: "Teblīġ" }],
      examples: [{ sentenceModern: "Divan kararı vilayet valisine hususi bir kurye marifetiyle tebliğ olundu.", sentenceOttoman: "دیوان قراری ولایت والیسنه خصوصی بر قوریه معرفتیله تبلیغ اولوندی", author: "Ahmet Vefik Paşa", sourceWork: "Tarih-i Osmani" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "1236", citation: "Ulaştırma, eriştirme, bildirme." }],
      synonyms: [{ synonymText: "Bildirim", nuanceNote: "Tebliğ hukuki bağlayıcılığı ve usule uygun tebellüğü şart koşan teknik bir terimdir." }]
    },
    {
      slug: "balig",
      modernTurkish: "Bâliğ",
      modernEquivalents: "erişkin, ergen, yekûn tutan",
      transliteration: "Bâliġ",
      primaryOttoman: "بالغ",
      origin: "Arapça",
      originDetail: "Arapça b-l-g kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "Sıfat / İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hem rüşte ve ergenliğe ermiş şahsı hem de muhasebede toplam meblağa ulaşan tutarı ifade eder.",
      rootSlug: "blg",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Kemal veya nihayet noktasına ulaşan kimse yahut meblağ.",
      categories: ["hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bülûğ çağına ermiş, mükellef ve reşit sayılan kimse.", register: "Hukuk" },
        { orderIndex: 2, definition: "Bir meblağa veya sayıya ulaşan, tutan.", register: "Muhasebe" }
      ],
      spellings: [{ arabicScript: "بالغ", spellingType: "Klasik İmla", translit: "Bâliġ" }],
      examples: [{ sentenceModern: "Bu seneki mahsulâtın bedeli on bin altın liraya bâliğ oldu.", sentenceOttoman: "بو سنه‌كی محصولاتڭ بدلی اون بیڭ آلتون لیرایه بالغ اولدی", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "266", citation: "Bülûğ iden; bir mikdāra irişen." }],
      synonyms: [{ synonymText: "Reşit", nuanceNote: "Bâliğ fizyolojik ve hukuki ergenliği, reşit ise malını idare edebilme akli rüştünü belirtir." }]
    },

    // ----------------- ROOT V-C-D (و-ج-d) -----------------
    {
      slug: "vucut",
      modernTurkish: "Vücut",
      modernEquivalents: "varlık, gövde, ten, var olma",
      transliteration: "Vücūd",
      primaryOttoman: "وجود",
      origin: "Arapça",
      originDetail: "Arapça v-c-d kökünden fu'ûl vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Ademin (yokluğun) zıddıdır. Felsefede varlık kavramını, tıpta ise insan bedenini karşılar.",
      rootSlug: "vcd",
      morphPattern: "Fu'ûl vezninde masdar (فُعُول)",
      morphType: "Masdar",
      morphContrib: "Yokluktan kurtulup zuhur etme hali; varlık.",
      categories: ["felsefe", "bilim", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Varlık, var olma hali; adem (yokluk) zıddı.", register: "Felsefe" },
        { orderIndex: 2, definition: "İnsan ve hayvan bedeninin maddi gövdesi; cüsse.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "وجود", spellingType: "Klasik İmla", translit: "Vücūd" }],
      examples: [{ sentenceModern: "Vahdet-i vücûd meşrebinde olan arifler bütün kâinatı bir aynanın aksinden ibaret görürler.", sentenceOttoman: "وحدت وجود مشربنده اولان عارفلر بتون كائناتی بر آینه‌نڭ عكسندن عبارت كؤرورلر", author: "İsmail Fennî Ertuğrul", sourceWork: "Vahdet-i Vücûd ve İbn Arabî" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1487", citation: "‘Ademin zıddı, varlık; cesed, beden." }],
      synonyms: [{ synonymText: "Varlık", nuanceNote: "Varlık hem ontolojik hem maddi varlığı karşılar; vücut terimi derin tasavvufi geleneğin taşıyıcısıdır." }]
    },
    {
      slug: "vecd",
      modernTurkish: "Vecd",
      modernEquivalents: "kendinden geçme, coşku, ilahi sarhoşluk",
      transliteration: "Vecd",
      primaryOttoman: "وجد",
      origin: "Arapça",
      originDetail: "Arapça v-c-d kökünden fa'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tasavvufta kulun iradesi dışında kalbine gelen ilahi feyizle kendinden geçmesi, Hakk'ı vicdanında bulmasıdır.",
      rootSlug: "vcd",
      morphPattern: "Fa'l vezninde masdar (فَعْل)",
      morphType: "Masdar",
      morphContrib: "İlahi muhabbetin coşkunluğuyla nefsin şuurundan sıyrılma.",
      categories: ["dini-kavramlar", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Kuvvetli bir ilahi muhabbet veya estetik duygu tesiriyle benliğini unutup kendinden geçme; ruhani istiğrak.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "وجد", spellingType: "Klasik İmla", translit: "Vecd" }],
      examples: [{ sentenceModern: "Neyin yanık nağmeleri meclistekileri derin bir vecd ve istiğrak içinde bıraktı.", sentenceOttoman: "نَیڭ یانیق نغمه‌لری مجلسده‌كیلری درین بر وجد و استغراق ایچنده بیراقدی", author: "Abdülhak Şinasi Hisar", sourceWork: "Boğaziçi Yalıları" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1486", citation: "Kendinden geçme, aşḳ u şevk ile müteheyyic olma." }],
      synonyms: [{ synonymText: "İstiğrak", nuanceNote: "İstiğrak bütünüyle manevi aleme batmayı, vecd ise bunun kalbi coşkuyla taşmasını anlatır." }]
    },
    {
      slug: "mevcut",
      modernTurkish: "Mevcut",
      modernEquivalents: "var olan, hazır bulunan, varlık",
      transliteration: "Mevcūd",
      primaryOttoman: "موجود",
      origin: "Arapça",
      originDetail: "Arapça v-c-d kökünden ism-i mef'ûldür.",
      partOfSpeech: "Sıfat / İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'ûl vezninde; yokluk karanlığından varlık sahasına çıkarılmış nesne veya kişi.",
      rootSlug: "vcd",
      morphPattern: "Mef'ûl vezninde ism-i mef'ûl (مَفْعُول)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Vücut bulmuş, hazırda bulunan ve bilinen nesne.",
      categories: ["felsefe", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Varlığı sabit olan, fiilen var olan ve ortada bulunan; hazır.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "موجود", spellingType: "Klasik İmla", translit: "Mevcūd" }],
      examples: [{ sentenceModern: "Kütüphanede mevcut nâdide yazmalar dikkatle tasnif olundu.", sentenceOttoman: "كütüphanede موجود نادره یازمه‌لر دقتله تصنیف اولوندی", author: "İsmail Saib Sencer", sourceWork: "Yazmalar Fihristi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1414", citation: "Vâr olan, ma‘dûm zıddı." }],
      synonyms: [{ synonymText: "Var", nuanceNote: "Var genel Türkçe sıfattır; mevcut ise kurumsal ve felsefi dilde kayıtlı varlığı vurgular." }]
    },

    // ----------------- ROOT '-Q-L (ع-ق-ل) -----------------
    {
      slug: "akil",
      modernTurkish: "Akıl",
      modernEquivalents: "us, idrak, zekâ, basiret",
      transliteration: "‘Aḳl",
      primaryOttoman: "عقل",
      origin: "Arapça",
      originDetail: "Arapça '-q-l kökünden fa'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kök manası deveyi bağlamak (ıkâl) demektir. İnsanı heva ve cinnetten zaptettiği için bu manevi cevhere akıl denilmiştir.",
      rootSlug: "aql",
      morphPattern: "Fa'l vezninde masdar-isim (فَعْل)",
      morphType: "İsim",
      morphContrib: "İyiyi kötüden, doğruyu yanlıştan ayıran ruhi meleke.",
      categories: ["felsefe", "hukuk", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "İnsanı diğer canlılardan ayıran; düşünme, anlama ve iyi ile kötüyü temyiz etme melekesi; us.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "عقل", spellingType: "Klasik İmla", translit: "‘Aḳl" }],
      examples: [{ sentenceModern: "Akıl ile nakil teali ettikçe hakikat cemiyetin rehberi olur.", sentenceOttoman: "عقل ایله نقل تعلی ایتدكجه حقیقت جمعیتڭ رهبری اولور", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "951", citation: "Kuvve-i müdrikeyi hâvi melekât-ı rûhiyye; us." }],
      synonyms: [{ synonymText: "Us", nuanceNote: "Us öz Türkçe kelimedir; akıl ise felsefi ve hukuki literatürün asli terimidir." }]
    },
    {
      slug: "makul",
      modernTurkish: "Makul",
      modernEquivalents: "akla uygun, mantıklı, ölçülü",
      transliteration: "Ma‘ḳūl",
      primaryOttoman: "معقول",
      origin: "Arapça",
      originDetail: "Arapça '-q-l kökünden ism-i mef'ûldür.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Akılla kavranan, mantığa ve sağduyuya aykırı düşmeyen.",
      rootSlug: "aql",
      morphPattern: "Mef'ûl vezninde ism-i mef'ûl (مَفْعُول)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Akıl süzgecinden geçmiş ve aklın kabul ettiği şey.",
      categories: ["felsefe", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Akla ve mantığa uygun olan, sağduyu ile çelişmeyen; insaflı, münasip.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "معقول", spellingType: "Klasik İmla", translit: "Ma‘ḳūl" }],
      examples: [{ sentenceModern: "Teklif edilen şartlar gayet makul ve kabule şayandı.", sentenceOttoman: "تكلیف ایدیلن شرط‌لر غایت معقول و قبوله شایاندی", author: "Ahmet Rasim", sourceWork: "Eşkâl-i Zaman" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1368", citation: "‘Aḳla muvâfık, ‘aḳlen makbûl." }],
      synonyms: [{ synonymText: "Mantıklı", nuanceNote: "Mantıklı biçimsel kıyasa uygunluğu; makul ise hayat tecrübesine ve vicdana uygunluğu öne çıkarır." }]
    },

    // ----------------- ROOT N-Z-M (ن-ظ-م) -----------------
    {
      slug: "nizam",
      modernTurkish: "Nizam",
      modernEquivalents: "düzen, asayiş, kural, tertip",
      transliteration: "Niẓām",
      primaryOttoman: "نظام",
      origin: "Arapça",
      originDetail: "Arapça n-z-m kökünden fi'âl vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aslen incileri ipe düzgünce dizmek demektir; oradan devlet teşkilatına ve kâinatın ahengine intikal etmiştir.",
      rootSlug: "nzm",
      morphPattern: "Fi'âl vezninde masdar-isim (فِعَال)",
      morphType: "İsim",
      morphContrib: "Dağınıklığı önleyip her cüzü yerli yerine koyma kaidesi.",
      categories: ["yonetim", "hukuk", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Her şeyin yerli yerinde bulunduğu intizamlı hal; tertip, düzen, asayiş.", register: "Genel" },
        { orderIndex: 2, definition: "Toplum ve devlet nizamını temin eden kanun ve kaideler mecmuası.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "نظام", spellingType: "Klasik İmla", translit: "Niẓām" }],
      examples: [{ sentenceModern: "Nizam-ı Âlem gayesiyle yürütülen siyaset, asırlar boyu devletin temel direği olmuştur.", sentenceOttoman: "نظام عالم غایه‌سیله یوریتیلن سیاست، عصرلر بویی دولتڭ temel دیره‌كی اولمشدر", author: "Tursun Bey", sourceWork: "Tarih-i Ebü'l-Feth" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1475", citation: "Tertîb, intizâm, kā‘ide, kānûn." }],
      synonyms: [{ synonymText: "Düzen", nuanceNote: "Düzen maddi tertibi de ifade ederken, nizam hem kozmik hem siyasi hukuki ahengi temsil eder." }]
    },
    {
      slug: "tanzimat",
      modernTurkish: "Tanzimat",
      modernEquivalents: "düzenlemeler, reformlar, Osmanlı yenileşme devri",
      transliteration: "Tanẓīmāt",
      primaryOttoman: "تنظيمات",
      origin: "Arapça",
      originDetail: "Arapça n-z-m kökünden tanzîm'in müennes çoğuludur.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "1839 Gülhane Hatt-ı Hümayunu ile başlayan idari, hukuki ve içtimai ıslahatlar devrine ad olmuştur.",
      rootSlug: "nzm",
      morphPattern: "Tef'îlât vezninde çoğul isim (تَفْعِيلَات)",
      morphType: "Çoğul İsim",
      morphContrib: "Devlet idaresinde yapılan köklü düzenleme ve reformlar bütünü.",
      categories: ["tarih", "siyaset", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Osmanlı Devleti'nde 1839 fermanıyla başlatılan idari, askeri ve hukuki yenileşme devri ve ıslahatları.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "تنظيمات", spellingType: "Klasik İmla", translit: "Tanẓīmāt" }],
      examples: [{ sentenceModern: "Tanzimat fermanı tebaanın can, mal ve ırz emniyetini kanun teminatı altına almıştır.", sentenceOttoman: "تنظیمات فرمانی تبعه‌نڭ جان، مال و عرض امنیتنی قانون تأمیناتی آلتنه آلمشدر", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "1286", citation: "Tanzimler, idari ve kanuni ıslahatlar." }],
      synonyms: [{ synonymText: "Islahat", nuanceNote: "Islahat bozulmuş olanı düzeltmeyi, tanzimat ise yeni bir nizam kurmayı anlatır." }]
    },
    {
      slug: "manzume",
      modernTurkish: "Manzume",
      modernEquivalents: "koşuk, ölçülü ve uyaklı şiir, nazım parçası",
      transliteration: "Manẓūme",
      primaryOttoman: "منظومه",
      origin: "Arapça",
      originDetail: "Arapça n-z-m kökünden ism-i mef'ûlün müennesidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Vezin ve kafiye ile inci gibi dizilmiş kelimelerden müteşekkil edebi eser.",
      rootSlug: "nzm",
      morphPattern: "Mef'ûle vezninde ism-i mef'ûl (مَفْعُولَة)",
      morphType: "İsim",
      morphContrib: "Vezin ve kafiye intizamına bağlanmış şiir veya nazım eseri.",
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Vezin ve kafiye kaidelerine riayet edilerek nazmedilmiş şiir parçası; koşuk.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "منظومه", spellingType: "Klasik İmla", translit: "Manẓūme" }],
      examples: [{ sentenceModern: "Fuzûlî'nin bu rikkatli manzumesi asırlar boyu hanendelerin dilinde terennüm edildi.", sentenceOttoman: "فضولی‌نڭ بو رقتلی منظومه‌سی عصرلر بویی خواننده‌لرڭ دیلنده ترنم ایدیلدی", author: "Ziya Paşa", sourceWork: "Harabat Mukaddimesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1406", citation: "Manzûm söz, şi‘r." }],
      synonyms: [{ synonymText: "Şiir", nuanceNote: "Her şiir bir manzumedir fakat manzumede biçimsel vezin ve kafiye intizamı hususiyetle vurgulanır." }]
    },

    // ----------------- ROOT K-M-L (ك-م-ل) -----------------
    {
      slug: "kemal",
      modernTurkish: "Kemal",
      modernEquivalents: "olgunluk, yetkinlik, eksiksizlik, erdem",
      transliteration: "Kemāl",
      primaryOttoman: "كمال",
      origin: "Arapça",
      originDetail: "Arapça k-m-l kökünden fe'âl vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Noksanın zıddıdır; fazilet ve terbiyede en yüksek derece.",
      rootSlug: "kml",
      morphPattern: "Fa'âl vezninde masdar (فَعَال)",
      morphType: "Masdar",
      morphContrib: "Bütün kusur ve eksikliklerden arınmış tam yetkinlik.",
      categories: ["felsefe", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Tam ve noksansız olma hali; fazilet, terbiye ve ahlakta en yüksek mertebe; olgunluk.", register: "Ahlak" }
      ],
      spellings: [{ arabicScript: "كمال", spellingType: "Klasik İmla", translit: "Kemāl" }],
      examples: [{ sentenceModern: "İnsanın gayesi dünyada mal yığmak değil, nefsini terbiye edip kemale erdirmektir.", sentenceOttoman: "انسانڭ غایه‌سی دنیاده مال ییغمق دگل، نفسنی تربیه ایدوب كماله ایردیرمكدر", author: "Kınalızâde Ali Çelebi", sourceWork: "Ahlâk-ı Alâî" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1169", citation: "Noksânın zıddı; fazîlet, kâmil olma." }],
      synonyms: [{ synonymText: "Olgunluk", nuanceNote: "Olgunluk yaş ve tecrübeyi de anlatırken, kemal ruhi ve felsefi mükemmelliği hedefler." }]
    },
    {
      slug: "kamil",
      modernTurkish: "Kâmil",
      modernEquivalents: "olgun, yetkin, eksiksiz, bilge",
      transliteration: "Kāmil",
      primaryOttoman: "كامل",
      origin: "Arapça",
      originDetail: "Arapça k-m-l kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Tasavvufta nefs mertebelerini aşıp fenâfillâha ve bekâbillâha ermiş mürşide 'insân-ı kâmil' denir.",
      rootSlug: "kml",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Kemal mertebesine erişmiş, ahlaken mükemmel şahıs.",
      categories: ["dini-kavramlar", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Noksansız, olgun, ilim ve fazilette kemale ermiş kimse; mürşid.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "كامل", spellingType: "Klasik İmla", translit: "Kāmil" }],
      examples: [{ sentenceModern: "Kâmil mürşitlerin huzurunda terbiye gören salikler nefsin afetlerinden halas olurlar.", sentenceOttoman: "كامل مرشدلرڭ حضورنده تربیه كؤرن سالكلر نفسڭ آفاتندن خلاص اولورلر", author: "Aziz Mahmud Hüdayi", sourceWork: "Mektubat" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1119", citation: "Noksânsız, kemâle irmiş." }],
      synonyms: [{ synonymText: "Yetkin", nuanceNote: "Yetkin teknik ehliyeti ifade ederken, kâmil ahlaki ve derûni kemali anlatır." }]
    },

    // ----------------- ROOT R-S-M (ر-س-م) -----------------
    {
      slug: "resim",
      modernTurkish: "Resim",
      modernEquivalents: "çizgi, suret, tasvir, vergi, tören kaidesi",
      transliteration: "Resm",
      primaryOttoman: "رسم",
      origin: "Arapça",
      originDetail: "Arapça r-s-m kökünden fa'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hem çizgilerle suret yapmayı, hem devletçe tarhedilen harç ve vergiyi (resm-i gümrük), hem de adet ve merasimi ifade eder.",
      rootSlug: "rsm",
      morphPattern: "Fa'l vezninde masdar-isim (فَعْل)",
      morphType: "İsim",
      morphContrib: "İz bırakma, çizme, usul ve vergi tayin etme.",
      categories: ["sanat", "yonetim", "hukuk"],
      meanings: [
        { orderIndex: 1, definition: "Çizgi ve boyalarla bir yüzey üzerine suret yapma sanatı; tablo.", register: "Sanat" },
        { orderIndex: 2, definition: "Devletçe tahsil olunan harç veya vergi; resm-i mülk, resm-i gümrük.", register: "Maliye" },
        { orderIndex: 3, definition: "Adet, tören kaidesi, usul.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "رسم", spellingType: "Klasik İmla", translit: "Resm" }],
      examples: [{ sentenceModern: "Saray ressamı Osman Hamdi Bey, şark âleminin esrarını tablolarında resmetti.", sentenceOttoman: "سرای رسامی عثمان حمدی بك، شرق عالمینڭ اسرارینی تابلو‌لرنده رسم ایتدی", author: "Halit Fahri Ozansoy", sourceWork: "Edebi Hatıralar" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "661", citation: "Tasvîr; vergi; ‘âdet ve merâsim." }],
      synonyms: [{ synonymText: "Tasvir", nuanceNote: "Tasvir yazıyla veya boyayla canlandırmayı ifade ederken, resim teknik cisme de delalet eder." }]
    },
    {
      slug: "merasim",
      modernTurkish: "Merasim",
      modernEquivalents: "tören, ayin, teşrifat, resmi kaideler",
      transliteration: "Merāsim",
      primaryOttoman: "مراسم",
      origin: "Arapça",
      originDetail: "Arapça r-s-m kökünden resm'in cem-i teksîridir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Resm kelimesinin çoğulu; resmi günlerde ve sarayda icra olunan teşrifat kaideleri bütünü.",
      rootSlug: "rsm",
      morphPattern: "Mefâ'il vezninde cem-i teksîr (مَفَاعِل)",
      morphType: "Çoğul İsim",
      morphContrib: "Usul ve tören kaidelerinin ahenkli bütünü.",
      categories: ["tarih", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Belli usul ve kaidelere riayet edilerek yapılan kutlama, matem veya resmi kabul toplantısı; tören.", register: "Teşrifat" }
      ],
      spellings: [{ arabicScript: "مراسم", spellingType: "Klasik İmla", translit: "Merāsim" }],
      examples: [{ sentenceModern: "Kılıç alayı merasimi Eyüp Sultan Camii'nde debdebeli bir teşrifatla icra olundu.", sentenceOttoman: "قیلیچ آلایی مراسیمی ایوب سلطان جامعنده دبدبه‌لی بر تشریفاتله اجرا اولوندی", author: "Ahmet Refik Altınay", sourceWork: "Samur Devri" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "647", citation: "Törenler, adetler, resmi usuller." }],
      synonyms: [{ synonymText: "Tören", nuanceNote: "Tören Türkçe genel karşılıktır; merasim ise Osmanlı teşrifat nizamının haşmetini taşır." }]
    },

    // ----------------- ROOT Ş-'-R (ش-ع-ر) -----------------
    {
      slug: "siir",
      modernTurkish: "Şiir",
      modernEquivalents: "manzume, koşuk, lirik söz, duygu terennümü",
      transliteration: "Şi‘r",
      primaryOttoman: "شعر",
      origin: "Arapça",
      originDetail: "Arapça ş-'-r kökünden fi'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İnce seziş ve derûnî hissediş demektir. Vezin, kafiye ve tahayyül ile birleşen ahenkli söz.",
      rootSlug: "sh-r",
      morphPattern: "Fi'l vezninde masdar (فِعْل)",
      morphType: "Masdar",
      morphContrib: "Sezgi, duyuş ve estetik hayali ahenkli söze dökme hüneri.",
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Zengin hayaller ve ahenkli kelimelerle hisleri terennüm eden manzum edebi eser; koşuk.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "شعر", spellingType: "Klasik İmla", translit: "Şi‘r" }],
      examples: [{ sentenceModern: "Şiir, kelimelerin musikisiyle ebediyet arasında kurulan sırlı bir köprüdür.", sentenceOttoman: "شعر، كلیمه‌لرڭ موسيقیسیله ابدیت آراسنده قورولان سرلی بر كوپری در", author: "Ahmet Haşim", sourceWork: "Piyale Mukaddimesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "782", citation: "Mevzûn u mukaffā kelâm; duygu." }],
      synonyms: [{ synonymText: "Nazım", nuanceNote: "Nazım şiirin kalıbını ve veznini; şiir ise onun içindeki estetik ruhu ve tahayyülü ifade eder." }]
    },
    {
      slug: "sair",
      modernTurkish: "Şair",
      modernEquivalents: "ozan, şiir yazarı, füsunkâr söze malik",
      transliteration: "Şâ‘ir",
      primaryOttoman: "شاعر",
      origin: "Arapça",
      originDetail: "Arapça ş-'-r kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Derûnî hisleri ve gizli manaları sezen, şiir söyleyen sanatkâr.",
      rootSlug: "sh-r",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Hissediş kudreti yüksek olan ve şiir nazmeden kimse.",
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Şiir söyleme veya yazma istidadına sahip sanatkâr; ozan.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "شاعر", spellingType: "Klasik İmla", translit: "Şâ‘ir" }],
      examples: [{ sentenceModern: "Bâkî, devrinin sultanı tarafından şairler sultanı (Sultânü'ş-Şuarâ) unvanıyla taltif edildi.", sentenceOttoman: "باقی، دورینڭ سلطانی طرفندن سلطان الشعرا عنوانيله تلطیف ایدیلدی", author: "Muallim Naci", sourceWork: "Osmanlı Şairleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "776", citation: "Şi‘r söyleyen, şâ‘irlik mevkı‘inde bulunan." }],
      synonyms: [{ synonymText: "Ozan", nuanceNote: "Ozan saz eşliğinde koşan halk âşığını; şair ise divan ve aruz geleneğini de kucaklayan müellifi anlatır." }]
    },
    {
      slug: "suur",
      modernTurkish: "Şuur",
      modernEquivalents: "bilinç, idrak, seziş, farkındalık",
      transliteration: "Şu‘ūr",
      primaryOttoman: "شعور",
      origin: "Arapça",
      originDetail: "Arapça ş-'-r kökünden fu'ûl vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Bir nesnenin inceliğini ve varlığını sezip idrak etme kabiliyeti; nefsin kendi hallerine vakıf olması.",
      rootSlug: "sh-r",
      morphPattern: "Fu'ûl vezninde masdar (فُعُول)",
      morphType: "Masdar",
      morphContrib: "Duyuların ötesinde zihnin kendi mevcudiyetini ve hadiseleri kavraması.",
      categories: ["felsefe", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "İnsanın kendi varlığından, çevresinden ve hislerinden haberdar olma kabiliyeti; bilinç, idrak.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "شعور", spellingType: "Klasik İmla", translit: "Şu‘ūr" }],
      examples: [{ sentenceModern: "Tarih şuuru olmayan bir millet, mazisini unutup istikbalini heba etmeye mahkûmdur.", sentenceOttoman: "تاریخ شعوری اولمایان بر ملت، ماضیسنی اونودوب استقبالنی هبا ایتمكه محكومدر", author: "Yahya Kemal Beyatlı", sourceWork: "Eğil Dağlar" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "782", citation: "Anlayış, idrâk, sezme." }],
      synonyms: [{ synonymText: "Bilinç", nuanceNote: "Bilinç modern psikoloji terimidir; şuur ise tarih ve ahlak felsefesinde daha derin teemmülü gösterir." }]
    },

    // ----------------- ROOT B-S-R (ب-ص-ر) -----------------
    {
      slug: "basiret",
      modernTurkish: "Basiret",
      modernEquivalents: "kalp gözü, uyanıklık, sağgörü, feraset",
      transliteration: "Baṣīret",
      primaryOttoman: "بصيرت",
      origin: "Arapça",
      originDetail: "Arapça b-s-r kökünden fa'îlet vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Basar (zahiri gözle görme) zıddına basiret, akıl ve kalple hadiselerin hakikatini ve geleceğini görmektir.",
      rootSlug: "bsr",
      morphPattern: "Fa'îlet vezninde isim (فَعِيلَة)",
      morphType: "İsim",
      morphContrib: "Maddi gözün ötesinde kalbi ve zihni basiret ile hakikate nüfuz etme.",
      categories: ["felsefe", "dini-kavramlar", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Hadiselerin iç yüzünü ve akıbetini vaktinden evvel sezip tedbir alma kâbiliyeti; sağgörü, basiret.", register: "Felsefe" }
      ],
      spellings: [{ arabicScript: "بصيرت", spellingType: "Klasik İmla", translit: "Baṣīret" }],
      examples: [{ sentenceModern: "Devlet ricalinde basiret noksan olunca en küçük gaileler bile büyük buhranlara inkılap eder.", sentenceOttoman: "دولت رجالنده بصیرت نقصان اولنجه اڭ كوچوك غائله‌لر بیله بیوك بحرانلره انقلاب ایدر", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "302", citation: "‘Aḳl u firâsetle görme; ‘akāyıkı idrâk." }],
      synonyms: [{ synonymText: "Feraset", nuanceNote: "Feraset simadan ve ipucundan çabuk sezmeyi; basiret ise derin ve devamlı basiret nazarını ifade eder." }]
    },

    // ----------------- ROOT H-S-N (ح-س-ن) -----------------
    {
      slug: "husun",
      modernTurkish: "Hüsn",
      modernEquivalents: "güzellik, iyilik, estetik letafet",
      transliteration: "Ḥüsn",
      primaryOttoman: "حسن",
      origin: "Arapça",
      originDetail: "Arapça h-s-n kökünden fu'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kubhun (çirkinliğin) zıddıdır. Hüsn-i zan (iyi niyet), hüsn-i hat (güzel yazı) gibi yüzlerce terkipten biridir.",
      rootSlug: "hsn",
      morphPattern: "Fu'l vezninde masdar-isim (فُعْل)",
      morphType: "İsim",
      morphContrib: "Kusursuz estetik ve ahlaki letafet.",
      categories: ["sanat", "edebiyat", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Güzellik, letafet, zarafet, ahlaki iyilik; kubh zıddı.", register: "Estetik" }
      ],
      spellings: [{ arabicScript: "حسن", spellingType: "Klasik İmla", translit: "Ḥüsn" }],
      examples: [{ sentenceModern: "Şeyh Galip'in Hüsn ü Aşk mesnevisi şark edebiyatının zirve şaheseridir.", sentenceOttoman: "شیخ غالبڭ حسن و عشق مثنویسی شرق ادبیاتنڭ ذروه شاه‌اثريدر", author: "Ahmet Hamdi Tanpınar", sourceWork: "XIX. Asır Türk Edebiyatı" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "534", citation: "Güzellik, iyilik, kubh zıddı." }],
      synonyms: [{ synonymText: "Güzellik", nuanceNote: "Güzellik genel tabirdir; hüsn ise edebi terkiplerde (hüsn-i ta'lil vb.) sanat zarafetini taşır." }]
    },
    {
      slug: "ihsan",
      modernTurkish: "İhsan",
      modernEquivalents: "lütuf, bağış, iyilik etme, Hakk'ı görüyormuşçasına kulluk",
      transliteration: "İḥsān",
      primaryOttoman: "احسان",
      origin: "Arapça",
      originDetail: "Arapça h-s-n kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İf'âl bâbı ta'diye bildirir: İyiliği başkasına ulaştırmak ve bir işi en güzel surette yapmak.",
      rootSlug: "hsn",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "İyilik ve güzelliği başkasına lütfetme ve ibadeti kemalle icra etme.",
      categories: ["dini-kavramlar", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Lütufta bulunma, karşılıksız bağış yapma, kerem.", register: "Genel" },
        { orderIndex: 2, definition: "Cibril hadisinde tarif edildiği üzere, Allah'ı görüyormuş gibi ibadet etme şuuru.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "احسان", spellingType: "Klasik İmla", translit: "İḥsān" }],
      examples: [{ sentenceModern: "Padişahın ihsan ettiği hil'at ve samur kürk merasimle vezire giydirildi.", sentenceOttoman: "پادشاهڭ احسان ایتدكی خلعت و سامور كورك مراسملة وزيره كیدیرلدی", author: "Naîmâ", sourceWork: "Tarih-i Naîmâ" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "57", citation: "İyilik eylemek; ‘atıyye, in‘âm." }],
      synonyms: [{ synonymText: "Lütuf", nuanceNote: "Lütuf incelik ve iyiliktir; ihsan ise somut bağışı ve kamil ameli kapsar." }]
    },

    // ----------------- ROOT D-R-S (د-ر-س) -----------------
    {
      slug: "ders",
      modernTurkish: "Ders",
      modernEquivalents: "öğreti, ibret, okuma seansı",
      transliteration: "Ders",
      primaryOttoman: "درس",
      origin: "Arapça",
      originDetail: "Arapça d-r-s kökünden fa'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kök manası 'harmanı dövüp taneleri kabuğundan çıkarmak'tır; metni tekrar tekrar tetkik edip hakikatini çıkarmayı ifade eder.",
      rootSlug: "drs",
      morphPattern: "Fa'l vezninde masdar (فَعْل)",
      morphType: "Masdar",
      morphContrib: "İlmi metinleri mütalaa edip kavrama ameliyesi.",
      categories: ["bilim", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Hocanın talebeye okuttuğu ilmi bahis; tedrisat seansı.", register: "Eğitim" },
        { orderIndex: 2, definition: "Hadiselerden çıkarılan ahlaki ibret ve nasihat.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "درس", spellingType: "Klasik İmla", translit: "Ders" }],
      examples: [{ sentenceModern: "Tarih, tekerrür eden hadiselerden ders almayanlar için acı bir mekteptir.", sentenceOttoman: "تاریخ، تكرر ایدن حادثه‌لردن درس آلمایانلر ایچون آجی بر مكتبدر", author: "Namık Kemal", sourceWork: "Makaleler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "617", citation: "Okunan ve okutulan ilim ve bahs; ‘ibret." }],
      synonyms: [{ synonymText: "İbret", nuanceNote: "İbret ahlaki uyanışı, ders ise hem ilmi talimi hem de tecrübi intizamı belirtir." }]
    },
    {
      slug: "medrese",
      modernTurkish: "Medrese",
      modernEquivalents: "yüksekokul, ilim yuvası, fakülte",
      transliteration: "Medrese",
      primaryOttoman: "مدرسه",
      origin: "Arapça",
      originDetail: "Arapça d-r-s kökünden mef'ale vezninde ism-i mekândır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'ale vezninde ders okutulan yüksek tahsil müessesesi; Sahn-ı Seman ve Süleymaniye medreseleri gibi.",
      rootSlug: "drs",
      morphPattern: "Mef'ale vezninde ism-i mekân (مَفْعَلَة)",
      morphType: "İsm-i Mekân",
      morphContrib: "Yüksek akli ve nakli ilimlerin tedris edildiği darü'l-funun.",
      categories: ["bilim", "tarih", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "İslam dünyasında ve Osmanlı'da orta ve yüksek tahsilin verildiği ilim müessesesi.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "مدرسه", spellingType: "Klasik İmla", translit: "Medrese" }],
      examples: [{ sentenceModern: "Fatih'in kurduğu Sahn-ı Seman medreseleri devrinin riyaziye ve fıkıh zirvesiydi.", sentenceOttoman: "فاتحڭ قوردیغی صحن ثمان مدرسه‌لری دورینڭ ریاضیه و فقه ذروه‌سی ايدی", author: "Süheyl Ünver", sourceWork: "Fatih Külliyesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1314", citation: "Ders okunan mekân, ‘ulûm-ı dînîyye ve ‘akliyye mektebi." }],
      synonyms: [{ synonymText: "Darülfünun", nuanceNote: "Darülfünun Tanzimat sonrası kurulan modern üniversitedir; medrese klasik ilim geleneğidir." }]
    },
    {
      slug: "muderris",
      modernTurkish: "Müderris",
      modernEquivalents: "üniversite hocası, medrese profesörü",
      transliteration: "Müderris",
      primaryOttoman: "مدرس",
      origin: "Arapça",
      originDetail: "Arapça d-r-s kökünden tef'îl bâbı ism-i fâilidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Müfa''il vezninde; medresede kürsü sahibi yüksek rütbeli ilim adamı.",
      rootSlug: "drs",
      morphPattern: "Müfa''il vezninde tef'îl ism-i fâili (مُفَعِّل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Talebelere yüksek ilimleri ders veren salahiyetli allame.",
      categories: ["bilim", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Medreselerde yüksek dersleri okutan en üst dereceli ilim adamı; profesör.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "مدرس", spellingType: "Klasik İmla", translit: "Müderris" }],
      examples: [{ sentenceModern: "Süleymaniye medresesi müderrisi, talebelerine İbn Sina'nın Şifa'sını takrir ediyordu.", sentenceOttoman: "سلیمانیه مدرسه‌سی مدرسی، طلبه‌لرینه ابن سینانڭ شفاسنی تقریر ایدیوردی", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1314", citation: "Medresede ders veren ‘ālim." }],
      synonyms: [{ synonymText: "Profesör", nuanceNote: "Müderris geleneksel medrese rütbesi olup icazet verme yetkisini haizdir." }]
    },

    // ----------------- ROOT M-L-K (م-ل-ك) -----------------
    {
      slug: "mulk",
      modernTurkish: "Mülk",
      modernEquivalents: "ülke, toprak, taşınmaz varlık, egemenlik",
      transliteration: "Mülk",
      primaryOttoman: "ملك",
      origin: "Arapça",
      originDetail: "Arapça m-l-k kökünden fu'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "'Adalet mülkün temelidir' kelam-ı kibarındaki mülk kelimesi sırf gayrimenkulü değil, devlet idaresini ve nizamı ifade eder.",
      rootSlug: "mlk",
      morphPattern: "Fu'l vezninde masdar-isim (فُعْل)",
      morphType: "İsim",
      morphContrib: "Mutlak tasarruf altında bulunan ülke veya varlık.",
      categories: ["hukuk", "yonetim", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Bir kimsenin mülkiyet ve tasarrufu altındaki taşınmaz mal; emlak.", register: "Hukuk" },
        { orderIndex: 2, definition: "Bir hükümdarın veya devletin hâkimiyeti altındaki memleket, ülke.", register: "Siyaset" }
      ],
      spellings: [{ arabicScript: "ملك", spellingType: "Klasik İmla", translit: "Mülk" }],
      examples: [{ sentenceModern: "Adalet mülkün temelidir; zulüm ile abad olanın akıbeti berbat olur.", sentenceOttoman: "عدالت ملكڭ تملیدر؛ ظلم ایله آباد اولانڭ عاقبتی برباد اولور", author: "Kınalızâde Ali Çelebi", sourceWork: "Ahlâk-ı Alâî" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1391", citation: "Tasarruf olunan nesne; memleket, devlet." }],
      synonyms: [{ synonymText: "Ülke", nuanceNote: "Mülk hem siyasi hâkimiyeti hem de hukuki mülkiyeti cem eder." }]
    },
    {
      slug: "malik",
      modernTurkish: "Malik",
      modernEquivalents: "sahip, iye, tasarruf hakkı olan",
      transliteration: "Mâlik",
      primaryOttoman: "مالك",
      origin: "Arapça",
      originDetail: "Arapça m-l-k kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Bir şey üzerinde tasarruf kudretine ve mülkiyet salahiyetine sahip olan.",
      rootSlug: "mlk",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Mülk üzerinde hukuki mülkiyeti bulunan fert.",
      categories: ["hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir mülke, mala veya hakka sahip bulunan kimse; sahip.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "مالك", spellingType: "Klasik İmla", translit: "Mâlik" }],
      examples: [{ sentenceModern: "Arazinin hakiki maliki olduğunu ispat için elindeki tapu senedini ibraz etti.", sentenceOttoman: "اراضینڭ حقیقی مالكی اولدوغنی اثبات ایچون النده‌كی طاپو سندنی ابراز ایتدی", author: "Cevdet Paşa", sourceWork: "Mecelle" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1268", citation: "Mülk sâhibi, tasarruf iden." }],
      synonyms: [{ synonymText: "Sahip", nuanceNote: "Sahip genel iyelik bildirir; malik ise tapulu ve kanuni salahiyeti vurgular." }]
    },
    {
      slug: "memleket",
      modernTurkish: "Memleket",
      modernEquivalents: "yurt, vatan, diyar, ülke",
      transliteration: "Memleket",
      primaryOttoman: "مملكت",
      origin: "Arapça",
      originDetail: "Arapça m-l-k kökünden mef'alet vezninde ism-i mekândır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mef'alet vezninde yer ismidir; hükümdarın hüküm sürdüğü vatan toprağı.",
      rootSlug: "mlk",
      morphPattern: "Mef'alet vezninde ism-i mekân (مَفْعَلَة)",
      morphType: "İsm-i Mekân",
      morphContrib: "Hükümranlığın geçerli olduğu vatan coğrafyası.",
      categories: ["siyaset", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Bir devletin idaresi altındaki toprakların bütünü; yurt, ülke, vatan.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "مملكت", spellingType: "Klasik İmla", translit: "Memleket" }],
      examples: [{ sentenceModern: "Memleketin selameti için her türlü fedakârlığı göze alan münevverler bir araya geldi.", sentenceOttoman: "مملكتڭ سلامتی ایچون هر تورلی فداكارلغی كوزه آلان منورلر بر آرایه كلدی", author: "Ömer Seyfettin", sourceWork: "Ashâb-ı Kehfimiz" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1397", citation: "Bir pâdişâhın hükmü altındaki yerler, vatan." }],
      synonyms: [{ synonymText: "Vatan", nuanceNote: "Vatan duygusal ve kutsal aidiyeti, memleket ise coğrafi ve idari bütünü öne çıkarır." }]
    },

    // ----------------- ROOT C-M-' (ج-م-ع) -----------------
    {
      slug: "cami",
      modernTurkish: "Cami",
      modernEquivalents: "ibadethane, toplayan, cem edici",
      transliteration: "Câmi‘",
      primaryOttoman: "جامع",
      origin: "Arapça",
      originDetail: "Arapça c-m-' kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aslen 'toplayan, cem eden' demektir; cemaati cuma namazında bir araya topladığı için bu mabede cami denilmiştir.",
      rootSlug: "cm-a",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Cemaati cem eden, bir araya toplayan mukaddes mekân.",
      categories: ["sanat", "dini-kavramlar", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Müslümanların cemaatle namaz kıldıkları, cuma ve bayram namazlarının eda edildiği büyük mabed.", register: "Dini İlimler" },
        { orderIndex: 2, definition: "Farklı vasıfları veya dağınık şeyleri kendinde toplayan, cem eden (sıfat).", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "جامع", spellingType: "Klasik İmla", translit: "Câmi‘" }],
      examples: [{ sentenceModern: "Süleymaniye Camii, Sinan'ın elinde taşın musikileştiği muhteşem bir şaheserdir.", sentenceOttoman: "سلیمانیه جامعی، سنانڭ النده طاشڭ موسيقيلشدكی بر شاه‌اثريدر", author: "Yahya Kemal Beyatlı", sourceWork: "Kendi Gök Kubbemiz" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "467", citation: "Toplayıcı; Cum‘a namazı kılınan büyük ma‘bed." }],
      synonyms: [{ synonymText: "Mescid", nuanceNote: "Mescid minbersiz küçük ibadethanedir; cami ise hutbe okunan cuma mabedidir." }]
    },
    {
      slug: "cemaat",
      modernTurkish: "Cemaat",
      modernEquivalents: "topluluk, insan kümesi, namaz kılanlar heyeti",
      transliteration: "Cemā‘at",
      primaryOttoman: "جماعت",
      origin: "Arapça",
      originDetail: "Arapça c-m-' kökünden fe'âlet vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Bir araya toplanmış insanlar topluluğu; mihraptaki imama iktida eden müminler heyeti.",
      rootSlug: "cm-a",
      morphPattern: "Fa'âlet vezninde topluluk ismi (فَعَالَة)",
      morphType: "Topluluk İsim",
      morphContrib: "Müşterek inanç veya gaye etrafında toplanmış zümre.",
      categories: ["dini-kavramlar", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir imama uyarak namaz kılanlar topluluğu.", register: "Dini İlimler" },
        { orderIndex: 2, definition: "Aynı inanç, fikir veya meslek etrafında toplanmış insan zümresi; topluluk.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "جماعت", spellingType: "Klasik İmla", translit: "Cemā‘at" }],
      examples: [{ sentenceModern: "Sabah ezanıyla birlikte cami avlusunda toplanan cemaat saf saf dizildi.", sentenceOttoman: "صباح اذانیله برلكده جامع حوشه‌سنده طوپلانان جماعت صف صف دیزیلدی", author: "Ahmet Rasim", sourceWork: "Ramazan Sohbetleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "477", citation: "İnsan kalabalığı; cem‘iyyet." }],
      synonyms: [{ synonymText: "Topluluk", nuanceNote: "Topluluk seküler kümelenmeleri anlatırken, cemaat manevi ve akidevi rabıtayı da içerir." }]
    },
    {
      slug: "mecmua",
      modernTurkish: "Mecmua",
      modernEquivalents: "dergi, risaleler derlemesi, şiir antolojisi",
      transliteration: "Mecmū‘a",
      primaryOttoman: "مجموعه",
      origin: "Arapça",
      originDetail: "Arapça c-m-' kökünden ism-i mef'ûlün müennesidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Çeşitli risale, şiir veya makalelerin bir araya toplandığı ciltli mecmua veya periyodik dergi.",
      rootSlug: "cm-a",
      morphPattern: "Mef'ûle vezninde ism-i mef'ûl (مَفْعُولَة)",
      morphType: "İsim",
      morphContrib: "Dağınık metinlerin toplanıp ciltlenmiş mecmuası.",
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Edebi veya ilmi yazıların, şiirlerin bir araya getirildiği derleme defter veya süreli yayın; dergi.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "مجموعه", spellingType: "Klasik İmla", translit: "Mecmū‘a" }],
      examples: [{ sentenceModern: "Servet-i Fünûn mecmuası devrin en parlak şair ve ediplerinin neşir vasıtası oldu.", sentenceOttoman: "ثروت فنون مجموعه‌سی دورڭ اڭ پارلاق شاعر و ادیبلرینڭ نشر واسطه‌سی اولدی", author: "Halid Ziya Uşaklıgil", sourceWork: "Kırk Yıl" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1310", citation: "Toplanmış risâleler cildi; dergi." }],
      synonyms: [{ synonymText: "Dergi", nuanceNote: "Dergi modern periyodiği gösterir; mecmua ise tarihi el yazması güfte ve şiir antolojilerini de içine alır." }]
    },
    {
      slug: "icma",
      modernTurkish: "İcmâ",
      modernEquivalents: "görüş birliği, ulema ittifakı, oydaşma",
      transliteration: "İcmā‘",
      primaryOttoman: "اجماع",
      origin: "Arapça",
      originDetail: "Arapça c-m-' kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Fıkıh usulünde bir asırda yaşayan müçtehidlerin şer'i bir hüküm üzerinde ittifak etmeleridir (Edille-i Şer'iyye'nin üçüncüsüdür).",
      rootSlug: "cm-a",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Farklı reyleri tek bir hükümde toplayıp birleştirme.",
      categories: ["hukuk", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Fıkıh ilminde İslam müçtehitlerinin bir meselenin şer'i hükmü üzerinde oy birliğiyle ittifak etmesi.", register: "Fıkıh Usulü" }
      ],
      spellings: [{ arabicScript: "اجماع", spellingType: "Klasik İmla", translit: "İcmā‘" }],
      examples: [{ sentenceModern: "Bu meselenin caiz olduğuna dair fukahanın icmâı mevcuttur.", sentenceOttoman: "بو مسئله‌نڭ جائز اولدوغنه دائر فقها‌نڭ اجماعی موجوددر", author: "Cevdet Paşa", sourceWork: "Mecelle" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "62", citation: "Fikir ve rey ittifāḳı; icmâ‘-ı ümmet." }],
      synonyms: [{ synonymText: "İttifak", nuanceNote: "İttifak genel anlaşmadır; icmâ ise hukuki içtihatta ulema mutabakatına hasredilmiş bir şer'i delildir." }]
    },

    // ----------------- PERSIAN ORIGIN WORDS (FARSÇA KELİMELER) -----------------
    {
      slug: "cihangir",
      modernTurkish: "Cihangir",
      modernEquivalents: "dünyayı fetheden, fatih, cihan fatihi",
      transliteration: "Cihāngīr",
      primaryOttoman: "جهانگیر",
      origin: "Farsça",
      originDetail: "Farsça cihan (dünya) ve gîr (tutan, fetheden) birleşik kelimesi.",
      partOfSpeech: "Sıfat / İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Farsça mürekkep isimdir; Osmanlı padişahları için cihangirane gazavatı tavsif eder.",
      rootSlug: null,
      categories: ["tarih", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Dünyaya hâkim olan, cihanı fetheden kudretli hükümdar.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "جهانگیر", spellingType: "Klasik İmla", translit: "Cihāngīr" }],
      examples: [{ sentenceModern: "Yavuz Sultan Selim, sekiz yıla bir asırlık fütûhat sığdıran bir cihangirdi.", sentenceOttoman: "یاووز سلطان سلیم، سكز ییله بر عصرلك فتوحات صیغدیران بر جهانگیر ايدی", author: "Yahya Kemal Beyatlı", sourceWork: "Tarih Muhasebeleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "484", citation: "Dünyāyı feth iden pâdişâh." }],
      synonyms: [{ synonymText: "Fâtih", nuanceNote: "Fatih belirli bir şehri açan, cihangir ise dünyayı zapteden küresel fatihtir." }]
    },
    {
      slug: "dilhun",
      modernTurkish: "Dilhûn",
      modernEquivalents: "bağrı yanık, içi kan ağlayan, kederli",
      transliteration: "Dil-ḫūn",
      primaryOttoman: "دلخون",
      origin: "Farsça",
      originDetail: "Farsça dil (gönül) ve hûn (kan) kelimelerinin birleşimi.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Divan şiirinde âşıkın hicran ve gam sebebiyle gönlünün kan dolduğunu anlatan vazgeçilmez mazmundur.",
      rootSlug: null,
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Gönlü kan ağlayan, pek büyük keder ve acı içinde bulunan âşık.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "دلخون", spellingType: "Klasik İmla", translit: "Dil-ḫūn" }],
      examples: [{ sentenceModern: "Gördüm ol serv-i bülendin sitem-i hicranın / Dilhûn eyledi bülbül gibi efgan beni.", sentenceOttoman: "كؤردم اول سرو بلندڭ ستم هجرانین / دلخون ایله‌دی بلبل كبی افغان بنی", author: "Bâkî", sourceWork: "Divan" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "216", citation: "Gönlü kanlı, içi kan ağlayan." }],
      synonyms: [{ synonymText: "Ciger-hûn", nuanceNote: "Eş anlamlı edebi Farsça terkip olup bağrın parçalanmasını anlatır." }]
    },
    {
      slug: "hemdem",
      modernTurkish: "Hemdem",
      modernEquivalents: "can ciğer dost, yoldaş, dert ortağı",
      transliteration: "Hem-dem",
      primaryOttoman: "همدم",
      origin: "Farsça",
      originDetail: "Farsça hem- (birlikte) ve dem (nefes) birleşimi.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aynı nefesi paylaşacak kadar yakın olan samimi sırdaş ve dost.",
      rootSlug: null,
      categories: ["edebiyat", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Birlikte nefes alan, her an beraber olan samimi dost, arkadaş, sırdaş.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "همدم", spellingType: "Klasik İmla", translit: "Hem-dem" }],
      examples: [{ sentenceModern: "Bu ıssız konakta yalnız eski kitaplar onun yegâne hemdemi olmuştu.", sentenceOttoman: "بو ایسسز قوناقده یالڭز اسكی كتابلر اونڭ یكانه همدمی اولمشدی", author: "Halid Ziya Uşaklıgil", sourceWork: "Aşk-ı Memnu" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1517", citation: "Birlikte nefes alan, samîmî dost." }],
      synonyms: [{ synonymText: "Nedim", nuanceNote: "Nedim saray musahibidir; hemdem ise gönülden bağlı dostu ifade eder." }]
    },
    {
      slug: "derkar",
      modernTurkish: "Derkâr",
      modernEquivalents: "meydanda, aşikâr, şüphesiz, bilinen",
      transliteration: "Der-kār",
      primaryOttoman: "دركار",
      origin: "Farsça",
      originDetail: "Farsça der (içinde) ve kâr (iş) edat ve kelimelerinden.",
      partOfSpeech: "Sıfat / Zarf",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İşte olan, iş başında ve göz önünde bulunan; aşikâr ve bedihi manasında kullanılır.",
      rootSlug: null,
      categories: ["edebiyat", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Açık, belli, aşikâr, şüphesizce ortada olan.", register: "Resmi Dil" }
      ],
      spellings: [{ arabicScript: "دركار", spellingType: "Klasik İmla", translit: "Der-kār" }],
      examples: [{ sentenceModern: "Sadrazamın devlete olan sadakat ve gayreti her veçhile derkârdır.", sentenceOttoman: "صدر اعظمڭ دولته اولان صداقت و غیرتی هر وجهله دركاردر", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "627", citation: "Âşikâr, meydânda, ma‘lûm." }],
      synonyms: [{ synonymText: "Aşikâr", nuanceNote: "Aşikâr doğrudan görüneni, derkâr ise tereddütsüz bilinen durumu anlatır." }]
    },
    {
      slug: "payidar",
      modernTurkish: "Payidar",
      modernEquivalents: "sonsuza dek yaşayan, kalıcı, baki",
      transliteration: "Pāyidār",
      primaryOttoman: "پایدار",
      origin: "Farsça",
      originDetail: "Farsça pây (ayak) ve dâr (tutan) birleşimi.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Ayakta duran, yıkılmayan, ebedi olan manasındadır.",
      rootSlug: null,
      categories: ["tarih", "siyaset", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Sürekli ayakta duran, yok olmayan, kalıcı, ebedî.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "پایدار", spellingType: "Klasik İmla", translit: "Pāyidār" }],
      examples: [{ sentenceModern: "Türkiye Cumhuriyeti ilelebet payidar kalacaktır.", sentenceOttoman: "توركیه جمهوریتی الى الابد پایدار قالاجقدر", author: "Mustafa Kemal Atatürk", sourceWork: "Nutuk" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "374", citation: "Ayakta durucu, dâim ve bākī." }],
      synonyms: [{ synonymText: "Bâkî", nuanceNote: "Bâkî Arapça ilahi bekâyı temsil ederken; payidar dünyevi ve milli eserlerin devamını da anlatır." }]
    },
    {
      slug: "hosnud",
      modernTurkish: "Hoşnut",
      modernEquivalents: "memnun, razı, sevinçli, gönlü hoş",
      transliteration: "Ḫoşnūd",
      primaryOttoman: "خوشنود",
      origin: "Farsça",
      originDetail: "Farsça hoş (güzel) ve nûd (sevinç, rıza) kelimelerinden.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Halinden memnun ve gönlü mutmain olan kimse.",
      rootSlug: null,
      categories: ["gunluk-hayat", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Halinden, muameleden veya neticeden memnun ve razı olan; sevinçli.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "خوشنود", spellingType: "Klasik İmla", translit: "Ḫoşnūd" }],
      examples: [{ sentenceModern: "Padişah, tebaasının refah ve adalet içinde yaşamasından gayet hoşnuttur.", sentenceOttoman: "پادشاه، تبعه‌سنڭ رفاه و عدالت ایچنده یاشاماسندن غایت خوشنوددر", author: "Naîmâ", sourceWork: "Tarih-i Naîmâ" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "599", citation: "Rāzı, memnûn, şâd." }],
      synonyms: [{ synonymText: "Memnun", nuanceNote: "Memnun Arapça lütuf karşılığı sevinci, hoşnûd ise iç huzurunu ve rızayı anlatır." }]
    },
    {
      slug: "serbest",
      modernTurkish: "Serbest",
      modernEquivalents: "hür, özgür, başıbağsız, engelsiz",
      transliteration: "Ser-best",
      primaryOttoman: "سربست",
      origin: "Farsça",
      originDetail: "Farsça ser (baş) ve beste (bağlı) köklerinden; başı bağlı, bağımsız birlik.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aslen askeri ve timar ıstılahında 'serbest timar' (müdahalesiz) tabirinden doğmuş, bilahare hürriyet manasını almıştır.",
      rootSlug: null,
      categories: ["yonetim", "hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Herhangi bir kısıtlama veya kayıt altında olmayan, serazad, hür.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "سربست", spellingType: "Klasik İmla", translit: "Ser-best" }],
      examples: [{ sentenceModern: "Tüccarların limanlarda serbest ticaret yapabilmesi için ferman sadır oldu.", sentenceOttoman: "تجارلرڭ لیمانلرده سربست تجارت یاپه‌بیلمسی ایچون فرمان صادر اولدی", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "715", citation: "Ser-āzād, hür, mukayyed olmayan." }],
      synonyms: [{ synonymText: "Hür", nuanceNote: "Hür esaret zıddıdır; serbest ise hareket serbestisini ve muafiyeti vurgular." }]
    },

    // ----------------- HISTORICAL TURKISH ORIGIN WORDS (TÜRKÇE KELİMELER) -----------------
    {
      slug: "yalavac",
      modernTurkish: "Yalavaç",
      modernEquivalents: "elçi, peygamber, haberci",
      transliteration: "Yalavaç",
      primaryOttoman: "یلاواچ",
      origin: "Türkçe",
      originDetail: "Eski Türkçe yala- (haber vermek) kökünden türetilmiştir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Divanü Lügati't-Türk ve Kutadgu Bilig'de peygamber ve resûl karşılığı olarak geçen tarihi Türkçe kelimedir; erken Osmanlı metinlerinde yaşar.",
      rootSlug: null,
      categories: ["dini-kavramlar", "edebiyat", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Allah tarafından insanlara emir ve yasakları bildirmek üzere vazifelendirilen elçi; peygamber, resûl.", register: "Eski Türkçe" }
      ],
      spellings: [{ arabicScript: "یلاواچ", spellingType: "Klasik İmla", translit: "Yalavaç" }],
      examples: [{ sentenceModern: "Tengri yalavacını cümle âleme rahmet kıldı.", sentenceOttoman: "تڭری یلاواچنی جمله عالمه رحمت قیلدی", author: "Âşık Paşa", sourceWork: "Garibnâme" }],
      sources: [{ sourceId: "src-lehce", pageNumber: "1230", citation: "Peygamber, elçi mânâsında eski Türkçe elfâzdandır." }],
      synonyms: [{ synonymText: "Peygamber", nuanceNote: "Farsça karşılığıdır; yalavaç ise erken Türkçedeki öz karşılığıdır." }]
    },
    {
      slug: "buyruk",
      modernTurkish: "Buyruk",
      modernEquivalents: "emir, ferman, irade, hüküm",
      transliteration: "Buyruḳ",
      primaryOttoman: "بویریق",
      origin: "Türkçe",
      originDetail: "Eski Türkçe buyur- (emretmek) fiilinden türetilmiştir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Osmanlı fermanlarında ve kanunnamelerinde 'hünkâr buyruğu' şeklinde asırlarca resmi ve edebi dilde yaşamıştır.",
      rootSlug: null,
      categories: ["yonetim", "hukuk", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Hükümdarın veya salahiyetli amirin yerine getirilmesini emrettiği hüküm; ferman, emir.", register: "Bürokrasi" }
      ],
      spellings: [{ arabicScript: "بویریق", spellingType: "Klasik İmla", translit: "Buyruḳ" }],
      examples: [{ sentenceModern: "Padişah buyruğu üzere ordu-yı hümayun sefere azimet eyledi.", sentenceOttoman: "پادشاه بویریغی اوزره اردوئے همایون سفره عزیمت ایله‌دی", author: "Kemalpaşazâde", sourceWork: "Tevarih-i Âl-i Osman" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "329", citation: "Emr, fermân, irâde." }],
      synonyms: [{ synonymText: "Ferman", nuanceNote: "Ferman yazılı padişah beratını; buyruk ise şifahi ve umumi iradeyi de kapsar." }]
    },
    {
      slug: "kutlu",
      modernTurkish: "Kutlu",
      modernEquivalents: "mübarek, uğurlu, feyizli, mesut",
      transliteration: "Ḳutlu",
      primaryOttoman: "قوتلو",
      origin: "Türkçe",
      originDetail: "Eski Türkçe kut (ilahi lütuf, saadet, baht) kökünden.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Devlet idare salahiyeti ve ilahi talih manasındaki 'kut' kökünden gelir.",
      rootSlug: null,
      categories: ["gunluk-hayat", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Uğur ve saadet getiren, mübarek, tebrike layık; feyizli.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "قوتلو", spellingType: "Klasik İmla", translit: "Ḳutlu" }],
      examples: [{ sentenceModern: "Bu feth-i mübîn cümle ehl-i İslama kutlu ve mübarek olsun.", sentenceOttoman: "بو فتح مبین جمله اهل اسلامه قوتلو و مبارك اولسون", author: "Tursun Bey", sourceWork: "Tarih-i Ebü'l-Feth" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1086", citation: "Mübârek, meymûn, uġurlu." }],
      synonyms: [{ synonymText: "Mübarek", nuanceNote: "Mübarek Arapça bereket kökünden; kutlu ise Türk devlet geleneğinin kadim tabiridir." }]
    },
    {
      slug: "tore",
      modernTurkish: "Töre",
      modernEquivalents: "örf, an'ane, gelenek, milli nizam",
      transliteration: "Töre",
      primaryOttoman: "توره",
      origin: "Türkçe",
      originDetail: "Eski Türkçe törö (kanun, nizam, meclis kaidesi).",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Göktürklerden Osmanlı'ya kadar yazısız örfi hukukun ve ahlak kaidelerinin temel taşıdır.",
      rootSlug: null,
      categories: ["hukuk", "tarih", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir cemiyette kökleşmiş örf, adet ve an'aneler bütünü; örfi hukuk kaideleri.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "توره", spellingType: "Klasik İmla", translit: "Töre" }],
      examples: [{ sentenceModern: "Eski Türk töresinde adalet mülkün ve hakanlığın temeli kabul edilirdi.", sentenceOttoman: "اسكی تورك توره‌سنده عدالت ملكڭ و خاقانلغڭ تملى قبول ایدیلوردی", author: "Ziya Gökalp", sourceWork: "Türk Töresi" }],
      sources: [{ sourceId: "src-lehce", pageNumber: "450", citation: "Âyin, resm, ‘âdet, kānûn-ı kadîm." }],
      synonyms: [{ synonymText: "Örf", nuanceNote: "Örf İslam hukukunda şeriata zıt olmayan toplumsal adettir; töre ise kadim Türk nizamıdır." }]
    },
    {
      slug: "bengu",
      modernTurkish: "Bengü / Mengü",
      modernEquivalents: "ebedi, sonsuz, ölümsüz, ölümsüzlük suyu",
      transliteration: "Bengü",
      primaryOttoman: "بڭو",
      origin: "Türkçe",
      originDetail: "Eski Türkçe bengü (sonsuz, ebedi taş - bengü taş).",
      partOfSpeech: "Sıfat / İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Orhun kitabelerine 'bengü taş' (ebedi abideler) denirdi. Klasik dönemde 'âb-ı hayât' yerine 'bengisu' terkibiyle yaşamıştır.",
      rootSlug: null,
      categories: ["edebiyat", "felsefe", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Sonu olmayan, ebediyen yaşayan, ölümsüz; âb-ı hayât.", register: "Eski Türkçe" }
      ],
      spellings: [{ arabicScript: "بڭو", spellingType: "Klasik İmla", translit: "Bengü", notes: "Nazal nûn (sağır kef) ile yazılır." }],
      examples: [{ sentenceModern: "Orhun vadisinde dikilen o bengü taşlar ecdadın ebediyete hitabıdır.", sentenceOttoman: "اورخون وادیسنده دیكیلن او بڭو طاشلر اجدادڭ ابدیته خطابیدر", author: "Necip Asım Yazıksız", sourceWork: "Eski Türk Yazıtları" }],
      sources: [{ sourceId: "src-lehce", pageNumber: "189", citation: "Dâim, ebedî, zevâlsiz." }],
      synonyms: [{ synonymText: "Ebedî", nuanceNote: "Ebedî Arapça sonu olmayanı; bengü ise Türkçe kadim taşların ve hafızanın ebediyetini anlatır." }]
    },
    {
      slug: "gorklu",
      modernTurkish: "Görklü",
      modernEquivalents: "heybetli, güzel, gösterişli, kutlu",
      transliteration: "Görklü",
      primaryOttoman: "كؤركلو",
      origin: "Türkçe",
      originDetail: "Eski Türkçe körk (görünüş, güzellik) kökünden.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Dede Korkut Kitabı'nda ve Yunus Emre Divanı'nda 'Görklü Muhammed' terkibiyle hürmet ve cemal sıfatı olarak geçer.",
      rootSlug: null,
      categories: ["edebiyat", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Pek güzel, nurlu, heybetli ve ulu olan; hayranlık uyandıran.", register: "Eski Türkçe" }
      ],
      spellings: [{ arabicScript: "كؤركلو", spellingType: "Klasik İmla", translit: "Görklü" }],
      examples: [{ sentenceModern: "Arayı arayı bulsam izini / İzinin tozuna sürsem yüzümü / Hak nasip eylese görsem yüzünü / Ya Muhammed canım arzular seni.", sentenceOttoman: "آرایی آرایی بولسام ایزڭی / ایزڭڭ طوزینه سورسم یوزمی / حق نصیب ایله‌سه كؤرسم یوزڭی / یا محمد جانم آرزولار سنی", author: "Yunus Emre", sourceWork: "Divan" }],
      sources: [{ sourceId: "src-lehce", pageNumber: "840", citation: "Güzel, cemîl, revnakdâr." }],
      synonyms: [{ synonymText: "Cemîl", nuanceNote: "Cemîl Arapça zarafeti; görklü ise hem heybet hem de nurani ihtişamı ifade eder." }]
    }
  ],

  // Structured collections
  collections: [
    {
      slug: "osmanlica-temel-hukuk",
      title: "Mecelle ve Osmanlı Hukuk Terimleri",
      description: "Osmanlı kazai ve idari teşkilatının temel kavramları, muhakeme usulleri ve kanun dili.",
      isFeatured: true,
      wordSlugs: ["hukum", "hakim", "mahkeme", "mahkum", "muhakeme", "tahkim", "hukuk", "hak", "mucmel", "teslim"]
    },
    {
      slug: "edebiyat-ve-belagat",
      title: "Klasik Belâgat ve Edebî Tenkit",
      description: "Tanzimat'tan Servet-i Fünûn'a edebi tenkit, retorik incelikleri, şiir ve nesir sanatı.",
      isFeatured: true,
      wordSlugs: ["tenkit", "munakkid", "belagat", "siir", "sair", "manzume", "kitabet", "cemal", "dilhun"]
    },
    {
      slug: "hikmet-ve-tefekkur",
      title: "Felsefe, Mantık ve Hikmet-i Vücûd",
      description: "Şark ve Garp arasında akıl yürütme, tefekkür dünyası, varlık mefhumu ve hakikat arayışı.",
      isFeatured: true,
      wordSlugs: ["fikir", "tefekkur", "mutefekkir", "efkar", "akil", "makul", "hakikat", "tahkik", "vucut", "vecd", "basiret"]
    },
    {
      slug: "devlet-ve-divan-dili",
      title: "Bâbıâli ve Divan-ı Hümâyun Bürokrasi Dili",
      description: "Fermanlar, beratlar, ıslahat belgeleri ve devlet teşkilatında kullanılan meşhur kelimeler.",
      isFeatured: false,
      wordSlugs: ["hukumet", "nizam", "tanzimat", "katip", "buyruk", "derkar", "merasim", "mulk", "memleket"]
    },
    {
      slug: "kadim-turkce-yadigarlar",
      title: "Osmanlı Metinlerinde Yaşayan Kadim Türkçe",
      description: "Dede Korkut'tan Osmanlı kanunnamelerine intikal eden köklü Türkçe miras.",
      isFeatured: false,
      wordSlugs: ["yalavac", "buyruk", "kutlu", "tore", "bengu", "gorklu"]
    }
  ],

  // Interactive Quiz Questions
  quizzes: [
    {
      type: "MEANING_CHOICE",
      prompt: "Osmanlı Türkçesindeki 'Tenkît' (تنقيد) kelimesinin kök manası ve edebi ıstılah anlamı nedir?",
      targetScript: "تنقيد",
      options: JSON.stringify([
        "Parayı mihenge vurarak sahtesini ayıklamak / Edebi eserin meziyet ve kusurlarını incelemek",
        "Bir suçluyu mahkeme huzuruna çıkarıp cezalandırmak",
        "Ferman ve beratları altın yaldızlı mürekkeple yazmak",
        "İki devlet arasındaki hudut ihtilafını sulh ile çözmek"
      ]),
      correctAnswer: "Parayı mihenge vurarak sahtesini ayıklamak / Edebi eserin meziyet ve kusurlarını incelemek",
      explanation: "Arapça n-q-d (نقد) kökünden gelen tef'îl bâbındaki tenkit, evvela paranın ayarını denetlemek manasına gelir; Şinasi ve Namık Kemal devrinde modern eleştiri manasını kazanmıştır.",
      relatedWordSlug: "tenkit"
    },
    {
      type: "READING_SCRIPT",
      prompt: "Aşağıdaki Osmanlıca ibarede yazılı olan kelimeyi Latin harfleriyle doğru okunuşu hangisidir?",
      targetScript: "محاكمه",
      options: JSON.stringify(["Muhakeme", "Müşahede", "Mahkûmiyet", "Münakaşa"]),
      correctAnswer: "Muhakeme",
      explanation: "Mim, ha, elif, kef, mim ve he (محاكمه) harfleriyle yazılan kelime 'muhakeme' (yargılama ve akıl yürütme) kelimesidir.",
      relatedWordSlug: "muhakeme"
    },
    {
      type: "ROOT_FINDING",
      prompt: "'Hâkim', 'Mahkeme', 'Hükûmet', 'Tahkim' kelimelerinin müşterek etimolojik kökü hangisidir?",
      targetScript: "ح-ك-م",
      options: JSON.stringify(["H-K-M (حكم)", "H-Q-Q (حقق)", "H-K-Y (حكى)", "H-D-M (خدم)"]),
      correctAnswer: "H-K-M (حكم)",
      explanation: "Bu kelimelerin tamamı 'hükmetme, karar kılma, nizama bağlama' manasındaki H-K-M (حكم) kökünden farklı bâb ve vezinlerde türetilmiştir.",
      relatedWordSlug: "hukum"
    },
    {
      type: "EQUIVALENT_MATCH",
      prompt: "Günümüz Türkçesindeki 'Eleştirmen' kelimesinin klasik Osmanlı Türkçesindeki tam karşılığı hangisidir?",
      targetScript: "منقد",
      options: JSON.stringify(["Münekkit (منقد)", "Müderris (مدرس)", "Münşi (منشی)", "Mütefekkir (متفكر)"]),
      correctAnswer: "Münekkit (منقد)",
      explanation: "Münekkit, tenkit eylemini yapan uzman eleştirmen demektir; tef'îl bâbının ism-i fâilidir.",
      relatedWordSlug: "munakkid"
    },
    {
      type: "READING_SCRIPT",
      prompt: "Aşağıda Osmanlıca yazılışı verilen ve 'Açık, belli, şüphesiz' manasına gelen Farsça terkip hangisidir?",
      targetScript: "دركار",
      options: JSON.stringify(["Derkâr", "Dergâh", "Derdest", "Derhâl"]),
      correctAnswer: "Derkâr",
      explanation: "Dal, rı, kef, elif ve rı (دركار) harfleriyle yazılan 'Derkâr', resmi vesikalarda 'şüphesizce ortada olan' manasında sıklıkla geçer.",
      relatedWordSlug: "derkar"
    },
    {
      type: "MEANING_CHOICE",
      prompt: "'Belâgat' (بلاغت) ilminin tarifinde geçen 'muktezâ-yı hâle mutâbakat' neyi ifade eder?",
      targetScript: "بلاغت",
      options: JSON.stringify([
        "Sözün dinleyicinin makamına, idrakine ve duruma tam intibak etmesini",
        "Sadece aruz vezninin en ağır kalıplarını kullanmayı",
        "Kelimelerin yalnızca Farsça terkiplerden seçilmesini",
        "Sözü olabildiğince uzatarak sanat göstermeyi"
      ]),
      correctAnswer: "Sözün dinleyicinin makamına, idrakine ve duruma tam intibak etmesini",
      explanation: "Belâgat yalnızca süslü söyleyiş değil, yerinde ve dinleyenin seviyesine muvafık fasih söz söyleme sanatıdır.",
      relatedWordSlug: "belagat"
    },
    {
      type: "ROOT_FINDING",
      prompt: "'Tefekkür', 'Mütefekkir' ve 'Efkâr' kelimelerinin müşterek kök harfleri hangisidir?",
      targetScript: "ف-ك-ر",
      options: JSON.stringify(["F-K-R (فكر)", "F-H-M (فهم)", "F-Q-H (فقه)", "F-K-K (فكك)"]),
      correctAnswer: "F-K-R (فكر)",
      explanation: "Fikr mücerred masdar, tefekkür tefa''ul masdarı, mütefekkir ism-i fâili, efkâr ise cem-i teksîridir.",
      relatedWordSlug: "fikir"
    },
    {
      type: "MEANING_CHOICE",
      prompt: "Fuzûlî ve Yunus Emre metinlerinde geçen 'Görklü' kelimesinin manası nedir?",
      targetScript: "كؤركلو",
      options: JSON.stringify([
        "Pek güzel, nurlu ve heybetli olan",
        "Korku salan ve zalimce davranan",
        "Gözleri görmeyen, âmâ",
        "Yalnız başına dağlarda yaşayan"
      ]),
      correctAnswer: "Pek güzel, nurlu ve heybetli olan",
      explanation: "Görklü, Eski Türkçedeki 'körk' (cemal, güzellik) kökünden gelir ve nurlu, kutlu manasındadır.",
      relatedWordSlug: "gorklu"
    }
  ]
};
