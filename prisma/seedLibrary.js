/**
 * LÜGAT — Dijital Kütüphane ve Klasik Eserler Tohumlama Dosyası
 * Divan Edebiyatı, Mecelle, Seyahatnâme, Fermanlar ve Edebi Şaheserler
 */

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./lugat.db";
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const libraryTexts = [
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
    summary:
      "Divan şiirinin zirve şairi Fuzûlî'nin Hz. Peygamber (s.a.v.) methinde yazdığı, her beyti 'su' redifiyle hitam bulan 32 beyitlik şaheser kasidesi.",
    contentOttoman: `١. ساچمه اى كوز كشكشمدن اشك كوكلمدهكى اودلره
صو صپيلر حددن آشان اودلره قلمز چاره صو

٢. آبكوندر كنبذ دوار رنكى بلمزم
يا محيط اولمش كوزمدم كنبده دواره صو

٣. ذوق تيغندن عجب يوق اولسه كونلوم چاك چاك
كيم مرور ايلن بورور يارنجه صخر خاره صo

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
  {
    slug: "mecelle-kulli-kaideler",
    title: "Mecelle-i Ahkâm-ı Adliyye (Küllî Kaideler)",
    titleOttoman: "مجلهء احكام عدليه (قواعد كليه)",
    author: "Ahmed Cevdet Paşa (Mecelle Cemiyeti Reisi)",
    authorOttoman: "احمد جودت پاشا",
    genre: "Hukuk & Mecelle",
    period: "19. Yüzyıl (Tanzimat Devri)",
    century: "19. yy",
    readTime: "8 dk",
    difficulty: "İleri",
    isFeatured: true,
    summary:
      "Osmanlı hukuk felsefesinin ve İslam medeni hukukunun şaheseri olan Mecelle'nin ilk 100 maddesini teşkil eden, adaletin temel umdelerini belirleyen külli fıkıh kaideleri.",
    contentOttoman: `ماده ٢: بر ايشده تصدق مقاصده كوره در، يعنى بر كيمسه‌نك فعلى نيتنه كوره حكم اولنور.

ماده ٤: يقين شك ايله زايل اولماز. بر شيك ثبوتنده يقين اولندقده صكره عارض اولان شك ايله اول يقين باطل اولماز.

ماده ٨: برائت ذمت اصلدر. بنابرين بر كيمسه برينه بر وجهله بورجلى ادعا ايدرسه اثبات ايده مدكجه ادعاسى مسموع اولماز.

ماده ١٧: مشقت تيسيرى جلب ايدر. يعنى ضيق و صعوبت كورلدكده انشراح و سهولت احكامى تأنس ايدر.

ماده ٢٠: ضرر ازاله اولنور.

ماده ٣٩: ازمانك تغيری ايله احكامك تغيری انكار اولنماز. يعنى عرف و عادته مبنى اولان احكام وقت و زمانك دكمه‌سيله تبدل ايدر.`,
    contentTranslit: `Madde 2: Bir işten maksat ne ise hüküm ona göredir (El-umûru bi-makāsıdihâ).

Madde 4: Şek ile yakîn zâil olmaz.

Madde 8: Berâet-i zimmet asıldır.

Madde 17: Meşakkat teysîri celbeder.

Madde 20: Zarar izâle olunur.

Madde 39: Ezmânın teğayyürü ile ahkâmın teğayyürü inkâr olunamaz.`,
    contentModern: `Madde 2: Bir amel veya hukuki muamelede hüküm, zahiri lafza değil, tarafların kastettiği niyet ve gayeye göredir.

Madde 4: Kesin olarak bilinen bir hakikat (yakîn), sonradan ortaya çıkan zayıf bir şüphe ile ortadan kalkmaz (Yokluğu ispatlanmadıkça varlığı kabul edilir).

Madde 8: Herkes borçsuz ve suçsuz doğar; asıl olan zimmetin temizliğidir. Dolayısıyla bir kimseden hak talep eden, iddiasını şer'an ispat etmekle mükelleftir.

Madde 17: Zorluk ve meşakkat halleri, kanunda ruhsat ve kolaylık kapılarının açılmasını temin eder.

Madde 20: Hukukun gayesi zararı gidermektir; kimsenin haksız bir zarara uğramasına müsaade olunamaz.

Madde 39: Zamanın ve şartların değişmesiyle, örf ve âdete dayanan hükümlerin değişmesi inkâr olunamaz (Hukukun yaşayan hayata uyum kaidesi).`,
    vocabularyJson: JSON.stringify([
      { word: "Berâet-i Zimmet (برائت ذمت)", meaning: "Kişinin borçsuz ve masum olması asıldır kaidesi", root: "B-R-A ve Z-M-M" },
      { word: "Yakîn (يقين)", meaning: "Şüpheden uzak kesin bilgi", root: "Y-Q-N" },
      { word: "Teysîr (تيسير)", meaning: "Kolaylaştırma, zorluğu giderme", root: "Y-S-R (Yüsr)" },
      { word: "İzâle (ازاله)", meaning: "Ortadan kaldırma, giderme", root: "Z-V-L (Zeval)" },
      { word: "Teğayyür (تغير)", meaning: "Zamanla başkalaşma, değişme", root: "G-Y-R (Gayr)" },
    ]),
  },
  {
    slug: "evliya-celebi-istanbul-tasviri",
    title: "Seyahatnâme — İstanbul'un Vasfı",
    titleOttoman: "سياحتنامه (اوصاف بى همتاى اسلامبول)",
    author: "Evliya Çelebi",
    authorOttoman: "اوليا چلبى",
    genre: "Seyahatnâme & Tarih",
    period: "17. Yüzyıl",
    century: "17. yy",
    readTime: "6 dk",
    difficulty: "Orta",
    isFeatured: true,
    summary:
      "17. yüzyılın en büyük cihan seyyahı Evliya Çelebi'nin lisanından payitaht İstanbul'un, Boğaziçi'nin, ulema meclislerinin ve suriçi çarşılarının eşsiz canlı tasviri.",
    contentOttoman: `اوصاف بلدهء طيبه و جنة ارضيهء اسلامبول:
حق تعالى بو شهر جنت-پيكرى ربع مسكونك خلاصهء بى‌نظيرى و بحرين و برينك ملتقاسى قيلوب جمله عالمك اعيان و اشرافنى انده جمع ايلمشدر.

كونلردن بر كون آياصوفيه جامع شريفنده اخلاص ايله عبادتده ايكن بر لطيف يوخو عارض اولوب عالم رؤياده آخى چلبى جامعينه واردم. آندا مقدسه روحانيت ايله دولمش بر بزم-ى شريف كورديم. حضرت رسالت‌پناه صلى الله عليه وسلم كوزل يوزيله منوره ايدى. هيبتندن لسانم دولاشوب: "شفاعت يا رسول الله" دييه جك يرده "سياحت يا رسول الله!" ديدم. فخر كائنات تبسم بيورب: "شفاعت و سياحت و زيارت سنه ارزانی اولسون" ديو دعا بيورديلر.`,
    contentTranslit: `Evsâf-ı Belde-i Tayyibe ve Cennet-i Arziyye-i İslâmbol:
Hakk te'âlâ bu şehr-i cennet-peykeri rub'-ı meskûnun hulâsa-i bî-nazîri ve bahreyn ü berreynin mültekāsı kılıp cümle âlemin a'yân ve eşrâfını anda cem' eylemişdir.

Günlerden bir gün Ayasofya Câmi'-i şerîfinde ihlâs ile ibâdette iken bir latîf uyku ârız olup âlem-i rüyâda Ahî Çelebi Câmi'ine vardım. Anda mukaddes rûhâniyyet ile dolmuş bir bezm-i şerîf gördüm. Hazret-i Risâlet-penâh sallallâhu aleyhi ve sellem güzel yüzüyle münevvere idi. Heybetinden lisânım dolaşıp: "Şefâat yâ Resûlallâh" diyecek yerde "Seyâhat yâ Resûlallâh!" dedim. Fahr-i Kâinât tebessüm buyurup: "Şefâat ve seyâhat ve ziyâret sana erzânî olsun" deyu duâ buyurdular.`,
    contentModern: `Güzel belde ve yeryüzünün cenneti olan İstanbul'un vasıfları:
Cenâb-ı Hak bu cennet misali şehri, insanların yaşadığı dünya coğrafyasının eşsiz bir özeti ve iki deniz (Karadeniz ve Akdeniz) ile iki kıtanın kavuşma noktası kılmış; bütün dünyanın seçkin insanlarını burada bir araya getirmiştir.

Günlerden bir gün Ayasofya Camii'nde ihlas ile ibadet ederken tatlı bir uyku hali geldi ve rüya âleminde kendimi Eminönü'ndeki Ahi Çelebi Camii'nde buldum. Orada mukaddes bir manevi nurla dolup taşmış mübarek bir meclis gördüm. Âlemlere rahmet Peygamber Efendimiz cemaliyle orayı nurlandırmıştı. O azamet ve heybet karşısında dilim dolaşıp heyecandan 'Şefaat yâ Resûlallah' diyeceğime, 'Seyahat yâ Resûlallah!' deyiverdim. Efendimiz tebessüm buyurarak: 'Şefaat de, seyahat de, ziyaret de sana nasip ve mübarek olsun' diye dua buyurdular.`,
    vocabularyJson: JSON.stringify([
      { word: "Evsâf (اوصاف)", meaning: "Vasıflar, üstün nitelikler", root: "V-S-F (Vasıf)" },
      { word: "Belde-i Tayyibe (بلدهء طيبه)", meaning: "Tertemiz, huzurlu ve mamur şehir (İstanbul)", root: "B-L-D ve T-Y-B" },
      { word: "Mültekā (ملتقى)", meaning: "İki denizin veya yolun birleştiği kavşak", root: "L-Q-Y (Lika)" },
      { word: "Erzânî (ارزانى)", meaning: "Layık, bağışlanmış, nasip edilmiş", root: "Farsça" },
      { word: "Bezm-i Şerîf (بزم شريف)", meaning: "Mübarek manevi meclis", root: "Farsça bezm + Arapça şerîf" },
    ]),
  },
  {
    slug: "hurriyet-kasidesi-namik-kemal",
    title: "Hürriyet Kasidesi",
    titleOttoman: "قصيدهء حريت",
    author: "Namık Kemal (Vatan Şairi)",
    authorOttoman: "نامق كمال",
    genre: "Divan & Tanzimat Edebiyatı",
    period: "19. Yüzyıl (Tanzimat)",
    century: "19. yy",
    readTime: "5 dk",
    difficulty: "Orta",
    isFeatured: true,
    summary:
      "Tanzimat devri fikir hürriyetinin ve vatan müdafaasının bayrak şiiri; klasik kaside formunu yepyeni bir hürriyet ve adalet mefhumuyla yoğuran abidevi eser.",
    contentOttoman: `١. كوروب احكام عصرى منحرف صدق و سلامتندن
چكيلدك عزت و اقبال ايله باب حكومتندن

٢. حكيما نه اسه مقصد اولور الزم بيزه خدمت
محقر كوره مز عاقل هر بر وضع مروتندن

٣. نه فسونكار ايمشسن اى ديدار حريت
اسيرك اولدق قورتولدق بند اسارتندن

٤. اولور بزم ايچون جان و دلده وطن ايمانى
شهيد اولانك قانى صولماز خاك تربتندن`,
    contentTranslit: `1. Görüp ahkâm-ı asrı münharif sıdk u selâmetten
Çekildik izzet ü ikbâl ile bâb-ı hükûmetten

2. Usanmaz kendini insan bilenler halka hizmetten
Mürüvvet-mend olan mazlûma el çekmez i'ânetten

3. Ne efsunkâr imişsin âh ey dîdâr-ı hürriyyet
Esîr-i aşkın olduk gerçi kurtulduk esâretten

4. Ne gam pür-âteş-i hevl olsa da gavga-yı hürriyyet
Kaçar mı merd olan bir cân içün meydân-ı gayretten`,
    contentModern: `1. Devrin idare ve kanunlarının doğruluktan ve adaletten saptığını görünce; şerefimiz ve haysiyetimizle devlet kapısındaki mevki ve ikbali terk ettik.

2. Kendini gerçekten insan bilenler halka ve cemiyete hizmetten asla usanmazlar; asalet ve fazilet sahibi kimseler mazluma yardım elini uzatmaktan vazgeçmez.

3. Ey hürriyetin güzel çehresi! Meğer ne büyüleyici bir caziben varmış ki, senin aşkının esiri olduk ama bu sayede asıl kölelik ve cehalet zincirlerinden kurtulduk!

4. Hürriyet mücadelesi korkunç ateşlerle dolu olsa da ne gam! Yiğit olan kimse üç günlük bir can korkusuyla gayret ve fedakârlık meydanından kaçar mı?`,
    vocabularyJson: JSON.stringify([
      { word: "Münharif (منحرف)", meaning: "Yoldan sapmış, eğrilmiş", root: "H-R-F (İnhiraf)" },
      { word: "İkbal (اقبال)", meaning: "Talih, makam yüksekliği, yönelme", root: "Q-B-L (Kabul)" },
      { word: "Mürüvvet-mend (مروت مند)", meaning: "İnsanlık şerefine ve mertliğe sahip kimse", root: "Arapça mürüvvet + Farsça -mend" },
      { word: "Dîdâr (ديدار)", meaning: "Yüz, çehre, güzel cemal", root: "Farsça dîden" },
      { word: "İ'ânet (اعانت)", meaning: "Yardım etme, elinden tutma", root: "A-V-N (Avn)" },
    ]),
  },
  {
    slug: "kanuni-mersiyesi-baki",
    title: "Kanûnî Sultan Süleyman Mersiyesi",
    titleOttoman: "مرثيهء حضرت سلطان سليمان خان (باقى)",
    author: "Bâkî (Sultânü'ş-Şu'arâ)",
    authorOttoman: "محمود باقی",
    genre: "Divan Şiiri",
    period: "16. Yüzyıl (Klasik Çağ)",
    century: "16. yy",
    readTime: "7 dk",
    difficulty: "İleri",
    isFeatured: true,
    summary:
      "Muhteşem Süleyman'ın Zigetvar seferinde vefatı üzerine Bâkî'nin kaleme aldığı, cihan saltanatının faniliğini ve bir cihan padişahının ardından duyulan matemin vakarını anlatan terkib-i bend şaheseri.",
    contentOttoman: `١. اى پاى‌بند دام كه قيد نام و ننك
تا كى هواى مشغلهء دهر بى‌درنك

٢. باق بو چمن اوزره صون باهارى درك ايلش
بر بر دكولر ياپراغ شاخ زرد رنك

٣. سلطان سليمان خان كيم حكيم جهان ايدى
فرمان ايدردى مغربدن مشرق قدر جنك

٤. تير اجل توكندردى ياي سعادتنى
خاك اولدى آخر او تن پُر شوكت و فرنك`,
    contentTranslit: `1. Ey pây-bend-i dâm-geh-i kayd-ı nâm ü neng
Tâ key hevâ-yı meşgale-i dehr-i bî-direng

2. An ol güni ki âhir olup nev-bahâr-ı ömr
Berg-i hazâna dönse gerek rûy-ı lâle-reng

3. Âhir bozuldu meclis-i ayşın safâ-yı cem'
Döndü fenâ şarâbına câm-ı zülâl-ı reng

4. Sultan Süleyman k'oldu Süleymân-ı asr idi
Hükm-i kazâya boyun eğdi ol bî-dirîğ ü teng`,
    contentModern: `1. Ey şan, şöhret ve dedikodu tuzağına ayağı dolanmış gafil insan! Bu hiç durmadan akıp giden geçici dünyanın boş meşgalesiyle daha ne vakte kadar oyalanacaksın?

2. O günü hatırla ki; ömrün taze ilkbaharı nihayete erip son bulur da, o lale gibi parlak ve al yanaklar sonbahar yaprağı gibi sararıp solar.

3. Sonunda dünya zevklerinin meclisi ve o neşeli kalabalık dağıldı; eldeki o tatlı ve berrak hayat kadehi ecelin acı fena şerbetine dönüştü.

4. Asrın Hz. Süleyman'ı sayılan koca Cihan Padişahı Sultan Süleyman bile, Hak teâlânın ezelî kader ve ecel hükmü karşısında boyun büktü.`,
    vocabularyJson: JSON.stringify([
      { word: "Pây-bend (پای بند)", meaning: "Ayağı bağlı, zincirlenmiş", root: "Farsça pây + bend" },
      { word: "Bî-direng (بی درنك)", meaning: "Durmaksızın, süratle geçen", root: "Farsça" },
      { word: "Berg-i Hazân (برگ خزان)", meaning: "Sonbahar yaprağı, sararıp düşen yaprak", root: "Farsça berg + hazân" },
      { word: "Hükm-i Kazâ (حكم قضا)", meaning: "İlahi takdir, kaçınılmaz kader hükmü", root: "H-K-M ve Q-D-Y" },
    ]),
  },
  {
    slug: "tanzimat-fermani-gulhane-hatti",
    title: "Gülhane Hatt-ı Hümâyûnu (Tanzimat Fermanı)",
    titleOttoman: "خط همايون كلخانه (تنظيمات خيريه فرمانى)",
    author: "Sultan Abdülmecid Han & Mustafa Reşid Paşa",
    authorOttoman: "سلطان عبدالمجيد خان",
    genre: "Ferman & Belge",
    period: "19. Yüzyıl (1839)",
    century: "19. yy",
    readTime: "6 dk",
    difficulty: "Orta",
    isFeatured: false,
    summary:
      "Modern Osmanlı kamu hukukunun ve tebaanın can, mal, ırz ve namus emniyetini kanun teminatı altına alan tarihi Gülhane Fermanı'nın orijinal metni.",
    contentOttoman: `جمله‌يه معلوم اولدوغى اوزره دولت عليه‌مزك بدايت ظهورندن برو احكام جليلهء قرآنيّه و قوانين شرعيّه‌يه كمال مرتبه رعايت اولندوغندن صالطهء سنيه‌مزك قوت و رفعتى و تابعه‌سنك رفاه و حالتى رتبهء غايته يتيشمش ايكن يوز اللى سنه واردر كى غائله‌لر و اسباب متنوعه‌يه مبنى نه شرع شريفه و نه قوانين منيفه‌يه انقياد اولنمديغندن اقتدار اولكى تبدل ايدوب ضعف و عجزه‌يه مبدل اولمشدر.

بنابرين بالطف و العناية الإلهية بر قانون جديد وضع ايله جمله تبعه‌نك اموال و ارواح و اعراضى محفوض اولارق بر اساس متين اوزرنده عدالت برقرار اولنه حقدر.`,
    contentTranslit: `Cümleye ma'lûm olduğu üzere devlet-i aliyyemizin bidâyet-i zuhûrundan berü ahkâm-ı celîle-i Kur'âniyye ve kavânîn-i şer'iyyeye kemâl-i mertebe riâyet olunduğundan saltanat-ı seniyyemizin kuvvet ve mefhareti ve tebaasının refâh ve râhatı rütbe-i gāyete erişmiş iken...

Binâenaleyh bi-lutfi'llâhi te'âlâ ber-vech-i âtî kavânîn-i mukteziyyenin vaz'ı lâzımeden görünmüşdür: Evvelâ tebaa-i saltanat-ı seniyyemizden olanların emniyyet-i cân ve mahfûziyyet-i ırz u nâmûs ve emvâli...`,
    contentModern: `Herkesin bildiği üzere yüce devletimizin kuruluşundan itibaren Kur'an ahkâmına ve adalet kanunlarına tam riayet edildiği için devletimiz azamet ve kudrete, halkımız da refah ve huzura kavuşmuştu. Fakat son yüz elli yıldır muhtelif gaileler ve ihmaller sebebiyle kanunlara riayet edilmediğinden eski kuvvet zayıflığa dönüşmüştür.

Bu sebeple Cenâb-ı Hakk'ın lütfuyla, tebaamızın can güvenliği, namus ve haysiyetinin korunması ve mal mülkiyetinin teminatı üzerine kurulu yeni ve âdil bir kanun nizamı tesis olunmuştur.`,
    vocabularyJson: JSON.stringify([
      { word: "Bidâyet (بدايت)", meaning: "Başlangıç, ilk kuruluş çağı", root: "B-D-A (Bidayet)" },
      { word: "Tebaa (تبعه)", meaning: "Vatandaşlar, devlet himayesinde yaşayan halk", root: "T-B-A (Tâbi)" },
      { word: "Kavânîn (قوانين)", meaning: "Kanunlar, nizamnameler", root: "Q-N-N (Kanun)" },
      { word: "Mahfûziyyet (محفوظيت)", meaning: "Korunmuşluk, güvence altında olma", root: "H-F-Z (Hıfz)" },
    ]),
  },
];

