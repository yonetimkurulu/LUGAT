import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Library,
  BookOpen,
  Scroll,
  Clock,
  ArrowRight,
  Sparkles,
  BookMarked,
  Filter,
} from "lucide-react";

export const metadata = {
  title: "Kütüphane — LÜGAT Klasik Eserler ve Metin Arşivi",
  description:
    "Divan şiirleri, Mecelle maddeleri, seyahatnâmeler ve tarihi vesikaların orijinal Osmanlıca metinleri, Latin transkripsiyonu ve günümüz Türkçesi şerhleri.",
};

interface LibraryPageProps {
  searchParams: Promise<{ tur?: string; q?: string }>;
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const { tur, q } = await searchParams;

  const whereCondition: any = {};
  if (tur && tur !== "Tümü") {
    whereCondition.genre = tur;
  }
  if (q && q.trim()) {
    whereCondition.OR = [
      { title: { contains: q } },
      { author: { contains: q } },
      { summary: { contains: q } },
      { contentOttoman: { contains: q } },
    ];
  }

  const texts = await prisma.libraryText.findMany({
    where: whereCondition,
    orderBy: [{ isFeatured: "desc" }, { createdAt: "asc" }],
  });

  const genres = [
    "Tümü",
    "Divan Şiiri",
    "Hukuk & Mecelle",
    "Seyahatnâme & Tarih",
    "Divan & Tanzimat Edebiyatı",
    "Ferman & Belge",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Header */}
      <div className="relative manuscript-panel p-8 sm:p-12 bg-gradient-to-br from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-2 border-[#E2D7C5] overflow-hidden">
        {/* Calligraphic watermark */}
        <div
          dir="rtl"
          aria-hidden="true"
          className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-[0.035] font-ruqaa text-[22rem] text-burgundy-900 pointer-events-none select-none leading-none"
        >
          كتابخانه
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-semibold">
            <Library className="w-3.5 h-3.5 text-gold-600" />
            <span className="font-heading tracking-widest text-[11px] uppercase">
              LÜGAT DİJİTAL KÜTÜPHANESİ
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-ink-900 leading-tight">
            Geçmişin Sesini <br className="hidden sm:inline" />
            <span className="font-serif italic text-burgundy-700 font-normal">
              Orijinal Metninden Oku.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ink-600 font-editorial leading-relaxed">
            Dilimizi ve edebi hafızamızı kaybetmemek için inşa edilmiş dijital
            arşiv; Divan şiirinin zirvelerinden Mecelle’nin külli kaidelerine,
            Evliya Çelebi’nin seyahat tasvirlerinden fermanlara kadar şaheserleri
            karşılaştırmalı ve tahlilli okuma imkânı sunar.
          </p>

          {/* Quick Search */}
          <form className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-lg">
            <input
              type="text"
              name="q"
              defaultValue={q || ""}
              placeholder="Eser adı, şair, yazar veya metin içi arama..."
              className="w-full px-4 py-2.5 rounded-lg border border-[#DCD3C4] bg-white text-ink-900 placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-600"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium text-sm transition-colors whitespace-nowrap shadow-xs"
            >
              Kütüphanede Ara
            </button>
          </form>
        </div>
      </div>

      {/* Genre Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E8E1D5] pb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-500 uppercase tracking-wider mr-2">
          <Filter className="w-3.5 h-3.5 text-burgundy-700" />
          <span>Raflar:</span>
        </div>
        {genres.map((g) => {
          const isActive = (tur || "Tümü") === g;
          return (
            <Link
              key={g}
              href={g === "Tümü" ? "/kutuphane" : `/kutuphane?tur=${encodeURIComponent(g)}`}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? "bg-burgundy-700 text-white shadow-xs"
                  : "bg-white text-ink-700 hover:bg-stone-100 border border-[#E8E1D5]"
              }`}
            >
              {g}
            </Link>
          );
        })}
      </div>

      {/* Texts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {texts.map((text) => (
          <article
            key={text.id}
            className="group manuscript-panel p-6 bg-white border border-[#E5DDD0] hover:border-burgundy-700 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-stone-100 text-ink-700 font-medium border border-stone-200">
                  {text.genre}
                </span>
                <div className="flex items-center gap-2 text-ink-400 text-[11px]">
                  <Clock className="w-3 h-3 text-gold-600" />
                  <span>{text.readTime}</span>
                </div>
              </div>

              {/* Title & Ottoman Script */}
              <div>
                <h2 className="font-heading text-xl font-bold text-ink-900 group-hover:text-burgundy-700 transition-colors">
                  <Link href={`/kutuphane/${text.slug}`}>{text.title}</Link>
                </h2>
                <div
                  dir="rtl"
                  className="font-ruqaa text-2xl font-bold text-burgundy-800 mt-1 leading-snug"
                >
                  {text.titleOttoman}
                </div>
              </div>

              {/* Author & Period */}
              <div className="flex items-center gap-2 text-xs text-ink-500 font-sans border-t border-[#F0EAE1] pt-2">
                <span className="font-semibold text-ink-800">
                  {text.author}
                </span>
                <span>•</span>
                <span>{text.period}</span>
              </div>

              {/* Summary */}
              <p className="text-sm text-ink-600 font-editorial line-clamp-3 leading-relaxed">
                {text.summary}
              </p>
            </div>

            {/* Footer Action */}
            <div className="pt-5 mt-4 border-t border-[#F0EAE1] flex items-center justify-between">
              <span className="text-[11px] px-2 py-0.5 rounded bg-gold-50 text-gold-800 border border-gold-200 font-medium">
                {text.difficulty} Seviye
              </span>

              <Link
                href={`/kutuphane/${text.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy-700 group-hover:text-burgundy-900 group-hover:translate-x-1 transition-all"
              >
                <span>Metni İncele & Oku</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}

        {texts.length === 0 && (
          <div className="col-span-full p-12 text-center manuscript-panel bg-white border border-[#E8E1D5] space-y-3">
            <BookOpen className="w-8 h-8 text-ink-400 mx-auto" />
            <p className="font-heading text-base font-bold text-ink-800">
              Bu rafta aradığınız kriterlere uygun metin bulunamadı.
            </p>
            <Link
              href="/kutuphane"
              className="inline-block text-xs font-semibold text-burgundy-700 underline"
            >
              Tüm Eserlere Göz Atın
            </Link>
          </div>
        )}
      </div>

      {/* Library Manifesto / Callout */}
      <div className="manuscript-panel p-8 bg-gradient-to-r from-burgundy-900 via-burgundy-950 to-burgundy-900 text-white rounded-2xl relative overflow-hidden shadow-lg border border-gold-500/30">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Kültür ve Hafıza Hareketi</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
            Kelimeler Metin İçinde Yaşar.
          </h3>
          <p className="text-stone-300 font-editorial text-base sm:text-lg leading-relaxed">
            Sözlükler kelimeleri izole vaziyette saklar; lâkin dilimizin hakiki
            ruhu Fuzûlî’nin mısralarında, Mecelle’nin hükümlerinde ve Evliya
            Çelebi’nin seyahat tablolarında tecelli eder. Kütüphanemizdeki her bir
            kelimeye tıklayarak köküne inebilir ve lisan bağınızı güçlendirebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
