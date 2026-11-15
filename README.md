# LÜGAT — Osmanlı Türkçesi Dijital Sözlük ve Öğrenme Platformu

**LÜGAT**, modern Türkçe kelimeler ile Osmanlı Türkçesi kelime hazinesini, orijinal Arap harfli imlaları, iştikak köklerini (semantik ve morfolojik ağaçları), bâb ve vezin kaidelerini ve muteber lügat kaynaklarını birbirine bağlayan dijital ilim ve öğrenme platformudur.

---

## 🌟 Öne Çıkan Özellikler

### 1. Çift Alfabeli Akıllı Arama Motoru
- **Latin & Arap Harfli Arama**: Hem modern Türkçe (örn. *Eleştiri*), hem transkripsiyon (örn. *Tenḳīd*), hem de orijinal Osmanlıca imla (örn. *تنقيد*) ve kök harfleri (örn. *حكم*) ile anında arama.
- **Linguistik Normalizasyon**: Türkçe harf uyumu (İ/ı, â, î, û, ḥ, ḳ vb.) ve Arap harfli tashkeel/hareke ayıklama, elif/ye varyantları normalizasyonu.
- **Sanal Osmanlıca Klavye**: Arap harfli klavyesi olmayan kullanıcılar için entegre harf paleti.

### 2. Kök Gezgini (İştikak Şeceresi) — Merkezi Sistem
- Kelimeleri izole tanımlar olarak değil; müşterek üç harfli asli köklerinden doğan **müştak aileleri** olarak sunar.
- **Örnek Kök**: `H-K-M (ح-ك-م)` → *Hüküm, Hâkim, Mahkeme, Mahkûm, Muhakeme, Hükûmet, Tahkim, İhkâm, Muhkem, Hikmet*.
- **İnteraktif Aile Ağacı**: Morfolojik sınıflara (*Masdar, İsm-i Fâil, İsm-i Mef'ûl, İsm-i Mekân*) ve bâblara (*Tef'îl, İf'âl, Mufâ'ale vb.*) göre ayrılmış görsel şecere ve vezin tablosu.

### 3. Müstakil Kelime Sayfaları
- Büyük hatlı Osmanlıca imla (RTL uyumlu).
- Modern karşılıklar ve transliterasyon.
- Lügat manaları ve kullanım sahaları (*Hukuk, Edebiyat, Felsefe vb.*).
- Müradifler (Eş anlamlılar) ve aralarındaki **anlam nüansları**.
- Şair ve yazarlardan edebi şahitler (*Namık Kemal, Tanpınar, Cenap Şahabettin, Yunus Emre vb.*) ve orijinal Osmanlıca cümleleri.
- Muteber kaynak atıfları (*Kâmûs-ı Türkî, Lugat-ı Nâcî, Devellioğlu, Kubbealtı, Lehçe-i Osmânî*).

### 4. Talimhane (Öğrenme Merkezi) & Aralıklı Tekrar (Spaced Repetition)
- Çoktan seçmeli imtihanlar, imla okuma alıştırmaları ve kök bulma sınavları.
- Şahsi Kelimelik: Tek tıkla kelime kaydetme, öğrenilme durumunu takip etme ve hatırlama aralıklarına göre gözden geçirme.

### 5. Kategori ve Koleksiyon Gezgini
- *Hukuk, Felsefe, Edebiyat, Tarih, Siyaset, Dinî Kavramlar, Bürokrasi, Günlük Hayat* kategorileri.
- Tematik seçki koleksiyonları (*Mecelle Terimleri, Klasik Belâgat vb.*) ve kullanıcıların özel liste oluşturabilme imkânı.

### 6. Yönetim Paneli (Admin)
- Kod düzenlemeye gerek kalmadan yeni kelimeler, imlalar ve kökler ekleme.
- JSON ve CSV formatında toplu kelime içe aktarma (Batch Import).
- Doğrulama statüsü güncelleme (*Kaynakla doğrulanmış, Editoryal açıklama, Yaklaşık karşılık, Doğrulama bekliyor*).

---

## 🎨 Tasarım Sistemi (Manuscript Design)

- **Arka Plan**: Sıcak fildişi ve parşömen dokusu (`#FAF7F2`, `#FDFCF9`).
- **Tipografi**: Koyu kömür (`#1C1917`), serif başlıklar (*Playfair Display*), akıcı arayüz (*Plus Jakarta Sans*), otantik hat karakterleri (*Amiri, Scheherazade New*).
- **Vurgular**: Derin bordo (`#6B1D2F`) ve mat altın sarısı (`#C5A059`).

---

## 🛠️ Teknik Mimari

- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Stil**: Tailwind CSS
- **Veritabanı**: Prisma ORM & SQLite (`lugat.db`)
- **İkonlar**: Lucide React

---

## 🚀 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Veritabanını senkronize edin ve tohumlayın
npx prisma db push
node prisma/seed.js

# Geliştirme sunucusunu başlatın
npm run dev

# veya Üretim derlemesi alıp çalıştırın
npm run build
npm run start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.
