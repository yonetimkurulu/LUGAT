import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { GitFork, Search, ArrowRight, Layers, Sparkles } from "lucide-react";

export const revalidate = 60;

export default async function KoklerPage() {
  const roots = await prisma.root.findMany({
    include: {
      _count: { select: { relations: true } },
      relations: {
        include: {
          word: {
            select: {
              slug: true,
              modernTurkish: true,
              primaryOttoman: true,
              transliteration: true,
            },
          },
        },
        orderBy: { orderIndex: "asc" },
      },
    },
    orderBy: { relations: { _count: "desc" } },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-semibold">
          <GitFork className="w-3.5 h-3.5 text-gold-600" />
          <span>LÜGAT'ın En Ayırt Edici Cevheri</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Kök Gezgini (İştikak Şeceresi)
        </h1>
        <p className="text-sm text-ink-600 max-w-3xl leading-relaxed">
          Kelimeleri izole tanımlar olarak değil; aynı semantik ve morfolojik
          menbaı paylaşan aileler olarak keşfedin. Bir kökü inceleyerek
          yargıdan hükûmete, kitaptan mektebe kadar onlarca kelimenin doğuşunu
          kavrarsınız.
        </p>
      </div>

      {/* Roots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roots.map((root) => (
          <Link
            key={root.id}
            href={`/kokler/${root.slug}`}
            className="manuscript-panel p-6 hover:border-burgundy-600 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Top row */}
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EAE0]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    {root.origin} Kökü
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-burgundy-700 mt-1">
                    {root.rootLettersModern}
                  </h3>
                </div>
                <div
                  dir="rtl"
                  className="font-arabic text-3xl font-bold text-burgundy-800"
                >
                  {root.rootLettersArabic}
                </div>
              </div>

              {/* Meaning & description */}
              <div className="py-3 space-y-1 text-xs">
                <span className="font-semibold text-ink-800 block">
                  Asıl Kök Manası:
                </span>
                <p className="text-ink-600 leading-relaxed">
                  "{root.primaryMeaning}"
                </p>
              </div>

              {/* Derivatives Pills */}
              <div className="pt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-ink-500 font-medium">
                  <span>Doğrulanmış Müştaklar:</span>
                  <span className="font-bold text-burgundy-700">
                    {root._count.relations} Kelime
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {root.relations.slice(0, 5).map((rel) => (
                    <span
                      key={rel.word.slug}
                      className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE2D5] text-xs text-ink-800"
                    >
                      {rel.word.modernTurkish}
                    </span>
                  ))}
                  {root.relations.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-ink-500 font-semibold">
                      +{root.relations.length - 5} daha
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-semibold text-burgundy-700">
              <span>İnteraktif Aile Ağacını Aç</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
