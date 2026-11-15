# LÜGAT — Katkı Sağlama Rehberi (Contributing Guidelines)

LÜGAT projesine katkıda bulunmak istediğiniz için teşekkür ederiz! LÜGAT, Osmanlı Türkçesi ve modern Türkçe arasındaki semantik ve etimolojik bağı dijital çağa taşıyan açık kaynaklı bir kültür ve yazılım girişimidir.

Bu rehber, hem **yazılım geliştiriciler** hem de **filoloji / lügat uzmanları** için katkı standartlarını belirler.

---

## 📜 İçindekiler
1. [Linguistik ve Lügat Veri Standartları](#linguistik-ve-lügat-veri-standartları)
2. [Geliştirme Ortamı Kurulumu](#geliştirme-ortamı-kurulumu)
3. [Git ve PR (Pull Request) İş Akışı](#git-ve-pr-pull-request-iş-akışı)
4. [Kodlama Standartları](#kodlama-standartları)
5. [Hata Bildirimi ve Öneri Süreci](#hata-bildirimi-ve-öneri-süreci)

---

## 1. Linguistik ve Lügat Veri Standartları

LÜGAT'ta veri doğruluğu ve etimolojik güvenilirlik en kritik önceliğimizdir. **Yapay zeka uydurması veya doğrulanmamış kök ilişkileri sisteme kabul edilmez.**

### A. İmla ve Alfabe Kuralları (Arap Harfli Osmanlı İmlası)
- Osmanlıca metin ve kelimeler **doğrudan UTF-8 standardında** ve sağdan sola (RTL) yazılmalıdır.
- Harekeler yalnızca telaffuz karmaşasını çözmek veya kök kalıbını (vezin) belirginleştirmek için lüzum görüldüğünde konmalıdır; genel kelimelerde yalın imla tercih edilir.
- Kef çeşitleri (kâf-ı fârisî گ, nef / sağır kâf ڭ, keşîdeli kef ك) aslına ve tarihî metin geleneğine sadık kalınarak girilmelidir.

### B. Etimolojik Kök ve Bab Kalıpları
- Arapça asıllı kelimeler için **3 harfli (sülâsî) veya 4 harfli (rübâî)** kökler tespit edilmelidir (Örn: `H-K-M` -> `حكم`).
- Her türemiş kelime için fâil vezni, mef'ûl vezni, tef'îl babı, mufâ'ale babı, istif'âl babı gibi morfolojik kalıplar (`bab`) doğru şekilde etiketlenmelidir:
  - `Hâkim` -> İsm-i Fâil
  - `Mahkûm` -> İsm-i Mef'ûl
  - `Tahkim` -> Tef'îl Masdarı
  - `Muhakeme` -> Mufâ'ale Masdarı
- Farsça terkipler (Örn: *Pîş-rev*, *Ser-bülend*, *Dîdâr*) ve Türkçe kökenli kelimeler (Örn: *Yazı*, *Görgü*, *Buyruk*) kendi morfolojik kategorilerinde tasnif edilmelidir.

### C. Kaynak Gösterme Zorunluluğu
Her yeni kelime veya anlam kaydı için en az bir muteber tarihî sözlük referansı belirtilmelidir:
1. **Şemseddin Sâmî** — *Kâmûs-ı Türkî* (Dersaâdet, 1317)
2. **Muallim Nâcî** — *Lugat-ı Nâcî*
3. **Ferit Devellioğlu** — *Osmanlıca-Türkçe Ansiklopedik Lûgat*
4. **İlhan Ayverdi** — *Misalli Büyük Türkçe Sözlük (Kubbealtı)*
5. **Ahmet Vefik Paşa** — *Lehçe-i Osmânî*

### D. Doğruluk Durumu Etiketleri
- `verified` (Kaynakla Doğrulanmış): Muteber bir lügatte madde başı olarak yer alan, imlası ve kökü kesinleşmiş kayıtlar.
- `approximate` (Yaklaşık Karşılık): Modern terimlerin birebir tarihi karşılığı olmayıp kavramsal yakınlık arz eden kelimeler.
- `pending` (Doğrulama Bekliyor): Katkı sunucular tarafından önerilen fakat heyet incelemesinden henüz geçmemiş taslaklar.

---

## 2. Geliştirme Ortamı Kurulumu

Projeyi yerelinizde çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/KULLANICI_ADINIZ/lugat.git
cd lugat

# 2. Bağımlılıkları yükleyin
npm install

# 3. .env dosyasını oluşturun
cp .env.example .env

# 4. Prisma veritabanı şemasını uygulayın ve istemciyi derleyin
npx prisma db push
npx prisma generate

# 5. Başlangıç veri setini (200+ kelime, 60+ kök, quizler) yükleyin
node prisma/seed.js

# 6. Geliştirici sunucusunu başlatın
npm run dev
```

Tarayıcınızdan `http://localhost:3000` adresine giderek LÜGAT'ı görüntüleyebilirsiniz.

---

## 3. Git ve PR (Pull Request) İş Akışı

1. Depoyu kendi GitHub hesabınıza **Fork** edin.
2. Anlamlı bir dal (branch) açın:
   - `git checkout -b ozellik/yeni-kok-ekleme` veya `git checkout -b duzeltme/arama-filtresi`
3. Değişikliklerinizi yapın ve test edin:
   - `npm run build` komutunun hatasız geçtiğinden emin olun.
4. Anlaşılır bir commit mesajı ile kaydedin:
   - `git commit -m "feat(etym): ilm (ع-ل-م) kökü ve türevleri eklendi"`
   - `git commit -m "fix(search): arapça tenvin temizleme algoritması düzeltildi"`
5. Dalınızı GitHub'a push edin ve ana depoya karşı bir **Pull Request (PR)** açın.

---

## 4. Kodlama Standartları

- **Next.js 15 & App Router**: Sayfa ve rotalar `src/app/` altında düzenlenmelidir.
- **TypeScript**: `any` türünden kaçının, tip tanımlarını `interface` veya `type` olarak açıkça belirtin.
- **Tailwind CSS**: Tasarım sisteminin renk paletine riayet edin:
  - Arka plan: `bg-[#FDFBF7]` (Parşömen / Sıcak Fildişi)
  - Vurgu: `text-[#8B1E1E]` / `bg-[#8B1E1E]` (Derin Bordo)
  - İkincil Vurgu: `text-[#C49A45]` (Mat Altın)
  - Tipografi: `text-[#2C241E]` (Koyu Kömür)
- **Arapça Tipografi**: Arapça metinler için `font-amiri font-arabic` sınıfları ve `dir="rtl"` özniteliği kullanılmalıdır.

---

## 5. Hata Bildirimi ve Öneri Süreci

Bir hata (bug) bulduysanız veya yeni bir sözlük özelliği / kelime ailesi önermek istiyorsanız lütfen GitHub **Issues** sekmesini kullanın. Hata bildirimlerinde:
- Hangi kelimede veya sayfada sorun görüldüğü,
- Beklenen davranış ve gerçekleşen davranış,
- Varsa ekran görüntüsü veya konsol çıktısını ekleyin.

Kültür mirasımıza katkılarınız için teşekkür ederiz!
