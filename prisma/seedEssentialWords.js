// prisma/seedEssentialWords.js
// LÜGAT — Sözlükçülük, Edebiyat, Hukuk, Kitap ve İlmiye Istılahları Master Tohum Dosyası

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ESSENTIAL_ROOTS_AND_WORDS = [
  // 1. Q-M-S (ق-م-س) -> KÂMÛS
  {
    root: {
      slug: "qms",
      rootLettersModern: "Q-M-S",
      rootLettersArabic: "ق-م-س",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Denize dalmak, derin sulara batıp çıkmak, engin okyanus.",
      description: "Asıl manası derin derya ve okyanustur (el-Kâmûsu'l-Muhît). Fîrûzâbâdî'nin meşhur lügati bu adı aldıktan sonra, bütün geniş ve ihata edici sözlüklere 'kamus' denmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Gamru mine'l-bahri ve'l-lücce; el-Kâmûsü mu'zamü mâi'l-bahr.",
      ottomanUsageScope: "Sözlükçülük tarihi (Kâmûs-ı Türkî, Kâmûs-ı Fransevî, Kâmûsü'l-A'lâm), edebiyat.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1018; Lisânü'l-Arab C. 6 s. 182; Devellioğlu s. 540.",
    },
    words: [
      {
        slug: "kamus",
        modernTurkish: "Kâmûs",
        primaryOttoman: "قاموس",
        transliteration: "Ḳāmūs",
        origin: "Arapça",
        originDetail: "Arapça q-m-s kökünden fâ'ûl vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fâ'ûl (فَاعُول) Vezni",
        morphologicalType: "Doğrudan Müştaklar (Masdar İsim)",
        contribution: "Derya gibi derin ve geniş olan büyük sözlük.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Büyük lügat, okyanus; bir lisanın bütün elfazını ihata eden mükemmel sözlük (Kâmûs-ı Türkî).",
        contemporaryMeaning: "Sözlük, lügat; bir dilin bütün kelimelerini içine alan kapsamlı eser.",
        modernEquivalents: "sözlük, lügat, söz derlemesi",
        definitions: [
          { orderIndex: 1, definition: "Bir dilin bütün veya başlıca kelimelerini manalarıyla toplayan büyük ve kapsamlı sözlük.", register: "Lügat & Dilbilim" },
          { orderIndex: 2, definition: "Büyük derya, engin okyanus (asıl lügavi manası).", register: "Klasik Arapça" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1018",
        entryHeadword: "قاموس",
        citation: "Kâmûs: Bahr-i muhît, büyük derya; meşhur lügat-ı Arabiyye ve mecazen her lisanın büyük sözlüğü."
      }
    ]
  },

  // 2. L-G-V (ل-غ-و) -> LÜGAT
  {
    root: {
      slug: "lgv",
      rootLettersModern: "L-G-V",
      rootLettersArabic: "ل-غ-و",
      origin: "Arapça (Nâkıs-ı Vâvî)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Konuşmak, laf söylemek, telaffuz etmek; faydasız söz (lağv).",
      description: "Nâkıs köktür. İnsanın ağzından çıkan her türlü lisanî söze 'lügat' denir. Zamanla hem tek bir 'kelime' hem de kelimeler hazinesini toplayan 'sözlük' manasında kullanılmıştır.",
      lexicalMeaningArabic: "Lisânü'l-Arab: en-Nutku ve'l-kelâm; el-lügatü el-kelimetü ev el-lisân.",
      ottomanUsageScope: "Sözlükçülük (Lügat-ı Nâcî, Lehçe-i Osmânî), edebiyat, dilbilim.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1242; Lugat-ı Nâcî s. 680; Devellioğlu s. 660.",
    },
    words: [
      {
        slug: "lugat",
        modernTurkish: "Lügat",
        primaryOttoman: "لغت",
        transliteration: "Lüġat",
        origin: "Arapça",
        originDetail: "Arapça l-g-v kökünden fu'at vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fu'at (فُعَة) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Söz, kelime; dil; kelimeleri izah eden sözlük kitabı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kelime, söz; lisan; bir dilin kelimelerini açıklayan kitap (Lügat-ı Remzî, Lügat-ı Nâcî).",
        contemporaryMeaning: "Sözlük, kelime hazinesi; dil; eski kelime.",
        modernEquivalents: "sözlük, kelime, lisan, dil",
        definitions: [
          { orderIndex: 1, definition: "Kelimelerin manalarını ve imlalarını bildiren sözlük kitabı.", register: "Lügat & Edebiyat" },
          { orderIndex: 2, definition: "Müstakil bir kelime veya söz (örn: 'Bu lügat ne anlama gelir?').", register: "Klasik Dil" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1242",
        entryHeadword: "لغت",
        citation: "Lügat: Söz, kelime; lisân; lügat kitabı, sözlük."
      }
    ]
  },

  // 3. K-L-M (ك-ل-م) -> KELÂM & MÜTEKELLİM
  {
    root: {
      slug: "klm",
      rootLettersModern: "K-L-M",
      rootLettersArabic: "ك-ل-م",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Yaralamak, kalpte ve zihinde tesir bırakan söz söylemek.",
      description: "Kökün aslı 'kelm' yani bıçakla yaralamaktır. Sözün de dinleyenin gönlünde derin bir iz ve yara açması hasebiyle manalı söze 'kelâm' denmiştir. İslam akaidini akli delillerle ispat eden ilme de 'İlm-i Kelâm' denir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Cerhu; el-kelâmü el-kavlü'l-müfîd.",
      ottomanUsageScope: "Kelâm ilmi, divan edebiyatı (Kelâm-ı kibâr), meclis sohbeti (tekellüm).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1175; Lugat-ı Nâcî s. 640; Devellioğlu s. 595.",
    },
    words: [
      {
        slug: "kelam",
        modernTurkish: "Kelâm",
        primaryOttoman: "كلام",
        transliteration: "Kelām",
        origin: "Arapça",
        originDetail: "Arapça k-l-m kökünden fe'âl vezninde masdardır.",
        partOfSpeech: "İsim",
        pattern: "Fa'âl (فَعَال) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Manalı söz, meramı ifade eden ibare; Allah'ın Kelâm sıfatı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Manalı ve tam söz; konuşma; İslam akidelerini aklî ve naklî hüccetlerle ispat eden ilim (İlm-i Kelâm); Kelâm-ı Kadîm (Kur'ân).",
        contemporaryMeaning: "Söz, konuşma; teoloji/kelam ilmi.",
        modernEquivalents: "söz, lakırdı, laf, konuşma",
        definitions: [
          { orderIndex: 1, definition: "Meramı tam ifade eden manalı söz, ibare.", register: "Genel" },
          { orderIndex: 2, definition: "İslam dininin itikat esaslarını aklî delillerle savunan ilim.", register: "İlahiyat & Felsefe" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1175",
        entryHeadword: "كلام",
        citation: "Kelâm: Söz, lakırdı; İlm-i tevhid ve sıfât."
      }
    ]
  },

  // 4. L-F-Z (ل-ف-ظ) -> LAFIZ
  {
    root: {
      slug: "lfz",
      rootLettersModern: "L-F-Z",
      rootLettersArabic: "ل-ف-ظ",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Ağızdan bir şeyi dışarı atmak, harfleri seslendirip telaffuz etmek.",
      description: "Ağızdaki çekirdeği dışarı fırlatmaya 'lafaza' denir. İnsanın içindeki düşünceyi ses kalıbına döküp ağzından dışarı çıkarmasına 'lafız', bunun söylenme tarzına 'telaffuz' denmiştir. Lafız kabuk, mana ise özdür.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Ramyu'ş-şey'i mine'l-fem; el-lafzu el-kelimetü'l-mantûkah.",
      ottomanUsageScope: "Belâgat (Lafız ve Mânâ tenasübü), fıkıh usulü, gramer.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1240; Lugat-ı Nâcî s. 675; Devellioğlu s. 650.",
    },
    words: [
      {
        slug: "lafiz",
        modernTurkish: "Lafız",
        primaryOttoman: "لفظ",
        transliteration: "Lafẓ",
        origin: "Arapça",
        originDetail: "Arapça l-f-z kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Söylenen söz, mananın taşıyıcısı olan ses kalıbı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Ağızdan çıkan kelime; mananın kisvesi ve zahiri şekli; söz.",
        contemporaryMeaning: "Söz, kelime, sözcük; metnin lafzen ifadesi.",
        modernEquivalents: "söz, kelime, sözcük",
        definitions: [
          { orderIndex: 1, definition: "Manayı zihinde canlandırmaya yarayan ses kalıbı ve kelime.", register: "Dilbilim & Mantık" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1240",
        entryHeadword: "لفظ",
        citation: "Lafız: Söz, kelime; mânâ mukabili olan kalıp."
      }
    ]
  },

  // 5. A-N-Y (ع-ن-ي) -> MÂNÂ
  {
    root: {
      slug: "any",
      rootLettersModern: "A-N-Y",
      rootLettersArabic: "ع-ن-ي",
      origin: "Arapça (Nâkıs-ı Yâî)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Kastetmek, niyetlenmek, bir şeyi hedef alıp ortaya çıkarmak.",
      description: "Nâkıs köktür. Sözün hedef aldığı iç özüne 'mânâ' denir. Belâgat ilminde manaların duruma uygun söylenmesini inceleyen kola 'İlm-i Me'ânî' adı verilir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Kasdü'ş-şey'i ve izhâruh; el-ma'nâ zıddü'l-lafz.",
      ottomanUsageScope: "Belâgat (Me'ânî), tasavvuf (Sûret ve Mânâ), felsefe.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1345; Lugat-ı Nâcî s. 720; Devellioğlu s. 700.",
    },
    words: [
      {
        slug: "mana",
        modernTurkish: "Mânâ",
        primaryOttoman: "معنى",
        transliteration: "Ma‘nā",
        origin: "Arapça",
        originDetail: "Arapça a-n-y kökünden mef'al vezninde mîmî masdardır.",
        partOfSpeech: "İsim",
        pattern: "Mef'al (مَفْعَل) Mîmî Masdar",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Lafzın delalet ettiği iç anlam, gaye, hakikat.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Lafzın delâlet eylediği mefhûm ve öz; sûretin mukabili olan bâtınî hakikat; maksat.",
        contemporaryMeaning: "Anlam; bir sözden, işten çıkarılan kavram veya sonuç.",
        modernEquivalents: "anlam, mefhum, kavram, öz",
        definitions: [
          { orderIndex: 1, definition: "Bir kelimenin veya cümlenin zihinde uyandırdığı asıl kavram ve fikir.", register: "Semantik & Edebiyat" },
          { orderIndex: 2, definition: "Dış görünüşün (suret) ardındaki batıni hakikat ve ruh.", register: "Tasavvuf" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1345",
        entryHeadword: "معنى",
        citation: "Mânâ: Bir lafızdan fehm olunan mefhum; sûret zıddı."
      }
    ]
  },

  // 6. Ş-R-H (ش-ر-ح) -> ŞERH & İNŞİRAH
  {
    root: {
      slug: "srh",
      rootLettersModern: "Ş-R-H",
      rootLettersArabic: "ش-ر-ح",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Açmak, yarmak, genişletmek, müphem bir metni izah edip aydınlatmak.",
      description: "Etin kemikten ayrılıp açılmasına 'şerh' denir. Buradan göğsün ferahlamasına 'inşirah', kapalı ve veciz bir ilmi metnin kelime kelime açıklanmasına 'şerh' denmiştir. İslam ilim geleneğinde şerh edebiyatı devasa bir kütüphane oluşturur.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Fethu ve'l-beyân; şerhu's-sadr ve şerhu'l-kitâb.",
      ottomanUsageScope: "Medrese şerh geleneği (Şerh-i Mesnevî, Şerh-i Divan-ı Hafız, Şerh-i Akaid), tefsir.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 750; Lugat-ı Nâcî s. 440; Devellioğlu s. 1160.",
    },
    words: [
      {
        slug: "serh",
        modernTurkish: "Şerh",
        primaryOttoman: "شرح",
        transliteration: "Şerḥ",
        origin: "Arapça",
        originDetail: "Arapça ş-r-h kökünden fa'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fa'l (فَعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Açıklama, yorumlama; klasik bir eseri etraflıca izah eden tefsiri kitap.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Müşkil ve müphem bir ibareyi tavzih ve tefsir etme; bir metni kelime kelime izah eden telif eser.",
        contemporaryMeaning: "Açıklama, yorum; tapu kütüğüne düşülen kayıt (hukuk).",
        modernEquivalents: "açıklama, yorumlama, tefsir",
        definitions: [
          { orderIndex: 1, definition: "Kapalı ve veciz bir ilmi veya edebi metni tafsilatıyla izah eden eser.", register: "İlmi Edebiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "750",
        entryHeadword: "شرح",
        citation: "Şerh: Açmak, yarmak; bir kitabı tefsir ve tavzih eylemek."
      }
    ]
  },

  // 7. M-T-N (متن) -> METİN & METÂNET
  {
    root: {
      slug: "mtn",
      rootLettersModern: "M-T-N",
      rootLettersArabic: "م-ت-ن",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Sırt, omurga, sert ve sağlam zemin; asıl ve sarsılmaz ibare.",
      description: "Devenin omurgasına ve sağlam sırtına 'metn' denir. Buradan sağlamlığa 'metânet', şerh ve haşiyelerin kendisine dayandığı asıl kitaba 'metin' adı verilmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Salâbetü ve'l-kuvveh; metnü'l-kitâbi zıddü'ş-şerh.",
      ottomanUsageScope: "Medrese ilmiye nizamı (Metin, Şerh, Hâşiye üçlüsü), fıkıh ve mantık.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1320; Lugat-ı Nâcî s. 705; Devellioğlu s. 685.",
    },
    words: [
      {
        slug: "metin",
        modernTurkish: "Metin",
        primaryOttoman: "متن",
        transliteration: "Metn / Metīn",
        origin: "Arapça",
        originDetail: "Arapça m-t-n kökünden masdar isimdir.",
        partOfSpeech: "İsim / Sıfat",
        pattern: "Fa'l (فَعْل) ve Fa'îl (فَعِيل)",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Sağlam olan; şerh ve haşiyenin dayandığı asıl yazı metni.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Şerh ve haşiyelerin etrafına yazıldığı asıl müellif ibaresi; sağlam, dayanıklı.",
        contemporaryMeaning: "Bir yazıyı oluşturan kelimelerin bütünü; sağlam, güçlü karakterli.",
        modernEquivalents: "yazı, metin, ibare; sağlam",
        definitions: [
          { orderIndex: 1, definition: "Bir kitabın şerh veya tercüme edilmemiş asıl ana ibaresi.", register: "Filoloji" },
          { orderIndex: 2, definition: "Zorluklar karşısında sarsılmayan sağlam, dayanıklı kimse.", register: "Ahlak" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1320",
        entryHeadword: "متن",
        citation: "Metin: Sırt, argaç; şerhin aslı olan ibare; kavî ve muhkem."
      }
    ]
  },

  // 8. R-S-L (ر-س-ل) -> RİSÂLE
  {
    root: {
      slug: "rsl",
      rootLettersModern: "R-S-L",
      rootLettersArabic: "ر-س-ل",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Göndermek, elçi yollamak, haber ulaştırmak.",
      description: "Bir kimseyi veya mektubu bir yere sevk etmektir. Peygamberlere 'resûl', müstakil tek bir meseleyi aydınlatan küçük ilmi kitaba veya mektuba 'risâle' denir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-İnbiasü ve'l-irsâl; er-risâletü el-kitâbü'l-küçük.",
      ottomanUsageScope: "İlmi literatür (Risâle-i Ahlak, Koçi Bey Risalesi, Risâle-i Mantık), diplomasi.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 650; Lugat-ı Nâcî s. 375; Devellioğlu s. 965.",
    },
    words: [
      {
        slug: "risale",
        modernTurkish: "Risâle",
        primaryOttoman: "رساله",
        transliteration: "Risāle",
        origin: "Arapça",
        originDetail: "Arapça r-s-l kökünden fi'âle vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Fi'âle (فِعَالَة) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Gönderilen mektup; tek bir meseleye hasredilmiş küçük kitapçık.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Mektup; tek bir konuyu derinlemesine inceleyen hacmi küçük ilmi veya felsefi eser.",
        contemporaryMeaning: "Küçük kitap, broşür, risale.",
        modernEquivalents: "küçük kitap, kitapçık, broşür, mektup",
        definitions: [
          { orderIndex: 1, definition: "Belli bir meseleyi tetkik ve ispat eden kısa ilmi eser.", register: "İlmi Edebiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "650",
        entryHeadword: "رساله",
        citation: "Risale: Mektup; cildi küçük muhtasar kitap."
      }
    ]
  },

  // 9. Q-D-M (ق-د-م) -> MUKADDİME & KADÎM
  {
    root: {
      slug: "qdm",
      rootLettersModern: "Q-D-M",
      rootLettersArabic: "ق-د-م",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Öne geçmek, önce olmak, ayak basıp ilerlemek; ezeli olmak.",
      description: "Geri kalmanın (teahhur) zıddıdır. Kitabın başında yer alan önsöze 'mukaddime' (İbn Haldun Mukaddimesi gibi), başlangıcı bilinmeyen eski şeye 'kadîm', öne sürmeye 'takdim' denir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü't-teahhur; el-kadîmü zıddü'l-hâdis.",
      ottomanUsageScope: "Tarih ve felsefe (Mukaddime-i İbn Haldûn), edebiyat, hukuk (Kadîm kıdemi üzere terk olunur).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1020; Lugat-ı Nâcî s. 575; Devellioğlu s. 542.",
    },
    words: [
      {
        slug: "mukaddime",
        modernTurkish: "Mukaddime",
        primaryOttoman: "مقدمه",
        transliteration: "Muḳaddime",
        origin: "Arapça",
        originDetail: "Arapça q-d-m kökünden tef'îl bâbı ism-i fâil müennesidir.",
        partOfSpeech: "İsim",
        pattern: "Müfa''ile (مُفَعِّلَة) İsm-i Fâil",
        morphologicalType: "İsm-i Fâiller",
        contribution: "Önden giden, konunun başına yerleştirilen başlangıç yazısı.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Kitabın gayesini, usulünü ve tertibini beyan eden başlangıç faslı; önsöz; ordunun öncü birliği.",
        contemporaryMeaning: "Önsöz, başlangıç, giriş.",
        modernEquivalents: "önsöz, giriş, başlangıç",
        definitions: [
          { orderIndex: 1, definition: "Bir kitabın başına konulan açıklayıcı giriş yazısı.", register: "Yazarlık & Edebiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1350",
        entryHeadword: "مقدمه",
        citation: "Mukaddime: Bir kitabın ibtidasına konan dibace, önsöz."
      }
    ]
  },

  // 10. S-L-H (ص-ل-ح) -> İSTILÂH & SULH
  {
    root: {
      slug: "slh",
      rootLettersModern: "S-L-H",
      rootLettersArabic: "ص-ل-ح",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "İyi ve dürüst olmak, fesat ve kavganın bitmesi, uzlaşmak.",
      description: "Fesadın zıddıdır. İki tarafın kavgayı bitirip anlaşmasına 'sulh', bir ilim veya sanat ehlinin bir kelimeyi hususi bir manada kullanmak üzere ittifak etmesine 'ıstılah' (terim) denir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: Zıddü'l-fesâd; el-ıstılâhu ittifâku kavmin alâ tezyîdi lafzin.",
      ottomanUsageScope: "İlmi ıstılahat mecmuaları, felsefe, hukuk ve diplomasi (Muahede-i Sulh).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 820; Lugat-ı Nâcî s. 470; Devellioğlu s. 510.",
    },
    words: [
      {
        slug: "istilah",
        modernTurkish: "İstılâh",
        primaryOttoman: "اصطلاح",
        transliteration: "Iṣṭılāḥ",
        origin: "Arapça",
        originDetail: "Arapça s-l-h kökünden ifti'âl bâbı masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "İfti'âl (اِفْتِعَال) Masdarı",
        morphologicalType: "İfti'âl Bâbı Masdarları",
        contribution: "Bir zümrenin ortak manada uzlaşması, hususi ilmi terim.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Her ilim veya sanat erbabının kendi sahalarında hususi bir mana yükledikleri kelime; terim.",
        contemporaryMeaning: "Terim; bir bilim, sanat veya meslek dalına özgü özel kavram.",
        modernEquivalents: "terim, kavram, meslek tabiri",
        definitions: [
          { orderIndex: 1, definition: "Belirli bir ilim veya sanat dalına has özel kavram ve tabir.", register: "İlim Dili" }
        ],
        sourceCode: "LN",
        volume: "1",
        pageNumber: "55",
        entryHeadword: "اصطلاح",
        citation: "Istılah: Bir taifenin bir lafız üzerinde ittifak eylemesi, terim."
      }
    ]
  },

  // 11. C-L-L (ج-ل-ل) -> MECELLE
  {
    root: {
      slug: "cll",
      rootLettersModern: "C-L-L",
      rootLettersArabic: "ج-ل-ل",
      origin: "Arapça (Muzaaf)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "Büyük, ulu, azametli ve kıymetli olmak; sahifeleri toplanmış cilt.",
      description: "Muzaaf köktür. Kökün aslı büyüklük ve celaldir. Hikmetli hükümleri toplayan büyük sahife mecmuasına 'mecelle' denmiştir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Azametü ve'l-kibriyâ; el-mecelletü el-kitâbü fîhi'l-hikmeh.",
      ottomanUsageScope: "Hukuk (Mecelle-i Ahkâm-ı Adliyye), ilmi dergiler (Mecelle-i Umûr-ı Belediyye).",
      primarySourceCitation: "Kâmûs-ı Türkî s. 1290; Devellioğlu s. 708; TDVİA Mecelle maddesi.",
    },
    words: [
      {
        slug: "mecelle",
        modernTurkish: "Mecelle",
        primaryOttoman: "مجله",
        transliteration: "Mecelle",
        origin: "Arapça",
        originDetail: "Arapça c-l-l kökünden mef'ale vezninde isimdir.",
        partOfSpeech: "İsim",
        pattern: "Mef'ale (مَفْعَلَة) İsim",
        morphologicalType: "Doğrudan Müştaklar (İsim)",
        contribution: "Hikmet ve kanun mecmuası; Osmanlı Medeni Kanunu.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "Hikmet ve ahkâm toplayan büyük kitap; Ahmed Cevdet Paşa riyasetinde hazırlanan Osmanlı Medeni Kanunlar Mecmuası (Mecelle-i Ahkâm-ı Adliyye).",
        contemporaryMeaning: "Mecelle, Osmanlı kanunnamesi; süreli dergi.",
        modernEquivalents: "kanunname, yasa mecmuası, dergi",
        definitions: [
          { orderIndex: 1, definition: "Osmanlı Devleti'nin 1869-1876 yılları arasında yürürlüğe koyduğu medeni kanunu.", register: "Hukuk Tarihi" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "1290",
        entryHeadword: "مجله",
        citation: "Mecelle: Hikmet mecmuası; Mecelle-i Ahkâm-ı Adliyye unvanı."
      }
    ]
  },

  // 12. F-Q-H (ف-ق-ه) -> FIKIH & FAKÎH
  {
    root: {
      slug: "fqh",
      rootLettersModern: "F-Q-H",
      rootLettersArabic: "ف-ق-ه",
      origin: "Arapça (Sülâsî Mücerred)",
      rootType: "TRILITERAL_ARABIC",
      primaryMeaning: "İnce anlayış, derin kavrayış, sözün arkasındaki maksadı sezmek.",
      description: "Basit bilmenin (ilim) ötesinde, meselenin inceliklerini ve hükümlerin illetlerini derinlemesine kavramaktır. İslam hukuk ilmine ve amelî hükümler mecmuasına 'fıkıh' denir.",
      lexicalMeaningArabic: "Lisânü'l-Arab: el-Fehmü ve'l-fıtnatü li'd-dakīk; el-fıkhu ilmu'ş-şerî'ah.",
      ottomanUsageScope: "Hukuk, kadılık, fetva müessesesi, medrese ilimleri.",
      primarySourceCitation: "Kâmûs-ı Türkî s. 995; Lugat-ı Nâcî s. 562; Devellioğlu s. 312.",
    },
    words: [
      {
        slug: "fikih",
        modernTurkish: "Fıkıh",
        primaryOttoman: "فقه",
        transliteration: "Fıḳh",
        origin: "Arapça",
        originDetail: "Arapça f-q-h kökünden fi'l masdarıdır.",
        partOfSpeech: "İsim",
        pattern: "Fi'l (فِعْل) masdarı",
        morphologicalType: "Doğrudan Müştaklar (Masdar)",
        contribution: "Derin anlayış; İslam hukuku ilmi.",
        relationshipType: "DIRECT_DERIVATION",
        verificationLevel: "PRIMARY_VERIFIED",
        historicalMeaning: "İslam şeriatının amelî hükümlerini tafsili delillerinden çıkaran ilim; İslam hukuku.",
        contemporaryMeaning: "İslam hukuku.",
        modernEquivalents: "İslam hukuku, şeriat hukuku",
        definitions: [
          { orderIndex: 1, definition: "Kişinin hak ve vazifelerini delilleriyle bilmesini sağlayan ilim.", register: "Hukuk & İlahiyat" }
        ],
        sourceCode: "KT",
        volume: "1",
        pageNumber: "995",
        entryHeadword: "فقه",
        citation: "Fıkıh: Anlayış, fehim; ahkâm-ı ameliyye-i şer'iyye ilmi."
      }
    ]
  }
];

async function seedEssential() {
  console.log("🚀 LÜGAT Temel Istılahlar ve Eksik Kelimeler Tohumlanıyor...");

  const sources = await prisma.source.findMany();
  const sourceMap = new Map();
  for (const s of sources) {
    if (s.code) sourceMap.set(s.code, s.id);
  }

  for (const item of ESSENTIAL_ROOTS_AND_WORDS) {
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
        sourceCode,
        volume,
        pageNumber,
        entryHeadword,
        citation,
        verificationLevel,
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

  console.log("✅ Bütün temel ıstılahat ve lügat kelimeleri başarıyla kaydedildi!");
}

seedEssential()
  .catch((e) => {
    console.error("Hata:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
