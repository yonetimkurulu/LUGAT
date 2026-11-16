/**
 * LÜGAT — Akademik Kaynak ve Bibliyografya Veri Tabanı
 * PHASE 1: Araştırma ve Muteber Kaynak Altyapısı
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const masterBibliography = [
  // A. TÜRKÇE VE OSMANLI TÜRKÇESİ SÖZLÜKLERİ
  {
    code: "KT",
    title: "Kâmûs-ı Türkî",
    author: "Şemseddin Sâmi (Frashëri)",
    year: "1317 / 1900",
    publisher: "İkdâm Matbaası (Dersaâdet)",
    edition: "1. Tabı",
    sourceType: "PRIMARY_LEXICON",
    language: "Osmanlı Türkçesi",
    digitalUrl: "https://islamansiklopedisi.org.tr/kamus-i-turki",
    copyrightNote: "Kamu Malı (Telif süresi dolmuş tarihî eser)",
    description:
      "Modern Türk sözlükçülüğünün kurucu şaheseridir. Türkçenin Arapça ve Farsçanın vesayetinde müstakil bir dil olduğunu ilan eden, kelimelerin köklerini (Türkçe, Arapça, Farsça, Rumca, İtalyanca) ilk defa harf remizleriyle tasnif eden 29.000 maddelik abidevi kaynak.",
  },
  {
    code: "LN",
    title: "Lugat-ı Nâcî (Esâmî)",
    author: "Muallim Nâci (Ömer Nâci)",
    year: "1308 / 1891",
    publisher: "Asır Kütüphânesi (Dersaâdet)",
    edition: "1. Baskı",
    sourceType: "PRIMARY_LEXICON",
    language: "Osmanlı Türkçesi",
    digitalUrl: "https://islamansiklopedisi.org.tr/lugat-i-naci",
    copyrightNote: "Kamu Malı (Telif süresi dolmuş tarihî eser)",
    description:
      "Tanzimat ve klasik edebiyat geleneğinin birikimini birleştiren, edebî ıstılahları, müradifleri ve nüansları şiir şahitleriyle izah eden 18.000 maddelik lügat.",
  },
  {
    code: "DV",
    title: "Osmanlıca-Türkçe Ansiklopedik Lûgat",
    author: "Ferit Devellioğlu",
    year: "1962 (Genişletilmiş Baskı: 1993)",
    publisher: "Aydın Kitabevi Yayınları (Ankara)",
    edition: "Genişletilmiş 10. Baskı",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Osmanlı Türkçesi - Türkiye Türkçesi",
    digitalUrl: null,
    copyrightNote: "Telifli Eser (Yalnızca atıf ve madde referansı esastır)",
    description:
      "Cumhuriyet devrinde eski harfli metinleri, divanları, fermanları ve hukuki vesikaları okumak için hazırlanmış 60.000'i aşkın madde başı ihtiva eden en yaygın başvuru kılavuzu.",
  },
  {
    code: "KB",
    title: "Misalli Büyük Türkçe Sözlük",
    author: "İlhan Ayverdi (Kubbealtı Lugatı Heyeti)",
    year: "2005",
    publisher: "Kubbealtı Neşriyatı (İstanbul)",
    edition: "1. Baskı (3 Cilt)",
    sourceType: "PRIMARY_LEXICON",
    language: "Türkçe - Osmanlı Türkçesi",
    digitalUrl: "https://lugatim.com",
    copyrightNote: "Telifli Eser (Kubbealtı Vakfı - Atıf ve akademik inceleme)",
    description:
      "13. yüzyıldan günümüze 100.000'e yakın kelimenin tarihî seyrini, edebi şahitlerini (Fuzûlî'den Tanpınar'a) ve müradiflerini zengin örneklerle veren en kapsamlı tarihî Türkçe sözlük.",
  },
  {
    code: "TDK_GTS",
    title: "Güncel Türkçe Sözlük",
    author: "Türk Dil Kurumu",
    year: "1945 (12. Baskı: 2023)",
    publisher: "Türk Dil Kurumu Yayınları (Ankara)",
    edition: "12. Baskı",
    sourceType: "PRIMARY_LEXICON",
    language: "Türkiye Türkçesi",
    digitalUrl: "https://sozluk.gov.tr/",
    copyrightNote: "Resmi Kurum Kaynağı (TDK)",
    description:
      "Türkiye Türkçesinin yaşayan söz varlığını, yazım kurallarını, köken bilgisini ve güncel anlamlarını belirleyen resmi ulusal sözlük.",
  },
  {
    code: "TDK_TARAMA",
    title: "XIII. Yüzyıldan Beri Türkiye Türkçesiyle Yazılmış Kitaplardan Toplanan Tanıklarıyla Tarama Sözlüğü",
    author: "Türk Dil Kurumu",
    year: "1963 - 1977",
    publisher: "Türk Dil Kurumu Yayınları (8 Cilt)",
    edition: "2. Baskı",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Tarihî Türkiye Türkçesi (Eski Anadolu Türkçesi)",
    digitalUrl: "https://sozluk.gov.tr/",
    copyrightNote: "Resmi Kurum Kaynağı (TDK)",
    description:
      "13. yüzyıldan 19. yüzyıla kadar Anadolu'da kaleme alınmış yüzlerce Türkçe ve Osmanlıca yazma eserin taranmasıyla elde edilen tarihî Türkçe kelimeler külliyatı.",
  },
  {
    code: "TDK_KOKEN",
    title: "Türkçe Sözlük Köken Bilgisi Veri Tabanı",
    author: "Türk Dil Kurumu",
    year: "2020+",
    publisher: "Türk Dil Kurumu Yayınları",
    edition: "Dijital Sürüm",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Türkiye Türkçesi",
    digitalUrl: "https://sozluk.gov.tr/",
    copyrightNote: "Resmi Kurum Kaynağı (TDK)",
    description:
      "Kelimenin Türkçedeki ilk yazılı tanıklığını, ses değişimlerini ve yabancı dillerden (Arapça, Farsça, Fransızca vb.) intikal kanallarını inceleyen etimolojik veri tabanı.",
  },
  {
    code: "MK_ETIM",
    title: "Örnekli Etimolojik Osmanlı Türkçesi Sözlüğü",
    author: "Prof. Dr. Mehmet Kanar",
    year: "2003",
    publisher: "Derin Yayınları (İstanbul)",
    edition: "1. Baskı",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Osmanlı Türkçesi",
    digitalUrl: null,
    copyrightNote: "Telifli Eser (Akademik atıf)",
    description:
      "Arapça, Farsça ve Türkçe kelimelerin asıl sülâsî köklerini, vezinlerini ve edebi şahitlerini karşılaştırmalı olarak sunan akademik etimoloji sözlüğü.",
  },
  {
    code: "TG_KOKEN",
    title: "Türkiye Türkçesindeki Türkçe Sözcüklerin Köken Bilgisi Sözlüğü",
    author: "Prof. Dr. Tuncer Gülensoy",
    year: "2007",
    publisher: "Türk Dil Kurumu Yayınları (2 Cilt)",
    edition: "1. Baskı",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Türkçe",
    digitalUrl: null,
    copyrightNote: "Telifli Eser (Akademik atıf)",
    description:
      "Eski Türkçe, Karahanlı, Harezm, Çağatay ve Osmanlı metinlerindeki Türkçe asıllı sözcüklerin morfolojik ekleşme ve köken haritası.",
  },
  {
    code: "CLAUSON",
    title: "An Etymological Dictionary of Pre-Thirteenth-Century Turkish",
    author: "Sir Gerard Clauson",
    year: "1972",
    publisher: "Oxford University Press (Oxford)",
    edition: "1st Edition",
    sourceType: "ETYMOLOGICAL_DICTIONARY",
    language: "Eski Türkçe - İngilizce",
    digitalUrl: "https://archive.org/details/ClausonEDPTCT",
    copyrightNote: "Kamuya Açık Akademik Başvuru Kaynağı",
    description:
      "13. yüzyıl öncesi Türk dil yadigârlarının (Orhun, Yenisey, Uygur, Karahanlı metinleri) morfolojik ve etimolojik tahlilini yapan dünya çapındaki temel referans.",
  },

  // B. ARAPÇA KÖK VE SARF SİSTEMİ
  {
    code: "LA",
    title: "Lisânü'l-Arab",
    author: "İbn Manzûr (Ebü'l-Fazl Cemâleddîn Muhammed)",
    year: "Hicri 690 / 1290",
    publisher: "Dâru Sâdır (Beyrut)",
    edition: "15 Cilt",
    sourceType: "CLASSICAL_ARABIC",
    language: "Klasik Arapça",
    digitalUrl: "https://shamela.ws/book/13244",
    copyrightNote: "Kamu Malı (Tarihî İslami İlimler Mirası)",
    description:
      "Arap dilinin en muteber ve kapsamlı ana lügatidir. Kelimelerin sülâsî ve rübâî köklerini, asli çöl Araplarının istimallerini, hadis ve şiir şahitlerini ihtiva eder.",
  },
  {
    code: "LANE",
    title: "An Arabic-English Lexicon",
    author: "Edward William Lane",
    year: "1863 - 1893",
    publisher: "Williams and Norgate (Londra)",
    edition: "8 Volumes",
    sourceType: "CLASSICAL_ARABIC",
    language: "Arapça - İngilizce",
    digitalUrl: "http://www.tyndalearchive.com/tabs/lane/",
    copyrightNote: "Kamu Malı (Public Domain)",
    description:
      "Lisânü'l-Arab, Tâcü'l-Arûs, Sıhâh ve Misbâh gibi en büyük klasik Arap lügatlerinin İngilizceye aktarılmış, kök tahlilleri en titiz batı akademik sözlüğü.",
  },
  {
    code: "WEHR",
    title: "A Dictionary of Modern Written Arabic",
    author: "Hans Wehr (Ed. J. Milton Cowan)",
    year: "1979",
    publisher: "Spoken Language Services (Wiesbaden)",
    edition: "4th Edition",
    sourceType: "CLASSICAL_ARABIC",
    language: "Arapça - İngilizce",
    digitalUrl: null,
    copyrightNote: "Telifli Eser (Akademik Atıf)",
    description:
      "Modern ve klasik kök sistemini bâblara ve vezinlere göre alfabetik kök diziniyle veren en pratik akademik sarf ve kök kılavuzu.",
  },

  // C. FARSÇA KÖK VE MORFOLOJİ
  {
    code: "STEINGASS",
    title: "A Comprehensive Persian-English Dictionary",
    author: "Francis Joseph Steingass",
    year: "1892",
    publisher: "Routledge & Kegan Paul (Londra)",
    edition: "1st Edition",
    sourceType: "PERSIAN_LEXICON",
    language: "Farsça - İngilizce",
    digitalUrl: "https://dsal.uchicago.edu/dictionaries/steingass/",
    copyrightNote: "Kamu Malı (Chicago Üniversitesi DSAL Projesi)",
    description:
      "Farsça terkipleri, Osmanlı Türkçesine girmiş Farsça unsurları, edebi mazmunları ve birleşik isimleri en etraflı şekilde izah eden klasik Farsça sözlüğü.",
  },
  {
    code: "DEHKHODA",
    title: "Lugatnâme-i Dehhudâ",
    author: "Ali Ekber Dehhudâ (ve heyet)",
    year: "1931 - 1980",
    publisher: "Tahran Üniversitesi Yayınları",
    edition: "16 Cilt",
    sourceType: "PERSIAN_LEXICON",
    language: "Farsça",
    digitalUrl: "https://vajehyab.com/",
    copyrightNote: "Akademik Açık Erişim",
    description:
      "Fars edebiyatının ve dilinin gelmiş geçmiş en büyük ansiklopedik lügati.",
  },

  // D. AKADEMİK VE TARİHÎ BAŞVURU KURUMLARI
  {
    code: "TDVIA",
    title: "TDV İslâm Ansiklopedisi",
    author: "Türkiye Diyanet Vakfı İslâm Araştırmaları Merkezi (İSAM)",
    year: "1988 - 2016",
    publisher: "Türkiye Diyanet Vakfı (İstanbul - 46 Cilt)",
    edition: "Tamamlanmış İlmî Külliyat",
    sourceType: "ENCYCLOPEDIA",
    language: "Türkiye Türkçesi - İlim Istılahları",
    digitalUrl: "https://islamansiklopedisi.org.tr/",
    copyrightNote: "Resmi Kurum Açık İlim Portalı (İSAM)",
    description:
      "İslam medeniyeti, Osmanlı tarihi, fıkıh, felsefe, edebiyat, kelâm ve tasavvuf ıstılahlarının kavramsal ve tarihî bağlamını inceleyen en yüksek hakemli akademik kaynak.",
  },
  {
    code: "TUBITAK_SZL",
    title: "TÜBİTAK Sözlükbilim Portalı",
    author: "TÜBİTAK Terim ve Sözlük Komisyonu",
    year: "2015+",
    publisher: "TÜBİTAK",
    edition: "Dijital Veri Tabanı",
    sourceType: "ACADEMIC_STUDY",
    language: "Türkçe",
    digitalUrl: "https://ansiklopedi.tubitak.gov.tr/ansiklopedi/sozlukbilim?",
    copyrightNote: "Resmi Kurum Bilgi Portalı",
    description:
      "Sözlükbilim (leksikografi) teorisi, kavram haritaları, terim standardizasyonu ve köken bilimi metodolojisi rehberi.",
  },
];

async function seedMasterBibliography() {
  console.log("📚 LÜGAT Akademik Bibliyografya Veri Tabanı Tohumlanıyor...");

  let count = 0;
  for (const src of masterBibliography) {
    await prisma.source.upsert({
      where: { code: src.code },
      update: {
        title: src.title,
        author: src.author,
        year: src.year,
        publisher: src.publisher,
        edition: src.edition,
        sourceType: src.sourceType,
        language: src.language,
        digitalUrl: src.digitalUrl,
        copyrightNote: src.copyrightNote,
        description: src.description,
      },
      create: {
        code: src.code,
        title: src.title,
        author: src.author,
        year: src.year,
        publisher: src.publisher,
        edition: src.edition,
        sourceType: src.sourceType,
        language: src.language,
        digitalUrl: src.digitalUrl,
        copyrightNote: src.copyrightNote,
        description: src.description,
      },
    });

    count++;
  }

  console.log(`✅ ${count} adet muteber akademik ve tarihî kaynak bibliyografyaya kaydedildi!`);
}

module.exports = { masterBibliography, seedMasterBibliography };

if (require.main === module) {
  seedMasterBibliography()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
