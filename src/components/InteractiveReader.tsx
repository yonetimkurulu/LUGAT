"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Columns2,
  Rows3,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";

interface VocabularyItem {
  word: string;
  meaning: string;
  root?: string;
}

interface InteractiveReaderProps {
  text: {
    title: string;
    titleOttoman: string;
    author: string;
    authorOttoman?: string | null;
    genre: string;
    period: string;
    summary: string;
    contentOttoman: string;
    contentTranslit: string;
    contentModern: string;
    vocabularyJson?: string | null;
    readTime: string;
    difficulty: string;
  };
}

export default function InteractiveReader({ text }: InteractiveReaderProps) {
  const [viewMode, setViewMode] = useState<"side_by_side" | "interlinear" | "original">("side_by_side");
  const [fontSize, setFontSize] = useState<number>(28); // For Arabic script
  const [arabicFont, setArabicFont] = useState<"ruqaa" | "naskh">("ruqaa");
  const [activeTab, setActiveTab] = useState<"reader" | "vocabulary">("reader");

  // Parse vocabulary list if exists
  const vocabList: VocabularyItem[] = text.vocabularyJson
    ? JSON.parse(text.vocabularyJson)
    : [];

  // Split lines
  const ottomanLines = text.contentOttoman.split("\n").filter((l) => l.trim().length > 0);
  const translitLines = text.contentTranslit.split("\n").filter((l) => l.trim().length > 0);
  const modernLines = text.contentModern.split("\n").filter((l) => l.trim().length > 0);

  return (
    <div className="space-y-6">
      {/* Control Bar */}
      <div className="manuscript-panel p-4 bg-white border border-[#E2D7C5] flex flex-wrap items-center justify-between gap-4 sticky top-20 z-20 shadow-xs">
        {/* View Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-medium">
          <button
            onClick={() => setViewMode("side_by_side")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "side_by_side"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <Columns2 className="w-4 h-4 text-burgundy-700" />
            <span className="hidden sm:inline">Karşılaştırmalı (Yan Yana)</span>
            <span className="sm:hidden">Karşılaştır</span>
          </button>

          <button
            onClick={() => setViewMode("interlinear")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "interlinear"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <Rows3 className="w-4 h-4 text-burgundy-700" />
            <span className="hidden sm:inline">Satır Satır Şerh</span>
            <span className="sm:hidden">Satır Satır</span>
          </button>

          <button
            onClick={() => setViewMode("original")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "original"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <BookOpen className="w-4 h-4 text-burgundy-700" />
            <span className="hidden sm:inline">Yalnızca Orijinal Metin</span>
            <span className="sm:hidden">Orijinal</span>
          </button>
        </div>

        {/* Font Style & Size Controls */}
        <div className="flex items-center gap-3">
          {/* Hat Stili */}
          <div className="hidden md:flex items-center gap-1 text-xs">
            <span className="text-ink-400 mr-1">Hat:</span>
            <button
              onClick={() => setArabicFont("ruqaa")}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                arabicFont === "ruqaa"
                  ? "bg-burgundy-100 text-burgundy-900 font-semibold border border-burgundy-300"
                  : "bg-white text-ink-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              Rik'a (رقعة)
            </button>
            <button
              onClick={() => setArabicFont("naskh")}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                arabicFont === "naskh"
                  ? "bg-burgundy-100 text-burgundy-900 font-semibold border border-burgundy-300"
                  : "bg-white text-ink-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              Nesih (نسخ)
            </button>
          </div>

          {/* Yazı Boyutu */}
          <div className="flex items-center gap-1 border-l border-stone-200 pl-3">
            <button
              onClick={() => setFontSize((s) => Math.max(s - 2, 20))}
              title="Yazıyı Küçült"
              className="p-1.5 rounded hover:bg-stone-100 text-ink-700"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs text-ink-500 font-mono w-6 text-center">
              {fontSize}
            </span>
            <button
              onClick={() => setFontSize((s) => Math.min(s + 2, 44))}
              title="Yazıyı Büyüt"
              className="p-1.5 rounded hover:bg-stone-100 text-ink-700"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Kelimelik Sekme Butonu */}
          {vocabList.length > 0 && (
            <button
              onClick={() =>
                setActiveTab(activeTab === "vocabulary" ? "reader" : "vocabulary")
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === "vocabulary"
                  ? "bg-gold-600 text-white shadow-xs"
                  : "bg-gold-50 text-gold-900 border border-gold-300 hover:bg-gold-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Metin İçi Kelimeler ({vocabList.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "vocabulary" ? (
        /* Vocabulary Drawer */
        <div className="manuscript-panel p-6 sm:p-8 bg-white border border-[#E2D7C5] space-y-6">
          <div className="flex items-center justify-between border-b border-[#ECE3D5] pb-4">
            <div>
              <h3 className="font-heading text-xl font-bold text-ink-900">
                Metinde Geçen Anahtar Kelimeler & Kökler
              </h3>
              <p className="text-xs text-ink-500 mt-0.5">
                Bu metinde geçen nadir ıstılahlar, edebi terkipler ve lügat manaları.
              </p>
            </div>
            <button
              onClick={() => setActiveTab("reader")}
              className="text-xs text-burgundy-700 font-semibold hover:underline"
            >
              Metne Geri Dön
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vocabList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-heading font-bold text-base text-burgundy-900">
                      {item.word}
                    </span>
                    {item.root && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-stone-200 text-ink-700 font-mono">
                        {item.root}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-700 font-editorial leading-relaxed mt-1">
                    {item.meaning}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#ECE4D8] flex justify-end">
                  <Link
                    href={`/sozluk?q=${encodeURIComponent(item.word.split(" ")[0])}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-burgundy-700 hover:text-burgundy-900"
                  >
                    <span>Lügatte İncele</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Reading Experience */
        <div className="manuscript-panel p-6 sm:p-10 bg-white border-2 border-[#E2D7C5] shadow-sm">
          {/* 1. SIDE BY SIDE MODE */}
          {viewMode === "side_by_side" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#ECE4D8]">
              {/* Left Column: Ottoman Arabic Script */}
              <div
                dir="rtl"
                className={`space-y-6 ${
                  arabicFont === "ruqaa" ? "font-ruqaa" : "font-arabic"
                }`}
                style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
              >
                <div className="border-b border-[#ECE4D8] pb-3 text-xs text-ink-400 font-sans text-right">
                  <span>Orijinal Metin (Arap Harfli İmla)</span>
                </div>
                {ottomanLines.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-burgundy-950 font-bold tracking-wide select-all hover:bg-gold-50/50 p-2 rounded transition-colors"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Right Column: Modern Turkish & Transliteration */}
              <div className="space-y-6 lg:pl-8 pt-6 lg:pt-0">
                <div className="border-b border-[#ECE4D8] pb-3 text-xs text-ink-400 font-sans">
                  <span>Transliterasyon ve Günümüz Türkçesi Şerhi</span>
                </div>
                {modernLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5 p-2 rounded hover:bg-stone-50 transition-colors"
                  >
                    {translitLines[idx] && (
                      <div className="font-serif italic text-burgundy-800 text-sm font-semibold">
                        {translitLines[idx]}
                      </div>
                    )}
                    <p className="font-editorial text-ink-800 text-[16px] leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. INTERLINEAR (SATIR SATIR) MODE */}
          {viewMode === "interlinear" && (
            <div className="space-y-8 divide-y divide-[#EAE2D5]">
              {ottomanLines.map((line, idx) => (
                <div key={idx} className="pt-6 first:pt-0 space-y-3">
                  {/* Arabic Original */}
                  <div
                    dir="rtl"
                    className={`text-burgundy-950 font-bold select-all ${
                      arabicFont === "ruqaa" ? "font-ruqaa" : "font-arabic"
                    }`}
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
                  >
                    {line}
                  </div>

                  {/* Transliteration */}
                  {translitLines[idx] && (
                    <div className="font-serif italic text-burgundy-800 text-sm font-semibold">
                      {translitLines[idx]}
                    </div>
                  )}

                  {/* Modern Meaning */}
                  {modernLines[idx] && (
                    <p className="font-editorial text-ink-800 text-base leading-relaxed bg-[#FAF8F5] p-3 rounded-lg border border-[#ECE4D8]">
                      {modernLines[idx]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 3. ORIGINAL ONLY (YAZMA ESER MODU) */}
          {viewMode === "original" && (
            <div className="max-w-3xl mx-auto py-6">
              <div
                dir="rtl"
                className={`space-y-8 text-center ${
                  arabicFont === "ruqaa" ? "font-ruqaa" : "font-arabic"
                }`}
                style={{ fontSize: `${fontSize + 4}px`, lineHeight: 2.0 }}
              >
                {ottomanLines.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-burgundy-950 font-bold select-all border-b border-dashed border-[#EAE2D5] pb-4"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
