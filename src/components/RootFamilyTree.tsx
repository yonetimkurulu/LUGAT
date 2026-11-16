"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GitFork, ArrowRight, BookOpen, Layers, Sparkles, Info } from "lucide-react";
import VerificationBadge from "./VerificationBadge";

interface WordNode {
  id: string;
  slug: string;
  modernTurkish: string;
  primaryOttoman: string;
  transliteration: string;
  partOfSpeech: string;
  origin: string;
  verificationStatus?: string;
  meanings?: { orderIndex: number; definition: string; register?: string | null }[];
}

interface RelationItem {
  id: string;
  morphologicalPattern: string;
  morphologicalType: string;
  meaningContribution: string;
  word: WordNode;
}

interface RootFamilyTreeProps {
  root: {
    id: string;
    slug: string;
    rootLettersModern: string;
    rootLettersArabic: string;
    origin: string;
    primaryMeaning: string;
    description?: string | null;
    relations: RelationItem[];
  };
  highlightWordSlug?: string;
}

export default function RootFamilyTree({
  root,
  highlightWordSlug,
}: RootFamilyTreeProps) {
  const validRelations = (root?.relations || []).filter((r) => r && r.word);

  const [selectedRel, setSelectedRel] = useState<RelationItem | null>(() => {
    if (highlightWordSlug) {
      const found = validRelations.find((r) => r.word?.slug === highlightWordSlug);
      if (found) return found;
    }
    return validRelations[0] || null;
  });

  const [activeTab, setActiveTab] = useState<"tree" | "table">("tree");

  // Group derivatives by morphological type
  const categories: Record<string, RelationItem[]> = {};
  for (const rel of validRelations) {
    const type = rel.morphologicalType || "Müştak Kelimeler";
    if (!categories[type]) categories[type] = [];
    categories[type].push(rel);
  }

  const categoryKeys = Object.keys(categories);

  return (
    <div className="manuscript-panel p-6 sm:p-8 space-y-8 bg-[#FDFCF9]">
      {/* Top Header of the Tree */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#E8E1D5] gap-4">
        <div>
          <div className="flex items-center gap-2 text-burgundy-700 text-xs font-semibold uppercase tracking-wider">
            <GitFork className="w-4 h-4" />
            <span>İştikak & Kök Ailesi Şeceresi</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
            {root.rootLettersModern} Kökü ve Ailesi
          </h3>
          <p className="text-sm text-ink-600 mt-0.5">
            Asıl kök manası:{" "}
            <span className="font-medium text-ink-800">
              "{root.primaryMeaning}"
            </span>
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 bg-[#F0EAE1] rounded-lg border border-[#E2D8C9] self-stretch md:self-auto justify-center">
          <button
            onClick={() => setActiveTab("tree")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === "tree"
                ? "bg-white text-burgundy-800 shadow-sm font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            Ağaç Görünümü
          </button>
          <button
            onClick={() => setActiveTab("table")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === "table"
                ? "bg-white text-burgundy-800 shadow-sm font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            Bâb ve Vezin Tablosu
          </button>
        </div>
      </div>

      {activeTab === "tree" ? (
        <div className="space-y-8">
          {/* Central Root Pill */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative inline-flex flex-col items-center px-8 py-4 rounded-2xl bg-gradient-to-b from-burgundy-800 to-burgundy-900 text-white shadow-md border-2 border-gold-500/50">
              <span className="text-[11px] uppercase tracking-widest text-gold-300 font-medium">
                Merkezi İştikak Kökü
              </span>
              <div
                dir="rtl"
                className="font-ruqaa text-4xl font-bold mt-1 tracking-wide text-gold-100"
              >
                {root.rootLettersArabic}
              </div>
              <div className="font-heading text-lg font-bold text-[#FAF7F2] mt-0.5">
                {root.rootLettersModern}
              </div>
              <div className="text-xs text-stone-200 mt-1 max-w-xs">
                {root.primaryMeaning}
              </div>
            </div>

            {/* Connecting decorative vertical stem */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-burgundy-800 to-gold-500 my-1" />
            <div className="px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-[11px] font-medium">
              {validRelations.length} Doğrulanmış Türev / Müştak
            </div>
          </div>

          {/* Derivative Branches grouped by Morphological Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {categoryKeys.map((categoryTitle) => {
              const rels = categories[categoryTitle];
              return (
                <div
                  key={categoryTitle}
                  className="rounded-xl border border-[#E8E1D5] bg-[#FAF8F5] p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#ECE4D8]">
                      <span className="font-serif text-sm font-bold text-burgundy-800">
                        {categoryTitle}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#ECE4D8] text-ink-700 font-medium">
                        {rels.length} kelime
                      </span>
                    </div>

                    {/* Word Items in this category */}
                    <div className="space-y-2">
                      {rels.map((rel) => {
                        const isSelected = selectedRel?.id === rel.id;
                        const isHighlighted =
                          highlightWordSlug && rel.word.slug === highlightWordSlug;

                        return (
                          <button
                            key={rel.id}
                            onClick={() => setSelectedRel(rel)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              isSelected
                                ? "bg-white border-burgundy-600 shadow-sm ring-1 ring-burgundy-600/30"
                                : isHighlighted
                                ? "bg-amber-50/70 border-amber-300 hover:border-amber-400"
                                : "bg-white/80 border-[#E8E1D5] hover:border-gold-400 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-serif font-bold text-base text-ink-900">
                                    {rel.word.modernTurkish}
                                  </span>
                                  {isHighlighted && (
                                    <span className="text-[9px] bg-amber-200 text-amber-900 px-1 py-0.2 rounded font-semibold">
                                      Şu anki
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-ink-500 font-serif italic">
                                  {rel.word.transliteration}
                                </div>
                              </div>
                              <div
                                dir="rtl"
                                className="font-arabic text-xl text-burgundy-700 font-bold"
                              >
                                {rel.word.primaryOttoman}
                              </div>
                            </div>

                            <div className="mt-2 pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-ink-600">
                              <span className="truncate pr-2 font-sans font-medium text-gold-700">
                                {rel.morphologicalPattern}
                              </span>
                              <span className="text-ink-400 font-serif">→</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Derivative Inspector Panel */}
          {selectedRel && (
            <div className="rounded-xl border-2 border-burgundy-700/30 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#EFE8DE] gap-3">
                <div className="flex items-center gap-3">
                  <div
                    dir="rtl"
                    className="font-arabic text-3xl font-bold text-burgundy-800 px-3 py-1 rounded-lg bg-burgundy-50 border border-burgundy-200"
                  >
                    {selectedRel.word.primaryOttoman}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-xl font-bold text-ink-900">
                        {selectedRel.word.modernTurkish}
                      </h4>
                      <span className="text-xs text-ink-500 font-serif italic">
                        ({selectedRel.word.transliteration})
                      </span>
                    </div>
                    <div className="text-xs text-ink-600 flex items-center gap-2 mt-0.5">
                      <span>{selectedRel.word.origin}</span>
                      <span>•</span>
                      <span>{selectedRel.word.partOfSpeech}</span>
                      <span>•</span>
                      <span className="font-medium text-burgundy-700">
                        {selectedRel.morphologicalPattern}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/kelime/${selectedRel.word.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <span>Kelime Maddesini İncele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Linguistic Explanation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
                <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#EAE3D6]">
                  <span className="font-semibold text-ink-800 block mb-1">
                    Kökün Manasına Katkısı (Vezin Fonksiyonu):
                  </span>
                  <p className="text-ink-700 leading-relaxed">
                    {selectedRel.meaningContribution}
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#EAE3D6]">
                  <span className="font-semibold text-ink-800 block mb-1">
                    Temel Lügat Tanımı:
                  </span>
                  <p className="text-ink-700 leading-relaxed">
                    {selectedRel.word.meanings && selectedRel.word.meanings.length > 0
                      ? selectedRel.word.meanings[0].definition
                      : "Lügat maddesi tanımı mevcuttur."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Table View */
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#D8CEBC] bg-[#F2EDE2] text-ink-800">
                <th className="py-3 px-4 font-serif font-semibold">Osmanlıca İmla</th>
                <th className="py-3 px-4 font-serif font-semibold">Modern Türkçe</th>
                <th className="py-3 px-4 font-serif font-semibold">Transkripsiyon</th>
                <th className="py-3 px-4 font-serif font-semibold">Vezin / Bâb</th>
                <th className="py-3 px-4 font-serif font-semibold">Morfolojik Sınıf</th>
                <th className="py-3 px-4 font-serif font-semibold">Manaya Katkısı</th>
                <th className="py-3 px-4 font-serif font-semibold text-right">Maddesi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE8DD]">
              {root.relations.map((rel) => (
                <tr
                  key={rel.id}
                  className={`hover:bg-[#F8F5EE] transition-colors ${
                    highlightWordSlug && rel.word.slug === highlightWordSlug
                      ? "bg-amber-50/70"
                      : ""
                  }`}
                >
                  <td
                    dir="rtl"
                    className="py-3 px-4 font-arabic text-xl font-bold text-burgundy-800"
                  >
                    {rel.word.primaryOttoman}
                  </td>
                  <td className="py-3 px-4 font-bold text-ink-900">
                    {rel.word.modernTurkish}
                  </td>
                  <td className="py-3 px-4 font-serif italic text-ink-600">
                    {rel.word.transliteration}
                  </td>
                  <td className="py-3 px-4 text-gold-800 font-medium">
                    {rel.morphologicalPattern}
                  </td>
                  <td className="py-3 px-4 text-ink-700">
                    {rel.morphologicalType}
                  </td>
                  <td className="py-3 px-4 text-ink-600 max-w-xs truncate">
                    {rel.meaningContribution}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Link
                      href={`/kelime/${rel.word.slug}`}
                      className="text-burgundy-700 hover:text-burgundy-900 font-semibold"
                    >
                      Aç →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
