// Master verified Ottoman Turkish vocabulary extension for LÜGAT
// Contains foundational roots, artistic, judicial, and philosophical word families

module.exports = {
  roots: [
    {
      slug: "fth",
      rootLettersModern: "F-T-H",
      rootLettersArabic: "ف-ت-ح",
      origin: "Arapça",
      primaryMeaning: "Açma, engeli kaldırma, bir memleketi adaletle fethetme",
      description: "Maddi kapıyı açmaktan kalbi ve memleketi açmaya kadar uzanan fütûhat, miftah ve fâtih kökü."
    },
    {
      slug: "sn-a",
      rootLettersModern: "S-N-A",
      rootLettersArabic: "ص-ن-ع",
      origin: "Arapça",
      primaryMeaning: "Maharetle yapma, şekil verme, sanat vücuda getirme",
      description: "San'at, sâni' (yaratıcı sanatkâr), masnu'at ve sınaatın kökü."
    },
    {
      slug: "qbl",
      rootLettersModern: "K-B-L",
      rootLettersArabic: "ق-ب-ل",
      origin: "Arapça",
      primaryMeaning: "Yüz yüze gelme, karşılama, yönelme, rıza ile alma",
      description: "İstikbal (gelecek), kıble (yönelinen yön), kabul, ikbal ve mukabil."
    },
    {
      slug: "hlf",
      rootLettersModern: "H-L-F",
      rootLettersArabic: "خ-ل-ف",
      origin: "Arapça",
      primaryMeaning: "Arkasından gelme, yerine geçme, zıt olma",
      description: "Halife (ardıl), hilafet, ihtilaf (ayrılığa düşme) ve muhalefet."
    },
    {
      slug: "kdm",
      rootLettersModern: "K-D-M",
      rootLettersArabic: "ق-د-م",
      origin: "Arapça",
      primaryMeaning: "Önde olma, geçmişte bulunma, ayağını ileri atma",
      description: "Kadîm (ezeli/eski), takdim etme, mukaddime (önsöz) ve ikdam."
    },
    {
      slug: "srf",
      rootLettersModern: "Ş-R-F",
      rootLettersArabic: "ش-ر-ف",
      origin: "Arapça",
      primaryMeaning: "Yüksek olma, haysiyetli ve ulu olma, gözetleme",
      description: "Şeref, şerîf, teşrifat, müşerref ve cami şerefesi."
    },
    {
      slug: "bst",
      rootLettersModern: "B-S-T",
      rootLettersArabic: "ب-س-ط",
      origin: "Arapça",
      primaryMeaning: "Genişletme, serme, yayma, ferahlatma",
      description: "Bast (gönül ferahlığı/genişlik), basit (katışıksız/yalın) ve inbisat."
    },
    {
      slug: "nfa",
      rootLettersModern: "N-F-A",
      rootLettersArabic: "ن-ف-ع",
      origin: "Arapça",
      primaryMeaning: "Fayda verme, yararlı olma, kazanç sağlama",
      description: "Menfaat, nâfi' ve intifa'."
    },
    {
      slug: "mna",
      rootLettersModern: "M-N-A",
      rootLettersArabic: "م-ن-ع",
      origin: "Arapça",
      primaryMeaning: "Engel olma, yasaklama, koruyup zaptetme",
      description: "Men', mâni', memnu' ve imtina'."
    },
    {
      slug: "sma",
      rootLettersModern: "S-M-A",
      rootLettersArabic: "س-م-ع",
      origin: "Arapça",
      primaryMeaning: "Kulağıyla işitme, dinleme, musiki duyma",
      description: "Sem' (işitme duyusu), sâmi' (dinleyici), semâ' (Mevlevi ayini) ve istima'."
    }
  ],

  words: [
    // --- F-T-H (ف-ت-ح) ---
    {
      slug: "fetih",
      modernTurkish: "Fetih",
      modernEquivalents: "açma, yurt edinme, zafer, kapı açma",
      transliteration: "Fetḥ",
      primaryOttoman: "فتح",
      origin: "Arapça",
      originDetail: "Arapça f-t-h kökünden fa'l vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İstilanın zıddıdır; bir memleketi adalet, asayiş ve hürriyete açmak.",
      rootSlug: "fth",
      morphPattern: "Fa'l vezninde masdar (فَعْل)",
      morphType: "Masdar",
      morphContrib: "Kapalı ve kilitli olanı açıp hürriyete kavuşturma.",
      categories: ["tarih", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Bir şehri veya kaleyi harp ile zaptedip adalet idaresine kavuşturma; açma.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "فتح", spellingType: "Klasik İmla", translit: "Fetḥ" }],
      examples: [{ sentenceModern: "1453 senesindeki feth-i mübîn, bir çağın kapanıp yeni bir medeniyet asrının açılmasıdır.", sentenceOttoman: "1453 سنه‌سنده‌كی فتح مبین، بر چاغڭ قپانیب یكی بر مدنیت عصرینڭ آچیلماسیدر", author: "Yahya Kemal Beyatlı", sourceWork: "Kendi Gök Kubbemiz" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "967", citation: "Açmak; bir memleketi harb ile zapt eylemek." }]
    },
    {
      slug: "fatih",
      modernTurkish: "Fâtih",
      modernEquivalents: "fetheden, açan, zafer kazanan fatih",
      transliteration: "Fātiḥ",
      primaryOttoman: "فاتح",
      origin: "Arapça",
      originDetail: "Arapça f-t-h kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İstanbul'u fetheden Sultan İkinci Mehmed Han'ın cihanşümul unvanıdır.",
      rootSlug: "fth",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Fetih hareketini dirayetle icra eden büyük kumandan.",
      categories: ["tarih", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Bir memleketi veya kaleyi fetheden hükümdar ve kumandan; açıcı.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "فاتح", spellingType: "Klasik İmla", translit: "Fātiḥ" }],
      examples: [{ sentenceModern: "Fâtih Sultan Mehmed, Doğu Roma'nın payitahtını İslam medeniyetinin gözbebeği kıldı.", sentenceOttoman: "فاتح سلطان محمد، طوغو رومانڭ پایتختنی اسلام مدنیتنڭ كوزببه‌كی قیلدی", author: "Halil İnalcık", sourceWork: "Fatih Devri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "960", citation: "Feth iden, kal‘a ve memleket açan pâdişâh." }]
    },
    {
      slug: "miftah",
      modernTurkish: "Miftah",
      modernEquivalents: "anahtar, açkı, çözüm vasıtası",
      transliteration: "Miftāḥ",
      primaryOttoman: "مفتاح",
      origin: "Arapça",
      originDetail: "Arapça f-t-h kökünden mif'âl vezninde ism-i alettir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mif'âl vezni alet bildirir; kilidi açan demir alet yahut ilmi meseleleri çözen anahtar kaide.",
      rootSlug: "fth",
      morphPattern: "Mif'âl vezninde ism-i alet (مِفْعَال)",
      morphType: "İsm-i Alet",
      morphContrib: "Kapalı kilitleri ve kapıları açmaya mahsus alet.",
      categories: ["edebiyat", "bilim", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Kilitleri açmaya mahsus alet; anahtar; mecazen müşkülleri çözen ilmi vasıta.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "مفتاح", spellingType: "Klasik İmla", translit: "Miftāḥ" }],
      examples: [{ sentenceModern: "Sabır her müşkülün miftahıdır; fevri hareket eden menziline varamaz.", sentenceOttoman: "صبر هر مشكلڭ مفتاحیدر؛ فوری حركت ایدن منزلنه واراماز", author: "Cenap Şahabettin", sourceWork: "Tiryaki Sözleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1383", citation: "Anahtar, kilit açacak âlet." }]
    },
    {
      slug: "iftitah",
      modernTurkish: "İftitah",
      modernEquivalents: "açılış, başlama, açılış tekbiri",
      transliteration: "İftitāḥ",
      primaryOttoman: "افتتاح",
      origin: "Arapça",
      originDetail: "Arapça f-t-h kökünden ifti'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Namazın başında alınan ilk tekbire 'İftitah Tekbiri' (namaza giriş kapısı) denir.",
      rootSlug: "fth",
      morphPattern: "İfti'âl bâbı masdarı (إِفْتِعَال)",
      morphType: "Masdar",
      morphContrib: "Bir işe, meclise veya ibadete resmen başlama ameliyesi.",
      categories: ["dini-kavramlar", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Bir meclisi, merasimi veya binayı açma; ibadete başlama.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "افتتاح", spellingType: "Klasik İmla", translit: "İftitāḥ" }],
      examples: [{ sentenceModern: "Darülfünunun iftitah dersi maarif nazırının beliğ nutkuyla başladı.", sentenceOttoman: "دارالفنونڭ افتتاح درسی معارف ناظرینڭ بلیغ نطقیله باشلادی", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "123", citation: "Başlamak, açmak; iftitâh tekbîri." }]
    },

    // --- S-N-' (ص-ن-ع) ---
    {
      slug: "sanat",
      modernTurkish: "Sanat",
      modernEquivalents: "hüner, ustalık, estetik yaratıcılık, meslek",
      transliteration: "Ṣan‘at",
      primaryOttoman: "صنعت",
      origin: "Arapça",
      originDetail: "Arapça s-n-' kökünden fa'let vezninde masdar-isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İnce ustalık ve zarafetle yapılan her türlü iş; hüsn-i hat, tezhip, ebru, musiki ve mimari.",
      rootSlug: "sn-a",
      morphPattern: "Fa'let vezninde masdar-isim (فَعْلَة)",
      morphType: "İsim",
      morphContrib: "Hüner, estetik ve zarafetle şekillendirilmiş eser vücuda getirme.",
      categories: ["sanat", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Duygu, tasavvur ve güzelliğin üstün bir estetik ve ustalıkla ifadesi; hüner, zanaat.", register: "Estetik" }
      ],
      spellings: [{ arabicScript: "صنعت", spellingType: "Klasik İmla", translit: "Ṣan‘at" }],
      examples: [{ sentenceModern: "Sanat, kâinattaki ilahi ahengin ve kemalin insan ruhundaki aksettiği aynadır.", sentenceOttoman: "صنعت، كائناتده‌كی الهی آهنگڭ و كمالڭ انسان روحنده‌كی عكس ایتدكی آینه‌در", author: "Ahmet Haşim", sourceWork: "Göl Saatleri" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "837", citation: "Hüner, ma‘rifet, üstâdlık; zanaat." }]
    },
    {
      slug: "sani",
      modernTurkish: "Sâni'",
      modernEquivalents: "yapan, sanatkâr, Cenâb-ı Hakk",
      transliteration: "Ṣāni‘",
      primaryOttoman: "صانع",
      origin: "Arapça",
      originDetail: "Arapça s-n-' kökünden fâ'il vezninde ism-i fâildir.",
      partOfSpeech: "İsim / Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kâinatı bir sanat şaheseri gibi nakış nakış yaratan Allah Teâlâ (Sâni-i Hakîm).",
      rootSlug: "sn-a",
      morphPattern: "Fâ'il vezninde ism-i fâil (فَاعِل)",
      morphType: "İsm-i Fâil",
      morphContrib: "Eşyayı benzersiz hüner ve hikmetle yaratan sanatkâr.",
      categories: ["dini-kavramlar", "felsefe"],
      meanings: [
        { orderIndex: 1, definition: "Bir şeyi ustalıkla yapan sanatkâr; kainatı yaratan Cenâb-ı Hak; Sâni-i Zülcelâl.", register: "Akaid" }
      ],
      spellings: [{ arabicScript: "صانع", spellingType: "Klasik İmla", translit: "Ṣāni‘" }],
      examples: [{ sentenceModern: "Eserdeki mükemmellik Sâni'in kemaline şahitlik eden sarsılmaz bir bürhandır.", sentenceOttoman: "اثرده‌كی كمال صانعڭ كمالنه شاهدلك ایدن صارسیلماز بر برهاندر", author: "İsmail Fennî Ertuğrul", sourceWork: "Maddiyûn Mezhebinin İzmihlâli" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "830", citation: "Yapan, san‘atkâr; Allāh Te‘âlâ." }]
    },
    {
      slug: "masnuat",
      modernTurkish: "Masnûat",
      modernEquivalents: "yapılmış eserler, sanat ürünleri, imalat",
      transliteration: "Maṣnū‘āt",
      primaryOttoman: "مصنوعات",
      origin: "Arapça",
      originDetail: "Arapça s-n-' kökünden ism-i mef'ûlün (masnû') çoğuludur.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Sanatla vücuda getirilmiş mahluklar yahut sanayi mahsulleri.",
      rootSlug: "sn-a",
      morphPattern: "Mef'ûlât vezninde cem-i müennes (مَفْعُولَات)",
      morphType: "Çoğul İsim",
      morphContrib: "Sanatla ve hünerle yapılmış eserlerin ve mahlukların mecmuu.",
      categories: ["sanat", "bilim"],
      meanings: [
        { orderIndex: 1, definition: "Sanat eseri olarak yapılmış şeyler; imal olunmuş eşyalar; yaratılmış sanat numuneleri.", register: "Sanat" }
      ],
      spellings: [{ arabicScript: "مصنوعات", spellingType: "Klasik İmla", translit: "Maṣnū‘āt" }],
      examples: [{ sentenceModern: "Kâinattaki bütün masnûat, yaratanın sonsuz ilim ve kudretini ilan eder.", sentenceOttoman: "كائناتده‌كی بتون مصنوعات، یارادانڭ صوڭسز علم و قدرتنی اعلان ایدر", author: "Cevdet Paşa", sourceWork: "Mizanü'l-Hakk" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1342", citation: "San‘at ile yapılmış nesneler." }]
    },

    // --- Q-B-L (ق-ب-ل) ---
    {
      slug: "istikbal",
      modernTurkish: "İstikbal",
      modernEquivalents: "gelecek, karşılayış, ileri zaman",
      transliteration: "İstiḳbāl",
      primaryOttoman: "استقبال",
      origin: "Arapça",
      originDetail: "Arapça q-b-l kökünden istif'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hem gelen bir misafiri hürmetle karşılamak hem de önümüzde gelen zaman (gelecek). Mâzinin (geçmişin) zıddıdır.",
      rootSlug: "qbl",
      morphPattern: "İstif'âl bâbı masdarı (إِسْتِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Karşılamaya çıkma ve önümüzde gelen zamana intizar etme.",
      categories: ["felsefe", "tarih", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Gelecek zaman, ilerideki günler; mâzî zıddı.", register: "Felsefe" },
        { orderIndex: 2, definition: "Gelen bir kimseyi hürmetle karşılamaya çıkma; karşılama.", register: "Teşrifat" }
      ],
      spellings: [{ arabicScript: "استقبال", spellingType: "Klasik İmla", translit: "İstiḳbāl" }],
      examples: [{ sentenceModern: "İstikbal göklerdedir; mâzisini bilen milletler istikbalini emniyetle kurar.", sentenceOttoman: "استقبال كوك لرده‌در؛ ماضیسنی بیلن ملتلر استقبالنی امنیتله قورار", author: "Mustafa Kemal Atatürk", sourceWork: "Vecizeler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "94", citation: "Karşı çıkmak, karşılama; gelecek zamân; mâzî zıddı." }]
    },
    {
      slug: "ikbal",
      modernTurkish: "İkbal",
      modernEquivalents: "talih açıklığı, bahtiyarlık, yüksek makama erişme",
      transliteration: "İḳbāl",
      primaryOttoman: "اقبال",
      origin: "Arapça",
      originDetail: "Arapça q-b-l kökünden if'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İdbarın (talihsizlik, düşüş) zıddıdır; padişahın teveccühünü kazanarak ikbale erme hali.",
      rootSlug: "qbl",
      morphPattern: "İf'âl bâbı masdarı (إِفْعَال)",
      morphType: "Masdar",
      morphContrib: "Dünyanın ve talihin insana yüzünü dönüp teveccüh göstermesi.",
      categories: ["tarih", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Baht açıklığı, talih, yüksek mevki ve saadete erişme hali; idbâr zıddı.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "اقبال", spellingType: "Klasik İmla", translit: "İḳbāl" }],
      examples: [{ sentenceModern: "İkbal rüzgârı eserken etrafında pervane olanlar idbar demlerinde sırra kadem bastılar.", sentenceOttoman: "اقبال روزگاری اسركن اطرافنده پروانه اولانلر ادبار دملرنده سڕه قدم باصدیلر", author: "Halid Ziya Uşaklıgil", sourceWork: "Mai ve Siyah" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "145", citation: "Baht açıklığı, sa‘âdet; idbâr zıddı." }]
    },
    {
      slug: "kible",
      modernTurkish: "Kıble",
      modernEquivalents: "Kâbe yönü, yönelinen istikamet, güney rüzgârı",
      transliteration: "Ḳıble",
      primaryOttoman: "قبلة",
      origin: "Arapça",
      originDetail: "Arapça q-b-l kökünden fi'let vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Namazda yüzün dönüldüğü Kabe ciheti; gemicilikte güney rüzgârı.",
      rootSlug: "qbl",
      morphPattern: "Fi'let vezninde isim (فِعْلَة)",
      morphType: "İsim",
      morphContrib: "Yüzün ve kalbin yöneldiği kudsî istikamet.",
      categories: ["dini-kavramlar", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Müslümanların namazda yöneldikleri Mekke'deki Kâbe-i Muazzama ciheti.", register: "Dini İlimler" },
        { orderIndex: 2, definition: "Güneyden esen sıcak rüzgâr.", register: "Denizcilik" }
      ],
      spellings: [{ arabicScript: "قبلة", spellingType: "Klasik İmla", translit: "Ḳıble" }],
      examples: [{ sentenceModern: "Cami mimarisi kıble istikametine öyle bir huşu ile yerleştirilmiştir ki her saf vahdeti terennüm eder.", sentenceOttoman: "جامع معماریسی قبله استقامتنه اویله بر خشوع ایله یرلشدیریلمشدر كه هر صف وحدتی ترنم ایدر", author: "Süheyl Ünver", sourceWork: "Türk Sanat Tarihi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1038", citation: "Kâ‘be ciheti; cenûb rüzgârı." }]
    },

    // --- H-L-F (خ-ل-ف) ---
    {
      slug: "halife",
      modernTurkish: "Halife",
      modernEquivalents: "ardıl, İslam dünyasının dini lideri, vekil",
      transliteration: "Ḫalīfe",
      primaryOttoman: "خليفه",
      origin: "Arapça",
      originDetail: "Arapça h-l-f kökünden fa'île vezninde isimdir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hz. Peygamber'in (s.a.v.) vefatından sonra ümmetin idaresini deruhte eden emîrü'l-mü'minîn.",
      rootSlug: "hlf",
      morphPattern: "Fa'île vezninde isim (فَعِيلَة)",
      morphType: "İsim",
      morphContrib: "Bir makamın ardılı olup emaneti devralan şahsiyet.",
      categories: ["tarih", "siyaset", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Hz. Muhammed'in (s.a.v.) vekili sıfatıyla bütün Müslümanların dini ve siyasi reisi; ardıl.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "خليفه", spellingType: "Klasik İmla", translit: "Ḫalīfe" }],
      examples: [{ sentenceModern: "Yavuz Sultan Selim'in hilafeti devralmasıyla Osmanlı padişahları Halife-i Rûy-i Zemîn unvanını ihraz etti.", sentenceOttoman: "یاووز سلطان سلیمڭ خلافتى دورآلماسیله عثمانلی پادشاهلری خلیفهٔ روی زمین عنواننی احراز ایتدی", author: "Cevdet Paşa", sourceWork: "Kısas-ı Enbiya" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "596", citation: "Resûl-i Ekrem’in vekîli, emîrü’l-mü’minîn; ardıl." }]
    },
    {
      slug: "ihtilaf",
      modernTurkish: "İhtilaf",
      modernEquivalents: "ayrılık, uyuşmazlık, anlaşmazlık, sürtüşme",
      transliteration: "İḫtilāf",
      primaryOttoman: "اختلاف",
      origin: "Arapça",
      originDetail: "Arapça h-l-f kökünden ifti'âl bâbı masdarıdır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İttifakın zıddı; fikirde veya amelde birbirinden ayrılmak.",
      rootSlug: "hlf",
      morphPattern: "İfti'âl bâbı masdarı (إِفْتِعَال)",
      morphType: "Masdar",
      morphContrib: "Birbirine arka dönüp uyuşmazlığa düşme hali.",
      categories: ["hukuk", "siyaset"],
      meanings: [
        { orderIndex: 1, definition: "Fikir, rey veya menfaat ayrılığı; uyuşmazlık, anlaşmazlık; ittifak zıddı.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "اختلاف", spellingType: "Klasik İmla", translit: "İḫtilāf" }],
      examples: [{ sentenceModern: "İki taraf arasındaki hudut ihtilafı suhuletle sulhe bağlandı.", sentenceOttoman: "ایكی طرف آراسنده‌كی حدود خلافی سهولتله صلحه باغلاندی", author: "Cevdet Paşa", sourceWork: "Tarih-i Cevdet" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "69", citation: "Uyuşmamak, ayrılık, münâza‘a; ittifâk zıddı." }]
    },

    // --- K-D-M (ق-د-م) ---
    {
      slug: "kadim",
      modernTurkish: "Kadim",
      modernEquivalents: "ezeli, başlangıcı olmayan, çok eski, köklü",
      transliteration: "Ḳadīm",
      primaryOttoman: "قديم",
      origin: "Arapça",
      originDetail: "Arapça k-d-m kökünden fa'îl vezninde sıfattır.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Hâdisin (sonradan yaratılmış olanın) zıddıdır; başlangıcı zamana sığmayan ezeliyet.",
      rootSlug: "kdm",
      morphPattern: "Fa'îl vezninde sıfat (فَعِيل)",
      morphType: "Sıfat",
      morphContrib: "Zamanın evvelinde var olan ve başlangıcı bilinmeyen.",
      categories: ["felsefe", "tarih", "dini-kavramlar"],
      meanings: [
        { orderIndex: 1, definition: "Başlangıcı olmayan, ezeli; hâdis zıddı.", register: "Felsefe" },
        { orderIndex: 2, definition: "Çok eski zamanlardan kalmış, köklü, an'anevi.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "قديم", spellingType: "Klasik İmla", translit: "Ḳadīm" }],
      examples: [{ sentenceModern: "Bu kadim kütüphane asırların ilim mirasını bağrında saklayan ulu bir hazinedir.", sentenceOttoman: "بو قدیم كütüphane عصرلرڭ علم میراثنی باغرنده صاقلایان اولو بر خزینه‌در", author: "Ahmet Hamdi Tanpınar", sourceWork: "Beş Şehir" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1049", citation: "Evveli olmayan; ezelî; hâdis zıddı; pek eski." }]
    },
    {
      slug: "mukaddime",
      modernTurkish: "Mukaddime",
      modernEquivalents: "önsöz, başlangıç, giriş bahsi, öncül",
      transliteration: "Muḳaddime",
      primaryOttoman: "مقدمه",
      origin: "Arapça",
      originDetail: "Arapça k-d-m kökünden tef'îl ism-i fâilinin müennesidir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "İbn Haldun'un meşhur eseri Mukaddime gibi; kitabın asıl bahsinden önce gelen giriş.",
      rootSlug: "kdm",
      morphPattern: "Müfa''ile vezninde isim (مُفَعِّلَة)",
      morphType: "İsim",
      morphContrib: "Asıl bahsin önüne geçip yolu açan başlangıç metni.",
      categories: ["edebiyat", "bilim"],
      meanings: [
        { orderIndex: 1, definition: "Bir kitabın başına konulan giriş ve izahat bahsi; önsöz.", register: "Filoloji" },
        { orderIndex: 2, definition: "Mantıkta neticeyi doğuran öncül önermeler.", register: "Mantık" }
      ],
      spellings: [{ arabicScript: "مقدمه", spellingType: "Klasik İmla", translit: "Muḳaddime" }],
      examples: [{ sentenceModern: "İbn Haldun'un Mukaddime'si sosyoloji ve tarih felsefesinin dünyadaki ilk kurucu metnidir.", sentenceOttoman: "ابن خلدونڭ مقدمه‌سی صوسیولوژی و تاریخ فلسفه‌سنڭ دنیاده‌كی ایلك قوروجی متنیدر", author: "Ahmet Cevdet Paşa", sourceWork: "Mukaddime Tercümesi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1375", citation: "Bir kitâbın başındaki söz; önsöz; mantıkda kazıyye." }]
    },

    // --- Ş-R-F (ش-ر-ف) ---
    {
      slug: "seref",
      modernTurkish: "Şeref",
      modernEquivalents: "onur, haysiyet, ululuk, yücelik",
      transliteration: "Şeref",
      primaryOttoman: "شرف",
      origin: "Arapça",
      originDetail: "Arapça ş-r-f kökünden fa'al vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Yüksek yerde bulunmak kökünden; ahlaki itibar ve fazilet yüceliği.",
      rootSlug: "srf",
      morphPattern: "Fa'al vezninde masdar (فَعَل)",
      morphType: "Masdar",
      morphContrib: "Manevi ve ahlaki makamın yüceliği ve haysiyeti.",
      categories: ["felsefe", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Ahlaki üstünlük ve fazilet sebebiyle kazanılan yüksek itibar; onur, haysiyet.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "شرف", spellingType: "Klasik İmla", translit: "Şeref" }],
      examples: [{ sentenceModern: "Vatan yolunda can feda eylemek bir mümin için rütbelerin en şereflisidir.", sentenceOttoman: "وطن یولنده جان فدا ایله‌مك بر مؤمن ایچون رتبه‌لرڭ اڭ شرفلیسی در", author: "Namık Kemal", sourceWork: "Vatan yahut Silistre" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "784", citation: "Yükseklik, haysiyyet, i‘tibâr." }]
    },
    {
      slug: "tesrifat",
      modernTurkish: "Teşrifat",
      modernEquivalents: "protokol, resmi tören kaideleri, nezaket kuralları",
      transliteration: "Teşrīfāt",
      primaryOttoman: "تشريفات",
      origin: "Arapça",
      originDetail: "Arapça ş-r-f kökünden teşrîf'in çoğuludur.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Osmanlı sarayında elçilerin kabulü, bayramlaşma ve cülus törenlerini tanzim eden yüksek bürokrasi teşkilatı (Teşrifat-ı Âmîre).",
      rootSlug: "srf",
      morphPattern: "Tef'îlât vezninde çoğul isim (تَفْعِيلَات)",
      morphType: "Çoğul İsim",
      morphContrib: "Hürmet ve şerefi muhafaza etmek üzere tanzim edilmiş resmi protokol nizamı.",
      categories: ["yonetim", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Resmi merasim ve toplantılarda mevki ve rütbeye göre riayet edilen kabul ve adap kuralları; protokol.", register: "Teşrifat" }
      ],
      spellings: [{ arabicScript: "تشريفات", spellingType: "Klasik İmla", translit: "Teşrīfāt" }],
      examples: [{ sentenceModern: "Teşrifat nizamına harfiyen riayet olunarak yabancı elçiler huzur-ı hümayuna kabul edildi.", sentenceOttoman: "تشریفات نظامنه حرفیاً رعایت اولونارق یاپبانجی ایلچیلر حضور همایونه قبول ایدیلدی", author: "Cevdet Paşa", sourceWork: "Tezâkir" }],
      sources: [{ sourceId: "src-devellioglu", pageNumber: "1283", citation: "Protokol, resmi tören ve ağırlama kaideleri." }]
    },

    // --- B-S-T (ب-س-ط) ---
    {
      slug: "basit",
      modernTurkish: "Basit",
      modernEquivalents: "yalın, karmaşık olmayan, terkip edilmemiş, düz",
      transliteration: "Basīṭ",
      primaryOttoman: "بسيط",
      origin: "Arapça",
      originDetail: "Arapça b-s-t kökünden fa'îl vezninde sıfattır.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mürekkebin (bileşiğin) zıddıdır; kimyada ve felsefede cüzlere ayrılmayan yalın madde.",
      rootSlug: "bst",
      morphPattern: "Fa'îl vezninde sıfat (فَعِيل)",
      morphType: "Sıfat",
      morphContrib: "Katışıksız, yayılmış ve yalın olan nesne.",
      categories: ["felsefe", "bilim"],
      meanings: [
        { orderIndex: 1, definition: "Cüzleri birbirine karışmamış, terkip edilmemiş yalın nesne; mürekkeb zıddı.", register: "Felsefe" },
        { orderIndex: 2, definition: "Anlaşılması ve yapılması kolay olan; külfetsiz.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "بسيط", spellingType: "Klasik İmla", translit: "Basīṭ" }],
      examples: [{ sentenceModern: "En derin hakikatler bazen en basit ve külfetsiz cümlelerin içinde tecelli eder.", sentenceOttoman: "اڭ درین حقیقتلر بعضاً اڭ بسیط و كلف تسز جمله‌لرڭ ایچنده تجلی ایدر", author: "Cenap Şahabettin", sourceWork: "Evrak-ı Eyyam" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "298", citation: "Mürekkeb zıddı; düz, kolay, açık." }]
    },

    // --- N-F-' (ن-ف-ع) ---
    {
      slug: "menfaat",
      modernTurkish: "Menfaat",
      modernEquivalents: "çıkar, yarar, fayda, kazanç",
      transliteration: "Menfa‘at",
      primaryOttoman: "منفعت",
      origin: "Arapça",
      originDetail: "Arapça n-f-' kökünden mef'alet vezninde mimli masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Mazarretin (zararın) zıddıdır; insana fayda ve huzur temin eden kazanç.",
      rootSlug: "nfa",
      morphPattern: "Mef'alet vezninde mimli masdar (مَفْعَلَة)",
      morphType: "Mimli Masdar",
      morphContrib: "Fayda ve hayır celbeden kazanç vasıtası.",
      categories: ["hukuk", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Bir işten elde edilen fayda, çıkar; mazarret zıddı.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "منفعت", spellingType: "Klasik İmla", translit: "Menfa‘at" }],
      examples: [{ sentenceModern: "Şahsi menfaatini milletin umumî selametine feda edenler tarihin şeref levhasına yazılır.", sentenceOttoman: "شخصی منفعتنی ملتڭ عمومی سلامتنه فدا ایدنلر تاریخڭ شرف لوحه‌سنه یازیلور", author: "Namık Kemal", sourceWork: "Makaleler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1403", citation: "Fâide, kâr; mazarret zıddı." }]
    },

    // --- M-N-' (م-ن-ع) ---
    {
      slug: "memnu",
      modernTurkish: "Memnu",
      modernEquivalents: "yasak, haram kılınmış, engellenmiş",
      transliteration: "Memnū‘",
      primaryOttoman: "ممنوع",
      origin: "Arapça",
      originDetail: "Arapça m-n-' kökünden ism-i mef'ûldür.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Halit Ziya'nın 'Aşk-ı Memnu' (Yasak Aşk) romanıyla edebiyatımızda abideleşmiştir.",
      rootSlug: "mna",
      morphPattern: "Mef'ûl vezninde ism-i mef'ûl (مَفْعُول)",
      morphType: "İsm-i Mef'ûl",
      morphContrib: "Kanunen veya ahlaken yapılması yasaklanmış olan.",
      categories: ["hukuk", "edebiyat"],
      meanings: [
        { orderIndex: 1, definition: "Yapılması kanunen, ahlaken veya dinen yasak edilmiş olan; yasak.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "ممنوع", spellingType: "Klasik İmla", translit: "Memnū‘" }],
      examples: [{ sentenceModern: "Kanunun memnu kıldığı fiilleri işleyenler adliye pençesinden kurtulamazlar.", sentenceOttoman: "قانونڭ ممنوع قیلدیغی فعللری ایشله‌ینلر عدلیه پنچه‌سندن قورتولامازلر", author: "Cevdet Paşa", sourceWork: "Mecelle" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1397", citation: "Men‘ olunmuş, yasak; câiz olmayan." }]
    },

    // --- S-M-' (س-م-ع) ---
    {
      slug: "sema",
      modernTurkish: "Semâ",
      modernEquivalents: "işitme, Mevlevi zikri ve dönüşü, musiki dinleme",
      transliteration: "Semā‘",
      primaryOttoman: "سماع",
      origin: "Arapça",
      originDetail: "Arapça s-m-' kökünden fe'âl vezninde masdardır.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Gökyüzü manasındaki Semâ (سماء) ile sesteştir ancak imlası ve manası farklıdır: Bu Semâ (سماع) ney ve kudüm nağmelerini dinleyerek cezbe ile dönmektir.",
      rootSlug: "sma",
      morphPattern: "Fa'âl vezninde masdar (فَعَال)",
      morphType: "Masdar",
      morphContrib: "İlahi musikiyi ve kelamı can kulağıyla dinleyip vecde gelme.",
      categories: ["tasavvuf", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Musiki dinleme; tasavvufta bilhassa Mevlevîlerin ney eşliğinde vecde gelerek dönmeleri.", register: "Tasavvuf" }
      ],
      spellings: [{ arabicScript: "سماع", spellingType: "Klasik İmla", translit: "Semā‘" }],
      examples: [{ sentenceModern: "Semâzenler semâ meydanında pervane gibi dönerken adeta yer ile gök birleşiyordu.", sentenceOttoman: "سمازنلر سما میداننده پروانه كبی دونركن عادتا یر ایله كوك بیرلشیوردی", author: "Ahmet Hamdi Tanpınar", sourceWork: "Huzur" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "727", citation: "İşitmek; tasavvufda mûsikī dinleyib raks eylemek." }]
    },

    // --- ADDITIONAL PERSIAN GEMS ---
    {
      slug: "padisah",
      modernTurkish: "Padişah",
      modernEquivalents: "hükümdar, sultan, ulu şah",
      transliteration: "Pâdişāh",
      primaryOttoman: "پادشاه",
      origin: "Farsça",
      originDetail: "Farsça pâd (koruyucu/taht) ve şâh (hükümdar) birleşimi.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Osmanlı Devleti'nin en yüksek hükümdarlık unvanı.",
      rootSlug: null,
      categories: ["tarih", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Osmanlı ve Şark devletlerinde en büyük hükümdar; sultan, hakan.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "پادشاه", spellingType: "Klasik İmla", translit: "Pâdişāh" }],
      examples: [{ sentenceModern: "Padişah cuma selamlığında cümle ahaliyi adaletle selamladı.", sentenceOttoman: "پادشاه جمعه سلاملغنده جمله اهالی‌یی عدالتله سلاملادی", author: "Ahmet Rasim", sourceWork: "Şehir Mektupları" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "367", citation: "Şâhlar şâhı, büyük hükümdâr." }]
    },
    {
      slug: "sehzade",
      modernTurkish: "Şehzade",
      modernEquivalents: "padişah oğlu, prens, hanedan evladı",
      transliteration: "Şeh-zāde",
      primaryOttoman: "شاهزاده",
      origin: "Farsça",
      originDetail: "Farsça şâh (hükümdar) ve zâde (oğlu) birleşimi.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Padişah oğullarına verilen unvan; sancaklara lala nezaretinde vali olarak gönderilirlerdi.",
      rootSlug: null,
      categories: ["tarih", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Padişahın erkek çocuklarına verilen resmi unvan; hanedan prensi.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "شاهزاده", spellingType: "Klasik İmla", translit: "Şeh-zāde" }],
      examples: [{ sentenceModern: "Amasya ve Manisa sancakları şehzadelerin devlet terbiyesi gördüğü ulu mekteplerdi.", sentenceOttoman: "آماسیه و مانیسا صانجاقلری شاهزادە‌لرڭ دولت تربیه‌سی كؤردكی اولو مكتبلردی", author: "İsmail Hakkı Uzunçarşılı", sourceWork: "Osmanlı Tarihi" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "777", citation: "Pâdişâh oğlu." }]
    },
    {
      slug: "cihannuma",
      modernTurkish: "Cihannüma",
      modernEquivalents: "dünyayı gösteren, küresel coğrafya kitabı, seyir köşkü",
      transliteration: "Cihān-nümā",
      primaryOttoman: "جهان‌نما",
      origin: "Farsça",
      originDetail: "Farsça cihan (dünya) ve nümâ (gösteren) birleşimi.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Kâtib Çelebi'nin meşhur coğrafya şaheserinin adı; aynı zamanda saraylarda dört tarafı temaşa eden yüksek köşk.",
      rootSlug: null,
      categories: ["bilim", "tarih", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Dünyayı gösteren; her tarafı temaşa etmeye elverişli yüksek seyir köşkü.", register: "Mimari" },
        { orderIndex: 2, definition: "Kâtib Çelebi'nin 17. asırda telif ettiği meşhur coğrafya eseri.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "جهان‌نما", spellingType: "Klasik İmla", translit: "Cihān-nümā" }],
      examples: [{ sentenceModern: "Kâtib Çelebi'nin Cihannüma'sı İbrahim Müteferrika matbaasında haritalarıyla birlikte basılan ilk coğrafya kitabıdır.", sentenceOttoman: "كاتب چلبی‌نڭ جهان‌نماسی ابراهیم متفرقه مطبعه‌سنده خریطه‌لریله برلكده باسیلان ایلك جغرافیا كتابیدر", author: "Adnan Adıvar", sourceWork: "Osmanlı Türklerinde İlim" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "484", citation: "Dünyāyı gösteren; etrâfı seyr iden yüksek köşk." }]
    },
    {
      slug: "enderun",
      modernTurkish: "Enderun",
      modernEquivalents: "saray mektebi, iç saray, devlet akademisi",
      transliteration: "Enderūn",
      primaryOttoman: "اندرون",
      origin: "Farsça",
      originDetail: "Farsça enderûn (içerisi, iç kısım).",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Topkapı Sarayı'nda devşirme yetenekli gençlerin sadrazam, vezir, hattat ve kumandan olarak yetiştirildiği dünyanın ilk modern kamu yönetimi akademisi.",
      rootSlug: null,
      categories: ["tarih", "yonetim", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Osmanlı sarayının iç kısmı ve devlet ricâli yetiştiren yüksek saray mektebi; Enderûn-ı Hümâyun.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "اندرون", spellingType: "Klasik İmla", translit: "Enderūn" }],
      examples: [{ sentenceModern: "Enderun mektebi, kabiliyetli gençleri devletin en yüksek makamlarına hazırlayan eşsiz bir ocaktı.", sentenceOttoman: "اندرون مكتبی، قابليتلی كنجلری دولتڭ اڭ یوكسك مقاملرینه حازیرلایان ائشسز بر اوجاق ايدی", author: "Halil İnalcık", sourceWork: "Osmanlı İmparatorluğu" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "186", citation: "İçeri, sarây-ı hümâyûn dâhili ve mektebi." }]
    },
    {
      slug: "bicare",
      modernTurkish: "Bîçare",
      modernEquivalents: "çaresiz, zavallı, dertli, kimsesiz",
      transliteration: "Bī-çāre",
      primaryOttoman: "بی‌چاره",
      origin: "Farsça",
      originDetail: "Farsça bî- (olumsuzluk ön eki) ve çâre (çözüm) terkibi.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Çaresi ve sığınağı kalmamış kimse.",
      rootSlug: null,
      categories: ["edebiyat", "gunluk-hayat"],
      meanings: [
        { orderIndex: 1, definition: "Çaresi olmayan, zavallı, acınacak durumda bulunan kimse; dertli.", register: "Genel" }
      ],
      spellings: [{ arabicScript: "بی‌چاره", spellingType: "Klasik İmla", translit: "Bī-çāre" }],
      examples: [{ sentenceModern: "Gurbet ellerde bîçare kalan yolcular ancak bir kervansaray saçaklığına sığınabildi.", sentenceOttoman: "غربت اللرده بی‌چاره قالان یولجیلر آنجق بر كروانسرای صاچاقلغنه صیغینه‌بیلدی", author: "Ömer Seyfettin", sourceWork: "Hikâyeler" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "344", citation: "Çâresiz, zavallı." }]
    },
    {
      slug: "yekta",
      modernTurkish: "Yektâ",
      modernEquivalents: "tek, eşsiz, benzersiz, nadide",
      transliteration: "Yektā",
      primaryOttoman: "یکتا",
      origin: "Farsça",
      originDetail: "Farsça yek (bir) ve -tâ (kat, tek) terkibi.",
      partOfSpeech: "Sıfat",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Eşi ve benzeri bulunmayan; incide tek taneli eşsiz mücevhere 'dürr-i yektâ' denir.",
      rootSlug: null,
      categories: ["edebiyat", "sanat"],
      meanings: [
        { orderIndex: 1, definition: "Tek, eşi ve benzeri olmayan; nâdide, bî-nazîr.", register: "Edebiyat" }
      ],
      spellings: [{ arabicScript: "یکتا", spellingType: "Klasik İmla", translit: "Yektā" }],
      examples: [{ sentenceModern: "Süleymaniye kubbesi kemal ve tenasüp noktasında yektâ bir mimari mucizedir.", sentenceOttoman: "سلیمانیه قبه‌سی كمال و تناسب نقطه‌سنده یکتا بر معماری معجزه‌در", author: "Yahya Kemal Beyatlı", sourceWork: "Aziz İstanbul" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1554", citation: "Tek, eşsiz, bî-hemtâ." }]
    },

    // --- ADDITIONAL HISTORICAL TURKISH VOCABULARY ---
    {
      slug: "yargu",
      modernTurkish: "Yargu",
      modernEquivalents: "yargılama, mahkeme, hüküm verme meclisi",
      transliteration: "Yarġu",
      primaryOttoman: "یارغو",
      origin: "Türkçe",
      originDetail: "Eski Türkçe yar- (hükmetmek, yarmak/ayırmak) kökünden.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Göktürk ve Uygur devletlerinde hakanın başkanlığında kurulan yüksek mahkeme; 'yargı' kelimesinin asıl kadim şeklidir.",
      rootSlug: null,
      categories: ["hukuk", "tarih"],
      meanings: [
        { orderIndex: 1, definition: "Kadim Türk hukukunda davaların dinlenip karara bağlandığı divan ve mahkeme; muhakeme.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "یارغو", spellingType: "Klasik İmla", translit: "Yarġu" }],
      examples: [{ sentenceModern: "Hakanın huzurunda kurulan ulu yarguda zengin fakir ayrımı yapılmaksızın hak tecelli ederdi.", sentenceOttoman: "خاقانڭ حضورنده قورولان اولو یارغودا زنگین فقیر آییریمی یاپیلمقسزین حق تجلی ایدردی", author: "Ziya Gökalp", sourceWork: "Türk Töresi" }],
      sources: [{ sourceId: "src-lehce", pageNumber: "1235", citation: "Mahkeme, muhâkeme; eski Türkçe elfâzdandır." }]
    },
    {
      slug: "yasak",
      modernTurkish: "Yasak",
      modernEquivalents: "kanun, nizamname, men edilmiş emir, ferman",
      transliteration: "Yasaḳ",
      primaryOttoman: "یاساق",
      origin: "Türkçe",
      originDetail: "Eski Türkçe yasa- (nizam kurmak, kanun koymak) fiilinden.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Aslen Cengiz Yasası ve Osmanlı kanunnamelerinde 'kanun ve buyruk' manasındayken, zamanla 'yapılmaması emredilen men' fiiline hasredilmiştir.",
      rootSlug: null,
      categories: ["hukuk", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Kanun, nizam; sonradan bir işin yapılmasına mani olan kanuni men; memnu.", register: "Hukuk" }
      ],
      spellings: [{ arabicScript: "یاساق", spellingType: "Klasik İmla", translit: "Yasaḳ" }],
      examples: [{ sentenceModern: "Fatih Kanunnamesi, devlet nizamını temin eden en sarih padişah yasağı ve kanunudur.", sentenceOttoman: "فاتح قانوننامه‌سی، دولت نظامنی تامین ایدن اڭ صریح پادشاه یاساغی و قانونیدر", author: "Halil İnalcık", sourceWork: "Osmanlı Hukuku" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "1537", citation: "Kānûn, nizâm; nehiy, men‘ olunmuş nesne." }]
    },
    {
      slug: "ulak",
      modernTurkish: "Ulak",
      modernEquivalents: "kurye, haberci, menzil atlısı, posta görevlisi",
      transliteration: "Ulaḳ",
      primaryOttoman: "اولاق",
      origin: "Türkçe",
      originDetail: "Eski Türkçe ula- (bağlamak, ulaştırmak) fiilinden türetilmiştir.",
      partOfSpeech: "İsim",
      verificationStatus: "VERIFIED",
      linguisticNotes: "Osmanlı menzilhane teşkilatında fermanları ve mühim haberleri at sırtında gece gündüz taşıyan posta kuryesi.",
      rootSlug: null,
      categories: ["tarih", "yonetim"],
      meanings: [
        { orderIndex: 1, definition: "Devlet merkezinden vilayetlere tez elden haber ve ferman ulaştıran atlı kurye; menzil habercisi.", register: "Tarih" }
      ],
      spellings: [{ arabicScript: "اولاق", spellingType: "Klasik İmla", translit: "Ulaḳ" }],
      examples: [{ sentenceModern: "Ulaklar menzillerde at değiştirerek serhad boyundaki zafer müjdesini üç günde payitahta ulaştırdı.", sentenceOttoman: "اولاقلر منزللرده آت دگیشدیره‌رك سرحد بویوندە‌كی ظفر مژده‌سنی اوچ كونده پایتخته اولاشدیردی", author: "Naîmâ", sourceWork: "Tarih-i Naîmâ" }],
      sources: [{ sourceId: "src-kamus", pageNumber: "188", citation: "Menzil atı ve habercisi, tatar." }]
    }
  ]
};
