import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, GitFork, BookOpen, GraduationCap } from "lucide-react";

interface RootBreadcrumbProps {
  modernWord: string;
  ottomanWord: string;
  rootLettersModern?: string | null;
  rootLettersArabic?: string | null;
  rootSlug?: string | null;
}

export default function RootBreadcrumb({
  modernWord,
  ottomanWord,
  rootLettersModern,
  rootLettersArabic,
  rootSlug,
}: RootBreadcrumbProps) {
  return (
    <div className="bg-[#FAF7F0] border border-[#E8E1D5] rounded-xl p-3 sm:p-4 text-xs">
      <div className="flex items-center gap-1.5 text-ink-500 font-semibold uppercase tracking-wider text-[10px] mb-2">
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span>Linguistik Keşif Yolu (İştikak Seyri)</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-ink-700">
        {/* Step 1: Modern Word */}
        <span className="px-2.5 py-1 rounded-md bg-white border border-[#E0D8CB] font-semibold text-ink-900">
          {modernWord}
        </span>

        <ArrowRight className="w-3.5 h-3.5 text-ink-400 shrink-0" />

        {/* Step 2: Ottoman Equivalent */}
        <span
          dir="rtl"
          className="px-2.5 py-1 rounded-md bg-white border border-[#E0D8CB] font-arabic font-bold text-base text-burgundy-800"
        >
          {ottomanWord}
        </span>

        {rootSlug && rootLettersModern && (
          <>
            <ArrowRight className="w-3.5 h-3.5 text-ink-400 shrink-0" />

            {/* Step 3: Root */}
            <Link
              href={`/kokler/${rootSlug}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-burgundy-50 border border-burgundy-300 text-burgundy-800 hover:bg-burgundy-100 font-semibold transition-colors"
            >
              <GitFork className="w-3 h-3 text-burgundy-700" />
              <span>
                Kök: {rootLettersModern} ({rootLettersArabic})
              </span>
            </Link>

            <ArrowRight className="w-3.5 h-3.5 text-ink-400 shrink-0" />

            {/* Step 4: Derivatives */}
            <Link
              href={`/kokler/${rootSlug}`}
              className="px-2.5 py-1 rounded-md bg-gold-50 border border-gold-300 text-gold-900 hover:bg-gold-100 font-medium transition-colors"
            >
              Tüm Müştaklar (Aile Ağacı)
            </Link>
          </>
        )}

        <ArrowRight className="w-3.5 h-3.5 text-ink-400 shrink-0" />

        {/* Step 5: Learning Exercise */}
        <Link
          href="/ogrenme"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-300 text-stone-800 hover:bg-stone-200 font-medium transition-colors"
        >
          <GraduationCap className="w-3 h-3 text-stone-700" />
          <span>Talim Yap</span>
        </Link>
      </div>
    </div>
  );
}
