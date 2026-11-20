import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import InteractiveReader from "@/components/InteractiveReader";
import { ArrowLeft, Clock, BookOpen, Feather, Share2, Compass } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const text = await prisma.libraryText.findUnique({
    where: { slug },
  });

  if (!text) {
    return { title: "Eser Bulunamadı — LÜGAT Kütüphanesi" };
  }

  return {
    title: `${text.title} — ${text.author} | LÜGAT Kütüphanesi`,
    description: text.summary,
  };
}

export default async function LibraryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const text = await prisma.libraryText.findUnique({
    where: { slug },
  });

  if (!text) {
    notFound();
  }

  // Update view count asynchronously (safe pattern: never crash page if DB is locked or readonly)
  try {
    await prisma.libraryText.update({
      where: { id: text.id },
      data: { viewCount: { increment: 1 } },
    });
  } catch (err) {
    // Silently continue reading
  }

  // Fetch 2 other related texts
  const relatedTexts = await prisma.libraryText.findMany({
    where: {
      id: { not: text.id },
    },
    take: 2,
    orderBy: { viewCount: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <div>
        <Link
          href="/kutuphane"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-burgundy-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kütüphaneye Dön</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="manuscript-panel p-8 sm:p-10 bg-gradient-to-br from-[#FAF7F2] to-[#FFFFFF] border-2 border-[#E2D7C5] relative overflow-hidden">
        {/* Subtle Calligraphic watermark */}
        <div
          dir="rtl"
          aria-hidden="true"
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.035] font-ruqaa text-[16rem] text-burgundy-950 pointer-events-none select-none leading-none"
        >
          {text.titleOttoman.split(" ")[0]}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-burgundy-100 text-burgundy-900 border border-burgundy-300 font-semibold">
              {text.genre}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-700 border border-stone-200">
              {text.period}
            </span>
            {text.poeticMeter && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 font-serif italic flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-700" />
                <span>{text.poeticMeter}</span>
              </span>
            )}
            <div className="flex items-center gap-1 text-xs text-ink-500 ml-auto">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              <span>{text.readTime} okuma süresi</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2 border-b border-[#ECE3D5] pb-6">
            <div className="space-y-1.5">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                {text.title}
              </h1>
              <div className="flex items-center gap-2 text-base text-ink-600 font-serif">
                <Feather className="w-4 h-4 text-burgundy-700" />
                <span className="font-bold text-ink-800">{text.author}</span>
                {text.authorOttoman && (
                  <span dir="rtl" className="font-ruqaa text-lg text-burgundy-800 mr-2">
                    ({text.authorOttoman})
                  </span>
                )}
              </div>
            </div>

            {/* Ottoman Title in Calligraphy */}
            <div className="text-right shrink-0">
              <div
                dir="rtl"
                className="font-ruqaa text-4xl sm:text-5xl font-bold text-burgundy-800 leading-snug select-all"
              >
                {text.titleOttoman}
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div className="pt-2 max-w-3xl">
            <p className="text-sm sm:text-base text-ink-700 font-editorial leading-relaxed">
              {text.summary}
            </p>
          </div>
        </div>
      </div>

      {/* The Interactive Reader Component */}
      <InteractiveReader text={text} />

      {/* Related Texts */}
      {relatedTexts.length > 0 && (
        <div className="pt-8 border-t border-[#E8E1D5] space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-burgundy-700" />
            <h3 className="font-heading text-xl font-bold text-ink-900">
              Kütüphaneden Diğer Şaheserler
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTexts.map((rel) => (
              <Link
                key={rel.id}
                href={`/kutuphane/${rel.slug}`}
                className="group p-5 rounded-xl bg-white border border-[#E5DDD0] hover:border-burgundy-700 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-ink-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-ink-700 font-medium">
                      {rel.genre}
                    </span>
                    <span>{rel.period}</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-ink-900 group-hover:text-burgundy-700 transition-colors">
                    {rel.title}
                  </h4>
                  <div
                    dir="rtl"
                    className="font-ruqaa text-xl font-bold text-burgundy-800 my-1"
                  >
                    {rel.titleOttoman}
                  </div>
                  <p className="text-xs text-ink-600 line-clamp-2 font-editorial mt-1">
                    {rel.summary}
                  </p>
                </div>
                <div className="text-xs text-burgundy-700 font-semibold pt-3 border-t border-[#F0EAE1] mt-3 flex justify-end">
                  <span>Metni Oku →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
