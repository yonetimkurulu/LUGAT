/**
 * LÜGAT — Dijital Kütüphane ve Klasik Eserler Tohumlama Dosyası
 * Divan Edebiyatı, Mecelle, Sözlükçülük, Seyahatnâme, Hikmet ve Fermanlar
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const libraryTexts = [
  // 1. KÂMÛS-I TÜRKÎ MUKADDİMESİ — ŞEMSEDDİN SAMİ (1901)
  {
    slug: "kamus-i-turki-mukaddimesi-semseddin-sami",
    title: "Kâmûs-ı Türkî Mukaddimesi",
    titleOttoman: "قاموس عثمانی ياخود قاموس تركی مقدمه‌سی",
    author: "Şemseddin Sami",
    authorOttoman: "شمس الدين سامی",
    genre: "Lügat & Dil Manifestosu",
    period: "20. Yüzyıl Başı (1901)",
    century: "20. yy",
    readTime: "9 dk",
    difficulty: "Orta",
    isFeatured: true,
    poeticMeter: "Mensur (Akademik & Edebi Nesir)",
    manuscriptImageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Osmanlı matbuatında 'Türkçe' adıyla neşredilen ilk büyük sözlük olan Kâmûs-ı Türkî'nin, Türk dilinin zenginliğini, Türkçe kökleri, Arapça ve Farsça kelimelerin tasarruf usulünü ilan eden tarihi mukaddimesi.",
    contentOttoman: `لسانمزك شمديكه قدر بر قاموس طام ومكملنه تصادف اولنمامشدر.
يالكز عربجهدن و فارسجهدن لسانمزه كچمش اولان لغات ايله تركيبيات دخى لسانمزك عينى صايلمش، تركى الاصل اولان اصيل الفاظ ايسه نظر اعتبارده كافى مرتبهده توتلمامشدر.
حال بوكه بر لسانك اساسی، قواعد صرفيه و نحويه‌سی ايله اصيل مادري الفاظندر.
بر لسان باشقه بر لساندن نه قدر زياده لغت آلورسه آلسون، كندو مايتنى و كندو اسلوبنى قايپ ايتمز.
عربجهدن آلدغمز لغاتى دخى بيز كندو لسانمزك تلفظ و صرفنه اويدرمش، آنلرى تركلشديرمشزدر.
بناءً عليه بو قاموسده مقصديمز، لسانمزده مستعمل اولان كافهء الفاظى احاطه ايتمك، تركى الفاظى آيرى بر اعتناء ايله تدقيق ايله‌مك و معانيلرينى حقيقتى اوزره بيان ايتمكدر.`,
    contentTranslit: `Lisânımızın şimdiyedek bir kâmûs-ı tâm ve mükemmeline tesâdüf olunmamışdır.
Yalnız Arabcadan ve Fârisîden lisânımıza geçmiş olan lügāt ile terkîbiyyât dahî lisânımızın aynı sayılmış, Türkî’l-asl olan asîl elfâz ise nazar-ı i‘tibârda kâfî mertebede tutulmamışdır.
Hâl bu ki bir lisânın esâsı, kavâ‘id-i sarfiyye ve nahviyyesi ile asîl mâderî elfâzıdır.
Bir lisân başka bir lisândan ne kadar ziyâde lügat alursa alsun, kendü mâhiyyetini ve kendü üslûbunu gâyib itmez.
Arabcadan aldığımız lügātı dahî biz kendü lisânımızın telaffuz ve sarfına uydurmuş, anları Türkleşdirmişizdir.
Binâenaleyh bu kâmûsda maksadımız, lisânımızda müsta‘mel olan kâffe-i elfâzı ihâta itmek, Türkî elfâzı ayrı bir i‘tinâ ile tedkīk eylemek ve ma‘ânîlerini hakīkati üzere beyân itmekdir.`,
    contentModern: `Dilimizin şimdiye kadar tam ve mükemmel bir sözlüğüne rastlanmamıştır.
Yalnızca Arapça ve Farsçadan dilimize geçmiş olan kelimeler ile terkipler dilimizin kendisi sayılmış, asıl Türkçe kökenli olan öz kelimeler ise gereken değer ve itibarı görmemiştir.
Oysa ki bir dilin esası; dilbilgisi kuralları ile onun anadilden gelen asıl öz kelimeleridir.
Bir dil, başka bir dilden ne kadar çok kelime ödünç alırsa alsın, kendi mahiyetini ve üslubunu asla kaybetmez.
Arapçadan aldığımız kelimeleri dahi biz kendi dilimizin ses ve telaffuz yapısına uydurmuş, onları millileştirip Türkçeleştirmişizdir.
Bu sebeple bu sözlükteki gayemiz; dilimizde kullanılan bütün kelimeleri kuşatmak, Türkçe kelimeleri özel bir itina ile incelemek ve anlamlarını hakikati üzere açıklamaktır.`,
    vocabularyJson: JSON.stringify([
      { word: "Kâmûs (قاموس)", meaning: "Büyük lügat, okyanus gibi geniş sözlük", root: "K-M-S" },
      { word: "Elfâz (الفاظ)", meaning: "Lafızlar, kelimeler, sözler", root: "L-F-Z" },
      { word: "Terkîbiyyât (تركيبات)", meaning: "Birleşik kelimeler ve izafet tamlamaları", root: "R-K-B" },
      { word: "Mâderî (مادری)", meaning: "Anadilden gelen, asıl köke ait olan", root: "Farsça mâder" },
      { word: "Müsta‘mel (مستعمل)", meaning: "Halk ve edebiyat tarafından kullanılan, tedavüldeki söz", root: "A-M-L" },
      { word: "İhâta (احاطه)", meaning: "Bütünüyle kuşatmak, içine almak", root: "H-V-T" },
    ]),
    annotationsJson: JSON.stringify([
      { lineIndex: 1, note: "Şemseddin Sami'nin burada zikrettiği 'Türkî'l-asl' tabiri, 19. yüzyıl sonunda başlayan Türkçülük ve milli lisan hareketinin temel manifestosudur." },
      { lineIndex: 4, note: "Osmanlı Türkçesinin Arapça kelimeleri kendi ses ahengine (Türkçe galat-ı meşhur kaidesine) göre tasarruf ettiğinin altı çizilmektedir." }
    ])
  },

  // 2. ŞEYH GÂLİB — HÜSN Ü AŞK (1787)
  {
    slug: "husn-u-ask-seyh-galib",
    title: "Hüsn ü Aşk (Aşk Yolunun Çileleri)",
    titleOttoman: "حسن و عشق (شيخ غالب)",
    author: "Şeyh Gâlib (Mehmed Esad)",
    authorOttoman: "شيخ غالب",
    genre: "Divan Şiiri",
    period: "18. Yüzyıl (Sebk-i Hindî Zirvesi)",
    century: "18. yy",
    readTime: "7 dk",
    difficulty: "İleri",
    isFeatured: true,
    poeticMeter: "Mef'ûlü Mefâîlü Feûlün (Hezec Bahri)",
    manuscriptImageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Divan edebiyatının son büyük dehası Şeyh Gâlib'in, aşk yolunda sülûk eden sâlikin çektiği çileleri, Mumdan Gemilerle Ateş Denizini geçişini anlatan sembolik tasavvuf şaheseri.",
    contentOttoman: `١. بر آتشين بحردر بو ياراشوق
كيم كچمكدور مومدن كمیلرلن
٢. بن اولدكجه محبت تازه اولسون
غمم دلده هميشه بي اندازه اولسون
٣. اسندن ناله لردن يار يانارمي
جفادن عاشق بيچاره اوتانارمي
٤. دكل شاعيرلك ايلن مقصديم لاف
بيان عشق ايلن ايلرم طواف
٥. اسراب حقيقت سوزلرمدور
جمال معني يار اولمش كوزلرمدور`,
    contentTranslit: `1. Bir âteşîn bahrdir bu yâr-ı âşık
Kim geçmekdür mumdan gemilerlen!
2. Ben öldükçe muhabbet tâze olsun
Gamım dilde hemîşe bî-endâze olsun!
3. Esen nâlelerden yâr usanur mı
Cefâdan âşık-ı bî-çâre utanur mı!
4. Değil şâ‘irlik ile maksadım lâf
Beyân-ı aşk ile eylerem tavâf!
5. Esrâr-ı hakīkat sözlerimdür
Cemâl-i ma‘nî yâr olmuş gözlerimdür!`,
    contentModern: `1. Bu aşk ve sevda yolu öyle alevden bir denizdir ki; o denizi ancak mumdan yapılmış gemilerle geçmek gerekir! (Ateşe girince mum hemen erir; âşık da yokluğa ermeden bu yolu aşamaz).
2. Ben bu yolda fani olup yok oldukça hakiki sevgi ve muhabbet tazelensin; gönlümdeki dert ve çile daima sınırsız ve hesapsız olsun!
3. Gönülden kopup esen feryatlardan sevgili hiç usanır mı? Âşık olan çaresiz kimse çektiği cefa ve çileden hiç utanıp vazgeçer mi?
4. Benim şiir yazmaktaki maksadım asla boş söz veya kuruluk lakırdısı değildir; ben aşk hakikatini terennüm ederek maneviyat Kâbe'sini tavaf ediyorum!
5. Söylediğim sözler hakikat sırlarının ta kendisidir; gözlerim artık mana güzelliğiyle nurlanmış ve hakikatin cemaline ermiştir.`,
    vocabularyJson: JSON.stringify([
      { word: "Âteşîn (آتشين)", meaning: "Ateşli, yangın gibi parlayan", root: "Farsça âteş" },
      { word: "Bahr (بحر)", meaning: "Uçsuz bucaksız deniz, derya", root: "B-H-R" },
      { word: "Bî-endâze (بی اندازه)", meaning: "Ölçüsüz, sınırsız, hadsiz", root: "Farsça bî + endâze" },
      { word: "Nâle (ناله)", meaning: "İnilti, yürekten kopan feryat", root: "Farsça" },
      { word: "Esrâr (اسرار)", meaning: "Sırlar, bâtınî hakikatler", root: "S-R-R (Sırr çoğulu)" },
      { word: "Cemâl (جمال)", meaning: "Yüz güzelliği, ilahi nûr ve tecelli", root: "C-M-L" },
    ]),
    annotationsJson: JSON.stringify([
      { lineIndex: 1, note: "Sebk-i Hindî'nin en meşhur imgesi: 'Ateş denizini mumdan gemiyle geçmek'. İmkânsızlık içinde aşkın teslimiyetini ifade eder." },
      { lineIndex: 4, note: "Şair, sanatını sadece lafız oyunu değil, manevi bir ibadet ve tavaf derecesinde gördüğünü belirtmektedir." }
    ])
  },

  // 3. MECELLE-İ AHKÂM-I ADLİYYE (1-15 GENİŞLETİLMİŞ KÜLLÎ KAİDELER)
  {
    slug: "mecelle-kulli-kaideler",
    title: "Mecelle-i Ahkâm-ı Adliyye (Küllî Kaideler)",
    titleOttoman: "مجلهء احكام عدليه (قواعد كليه)",
    author: "Ahmed Cevdet Paşa (Mecelle Cemiyeti Reisi)",
    authorOttoman: "احمد جودت پاشا",
    genre: "Hukuk & Mecelle",
    period: "19. Yüzyıl (Tanzimat Devri)",
    century: "19. yy",
    readTime: "10 dk",
    difficulty: "İleri",
    isFeatured: true,
    poeticMeter: "Mensur Hukuk Dili (Küllî Kaideler)",
    manuscriptImageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Osmanlı hukuk felsefesinin ve İslam medeni kanununun şaheseri olan Mecelle'nin temel umdelerini belirleyen, adaletin ve fıkhın evrensel ilkelerini ortaya koyan külli kaideler.",
    contentOttoman: `ماده ٢: بر ايشده تصدق مقاصده كوره در، يعنى بر كيمسه‌نك فعلى نيتنه كوره حكم اولنور (الامور بمقاصدها).
ماده ٤: يقين شك ايله زايل اولماز (اليقين لا يزول بالشك).
ماده ٥: بر شيك بولندغى حال اوزره قالمسى اصلدر (الاستصحاب).
ماده ٦: قديم قدمى اوزره ترك اولنور.
ماده ٧: ضرر قديم اولماز.
ماده ٨: برائت ذمت اصلدر. بنابرين بر كيمسه برينه بر وجهله بورجلى ادعا ايدرسه اثبات ايده مدكجه ادعاسى مسموع اولماز.
ماده ١٢: كلامده اصل اولان حقيقتدر. يعنى بر لفظك حقيقى معناسى ممكن اولدقجه مجازه عدول اولنماز.
ماده ١٧: مشقت تيسيرى جلب ايدر. يعنى ضيق و صعوبت كورلدكده انشراح و سهولت احكامى تأنس ايدر.
ماده ١٨: بر ايش ضيق اولدقده وسعت پيدا ايدر.
ماده ١٩: ضرر و ضرار يوقدر (لا ضرر ولا ضرار).
ماده ٢٠: ضرر ازاله اولنور.
ماده ٢١: ضرر اشد، ضرر اخف ايله ازاله اولنور.
ماده ٢٦: ضرر عامى دفع ايچون ضرر خاص اختيار اولنور.
ماده ٣٠: درء مفاسد جلب منافعدن اولادر.
ماده ٣٦: عادت محكمه در. يعنى عرف و عادت شرعاً حكم ايده جك در جهده اعتبار قلنور.`,
    contentTranslit: `Madde 2: Bir işten maksat ne ise hüküm ona göredir (El-umûru bi-makāsıdihâ).
Madde 4: Yakîn şekk ile zâil olmaz (El-yakīnu lâ-yezûlu bi'ş-şekk).
Madde 5: Bir şeyin bulunduğu hâl üzere kalması asıldır (İstıshâb).
Madde 6: Kadîm kıdemi üzere terk olunur.
Madde 7: Zarar kadîm olmaz.
Madde 8: Berâet-i zimmet asıldır. Binâenaleyh bir kimse birine bir vechile borçlu iddi‘â iderse isbât idemezse iddi‘âsı mesmû‘ olmaz.
Madde 12: Kelâmda asıl olan hakīkattir.
Madde 17: Meşakkat teysîri celbeder (El-meşakkatu teclibu't-teysîr).
Madde 18: Bir iş dıyk oldukta vüs‘at peydâ eder.
Madde 19: Zarar ve dırâr yokdur (Lâ zarara ve lâ dırâr).
Madde 20: Zarar izâle olunur (Ed-dararu yüzâl).
Madde 21: Zarar-ı eşedd zarar-ı ehaf ile izâle olunur.
Madde 26: Zarar-ı âmmı def‘ içün zarar-ı hâss ihtiyâr olunur.
Madde 30: Der’-i mefâsid celb-i menâfi‘den evlâdır.
Madde 36: ‘Âdet muhakkemdir (El-‘âdetu muhakkemetün).`,
    contentModern: `Madde 2: Bir işten maksat ve niyet ne ise hüküm ona göre verilir; fiiller niyetlere göre değerlendirilir.
Madde 4: Kesin olarak bilinen bir gerçek (yakîn), sonradan ortaya çıkan şüphe ile ortadan kalkmaz.
Madde 5: Bir durumun aksine delil olmadıkça eski hali üzere devam ettiği kabul edilir.
Madde 6: Eskiden beri meşru surette devam edegelen bir hak veya uygulama, eski hali üzere bırakılır.
Madde 7: Bir zararın eskiden beri var olması ona meşruiyet kazandırmaz; kadim de olsa zarar izale edilir.
Madde 8: Borçsuz ve suçsuz olmak asıldır (masumiyet karinesi). Bir kimse başkasının borçlu olduğunu iddia ederse, ispat etmedikçe sözüne itibar edilmez.
Madde 12: Sözde asıl olan hakiki manadır; hakikat manası varken mecaza başvurulmaz.
Madde 17: Güçlük ve meşakkat, kolaylığı celbeder; zorluk karşısında şeriat ruhsat ve kolaylık hükümleri tanır.
Madde 18: Bir işte darlık ve sıkıntı baş gösterdiğinde genişlik ve çıkış yolu peyda olur.
Madde 19: Ne doğrudan haksız yere zarar vermek ne de zarara zararla karşılık vermek meşrudur.
Madde 20: Meydana gelen zarar mutlaka giderilir ve tazmin edilir.
Madde 21: Daha şiddetli bir zarar, daha hafif bir zarara katlanılarak bertaraf edilir.
Madde 26: Toplumun umumi zararını önlemek için fertlerin hususi zararına katlanılması tercih olunur (kamu yararı).
Madde 30: Kötülükleri ve fesadı defetmek, menfaat ve fayda sağlamaktan daha önceliklidir.
Madde 36: Toplumda yerleşmiş örf ve teamül, nassa aykırı olmadıkça hakem ve kanun hükmündedir.`,
    vocabularyJson: JSON.stringify([
      { word: "Yakîn (يقين)", meaning: "Şüphesiz ve kesin bilgi", root: "Y-Q-N" },
      { word: "Zâil (زايل)", meaning: "Yok olan, ortadan kalkan", root: "Z-V-L" },
      { word: "Berâet-i Zimmet (برائت ذمت)", meaning: "Kişinin borçsuz ve suçsuz olması asıldır", root: "B-R-A ve Z-M-M" },
      { word: "Teysîr (تيسير)", meaning: "Kolaylaştırma, zorluğu giderme", root: "Y-S-R" },
      { word: "Mefâsid (مفاسد)", meaning: "Bozukluklar, zararlar, fesatlar", root: "F-S-D" },
      { word: "Muhakkem (محكم)", meaning: "Hüküm veren, kanun gibi bağlayıcı olan", root: "H-K-M" },
    ]),
    annotationsJson: JSON.stringify([
      { lineIndex: 5, note: "Madde 8, modern ceza ve medeni hukuktaki 'Masumiyet Karinesi'nin (Presumption of Innocence) klasik fıkıhtaki kusursuz formülasyonudur." },
      { lineIndex: 13, note: "Madde 30: Kamusal fayda temin etmektense cemiyetteki bozgunculuk ve haksızlığı engellemenin öncelikli olduğunu belirten temel idare hukuku prensibi." }
    ])
  },

  // 4. ERZURUMLU İBRAHİM HAKKI — MÂRİFETNÂME (1756)
  {
    slug: "marifetname-ibrahim-hakki",
    title: "Mârifetnâme (Kalp ve İrfan Faslı)",
    titleOttoman: "معرفتنامه (حقايق دل و انسان)",
    author: "Erzurumlu İbrâhim Hakkı",
    authorOttoman: "ابراهيم حقی ارضرومی",
    genre: "Hikmet & Tasavvuf",
    period: "18. Yüzyıl (Osmanlı İrfan Çağı)",
    century: "18. yy",
    readTime: "8 dk",
    difficulty: "Orta",
    isFeatured: true,
    poeticMeter: "Mensur ve Manzum Hikmet",
    manuscriptImageUrl: "https://images.unsplash.com/photo-1532012164546-f432f2e3dd76?auto=format&fit=crop&w=1200&q=80",
    summary:
      "18. yüzyıl Osmanlısının en mühim ansiklopedik eseri; kozmoloji, anatomi, ahlak ve tasavvufun meczedildiği Mârifetnâme'nin 'Gönül Aynası ve Hakikati Arama' hikmeti.",
    contentOttoman: `اى عزيز! بلكل كيم حق تعالى انسانى كندو صورت معنويه‌سنده خلق ايلدى.
عالمده نه وار ايسه جمله سنك انموذجنى انسانك وجودنده درج ايلدى.
كوك يوزى كبى انسانك عقلى، كونش كبى روحی، آى كبى قلبى، يلدزلر كبى حواس ظاهره و باطنه سی واردر.
قلب بر مرآت مجلادركيم حقك انوار تجليسى آنده ظاهر اولور.
هر كاه كيم قلب كدورات دنيويه‌دن و اخلاق ذميمه‌دن پاك و مصفا اولور، اول مرآتده حقائق اشياء اولدوغى كبى نمايان اولور.
حق شرلرى خير ايلر / زن ايتمه كه غير ايلر / عارف آنى سير ايلر / مولا كوره لم نيلر / نيلرسه كوزل ايلر.`,
    contentTranslit: `Ey azîz! Bilgil kim Hak Te‘âlâ insânı kendü sûret-i ma‘neviyyesinde halk eyledi.
‘Âlemde ne var ise cümlesinin ünmûzecini insânın vücûdunda derc eyledi.
Gök yüzü gibi insânın ‘aklı, güneş gibi rûhu, ay gibi kalbi, yıldızlar gibi havâss-ı zâhire ve bâtınası vardır.
Kalb bir mir’ât-ı mücellâdır kim Hakk'ın envâr-ı tecellîsi anda zâhir olur.
Her gâh kim kalb küdûrât-ı dünyeviyyeden ve ahlâk-ı zemîmeden pâk ve musaffâ olur, ol mir’âtde hakāyık-ı eşyâ olduğu gibi nümâyân olur.
Hak şerleri hayr eyler / Zannetme ki gayr eyler / ‘Ârif anı seyr eyler / Mevlâ görelim neyler / Neylerse güzel eyler.`,
    contentModern: `Ey aziz dost! Bilmiş ol ki Yüce Allah insanı kendi manevi suretinde, varlığın özü olarak yarattı.
Bütün kâinatta ne varsa hepsinin küçük bir numunesini (özetini) insanın varlığında dercetmiştir.
Gökyüzü gibi insanın aklı, güneş gibi parıldayan ruhu, ay gibi nurlanan kalbi ve yıldızlar gibi iç ve dış duyuları vardır.
Gönül cilalanmış berrak bir aynadır ki, Hakk'ın tecelli nurları ancak onda aşikâr olur.
Gönül dünyevi kederlerden, tortulardan ve kötü ahlaktan temizlenip arındığı vakit; eşyanın hakikatleri o aynada apaçık görünür.
Allah şer gibi görünen şeyleri hayra tebdil eder; zannetme ki bundan başkasını yapar; hakikati bilen arif bunu hayretle seyreder; Mevlâ görelim neyler, ne eylerse güzel eyler!`,
    vocabularyJson: JSON.stringify([
      { word: "Ünmûzec (انموذج)", meaning: "Numune, model, küçük örnek", root: "Farsça nümûne" },
      { word: "Derc (درج)", meaning: "İçine koymak, yerleştirmek", root: "D-R-C" },
      { word: "Mir'ât-ı Mücellâ (مرآت مجلا)", meaning: "Pasından arınmış, cilalanmış ayna", root: "R-A-Y ve C-L-V" },
      { word: "Küdûrât (كدورات)", meaning: "Bulanıklıklar, kederler, tortular", root: "K-D-R" },
      { word: "Musaffâ (مصفى)", meaning: "Süzülmüş, saf kılınmış", root: "S-F-A" },
      { word: "Nümâyân (نمايان)", meaning: "Görünen, aşikâr olan", root: "Farsça nümûden" },
    ]),
    annotationsJson: JSON.stringify([
      { lineIndex: 1, note: "Klasik İslam düşüncesindeki 'Mikrokozmos - Makrokozmos' (İnsan Âlem-i Asgar, Kâinat Âlem-i Ekberdir) anlayışının edebiyata yansıması." },
      { lineIndex: 5, note: "Erzurumlu İbrahim Hakkı'nın meşhur Tefvîznâme manzumesinin taç beyti." }
    ])
  },

  // 5. NÂBÎ — HAYRİYYE (1701)
  {
    slug: "hayriyye-i-nabi-oguda-nasihat",
    title: "Hayriyye (Oğula İlim ve Lisan Nasihati)",
    titleOttoman: "خيريهء نابی (نصيحت كودك)",
    author: "Nâbî (Yusuf Nâbî)",
    authorOttoman: "نابی",
    genre: "Hikmet & Edebiyat",
    period: "17. Yüzyıl (Klasik Hikemî Şiir)",
    century: "17. yy",
    readTime: "6 dk",
    difficulty: "Orta",
    isFeatured: false,
    poeticMeter: "Mef'ûlü Mefâîlü Feûlün",
    summary:
      "Hikemi şiirin piri Nâbî'nin oğlu Ebülhayr Mehmed Çelebi'ye yazdığı, ilim tahsili, dil terbiyesi ve dünya hırsından sakınmayı öğütleyen şaheser mesnevi.",
    contentOttoman: `١. علمدر اول ذاته شرف كيم كره ك
علمسز اولسه كشى حيدر كره ك
٢. كيمده كيم علم اولور اول معتبردر
علمسز آدم قورو بر شجردر
٣. الفاظى كوزل طوت لسانك پاك اولسون
سوزك هر ييرده عزيز و چالاک اولسون
٤. حقدن ايسته كيم كشاده ايده درگاه
علم و حكمتله دل اولسون آگاه
٥. طمعي قوى ايدوب دهره الدانمه
دنيانك رنكنه زنهار قوشانمه`,
    contentTranslit: `1. ‘İlmdir ol zâta şeref kim gerek
‘İlmsiz olsa kişi haydar gerek!
2. Kimde kim ‘ilm olur ol mu‘teberdir
‘İlmsiz âdem kuru bir şecerdir!
3. Elfâzı güzel tut lisânın pâk olsun
Sözün her yerde ‘azîz ü çâlâk olsun!
4. Hak'tan iste kim küşâde ede dergâh
‘İlm ü hikmetle dil olsun âgâh!
5. Tama‘ı koy edüp dehre aldanma
Dünyânın rengine zinhâr kuşanma!`,
    contentModern: `1. Bir insana hakiki şeref bahşeden şey ancak ilimdir; ilimden nasibi olmayan bir kimse aslan gibi kuvvetli olsa bile kıymetsizdir!
2. Her kimde ilim ve irfan varsa o kimse itibar sahibidir; ilmi olmayan insan meyvesiz kuru bir ağaç gibidir.
3. Kelimeleri doğru ve zarif kullan, lisanın temiz olsun; böylece söylediğin söz her mecliste hürmete layık ve tesirli olsun.
4. Yüce Hak'tan niyaz et ki sana hikmet kapılarını açsın; gönlün ilim ve hakikat nûruyla aydınlanıp uyanık olsun!
5. Açgözlülüğü bırak, şu fani dünyaya aldanma; dünyanın sahte renklerine ve yaldızlarına sakın ola kapılma!`,
    vocabularyJson: JSON.stringify([
      { word: "Şecer (شجر)", meaning: "Ağaç", root: "Ş-C-R" },
      { word: "Çâlâk (چالاک)", meaning: "Çevik, akıcı, tesirli", root: "Farsça" },
      { word: "Küşâde (كشاده)", meaning: "Açılmış, ferahlamış", root: "Farsça küşûden" },
      { word: "Âgâh (آگاه)", meaning: "Uyanık, haberdar, basiret sahibi", root: "Farsça" },
      { word: "Zinhâr (زنهار)", meaning: "Sakın, asla, katiyen", root: "Farsça" },
    ])
  },

  // 6. FUZÛLÎ — SU KASİDESİ (Mevcut)
  {
    slug: "su-kasidesi-fuzuli",
    title: "Su Kasidesi",
    titleOttoman: "قصيدهء آب (سو قصيده‌سی)",
    author: "Fuzûlî (Mehmed b. Süleyman)",
    authorOttoman: "فضولی",
    genre: "Divan Şiiri",
    period: "16. Yüzyıl (Klasik Çağ)",
    century: "16. yy",
    readTime: "7 dk",
    difficulty: "Orta",
    isFeatured: true,
    poeticMeter: "Fâilâtün Fâilâtün Fâilâtün Fâilün (Remel Bahri)",
    summary:
      "Divan şiirinin zirve şairi Fuzûlî'nin Hz. Peygamber (s.a.v.) methinde yazdığı, her beyti 'su' redifiyle hitam bulan 32 beyitlik şaheser kasidesi.",
    contentOttoman: `١. ساچمه اى كوز اشكدن كوكلمدهكى اودلره صو
كيم بو دنلو طوتوشن اودلره قيلمز چاره صو
٢. آبكوندر كنبذ دوار رنكى بلمزم
يا محيط اولمش كوزمدم كنبده دواره صو
٣. ذوق تيغندن عجب يوق اولسه كونلوم چاك چاك
كيم مرور ايلن بورور يارنجه صخر خاره صو
٤. قيل تمنا صودن اى كلشن كى خار خشكيدر
بلكه بر كول آچه لطفن شربت ديداره صو
٥. خاك پايندن مگر كيم آب رحمت قيلدى بحث
باشنه اوردى صبا هر دم صودن طاشلره صو`,
    contentTranslit: `1. Saçma ey göz eşkden gönlümdeki odlara su
Kim bu denli tutuşan odlara kılmaz çâre su
2. Âbgûndur günbed-i devvâr rengi bilmezem
Yâ muhît olmuş gözümden günbed-i devvâra su
3. Zevk-ı tîğünden aceb yok olsa gönlüm çâk çâk
Kim mürûr ile vurur yârenlik içün hârâya su
4. Kıl temennâ sudan ey gül-hasret kim eylesün
Pâk lutfından yetüşsün teşne-dil ruhsâra su
5. Hâk-i pâyine yetem dir ömrlerdir muttasıl
Başını taştan taşa urup gezer âvâre su`,
    contentModern: `1. Ey gözüm! Gönlümdeki aşk ve hasret ateşlerine gözyaşından su serpme; çünkü bu derece alev alev tutuşmuş ateşleri söndürmeye su kâr etmez!
2. Şu dönen gök kubbenin rengi su renginde (mavi) midir, yoksa gözümden dökülen yaşlar mı bütün semayı ve feleği çepeçevre kuşatmıştır, bilemiyorum.
3. Sevgilinin gamze kılıcının zevkiyle bağrım parça parça olsa buna şaşılmaz; çünkü su da zamanla akıp geçtikçe mermer gibi en sert kayaları dahi aşındırıp yarar.
4. Ey suya hasret güller gibi olan gönül! O kerem menbaından su dile ki, o lütuf şerbetiyle kavrulmuş dudaklara ve susuz yanağa taze bir hayat gelsin.
5. Su, 'onun ayağının bastığı toprağa varayım' ümidiyle asırlardır hiç durmaksızın başını taştan taşa vurarak vadiler boyu divane gibi akıp gider.`,
    vocabularyJson: JSON.stringify([
      { word: "Eşk (اشك)", meaning: "Gözyaşı", root: "Farsça" },
      { word: "Od (اود)", meaning: "Ateş, hararet", root: "Öz Türkçe" },
      { word: "Âbgûn (آبكون)", meaning: "Su rengi, derya mavisi", root: "Farsça âb + gûn" },
      { word: "Günbed-i Devvâr (كنبذ دوار)", meaning: "Dönen felek kubbesi, gökyüzü", root: "Arapça devr (D-V-R)" },
      { word: "Tîğ (تيغ)", meaning: "Kılıç, keskin bakış", root: "Farsça" },
      { word: "Hâk-i Pây (خاك پای)", meaning: "Ayağın bastığı mübarek toprak", root: "H-V-K ve P-A-Y" },
      { word: "Âvâre (آواره)", meaning: "Başıboş, hasretle dolaşan", root: "Farsça" },
    ]),
  },

  // 7. EVLİYA ÇELEBİ — SEYAHATNÂME
  {
    slug: "evliya-celebi-istanbul-tasviri",
    title: "Seyahatnâme — İstanbul'un Vasfı",
    titleOttoman: "سياحتنامهء اوليا چلبى (اوصاف قسطنطينيه)",
    author: "Evliyâ Çelebi (Derviş Mehmed Zıllî)",
    authorOttoman: "اوليا چلبى",
    genre: "Seyahatnâme & Tarih",
    period: "17. Yüzyıl (Klasik Çağ)",
    century: "17. yy",
    readTime: "8 dk",
    difficulty: "Orta",
    isFeatured: false,
    poeticMeter: "Mensur Seyahat Üslubu",
    summary:
      "Dünya seyyahı Evliya Çelebi'nin 17. yüzyıl payitahtı İstanbul'u, Ayasofya'yı, Boğaziçi yalılarını ve esnaf alaylarını kendine has canlı ve nükteli üslubuyla anlattığı seyahatnâme cildi.",
    contentOttoman: `بو شهر عظيم استانبول در كيم بهشت روى زميندر.
دور قلاعى ايله محاط اولوب طقوز يوز يكر مى بش پاره قله لرى واردر.
هواسى لطيف و آب حيات كبى صولرى جاريدر.
جمله دن اعلا آياصوفياى كبير در كيم گنبد بلندى فلك اطلسه سر چكمشدر.
اندروننده اولان رخام مرمرلر و قناديل زرين كوزلرى خيره ايلر.
اهاليسى غايت فصيح و بليغ تركى تكلم ايدوب هر صنفنده بر كماليت پديداردر.`,
    contentTranslit: `Bu şehr-i ‘azīm İslâmbol’dur kim behişt-i rûy-ı zemîndir.
Devr-i kılâ‘ı ile muhât olup dokuz yüz yigirmi beş pâre kuleleri vardır.
Hevâsı latîf ve âb-ı hayât gibi suları cârîdir.
Cümleden a‘lâ Ayasofya-yı Kebîr’dir kim günbed-i bülendi felek-i atlase ser çekmişdir.
Enderûnunda olan ruhâm mermerler ve kanâdîl-i zerrîn gözleri hîre eyler.
Ahâlîsi gâyet fasîh ü belîğ Türkî tekellüm edüp her sınıfında bir kemâliyyet pedîdârdır.`,
    contentModern: `Bu muazzam şehir İstanbul'dur ki yeryüzünün cennetidir.
Çepeçevre surlarla kuşatılmış olup surlarında dokuz yüz yirmi beş adet kulesi vardır.
Havası pek tatlı ve suları âb-ı hayat gibi şifalı ve gürül gürül akmaktadır.
Şehirdeki bütün mabetlerin en yücesi Büyük Ayasofya'dır ki onun yüksek kubbesi atlas göklerine baş uzatmıştır.
İçinde bulunan damarlı renkli mermerler ve altın yaldızlı kandiller gören gözleri hayran bırakır.
Ahalisi son derece düzgün ve fasih bir Türkçe konuşup cemiyetin her zümresinde ayrı bir olgunluk ve zarafet aşikârdır.`,
    vocabularyJson: JSON.stringify([
      { word: "Behişt (بهشت)", meaning: "Cennet", root: "Farsça" },
      { word: "Rûy-ı Zemîn (روی زمين)", meaning: "Yeryüzü, dünya yüzü", root: "Farsça" },
      { word: "Muhât (محاط)", meaning: "Kuşatılmış, çevrelenmiş", root: "H-V-T" },
      { word: "Ruhâm (رخام)", meaning: "Beyaz mermer, damarlı taş", root: "R-H-M" },
      { word: "Kanâdîl-i Zerrîn (قناديل زرين)", meaning: "Altın kandiller", root: "Arapça kandil + Farsça zerrin" },
      { word: "Hîre (خيره)", meaning: "Gözü kamaşmış, şaşkın hayran", root: "Farsça" },
      { word: "Pedîdâr (پديدار)", meaning: "Aşikâr, apaçık görünen", root: "Farsça" },
    ]),
  },

  // 8. NAMIK KEMAL — HÜRRİYET KASİDESİ
  {
    slug: "hurriyet-kasidesi-namik-kemal",
    title: "Hürriyet Kasidesi",
    titleOttoman: "قصيدهء حريت (نامق كمال)",
    author: "Namık Kemal",
    authorOttoman: "نامق كمال",
    genre: "Divan & Tanzimat Edebiyatı",
    period: "19. Yüzyıl (Tanzimat)",
    century: "19. yy",
    readTime: "6 dk",
    difficulty: "Orta",
    isFeatured: false,
    poeticMeter: "Mef'ûlü Mefâîlü Mefâîlü Feûlün (Hezec Bahri)",
    summary:
      "Vatan ve hürriyet şairi Namık Kemal'in, klasik kaside formunu modern hürriyet, adalet ve vatan mefhumlarıyla dönüştürdüğü ünlü hürriyet manifestosu.",
    contentOttoman: `١. كورب احكام عصرى منحرف صدق و سلامتيدن
قبول اتدك تملقى مروت ديانتيدن
٢. نه ممكن ظلم ايله بيداد ايله امحاى حقايق
سقيب انديشه یى سد ايله‌مك افكار خلقيدن
٣. نه ايكن بو قدر اسباب حريت جهانده
قالمش انسانلر اسير قيد غفلتيدن
٤. اولور بزمچون سعادت گر يوق اولسق يار يولنده
فدا اولسون حيات و جان بو ملت رايتيدن`,
    contentTranslit: `1. Görüp ahkâm-ı asrı münharif sıdk u selâmetten
Kabûl ettik tegallübü mürüvvet diyânetten!
2. Ne mümkün zulm ile bî-dâd ile imhâ-yı hakāyık
Sıkıp endîşeyi sedd eylemek efkâr-ı halkıyetten!
3. Ne iken bu kadar esbâb-ı hürriyyet cihânda
Kalmış insânlar esîr-i kayd-ı gafletten!
4. Olur bizimçün sa‘âdet ger yok olsak yâr yolunda
Fedâ olsun hayât u cân bu millet râyetinden!`,
    contentModern: `1. Çağın hükümlerini doğruluktan ve esenlikten sapmış görünce, iktidar hevesi yerine insanlık ve vicdan yolunu seçtik!
2. Zulüm ile, haksızlıkla hakikatleri yok etmek ne mümkündür? Düşünceyi boğarak halkın fikir üretmesine set çekmek imkânsızdır!
3. Dünyada hürriyetin bunca vasıtası ve imkânı varken, ne yazık ki insanlar hâlâ gaflet bağlarının esiri olarak kalmışlardır.
4. Bizim için en büyük saadet vatan sevgilisi yolunda yok olmaktır; canımız ve hayatımız bu yüce milletin sancağına feda olsun!`,
    vocabularyJson: JSON.stringify([
      { word: "Münharif (منحرف)", meaning: "Doğru yoldan sapmış", root: "H-R-F" },
      { word: "Bî-dâd (بيداد)", meaning: "Adaletsizlik, zulüm", root: "Farsça" },
      { word: "İmhâ (امحا)", meaning: "Yok etmek, silmek", root: "M-H-V" },
      { word: "Râyet (رايت)", meaning: "Sancak, bayrak", root: "R-Y-T" },
    ]),
  },

  // 9. TANZİMAT FERMANI (GÜLHANE HATT-I HÜMAYUNU)
  {
    slug: "tanzimat-fermani-gulhane-hatti",
    title: "Gülhane Hatt-ı Hümâyûnu (Tanzimat Fermanı)",
    titleOttoman: "كلخانه خط همايونی (تنظيمات خيريه فرمانی)",
    author: "Sultan Abdülmecid / Koca Mustafa Reşid Paşa",
    authorOttoman: "سلطان عبد المجيد خان / مصطفى رشيد پاشا",
    genre: "Ferman & Belge",
    period: "19. Yüzyıl (1839)",
    century: "19. yy",
    readTime: "8 dk",
    difficulty: "İleri",
    isFeatured: false,
    poeticMeter: "Resmi İnşâ ve Teşrifat Dili (Hatt-ı Hümayun)",
    summary:
      "3 Kasım 1839'da Gülhane Parkı'nda okunan, tebaanın can, mal, ırz güvenliğini ve kanun önünde eşitliğini teminat altına alan Osmanlı modernleşmesinin kurucu belgesi.",
    contentOttoman: `جمله يه معلوم اولدوغى اوزره دولتمزك بدايت ظهورندن برى احكام قرآنيه و قوانين شرعيه يه كمال مرتبه ده رعايت اولندغندن،
ملك و ملتمزك هر جهتله معموريت و رفاهى متزايد اولمش ايدى.
لكن يوز اللي سنه واردر كيم غائله لر و اسباب متعدده ايله شرع شريفه انقياد كافى مرتبه ده اولنمدغندن قوت و ثروتمز زواله طوغرى كتمشدر.
ايمدى، جناب حقك اعانه سيله ملتمزه حيات تازه بخش ايتمك ايچون بر طاقم قوانين جديده تنظيم اولنمق لازم كرمشدر.
بو قوانينك اساسی ايسه: جان، مال، عرض و ناموسك مصونيتي؛ ويركولرك عادلانه تعيينى و محاكمه نك علني اولمسيدر.`,
    contentTranslit: `Cümleye ma‘lûm olduğu üzere devletimizin bidâyet-i zuhûrundan beri ahkâm-ı Kur’âniyye ve kavânîn-i şer‘iyyeye kemâl-i mertebede ri‘âyet olunduğundan,
mülk ü milletimizin her cihetle ma‘mûriyyet ü refâhı mütezâyid olmuş idi.
Lâkin yüz elli sene vardır kim gāileler ve esbâb-ı müte‘addide ile şer‘-i şerîfe inkıyâd kâfî mertebede olunmadığından kuvvet ü servetimiz zevâle doğru gitmişdir.
İmdi, Cenâb-ı Hakk’ın i‘ânesiyle milletimize hayât-ı tâze bahşitmek içün bir takım kavânîn-i cedîde tanzîm olunmak lâzım gelmişdir.
Bu kavânînin esâsı ise: Cân, mâl, ‘ırz u nâmûsun masûniyyeti; vergilerin ‘âdilâne ta‘yîni ve muhâkemenin ‘alenî olmasıdır.`,
    contentModern: `Herkesin malumu olduğu üzere devletimizin kuruluşundan beri Kur'an hükümlerine ve şeriat kanunlarına tam riayet edildiğinden,
ülkemiz ve milletimiz her bakımdan mamur olup refahı günden güne artmıştı.
Fakat son yüz elli yıldır çeşitli gaileler ve sebeplerle kanunlara bağlılık gevşediğinden devletimizin kuvvet ve zenginliği gerilemeye başlamıştır.
Şimdi, Cenab-ı Hakk'ın yardımıyla milletimize taze bir hayat bahşetmek için yeni kanunların tanzim edilmesi zaruri olmuştur.
Bu yeni kanunların temeli ise şunlardır: Bütün tebaanın can, mal, ırz ve namus dokunulmazlığının sağlanması; vergilerin adalete uygun belirlenmesi ve mahkemelerin herkese açık (aleni) yapılmasıdır.`,
    vocabularyJson: JSON.stringify([
      { word: "Bidâyet (بدايت)", meaning: "Başlangıç, ilk ortaya çıkış", root: "B-D-A" },
      { word: "Mütezâyid (متزايد)", meaning: "Günden güne artan, çoğalan", root: "Z-Y-D" },
      { word: "İnkıyâd (انقياد)", meaning: "Boyun eğmek, kanuna uymak", root: "Q-V-D" },
      { word: "Masûniyyet (مصونيت)", meaning: "Dokunulmazlık, himaye altında olma", root: "S-V-N" },
    ]),
  },
];

async function seedLibrary() {
  console.log("📚 LÜGAT Dijital Kütüphane Klasik Eserleri Güncelleniyor...");

  for (const textData of libraryTexts) {
    const text = await prisma.libraryText.upsert({
      where: { slug: textData.slug },
      update: {
        title: textData.title,
        titleOttoman: textData.titleOttoman,
        author: textData.author,
        authorOttoman: textData.authorOttoman,
        genre: textData.genre,
        period: textData.period,
        century: textData.century,
        readTime: textData.readTime,
        difficulty: textData.difficulty,
        isFeatured: textData.isFeatured,
        summary: textData.summary,
        contentOttoman: textData.contentOttoman,
        contentTranslit: textData.contentTranslit,
        contentModern: textData.contentModern,
        vocabularyJson: textData.vocabularyJson,
        poeticMeter: textData.poeticMeter || null,
        manuscriptImageUrl: textData.manuscriptImageUrl || null,
        annotationsJson: textData.annotationsJson || null,
      },
      create: {
        slug: textData.slug,
        title: textData.title,
        titleOttoman: textData.titleOttoman,
        author: textData.author,
        authorOttoman: textData.authorOttoman,
        genre: textData.genre,
        period: textData.period,
        century: textData.century,
        readTime: textData.readTime,
        difficulty: textData.difficulty,
        isFeatured: textData.isFeatured,
        summary: textData.summary,
        contentOttoman: textData.contentOttoman,
        contentTranslit: textData.contentTranslit,
        contentModern: textData.contentModern,
        vocabularyJson: textData.vocabularyJson,
        poeticMeter: textData.poeticMeter || null,
        manuscriptImageUrl: textData.manuscriptImageUrl || null,
        annotationsJson: textData.annotationsJson || null,
      },
    });

    console.log(`📌 Kütüphane eseri işlendi: ${text.title} (${text.author})`);
  }

  console.log(`✅ ${libraryTexts.length} adet hakiki klasik şaheser dijital kütüphaneye başarıyla işlendi!`);
}

seedLibrary()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
