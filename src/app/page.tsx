import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SearchBar from "@/components/SearchBar";
import VerificationBadge from "@/components/VerificationBadge";
import SaveWordButton from "@/components/SaveWordButton";
import {
  GitFork,
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Library,
  Feather,
  Layers,
  ChevronRight,
  Compass,
} from "lucide-react";

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  // Fetch Word of the Day
  let wordOfDay = await prisma.word.findFirst({
    where: { isWordOfDay: true },
    include: {
      meanings: { orderBy: { orderIndex: "asc" } },
      spellings: true,
      rootRelations: { include: { root: true } },
      sourceRelations: { include: { source: true } },
    },
  });

  if (!wordOfDay) {
    wordOfDay = await prisma.word.findFirst({
      where: { slug: "tenkit" },
      include: {
        meanings: { orderBy: { orderIndex: "asc" } },
        spellings: true,
        rootRelations: { include: { root: true } },
        sourceRelations: { include: { source: true } },
      },
    });
  }

  // Fetch popular roots
  const popularRoots = await prisma.root.findMany({
    take: 6,
    include: {
      _count: { select: { relations: true } },
      relations: {
        take: 3,
        include: {
          word: {
            select: { modernTurkish: true, primaryOttoman: true },
          },
        },
      },
    },
    orderBy: { relations: { _count: "desc" } },
  });

  // Fetch featured collections
  const featuredCollections = await prisma.vocabularyCollection.findMany({
    where: { isFeatured: true },
    take: 3,
    include: {
      _count: { select: { items: true } },
      items: {
        take: 3,
        include: {
          word: {
            select: {
              slug: true,
              modernTurkish: true,
              primaryOttoman: true,
            },
          },
        },
      },
    },
  });

  // Fetch prominent words
  const recentWords = await prisma.word.findMany({
    take: 8,
    orderBy: { viewCount: "desc" },
    include: {
      meanings: { take: 1 },
      rootRelations: { include: { root: true } },
    },
  });

  // Fetch featured library texts
  const featuredLibraryTexts = await prisma.libraryText.findMany({
    take: 3,
    orderBy: [{ isFeatured: "desc" }, { createdAt: "asc" }],
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E8E1D5] bg-gradient-to-b from-[#F7F2E8] via-[#FAF7F2] to-[#FAF7F2] overflow-hidden">
        {/* Subtle background calligraphy watermark */}
        <div
          dir="rtl"
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04] font-ruqaa text-[20rem] md:text-[30rem] text-burgundy-900 leading-none"
        >
          لغت
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="font-heading tracking-widest text-[11px] uppercase">Osmanlı Türkçesi Dijital İştikak ve Dil Platformu</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-tight">
            Kelimelerin köklerine in, <br className="hidden sm:inline" />
            <span className="font-serif text-burgundy-700 italic font-normal">
              geçmişin dilini keşfet.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Modern Türkçedeki kelimelerin Osmanlıca karşılıklarını, orijinal Arap
            harfli imlalarını, iştikak köklerini ve tüm türev ailelerini muteber
            lügat kaynaklarıyla inceleyin.
          </p>

          {/* Prominent Search Bar */}
          <div className="pt-4 max-w-3xl mx-auto">
            <SearchBar size="lg" autoFocus={false} />

            {/* Quick search suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-ink-500">
              <span className="font-medium">Örnek Aramalar:</span>
              {[
                { label: "Eleştiri", q: "Eleştiri" },
                { label: "Tenkîd", q: "Tenkid" },
                { label: "تنقيد (Osmanlıca)", q: "تنقيد" },
                { label: "Hüküm", q: "Hüküm" },
                { label: "Kök: ح-ك-م", q: "حكم" },
                { label: "Belâgat", q: "Belâgat" },
              ].map((item) => (
                <Link
                  key={item.q}
                  href={`/sozluk?q=${encodeURIComponent(item.q)}`}
                  className="px-2.5 py-1 rounded-md bg-white border border-[#E2D8C9] text-ink-700 hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Pillars Nav */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto">
            <Link
              href="/sozluk"
              className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] hover:border-burgundy-600 hover:shadow-sm transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-2 group-hover:bg-burgundy-700 group-hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                Sözlük & İmla
              </div>
              <div className="text-[11px] text-ink-500 mt-0.5">
                Latin ve Arapça arama
              </div>
            </Link>

            <Link
              href="/kokler"
              className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] hover:border-burgundy-600 hover:shadow-sm transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-50 text-gold-700 flex items-center justify-center mb-2 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <GitFork className="w-4 h-4" />
              </div>
              <div className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                Kök Gezgini
              </div>
              <div className="text-[11px] text-ink-500 mt-0.5">
                Müştak aile ağaçları
              </div>
            </Link>

            <Link
              href="/ogrenme"
              className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] hover:border-burgundy-600 hover:shadow-sm transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                Talimhane
              </div>
              <div className="text-[11px] text-ink-500 mt-0.5">
                İmla ve kök sınavları
              </div>
            </Link>

            <Link
              href="/koleksiyonlar"
              className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] hover:border-burgundy-600 hover:shadow-sm transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center mb-2 group-hover:bg-stone-800 group-hover:text-white transition-colors">
                <Library className="w-4 h-4" />
              </div>
              <div className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                Koleksiyonlar
              </div>
              <div className="text-[11px] text-ink-500 mt-0.5">
                Tematik ıstılah listeleri
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Word of the Day & Root Feature Highlight */}
        {wordOfDay && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Word of the day card */}
            <div className="lg:col-span-7 manuscript-panel p-6 sm:p-8 flex flex-col justify-between border-2 border-burgundy-900/10 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-burgundy-100 text-burgundy-900 text-xs font-semibold tracking-wide uppercase">
                      Günün Kelimesi
                    </span>
                    <VerificationBadge
                      status={wordOfDay.verificationStatus}
                      size="sm"
                    />
                  </div>
                  <SaveWordButton
                    word={{
                      id: wordOfDay.id,
                      slug: wordOfDay.slug,
                      modernTurkish: wordOfDay.modernTurkish,
                      primaryOttoman: wordOfDay.primaryOttoman,
                      transliteration: wordOfDay.transliteration,
                      origin: wordOfDay.origin,
                      firstMeaning: wordOfDay.meanings[0]?.definition,
                    }}
                    size="sm"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                      {wordOfDay.modernTurkish}
                    </h2>
                    <div className="text-base text-ink-500 font-serif italic mt-0.5">
                      {wordOfDay.transliteration}
                    </div>
                  </div>
                  <div
                    dir="rtl"
                    className="font-ruqaa text-5xl sm:text-6xl font-bold text-burgundy-800 leading-none"
                  >
                    {wordOfDay.primaryOttoman}
                  </div>
                </div>

                {/* Meanings */}
                <div className="space-y-2 pt-2 border-t border-[#ECE4D8]">
                  {wordOfDay.meanings.map((m, idx) => (
                    <div key={m.id} className="text-sm text-ink-800 font-editorial flex items-start gap-2 text-[16px]">
                      <span className="font-bold text-burgundy-700 font-serif">
                        {idx + 1}.
                      </span>
                      <p className="leading-relaxed">
                        {m.register && (
                          <span className="font-semibold text-xs text-ink-500 italic mr-1">
                            [{m.register}]
                          </span>
                        )}
                        {m.definition}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Linguistic Note & Root connection */}
                {wordOfDay.rootRelations.length > 0 && (
                  <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E8E1D5] text-xs space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-ink-800">
                      <GitFork className="w-3.5 h-3.5 text-burgundy-700" />
                      <span>
                        Kök: {wordOfDay.rootRelations[0].root.rootLettersModern}{" "}
                        ({wordOfDay.rootRelations[0].root.rootLettersArabic}) —{" "}
                        {wordOfDay.rootRelations[0].morphologicalPattern}
                      </span>
                    </div>
                    <p className="text-ink-600">
                      {wordOfDay.rootRelations[0].meaningContribution}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer action */}
              <div className="pt-6 mt-4 border-t border-[#ECE4D8] flex items-center justify-between">
                <span className="text-xs text-ink-500">
                  Köken:{" "}
                  <strong className="text-ink-700">{wordOfDay.origin}</strong>
                </span>
                <Link
                  href={`/kelime/${wordOfDay.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 hover:text-burgundy-900 group"
                >
                  <span>Maddenin Tüm Teferruatı ve Şeceresi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Root Explorer Spotlight Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#2D2A26] to-[#1C1A18] text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-gold-500/20 relative overflow-hidden">
              <div
                dir="rtl"
                aria-hidden="true"
                className="absolute -right-6 -bottom-6 font-arabic text-8xl text-white/5 select-none"
              >
                شجره
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-medium">
                  <GitFork className="w-3 h-3" />
                  <span>En Mühim Özellik</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-gold-100">
                  Kök Sistemi ve Müştak Haritası
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Osmanlı Türkçesi kelimeler tek başına ezberlenmez; üç harfli
                  asli köklerinden türeyen bâb ve vezin ailesiyle öğrenilir. Bir
                  kökü çözdüğünüzde onlarca kelimenin derûnî manasını bir anda
                  kavrarsınız.
                </p>

                {/* Example Root Preview: HÜKM */}
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gold-200 font-serif font-bold">
                    <span>Örnek Kök: H-K-M (ح-ك-م)</span>
                    <span>8 Müştak</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {[
                      "Hüküm",
                      "Hâkim",
                      "Mahkeme",
                      "Mahkûm",
                      "Muhakeme",
                      "Hükûmet",
                      "Tahkim",
                      "İhkâm",
                    ].map((w) => (
                      <span
                        key={w}
                        className="px-2 py-0.5 rounded bg-white/15 text-stone-200"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <Link
                  href="/kokler/hkm"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-ink-950 text-xs font-bold transition-colors shadow-md"
                >
                  <span>HÜKM Kök Ailesini İnteraktif Ağaçta İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Popular Word Roots Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[#E8E1D5]">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 uppercase tracking-wider">
                <GitFork className="w-3.5 h-3.5" />
                <span>Etimolojik Ağaçlar</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
                Popüler Kelime Kökleri
              </h3>
            </div>
            <Link
              href="/kokler"
              className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-800 flex items-center gap-1"
            >
              <span>Tüm 30+ Kökü Gör</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularRoots.map((root) => (
              <Link
                key={root.id}
                href={`/kokler/${root.slug}`}
                className="manuscript-panel p-5 hover:border-burgundy-600 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-serif font-bold text-lg text-ink-900 group-hover:text-burgundy-700">
                        {root.rootLettersModern}
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        {root.primaryMeaning}
                      </div>
                    </div>
                    <div
                      dir="rtl"
                      className="font-arabic text-3xl font-bold text-burgundy-800"
                    >
                      {root.rootLettersArabic}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2ECE1] space-y-1.5">
                    <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                      Öne Çıkan Türevler:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {root.relations.map((rel) => (
                        <span
                          key={rel.word.modernTurkish}
                          className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE3D6] text-xs text-ink-700"
                        >
                          {rel.word.modernTurkish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-ink-500">
                  <span className="font-medium text-gold-700">
                    {root._count.relations} Doğrulanmış Kelime
                  </span>
                  <span className="font-semibold text-burgundy-700 group-hover:translate-x-1 transition-transform">
                    Ağacı Aç →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Digital Library Section */}
        {featuredLibraryTexts.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[#E8E1D5]">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 uppercase tracking-wider">
                  <Library className="w-3.5 h-3.5" />
                  <span>Metin Arşivi</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 mt-1">
                  Kütüphane & Klasik Metinler
                </h2>
                <p className="text-xs sm:text-sm text-ink-500 font-editorial mt-0.5">
                  Divan şiiri, Mecelle kaideleri ve seyahatnâmeleri orijinal hattı ve şerhiyle inceleyin.
                </p>
              </div>
              <Link
                href="/kutuphane"
                className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-900 flex items-center gap-1 shrink-0"
              >
                <span>Tüm Kütüphaneyi Gör ({featuredLibraryTexts.length}+ Eser)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLibraryTexts.map((text) => (
                <Link
                  key={text.id}
                  href={`/kutuphane/${text.slug}`}
                  className="group manuscript-panel p-6 bg-white border border-[#E5DDD0] hover:border-burgundy-700 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-stone-100 text-ink-700 font-medium">
                        {text.genre}
                      </span>
                      <span className="text-ink-400 text-[11px]">{text.readTime}</span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-ink-900 group-hover:text-burgundy-700 transition-colors">
                        {text.title}
                      </h3>
                      <div
                        dir="rtl"
                        className="font-ruqaa text-xl font-bold text-burgundy-800 my-1"
                      >
                        {text.titleOttoman}
                      </div>
                    </div>

                    <p className="text-xs text-ink-500 font-sans">
                      {text.author} • {text.period}
                    </p>

                    <p className="text-xs text-ink-600 line-clamp-2 font-editorial leading-relaxed">
                      {text.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0EAE1] mt-3 flex items-center justify-between text-xs font-semibold text-burgundy-700">
                    <span className="text-[11px] text-ink-400 font-normal">Tahlilli Okuma</span>
                    <span className="group-hover:translate-x-1 transition-transform">Metne Git →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Collections */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[#E8E1D5]">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 uppercase tracking-wider">
                <Library className="w-3.5 h-3.5" />
                <span>Muntazam Listeler</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
                Öne Çıkan Lügat Koleksiyonları
              </h3>
            </div>
            <Link
              href="/koleksiyonlar"
              className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-800 flex items-center gap-1"
            >
              <span>Tüm Koleksiyonlar</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((col) => (
              <Link
                key={col.id}
                href={`/koleksiyonlar/${col.slug}`}
                className="manuscript-panel p-6 hover:border-gold-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 rounded bg-gold-100 text-gold-900 border border-gold-300 font-semibold">
                      Seçki Koleksiyonu
                    </span>
                    <span className="text-xs text-ink-500 font-medium">
                      {col._count.items} Kelime
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-ink-900 group-hover:text-burgundy-700">
                    {col.title}
                  </h4>

                  <p className="text-xs text-ink-600 leading-relaxed line-clamp-2">
                    {col.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {col.items.map((item) => (
                      <span
                        key={item.word.slug}
                        className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE3D6] text-xs text-ink-800"
                      >
                        {item.word.modernTurkish}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F2ECE1] text-xs font-semibold text-burgundy-700 flex items-center justify-between">
                  <span>Koleksiyonu Çalış</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recently Explored / Popular Words Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Hazineden Seçmeler</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
                Sıklıkla Tetkik Edilen Kelimeler
              </h3>
            </div>
            <Link
              href="/sozluk"
              className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-800 flex items-center gap-1"
            >
              <span>Kapsamlı Lügat</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentWords.map((w) => (
              <Link
                key={w.id}
                href={`/kelime/${w.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E8E1D5] hover:border-burgundy-600 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-serif font-bold text-base text-ink-900 group-hover:text-burgundy-700">
                        {w.modernTurkish}
                      </span>
                      <div className="text-xs text-ink-500 font-serif italic">
                        {w.transliteration}
                      </div>
                    </div>
                    <div
                      dir="rtl"
                      className="font-arabic text-2xl font-bold text-burgundy-800"
                    >
                      {w.primaryOttoman}
                    </div>
                  </div>

                  {w.meanings && w.meanings.length > 0 && (
                    <p className="text-xs text-ink-600 mt-2 line-clamp-2">
                      {w.meanings[0].definition}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-ink-500">
                  <span>{w.origin}</span>
                  {w.rootRelations.length > 0 && (
                    <span className="text-burgundy-700 font-medium">
                      Kök: {w.rootRelations[0].root.rootLettersModern}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Spaced Repetition Learning Callout */}
        <section className="rounded-2xl bg-gradient-to-r from-burgundy-800 via-burgundy-900 to-[#4A1420] text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Aralıklı Tekrar (Spaced Repetition) Sistemi</span>
            </div>
            <h3 className="font-serif text-3xl font-bold tracking-tight">
              Kelimeliğini Oluştur, Talimhane ile Kalıcı Kıl
            </h3>
            <p className="text-sm text-stone-200 leading-relaxed">
              İncelediğiniz kelimeleri tek tıkla kelimeliğinize kaydedin.
              Talimhane modülü sayesinde Osmanlıca imla okuma, kök bulma ve çoktan
              seçmeli sınavlarla kelime dağarcığınızı pekiştirin.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/ogrenme"
                className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-ink-950 font-bold text-xs transition-colors shadow-sm"
              >
                Günün Sınavına Başla
              </Link>
              <Link
                href="/kelimelik"
                className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition-colors border border-white/20"
              >
                Kelimeliğimi Görüntüle
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
