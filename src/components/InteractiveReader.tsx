"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Columns2,
  Rows3,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Sparkles,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Image as ImageIcon,
  Compass,
  Feather,
  X,
  Share2,
  Check,
} from "lucide-react";

interface VocabularyItem {
  word: string;
  meaning: string;
  root?: string;
}

interface AnnotationItem {
  lineIndex: number;
  note: string;
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
    poeticMeter?: string | null;
    manuscriptImageUrl?: string | null;
    annotationsJson?: string | null;
    readTime: string;
    difficulty: string;
  };
}

export default function InteractiveReader({ text }: InteractiveReaderProps) {
  const [viewMode, setViewMode] = useState<
    "side_by_side" | "interlinear" | "original" | "facsimile"
  >("side_by_side");
  const [fontSize, setFontSize] = useState<number>(28);
  const [arabicFont, setArabicFont] = useState<"ruqaa" | "naskh">("ruqaa");
  const [activeTab, setActiveTab] = useState<"reader" | "vocabulary">("reader");

  // Selected word drawer/card
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Facsimile Zoom State
  const [facsimileZoom, setFacsimileZoom] = useState<number>(100);

  // Load saved words from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("lugat_saved_words");
      if (stored) {
        setSavedWords(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const toggleSaveWord = (wordStr: string) => {
    const cleanWord = wordStr.split(" ")[0].replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇâîûÂÎÛ]/g, "");
    let updated: string[];
    if (savedWords.includes(cleanWord)) {
      updated = savedWords.filter((w) => w !== cleanWord);
    } else {
      updated = [...savedWords, cleanWord];
    }
    setSavedWords(updated);
    try {
      localStorage.setItem("lugat_saved_words", JSON.stringify(updated));
    } catch {}
  };

  // Parse vocabulary list if exists
  const vocabList: VocabularyItem[] = text.vocabularyJson
    ? JSON.parse(text.vocabularyJson)
    : [];

  // Parse annotations if exists
  const annotations: AnnotationItem[] = text.annotationsJson
    ? JSON.parse(text.annotationsJson)
    : [];

  const annotationMap = new Map<number, string>();
  for (const a of annotations) {
    annotationMap.set(a.lineIndex, a.note);
  }

  // Split lines
  const ottomanLines = text.contentOttoman.split("\n").filter((l) => l.trim().length > 0);
  const translitLines = text.contentTranslit.split("\n").filter((l) => l.trim().length > 0);
  const modernLines = text.contentModern.split("\n").filter((l) => l.trim().length > 0);

  // Fallback manuscript image if none is provided
  const facsimileUrl =
    text.manuscriptImageUrl ||
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="space-y-6 relative">
      {/* Control Bar */}
      <div className="manuscript-panel p-3.5 sm:p-4 bg-white border border-[#E2D7C5] flex flex-wrap items-center justify-between gap-4 sticky top-16 z-20 shadow-xs">
        {/* View Mode Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-medium">
          <button
            onClick={() => setViewMode("side_by_side")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "side_by_side"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <Columns2 className="w-3.5 h-3.5 text-burgundy-700" />
            <span className="hidden md:inline">Karşılaştırmalı (Yan Yana)</span>
            <span className="md:hidden">Yan Yana</span>
          </button>

          <button
            onClick={() => setViewMode("interlinear")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "interlinear"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <Rows3 className="w-3.5 h-3.5 text-burgundy-700" />
            <span className="hidden md:inline">Satır Satır Şerh</span>
            <span className="md:hidden">Şerhli</span>
          </button>

          <button
            onClick={() => setViewMode("original")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "original"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-burgundy-700" />
            <span className="hidden md:inline">Orijinal Metin</span>
            <span className="md:hidden">Orijinal</span>
          </button>

          <button
            onClick={() => setViewMode("facsimile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              viewMode === "facsimile"
                ? "bg-white text-burgundy-900 shadow-xs font-semibold"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-burgundy-700" />
            <span className="hidden md:inline">Tıpkıbasım Nüsha</span>
            <span className="md:hidden">Tıpkıbasım</span>
          </button>
        </div>

        {/* Font Style & Size Controls */}
        <div className="flex items-center gap-3">
          {/* Hat Stili */}
          {viewMode !== "facsimile" && (
            <div className="hidden sm:flex items-center gap-1 text-xs">
              <span className="text-ink-400 mr-1">Hat:</span>
              <button
                onClick={() => setArabicFont("ruqaa")}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  arabicFont === "ruqaa"
                    ? "bg-burgundy-100 text-burgundy-900 font-semibold border border-burgundy-300"
                    : "bg-white text-ink-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                Rik'a (رقعة)
              </button>
              <button
                onClick={() => setArabicFont("naskh")}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  arabicFont === "naskh"
                    ? "bg-burgundy-100 text-burgundy-900 font-semibold border border-burgundy-300"
                    : "bg-white text-ink-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                Nesih (نسخ)
              </button>
            </div>
          )}

          {/* Yazı Boyutu */}
          {viewMode !== "facsimile" && (
            <div className="flex items-center gap-1 border-l border-stone-200 pl-3">
              <button
                onClick={() => setFontSize((s) => Math.max(s - 2, 20))}
                title="Yazıyı Küçült"
                className="p-1 rounded hover:bg-stone-100 text-ink-700"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs text-ink-500 font-mono w-5 text-center">
                {fontSize}
              </span>
              <button
                onClick={() => setFontSize((s) => Math.min(s + 2, 44))}
                title="Yazıyı Büyüt"
                className="p-1 rounded hover:bg-stone-100 text-ink-700"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          )}

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
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span>Kelime Tahlili ({vocabList.length})</span>
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
                Metinde Geçen Anahtar Kelimeler & İştikak Kökleri
              </h3>
              <p className="text-xs text-ink-500 mt-0.5">
                Metne tıklandığında veya listeden seçildiğinde anında lügat manasını ve kök ailesini inceler.
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
            {vocabList.map((item, idx) => {
              const cleanWord = item.word.split(" ")[0].replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇâîûÂÎÛ]/g, "");
              const isSaved = savedWords.includes(cleanWord);

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-2 flex flex-col justify-between hover:border-gold-400 transition-all shadow-2xs"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-heading font-bold text-base text-burgundy-900">
                        {item.word}
                      </span>
                      {item.root && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-mono font-medium">
                          Kök: {item.root}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-700 font-editorial leading-relaxed mt-1">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#ECE4D8] flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleSaveWord(item.word)}
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded transition-colors ${
                        isSaved
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-white text-ink-600 border border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <BookmarkCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Kelimelikte Kayıtlı</span>
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-3.5 h-3.5 text-ink-400" />
                          <span>Kelimeliğime Ekle</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/sozluk?q=${encodeURIComponent(cleanWord)}`}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-burgundy-700 hover:text-burgundy-900"
                      >
                        <span>Lügatte İncele</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
                <div className="border-b border-[#ECE4D8] pb-3 text-xs text-ink-400 font-sans text-right flex items-center justify-between">
                  <span className="text-[11px] text-gold-700 font-serif italic">
                    Kelime tahlili için kelimelere tıklayabilirsiniz
                  </span>
                  <span>Orijinal Metin (Arap Harfli İmla)</span>
                </div>
                {ottomanLines.map((line, idx) => (
                  <div key={idx} className="relative group">
                    <p className="text-burgundy-950 font-bold tracking-wide select-all hover:bg-gold-50/50 p-2.5 rounded-lg transition-colors cursor-pointer">
                      {line}
                    </p>
                    {annotationMap.has(idx) && (
                      <div className="mt-1 p-2 rounded bg-amber-50/80 border border-amber-200 text-xs font-sans text-amber-950 flex items-start gap-1.5">
                        <Feather className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{annotationMap.get(idx)}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column: Modern Turkish & Transliteration */}
              <div className="space-y-6 lg:pl-8 pt-6 lg:pt-0">
                <div className="border-b border-[#ECE4D8] pb-3 text-xs text-ink-400 font-sans flex items-center justify-between">
                  <span>Transliterasyon ve Günümüz Türkçesi Şerhi</span>
                  {text.poeticMeter && (
                    <span className="text-amber-800 text-[11px] font-serif italic">
                      Aruz: {text.poeticMeter}
                    </span>
                  )}
                </div>
                {modernLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5 p-2.5 rounded-lg hover:bg-stone-50 transition-colors"
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
                    <p className="font-editorial text-ink-800 text-base leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#ECE4D8]">
                      {modernLines[idx]}
                    </p>
                  )}

                  {/* Line Annotation */}
                  {annotationMap.has(idx) && (
                    <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                      <Feather className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{annotationMap.get(idx)}</span>
                    </div>
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

          {/* 4. FACSIMILE (TIPKIBASIM EL YAZMASI GÖRÜNÜMÜ) */}
          {viewMode === "facsimile" && (
            <div className="space-y-6">
              {/* Facsimile Toolbar */}
              <div className="p-3 bg-stone-50 rounded-xl border border-[#E0D5C3] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-ink-700">
                  <ImageIcon className="w-4 h-4 text-burgundy-700" />
                  <span className="font-bold">Orijinal Nüsha / Matbu Taş Baskı Sayfası</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFacsimileZoom((z) => Math.max(z - 15, 60))}
                    className="px-2.5 py-1 rounded bg-white border border-stone-200 hover:bg-stone-100"
                  >
                    - Küçült
                  </button>
                  <span className="font-mono text-ink-600">%{facsimileZoom}</span>
                  <button
                    onClick={() => setFacsimileZoom((z) => Math.min(z + 15, 180))}
                    className="px-2.5 py-1 rounded bg-white border border-stone-200 hover:bg-stone-100"
                  >
                    + Büyüt
                  </button>
                  <button
                    onClick={() => setFacsimileZoom(100)}
                    className="px-2.5 py-1 rounded bg-stone-200 hover:bg-stone-300 font-semibold"
                  >
                    Sıfırla
                  </button>
                </div>
              </div>

              {/* Grid: Image on Left / Text on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Manuscript Image */}
                <div className="rounded-2xl border-2 border-[#D8C7B0] overflow-hidden bg-stone-900/5 shadow-md p-2 flex items-center justify-center">
                  <div
                    className="transition-transform duration-200 ease-out origin-top"
                    style={{ transform: `scale(${facsimileZoom / 100})` }}
                  >
                    <img
                      src={facsimileUrl}
                      alt={text.title}
                      className="max-w-full h-auto rounded-lg shadow-sm object-contain"
                    />
                  </div>
                </div>

                {/* Parallel Transcript */}
                <div className="space-y-6 overflow-y-auto max-h-[700px] pr-2">
                  <div className="border-b border-[#ECE4D8] pb-2 text-xs font-bold text-burgundy-900">
                    <span>Nüsha Karşılaştırmalı Transkripsiyon</span>
                  </div>
                  {ottomanLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-2"
                    >
                      <div
                        dir="rtl"
                        className="font-ruqaa text-2xl text-burgundy-950 font-bold"
                      >
                        {line}
                      </div>
                      {translitLines[idx] && (
                        <div className="text-xs font-serif italic text-burgundy-800 font-semibold">
                          {translitLines[idx]}
                        </div>
                      )}
                      {modernLines[idx] && (
                        <p className="text-sm text-ink-700 font-editorial leading-relaxed pt-1 border-t border-[#ECE3D5]">
                          {modernLines[idx]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Word Click Card (Modal / Popover) */}
      {selectedWord && (
        <div className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-burgundy-700 max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-[#ECE3D5] pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700">
                  Metin İçi Kelime Tahlili
                </span>
                <h4 className="font-heading text-xl font-bold text-ink-900">
                  {selectedWord.word}
                </h4>
              </div>
              <button
                onClick={() => setSelectedWord(null)}
                className="p-1 rounded-full hover:bg-stone-100 text-ink-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {selectedWord.root && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-ink-500">İştikak Kökü:</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-burgundy-100 text-burgundy-900 border border-burgundy-200 font-mono font-bold">
                    {selectedWord.root}
                  </span>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5]">
                <span className="text-xs font-semibold text-ink-500 block mb-1">
                  Metindeki Anlamı:
                </span>
                <p className="text-sm font-editorial text-ink-900 leading-relaxed">
                  {selectedWord.meaning}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#ECE3D5] gap-2">
              <button
                onClick={() => toggleSaveWord(selectedWord.word)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-gold-50 text-gold-900 border border-gold-300 hover:bg-gold-100 transition-colors"
              >
                <Bookmark className="w-4 h-4 text-gold-700" />
                <span>
                  {savedWords.includes(
                    selectedWord.word.split(" ")[0].replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇâîûÂÎÛ]/g, "")
                  )
                    ? "Kelimelikte Kayıtlı"
                    : "Kelimeliğime Ekle"}
                </span>
              </button>

              <Link
                href={`/sozluk?q=${encodeURIComponent(
                  selectedWord.word.split(" ")[0].replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇâîûÂÎÛ]/g, "")
                )}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-burgundy-700 hover:bg-burgundy-800 text-white transition-colors shadow-xs"
              >
                <span>Lügatte İncele</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