async function seedLibrary() {
  console.log("📚 LÜGAT Dijital Kütüphane Klasik Eserleri Yükleniyor...");

  let count = 0;
  for (const text of libraryTexts) {
    await prisma.libraryText.upsert({
      where: { slug: text.slug },
      update: {
        title: text.title,
        titleOttoman: text.titleOttoman,
        author: text.author,
        authorOttoman: text.authorOttoman,
        genre: text.genre,
        period: text.period,
        century: text.century,
        summary: text.summary,
        contentOttoman: text.contentOttoman,
        contentTranslit: text.contentTranslit,
        contentModern: text.contentModern,
        vocabularyJson: text.vocabularyJson,
        readTime: text.readTime,
        difficulty: text.difficulty,
        isFeatured: text.isFeatured,
      },
      create: {
        slug: text.slug,
        title: text.title,
        titleOttoman: text.titleOttoman,
        author: text.author,
        authorOttoman: text.authorOttoman,
        genre: text.genre,
        period: text.period,
        century: text.century,
        summary: text.summary,
        contentOttoman: text.contentOttoman,
        contentTranslit: text.contentTranslit,
        contentModern: text.contentModern,
        vocabularyJson: text.vocabularyJson,
        readTime: text.readTime,
        difficulty: text.difficulty,
        isFeatured: text.isFeatured,
      },
    });

    count++;
  }

  console.log(`✅ ${count} adet şaheser klasik eser dijital kütüphaneye başarıyla işlendi!`);
}

module.exports = { libraryTexts, seedLibrary };

if (require.main === module) {
  seedLibrary()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
