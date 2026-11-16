// prisma/perfectRootsBatch5.js
// LÜGAT — Phase 5 & 6: Batch 5 Kök Mükemmelleştirme (Kök 41 - 50 + Türkçe ve Farsça Morfolojik Kökler)
// Lisânü'l-Arab, Lane's Lexicon, Kâmûs-ı Türkî, Lugat-ı Nâcî, Clauson ve Steingass kaynaklı

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_5_ROOTS = [
  // 41. S-A-R (ش-ع-ر)
  {
    slug: "sh-r",
    rootLettersModern: "Ş-A-R",
    rootLettersArabic: "ش-ع-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kıl gibi ince farkları hissetmek, sezmek, şuurlu olmak, vezinli söz söylemek.",
    description: "Kökün aslı 'şa'r' yani kıldır. Kıl inceliğindeki en derin ve gizli manaları sezip hisseden kimseye 'şâir', bu idrak kabiliyetine 'şuur', vezin ve kafiye ile söylenen söze 'şiir' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Fıtnatü ve'l-ıttılâu ale'd-dakīk; eş-şi'rü me'rûfün li-külli nâzım.",
    ottomanUsageScope: "Divan edebiyatı (Şiir ve Şuarâ), felsefe (şuur ve idrak), hac rükünleri (meş'ar).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 770; Lugat-ı Nâcî s. 450; Devellioğlu s. 1190.",
    derivatives: [
      {
        slug: "siir",
        modernTurkish: "Şiir",
        primaryOttoman: "شعر",
        transliteration: "Şi‘r",
        origin: "Arapça",
        originDetail: "Arapça ş-a-r kökünden fi'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fi'l (فِعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Derin duygu ve hayallerin ahenkli vezinle söylenmesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Mevzun ve mukaffâ, hayal ve letafet ihtiva eden nazım; divan edebiyatı manzumeleri.",
        contemporaryMeaning: "Duygu, hayal ve düşüncelerin dizeler halinde etkili bir dille anlatımı.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "770",
        entryHeadword: "شعر",
        citation: "Şiir: Mevzun ve mukaffâ kelâm; hissiyat ve hayalatın ahenkle tebliği.",
        definitions: [
          { orderIndex: 1, definition: "Vezin, kafiye ve derunî ahenkle inşa edilen edebi nazım.", register: "Edebiyat" }
        ]
      },
      {
        slug: "suur",
        modernTurkish: "Şuur",
        primaryOttoman: "شعور",
        transliteration: "Şu‘ūr",
        origin: "Arapça",
        originDetail: "Arapça ş-a-r kökünden fu'ûl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fu'ûl (فُعُول) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "İnsanın kendisini ve çevresini derinden sezip idrak etmesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İnce seziş, idrak, zihnin uyanıklığı ve farkındalık kuvveti.",
        contemporaryMeaning: "Bilinç, algılama yetisi.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "450",
        entryHeadword: "شعور",
        citation: "Şuur: İdrak, anlamak; gafletin zıddı olan zihnî intibah.",
        definitions: [
          { orderIndex: 1, definition: "İnsanın kendi varlığını ve eşyayı idrak etme şuuru, bilinç.", register: "Felsefe & Psikoloji" }
        ]
      }
    ]
  },

  // 42. H-Z-R (ح-ض-ر)
  {
    slug: "hzr",
    rootLettersModern: "H-Z-R",
    rootLettersArabic: "ح-ض-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Gayıpta olmayıp bulunmak, şehirde ikamet etmek, huzurda olmak.",
    description: "Göçebeliğin (bedeviyet) zıddı olarak şehirde yerleşik yaşamaya 'hazarî' denir. Bir büyüğün önünde saygıyla bulunmaya 'huzur', mahkemeye celbetmeye 'ihzar', hazır olan cemaatin zabtına 'mahzar' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü'l-gaybe; el-hadâratü el-ikāmetü fi'l-kura ve'l-emsâr.",
    ottomanUsageScope: "Teşrifat (Huzûr-ı Hümâyûn), mahkeme (ihzar müzekkeresi), ahlak (huzur-ı kalp).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 540; Lugat-ı Nâcî s. 300; Devellioğlu s. 390.",
    derivatives: [
      {
        slug: "huzur",
        modernTurkish: "Huzur",
        primaryOttoman: "حضور",
        transliteration: "Ḥużūr",
        origin: "Arapça",
        originDetail: "Arapça h-z-r kökünden fu'ûl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fu'ûl (فُعُول) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Bir mekânda hazır bulunma; padişahın makamı; gönül rahatlığı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir yerde bizzat bulunma (gaybet zıddı); Padişahın makamı (Huzûr-ı Şâhâne); kalbin gafletten uzak dirlik hali.",
        contemporaryMeaning: "Gönül rahatlığı, dinginlik, barış.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "540",
        entryHeadword: "حضور",
        citation: "Huzur: Hazır bulunmak; gaybet mukabili; Padişah meclisi; emniyet ve rahat.",
        definitions: [
          { orderIndex: 1, definition: "Makam sahibi bir zatın makamında bulunma; kalbi dirlik ve sükun.", register: "Teşrifat & Tasavvuf" }
        ]
      }
    ]
  },

  // 43. Q-D-R (ق-د-r)
  {
    slug: "qdr",
    rootLettersModern: "Q-D-R",
    rootLettersArabic: "ق-د-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Ölçmek, biçmek, bir şeyin değer ve miktarını tayin etmek, gücü yetmek.",
    description: "Kökün aslı bir nesneyi diğerine denk tutarak ölçmektir. Ezelde her varlığa bir ölçü tayin edilmesine 'kader', güç ve kuvvete 'kudret', bir şeyin değerini bilmeye 'takdir' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Kazau'ş-şey'i ve kemiyyeteh; el-kudretü'l-istita'atü ale'l-fi'l.",
    ottomanUsageScope: "Kelâm (Kader ve İrade), padişah unvanları (Kudretlü Padişahım), ahlak (kadirşinaslık).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1025; Lugat-ı Nâcî s. 578; Devellioğlu s. 545.",
    derivatives: [
      {
        slug: "kudret",
        modernTurkish: "Kudret",
        primaryOttoman: "قدرت",
        transliteration: "Ḳudret",
        origin: "Arapça",
        originDetail: "Arapça q-d-r kökünden fu'let masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fu'let (فُعْلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Güç, kuvvet, iktidar ve ilahi yaratma kudreti.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Cenâb-ı Hakk'ın mümkinatı dilediği gibi yaratmaya kâfi olan ezelî sıfatı; beşeri kuvvet ve iktidar.",
        contemporaryMeaning: "Güç, erk, iktidar; Tanrı'nın gücü.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1025",
        entryHeadword: "قدرت",
        citation: "Kudret: Kuvvet, iktidar, takat; Cenâb-ı Hakk'ın sıfat-ı zâtiyyesi.",
        definitions: [
          { orderIndex: 1, definition: "Varlıkları yoktan var etmeye ve idareye kafi olan sonsuz ilahi kuvvet.", register: "Kelam" }
        ]
      },
      {
        slug: "takdir",
        modernTurkish: "Takdir",
        primaryOttoman: "تقدير",
        transliteration: "Taḳdīr",
        origin: "Arapça",
        originDetail: "Arapça q-d-r kökünden tef'îl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tef'îl (تَفْعِيل) Masdarı",
        morphologicalType: "Tef'îl Bâbı Masdarları",
        contribution: "Ölçü koyma, ezelde tayin etme; değerini bilip tebrik etme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kader tayini, ezelde Cenâb-ı Hakk'ın takdir eylediği hüküm; bir kimsenin kıymetini bilip medhetme.",
        contemporaryMeaning: "Beğenme, değer verme; kestirme, tahmin.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "578",
        entryHeadword: "تقدير",
        citation: "Takdir: Miktar tayin eylemek; kader hükmü; kıymetşinaslık.",
        definitions: [
          { orderIndex: 1, definition: "Ezelde takdir edilen ilahi plan; bir güzelliğin değerini teslim etme.", register: "Akide & Ahlak" }
        ]
      }
    ]
  },

  // 44. S-B-B (س-ب-ب)
  {
    slug: "sbb",
    rootLettersModern: "S-B-B",
    rootLettersArabic: "س-ب-ب",
    origin: "Arapça (Muzaaf)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kuyuya sarkıtılan ip, bir maksada ulaştıran vasıta, illet.",
    description: "Muzaaf köktür. Bedevi çöl hayatında derin bir kuyudan su çekmek için sarkıtılan ipe 'sebeb' denirdi. Zamanla bir gayeye veya hadiseye yol açan her türlü vasıtaya 'sebep' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Hablü yüstedlâ bihi ile'l-mâi; küllü şey'in yütesabbelü bihi ilâ gayrih.",
    ottomanUsageScope: "Kelâm ve felsefe (Esbâb-ı mûcibe), fizik (illiyet prensibi), fıkıh.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 705; Lugat-ı Nâcî s. 405; Devellioğlu s. 1040.",
    derivatives: [
      {
        slug: "sebep",
        modernTurkish: "Sebep",
        primaryOttoman: "سبب",
        transliteration: "Sebeb",
        origin: "Arapça",
        originDetail: "Arapça s-b-b kökünden fa'al masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'al (فَعَل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Bir neticeyi doğuran vasıta, illet, gerekçe.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir şeyin husulüne vesile olan vasıta ve illet; kuyu ipi (aslı).",
        contemporaryMeaning: "Bir olayı doğuran etken, gerekçe, neden.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "705",
        entryHeadword: "سبب",
        citation: "Sebeb: Vasıta, vesile, illet; bir işin vücuda gelmesine badi olan emir.",
        definitions: [
          { orderIndex: 1, definition: "Bir neticenin vücut bulmasına vasıta olan amil, gerekçe.", register: "Felsefe & Mantık" }
        ]
      }
    ]
  },

  // 45. H-R-K (ح-ر-ك)
  {
    slug: "hrk",
    rootLettersModern: "H-R-K",
    rootLettersArabic: "ح-ر-ك",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Durgunluk ve sükunun zıddı olmak, kımıldamak, yer değiştirmek.",
    description: "Sükûnetin zıddıdır. Felsefede cismin mekân veya hal değiştirmesine 'hareket', harflerin sesli okunmasını sağlayan işaretlere (üstün, esre, ötre) 'hareke', harekete geçirene 'muharrik' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü's-sükûn; el-hareketü intikālü'l-cismi min mekânin ilâ mekân.",
    ottomanUsageScope: "Felsefe (Hareket ve Sükûn), hat sanatı ve gramer (hareke), mekanik ve idare.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 526; Lugat-ı Nâcî s. 295; Devellioğlu s. 435.",
    derivatives: [
      {
        slug: "hareket",
        modernTurkish: "Hareket",
        primaryOttoman: "حركت",
        transliteration: "Ḥareket",
        origin: "Arapça",
        originDetail: "Arapça h-r-k kökünden fa'ale masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'ale (فَعَلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kımıldanış, sükûnetten çıkış, tavır ve davranış.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Durgunluğun zıddı olan kımıldama; insanın tavır ve gidişatı (tarz-ı hareket); zelzele.",
        contemporaryMeaning: "Kımıldanış, yer değiştirme; davranış; toplumsal eylem.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "526",
        entryHeadword: "حركت",
        citation: "Hareket: Sükûn mukabili; kımıldanmak; tarz-ı muamele; zelzele.",
        definitions: [
          { orderIndex: 1, definition: "Sükûndan faaliyete geçiş; insanın ahlaki davranışı.", register: "Felsefe & Ahlak" }
        ]
      }
    ]
  },

  // 46. V-S-L (و-ص-ل)
  {
    slug: "vsl",
    rootLettersModern: "V-S-L",
    rootLettersArabic: "و-ص-ل",
    origin: "Arapça (Misâl-i Vâvî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "İki şeyi birbirine eklemek, ayrılığı bitirip kavuşmak.",
    description: "Hicran ve ayrılığın zıddıdır. Seven ile sevilenin birbirine kavuşmasına 'vuslat', iki şeyi birbirine rapteden bağa 'sıla/vasıl', kavuşma arzusuna 'tevessül' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü'l-hicrân ve'l-kat'; el-vaslü zıddü'l-fasl.",
    ottomanUsageScope: "Divan edebiyatı (Vuslat ve Hicran tezadı), tasavvufi vuslat, gramer (vasl hemzesi).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 1498; Lugat-ı Nâcî s. 815; Devellioğlu s. 1368.",
    derivatives: [
      {
        slug: "vuslat",
        modernTurkish: "Vuslat",
        primaryOttoman: "وصلت",
        transliteration: "Vuṣlat",
        origin: "Arapça",
        originDetail: "Arapça v-s-l kökünden fu'let masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fu'let (فُعْلَة) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kavuşma, ayrılığın sona ermesi, sevgiliye erişme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Ayrılık acısının bitip sevgiliye kavuşma; Hakk'a manevi vuslat; Şeb-i Arûs.",
        contemporaryMeaning: "Kavuşma, sevgiliye erişme.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1498",
        entryHeadword: "وصلت",
        citation: "Vuslat: Vasl olmak, kavuşmak; hicran zıddı; mülakat.",
        definitions: [
          { orderIndex: 1, definition: "Hicranın ve firakın hitam bulmasıyla sevgiliye vasıl olma saadeti.", register: "Edebiyat & Tasavvuf" }
        ]
      }
    ]
  },

  // 47. T-B-A (ط-ب-ع)
  {
    slug: "tba",
    rootLettersModern: "T-B-A",
    rootLettersArabic: "ط-ب-ع",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Mühür basmak, madeni kalıba döküp sikke basmak, fıtrata nakşolunmak.",
    description: "Kökün en kadim manası sikke ve mühür basmaktır. İnsanın fıtratına silinmez şekilde nakşolunan cibilliyete 'tabiat', kitapların kâğıda basıldığı müesseseye 'matbaa' denmiştir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Hatmu ve'l-kalyü fi'l-hadîd; et-tabî'atü el-cibilliyyetü'l-fıtriyyeh.",
    ottomanUsageScope: "Felsefe ve fen (Tabiat ilmi), matbaacılık tarihi (Matbaa-i Âmire), ahlak.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 860; Lugat-ı Nâcî s. 490; Devellioğlu s. 1220.",
    derivatives: [
      {
        slug: "tabiat",
        modernTurkish: "Tabiat",
        primaryOttoman: "طبيعت",
        transliteration: "Ṭabī‘at",
        origin: "Arapça",
        originDetail: "Arapça t-b-a kökünden fa'îlet vezninde masdar isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fa'îlet (فَعِيلَة) masdar isim",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Fıtrî yaratılış, mizaç; canlı ve cansız tabiat âlemi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İnsanın fıtrî cibilliyeti ve huyu; kâinatın nizamını kuran ilahi fıtrat ve kanunlar.",
        contemporaryMeaning: "Doğa; insanın huyu, karakteri.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "860",
        entryHeadword: "طبيعت",
        citation: "Tabiat: Cibilliyet, huy; masnuat ve mevcudat âlemi, doğa.",
        definitions: [
          { orderIndex: 1, definition: "Varlıkların yaratılışındaki ilahi fıtrat; insanın değişmez karakteri.", register: "Felsefe & Ahlak" }
        ]
      },
      {
        slug: "matbaa",
        modernTurkish: "Matbaa",
        primaryOttoman: "مطبعه",
        transliteration: "Maṭba‘a",
        origin: "Arapça",
        originDetail: "Arapça t-b-a kökünden mef'ale vezninde ism-i mekândır.",
        partOfSpeech: "İsim",
        pattern: "Mef'ale (مَفْعَلَة) İsm-i Mekân",
        morphologicalType: "İsm-i Mekânlar",
        contribution: "Kitap ve evrakın basıldığı basımevi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kitap, risale ve gazetelerin tab' olunduğu basımevi (Matbaa-i Âmire).",
        contemporaryMeaning: "Basımevi, basım tesisi.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "490",
        entryHeadword: "مطبعه",
        citation: "Matbaa: Kitap tab' olunan mahal, basmahane.",
        definitions: [
          { orderIndex: 1, definition: "Hurufat ve baskı makineleriyle eserlerin çoğaltıldığı müessese.", register: "Kültür Tarihi" }
        ]
      }
    ]
  },

  // 48. S-Y-R (س-ي-ر)
  {
    slug: "syr",
    rootLettersModern: "S-Y-R",
    rootLettersArabic: "س-ي-ر",
    origin: "Arapça (Ecvef-i Yâî)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Yürümek, yol almak, hayat tarzı ve ahlaki gidişat sergilemek.",
    description: "Ecvef-i Yâî köktür. Yolda yürümeye 'seyr', insanın ahlak ve hayat gidişatına 'sîret', gökte dönen gezegenlere 'seyyare' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-Meşyü ve'l-mürûru fi'l-arz; es-sîretü't-tarîkatü ve'l-hey'eh.",
    ottomanUsageScope: "Siyer-i Nebî (Peygamberin hayatı), astronomi (seyyareler), tasavvuf (seyr ü sülûk).",
    primarySourceCitation: "Kâmûs-ı Türkî s. 735; Lugat-ı Nâcî s. 428; Devellioğlu s. 1085.",
    derivatives: [
      {
        slug: "seyir",
        modernTurkish: "Seyir",
        primaryOttoman: "سير",
        transliteration: "Seyr",
        origin: "Arapça",
        originDetail: "Arapça s-y-r kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Yürüme, hareket etme; ibretle temaşa etme.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Yürüme, yolculuk; etrafı ibret ve zevkle temaşa etme; gemi seferi.",
        contemporaryMeaning: "Gidiş, ilerleme; bakıp izleme.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "735",
        entryHeadword: "سير",
        citation: "Seyr: Yürüyüş, hareket; temaşa; ibret nazarıyla bakmak.",
        definitions: [
          { orderIndex: 1, definition: "Bir istikamette yol alma; âlemi tefekkürle seyretme.", register: "Genel & Edebiyat" }
        ]
      }
    ]
  },

  // 49. F-T-H (ف-ت-ح)
  {
    slug: "fth",
    rootLettersModern: "F-T-H",
    rootLettersArabic: "ف-ت-ح",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "Kilidi açmak, kapalılığı gidermek, beldeyi adalete açıp fethetmek.",
    description: "Kapanmanın (inğilâk) zıddıdır. Kapıyı açan anahtara 'miftah', bir esere başlarken yapılan açılışa 'iftitah', kalplerin ve memleketlerin İslam adaletine açılmasına 'fetih' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü'l-iğlâk; fethu'l-bâb ve fethu'l-bilâd.",
    ottomanUsageScope: "Osmanlı gaza ve fütuhat ideolojisi (Fatih Sultan Mehmed), fıkıh, hat sanatı.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 970; Lugat-ı Nâcî s. 550; Devellioğlu s. 295.",
    derivatives: [
      {
        slug: "fetih",
        modernTurkish: "Fetih",
        primaryOttoman: "فتح",
        transliteration: "Fetḥ",
        origin: "Arapça",
        originDetail: "Arapça f-t-h kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Kapalılığı açma; bir beldeyi zaptedip adalete açma.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Bir şehri veya kaleyi harp ile alıp idaresi altına alma; zafer; kalbin fütuhata ermesi.",
        contemporaryMeaning: "Bir yeri savaşla ele geçirme, açma.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "970",
        entryHeadword: "فتح",
        citation: "Fetih: Açmak; bir memleketi istilâ ve zapt eylemek; zafer.",
        definitions: [
          { orderIndex: 1, definition: "Bir beldeyi zulümden kurtarıp adalet nizamına açma eylemi.", register: "Tarih & Gaza" }
        ]
      },
      {
        slug: "fatih",
        modernTurkish: "Fatih",
        primaryOttoman: "فاتح",
        transliteration: "Fātiḥ",
        origin: "Arapça",
        originDetail: "Arapça f-t-h kökünden fâ'il vezninde ism-i fâildir.",
        partOfSpeech: "Sıfat / Özel İsim",
        pattern: "Fâ'il (فَاعِل) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Açan, fetheden, beldeleri fetheden muzaffer hükümdar.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Fetheden, fetih müyesser olan; İstanbul Fatihi Sultan Mehmed Han.",
        contemporaryMeaning: "Fetheden, açan (özel isim).",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "550",
        entryHeadword: "فاتح",
        citation: "Fatih: Açıcı; fetih müyesser olan gazi hükümdar.",
        definitions: [
          { orderIndex: 1, definition: "Bir kaleyi veya beldeyi fethederek nizam kuran fatih.", register: "Tarihî Şahsiyet" }
        ]
      }
    ]
  },

  // 50. S-K-R (ش-ك-ر)
  {
    slug: "skr",
    rootLettersModern: "Ş-K-R",
    rootLettersArabic: "ش-ك-ر",
    origin: "Arapça (Sülâsî Mücerred)",
    rootType: "TRILITERAL_ARABIC",
    primaryMeaning: "İyiliği itiraf etmek, nimeti verene lisan ve amelle teşekkür etmek.",
    description: "Kökün aslı bol su içen hayvanın semirip iyiliğinin bedeninde aşikâr olmasıdır. Nimetin sahibini bilip ona hamdetmeye 'şükür', nimeti inkâr edip örtmeye 'küfrân-ı nimet' denir.",
    lexicalMeaningArabic: "Lisânü'l-Arab: el-İ'tirâfü bi'n-ni'meti ve izhâruhâ; zıddü'l-küfrân.",
    ottomanUsageScope: "Ahlak ve kelâm (Şükür ve Hamd), tasavvufi makamlar (Şâkirîn), günlük muaşeret.",
    primarySourceCitation: "Kâmûs-ı Türkî s. 775; Lugat-ı Nâcî s. 455; Devellioğlu s. 1200.",
    derivatives: [
      {
        slug: "sukur",
        modernTurkish: "Şükür",
        primaryOttoman: "شكر",
        transliteration: "Şükr",
        origin: "Arapça",
        originDetail: "Arapça ş-k-r kökünden fu'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fu'l (فُعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Nimeti verene minnet duyup itiraf etme fazileti.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Cenâb-ı Hakk'ın ihsan eylediği nimetleri O'nun rızası dairesinde sarfetmek; minnettarlık arzı.",
        contemporaryMeaning: "Görülen iyiliğe karşı duyulan minneti dile getirme.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "775",
        entryHeadword: "شكر",
        citation: "Şükür: İyiliği bilmek, nimete mukabele eylemek; hamd.",
        definitions: [
          { orderIndex: 1, definition: "Nimetin hakiki sahibini bilip lisan, kalp ve amelle mukabelede bulunma.", register: "Ahlak & Tasavvuf" }
        ]
      },
      {
        slug: "tesekkur",
        modernTurkish: "Teşekkür",
        primaryOttoman: "تشكر",
        transliteration: "Teşekkür",
        origin: "Arapça",
        originDetail: "Arapça ş-k-r kökünden tefa''ul bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Tefa''ul (تَفَعُّل) Masdarı",
        morphologicalType: "Tefa''ul Bâbı Masdarları",
        contribution: "Kişinin gördüğü bir iyilik karşısında memnuniyetini izhar etmesi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Nimeti veya iyiliği itiraf edip şükrünü eda eyleme.",
        contemporaryMeaning: "Yapılan bir iyiliğe veya hizmete sözle minnet bildirme.",
        sourceCode: "LN",
        volume: "1",
        pageNumber: "455",
        entryHeadword: "تشكر",
        citation: "Teşekkür: Şükür eylemek; bir kimsenin lütfunu itiraf ile minnettarlık göstermek.",
        definitions: [
          { orderIndex: 1, definition: "Görülen lütuf ve ihsana karşı minnettarlığı sözle beyan etme.", register: "Muaşeret" }
        ]
      }
    ]
  },

  // TÜRKÇE KÖK: BİL- (بيل-)
  {
    slug: "tr-bil",
    rootLettersModern: "BİL-",
    rootLettersArabic: "بيل-",
    origin: "Öz Türkçe Kök (Fiil Kökü)",
    rootType: "TURKISH_ROOT",
    primaryMeaning: "Bir nesneyi idrak etmek, zihinde kavramak, malumat sahibi olmak.",
    description: "Eski Türkçeden (Orhun ve Uygur yazıtları) günümüze intikal etmiş aslî Türkçe fiil köküdür (Clauson s. 340). Arapça 'a-l-m' (İlim) kökünün Türkçedeki aslî karşılığıdır. '+ge', '+gi', '+im' ekleriyle zengin bir morfolojik aile kurmuştur.",
    lexicalMeaningArabic: "Clauson (EDPT): 'to know, understand, recognise'. Kaşgarlı Mahmud Divânu Lugâti't-Türk.",
    ottomanUsageScope: "Klasik ve halk edebiyatı, devlet teşrifatı (Bilge Tonyukuk'tan itibaren 'bilge'), felsefe.",
    primarySourceCitation: "Sir Gerard Clauson, An Etymological Dictionary of Pre-Thirteenth-Century Turkish s. 340; Gülensoy s. 142.",
    derivatives: [
      {
        slug: "bilge",
        modernTurkish: "Bilge",
        primaryOttoman: "بيلكه",
        transliteration: "Bilge",
        origin: "Türkçe",
        originDetail: "Eski Türkçe bil- fiil köküne +ge fiilden isim yapım eki getirilerek türetilmiştir.",
        partOfSpeech: "Sıfat / İsim",
        pattern: "Fiilden İsim (+ge Eki)",
        morphologicalType: "Türkçe Ekli Türevler",
        contribution: "Derin bilgi ve hikmet sahibi ulu şahsiyet.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Çok bilen, hikmetli, âlim ve hakîm zât (Bilge Kağan).",
        contemporaryMeaning: "Bilgili, iyi ahlaklı, olgun ve örnek kimse; filozof.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "348",
        entryHeadword: "بيلكه",
        citation: "Bilge: Âlim, hakîm, çok bilen kâmil kimse.",
        definitions: [
          { orderIndex: 1, definition: "İlim ve hikmette kemale ermiş bilge kişi.", register: "Türk Dili Tarihi" }
        ]
      },
      {
        slug: "bilgi",
        modernTurkish: "Bilgi",
        primaryOttoman: "بيلكو",
        transliteration: "Bilgi",
        origin: "Türkçe",
        originDetail: "Türkçe bil- fiil kökünden +gi ekiyle türetilmiş isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fiilden İsim (+gi Eki)",
        morphologicalType: "Türkçe Ekli Türevler",
        contribution: "Öğrenme veya tecrübe neticesinde zihinde hasıl olan malumat.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İlim, vukuf, malumat; bir şeyi bihakkın bilme hali.",
        contemporaryMeaning: "Öğrenme, araştırma veya gözlem yolu ile elde edilen gerçekler bütünü.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "348",
        entryHeadword: "بيلكو",
        citation: "Bilgi: Malumat, vukufiyet, ilim.",
        definitions: [
          { orderIndex: 1, definition: "Zihnin hakikati kavramasıyla elde edilen malumat manzumesi.", register: "Felsefe" }
        ]
      }
    ]
  },

  // FARSÇA MORFOLOJİ: DÂNİŞ (دانش)
  {
    slug: "fa-danish",
    rootLettersModern: "DÂNİŞ",
    rootLettersArabic: "دانش",
    origin: "Farsça (İsim / Masdar Kökü)",
    rootType: "PERSIAN_COMPOUND",
    primaryMeaning: "Bilgi, ilim, anlayış, irfan (dânisten fiilinden).",
    description: "Farsça 'dânisten' (bilmek) mastarının şimdiki zaman gövdesinden '+iş' ekiyle yapılmış masdar isimdir (Steingass s. 500). Osmanlı'da medrese talebesine 'dânişmend', üniversiteye 'dânişgâh' denmiştir.",
    lexicalMeaningArabic: "Steingass: 'Knowledge, science, learning, wisdom'. Dehkhoda: İlm ü mârifet.",
    ottomanUsageScope: "Medrese ilmiye teşkilatı (Dânişmend), yüksek maarif (Dânişgâh), divan şiiri.",
    primarySourceCitation: "Steingass s. 500; Kâmûs-ı Türkî s. 605; Devellioğlu s. 210.",
    derivatives: [
      {
        slug: "danismend",
        modernTurkish: "Dânişmend",
        primaryOttoman: "دانشمند",
        transliteration: "Dānişmend",
        origin: "Farsça",
        originDetail: "Farsça dâniş (bilgi) kelimesine sahiplik bildiren +mend ekinin eklenmesiyle oluşan birleşik sıfattır.",
        partOfSpeech: "İsim / Sıfat",
        pattern: "Farsça Sıfat Terkibi (+mend)",
        morphologicalType: "Farsça Birleşik Kelimeler",
        contribution: "Bilgi sahibi, ilim ehli; medresede yüksek tahsil gören talebe.",
        relationshipType: "COMPOUND",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İlim sahibi, âlim; Osmanlı medreselerinde Sahn-ı Semân seviyesine gelmiş ileri derece talebe.",
        contemporaryMeaning: "Bilgili, âlim kimse; eski bir Türk beyliği hanedanı.",
        sourceCode: "KT",
        volume: "1",
        pageNumber: "605",
        entryHeadword: "دانشمند",
        citation: "Dânişmend: İlim sahibi, âlim; medrese talebesinin ali derecesi.",
        definitions: [
          { orderIndex: 1, definition: "Osmanlı medrese nizamında icazet aşamasına gelmiş yüksek ilim talebesi.", register: "Osmanlı İlmiye Sınıfı" }
        ]
      }
    ]
  }
];

async function seedBatch5() {
  console.log("🌟 === BATCH 5: KÖKLERİ VE KELİMELERİ MÜKEMMELLEŞTİRME BAŞLADI ===");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const rootData of BATCH_5_ROOTS) {
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

  console.log("✅ Batch 5 kökleri ve morfolojik aileleri başarıyla mükemmelleştirildi!");
}

seedBatch5()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
