import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import RootFamilyTree from "@/components/RootFamilyTree";
import { GitFork, ArrowLeft, BookOpen, Sparkles, Layers } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RootDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const root = await prisma.root.findUnique({
    where: { slug },
    include: {
      relations: {
        include: {
          word: {
            include: {
              meanings: { orderBy: { orderIndex: "asc" } },
              spellings: true,
            },
          },
        },
        orderBy: { orderIndex: "asc" },
      },
    },
  });

  if (!root) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/kokler"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-burgundy-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Kökler Listesine Dön</span>
        </Link>
      </div>

      {/* Root Etymological Header */}
      <div className="manuscript-panel p-8 sm:p-10 bg-gradient-to-br from-[#FAF7F2] to-[#FFFFFF] border-2 border-[#E0D5C3] relative overflow-hidden">
        <div
          dir="rtl"
          aria-hidden="true"
          className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.04] font-arabic text-[16rem] text-burgundy-950 pointer-events-none select-none leading-none"
        >
          {root.rootLettersArabic}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE3D5]">
            <div className="space-y-1">
              <span className="text-xs px-2.5 py-0.5 rounded bg-burgundy-100 text-burgundy-900 border border-burgundy-300 font-semibold uppercase">
                {root.origin} Asıllı İştikak Kökü
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 pt-1">
                Kök: {root.rootLettersModern}
              </h1>
            </div>

            <div className="text-right">
              <div
                dir="rtl"
                className="font-arabic text-6xl sm:text-7xl font-bold text-burgundy-800 leading-none"
              >
                {root.rootLettersArabic}
              </div>
              <span className="text-[11px] font-serif text-ink-400 uppercase tracking-widest block mt-1">
                Arap Harfli Kök Harfleri
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
            <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE2D5]">
              <span className="font-serif font-bold text-sm text-ink-900 block mb-1">
                Semantik Kök Manası:
              </span>
              <p className="text-ink-700 leading-relaxed font-sans text-sm">
                "{root.primaryMeaning}"
              </p>
            </div>

            {root.description && (
              <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE2D5]">
                <span className="font-serif font-bold text-sm text-ink-900 block mb-1">
                  Etimolojik & Lugavî İzah:
                </span>
                <p className="text-ink-700 leading-relaxed font-sans">
                  {root.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Family Tree Section */}
      <div className="space-y-4">
        <RootFamilyTree root={root} />
      </div>
    </div>
  );
}
