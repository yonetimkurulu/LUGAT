import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  LayoutGrid,
  Feather,
  Scale,
  Compass,
  Hourglass,
  Shield,
  Moon,
  Coffee,
  BookOpen,
  Landmark,
  Palette,
  ArrowRight,
} from "lucide-react";

export const revalidate = 60;

// Dynamic icon resolver
const iconMap: Record<string, React.ElementType> = {
  Feather,
  Scale,
  Compass,
  Hourglass,
  Shield,
  Moon,
  Coffee,
  BookOpen,
  Landmark,
  Palette,
};

export default async function KategorilerPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: { select: { relations: true } },
      relations: {
        take: 4,
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
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-semibold">
          <LayoutGrid className="w-3.5 h-3.5 text-gold-600" />
          <span>Mevzu ve Disiplin Tasnifi</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Kategori Gezgini
        </h1>
        <p className="text-sm text-ink-600 max-w-3xl leading-relaxed">
          Osmanlı Türkçesi kelime hazinesini ilim dallarına, edebi sanatlara,
          hukuk nizamına ve günlük hayat ıstılahlarına göre tematik olarak
          inceleyin.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || LayoutGrid;

          return (
            <Link
              key={cat.id}
              href={`/kategoriler/${cat.slug}`}
              className="manuscript-panel p-6 hover:border-burgundy-600 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy-800 flex items-center justify-center border border-burgundy-200 group-hover:bg-burgundy-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F2EDE2] text-ink-700 font-bold border border-[#E0D8CB]">
                    {cat._count.relations} Kelime
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-burgundy-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed mt-1">
                    {cat.description}
                  </p>
                </div>

                {/* Sample words */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cat.relations.map((r) => (
                    <span
                      key={r.word.slug}
                      className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE2D5] text-xs text-ink-800"
                    >
                      {r.word.modernTurkish}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F2ECE1] text-xs font-semibold text-burgundy-700 flex items-center justify-between">
                <span>Kategoriyi İncele</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
