"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  Clock,
  Trash2,
  GraduationCap,
  Download,
  Search,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import {
  getSavedWords,
  updateWordLearnedStatus,
  toggleSaveWord,
  SavedWordItem,
} from "@/lib/personalWords";

export default function KelimelikPage() {
  const [words, setWords] = useState<SavedWordItem[]>([]);
  const [filter, setFilter] = useState<"ALL" | "LEARNED" | "UNLEARNED">("ALL");
  const [searchQ, setSearchQ] = useState("");

  const refreshWords = () => {
    setWords(getSavedWords());
  };

  useEffect(() => {
    refreshWords();
    window.addEventListener("lugat_saved_words_changed", refreshWords);
    return () => window.removeEventListener("lugat_saved_words_changed", refreshWords);
  }, []);

  const totalSaved = words.length;
  const learnedCount = words.filter((w) => w.learned).length;
  const unlearnedCount = totalSaved - learnedCount;

  const filteredWords = words.filter((w) => {
    if (filter === "LEARNED" && !w.learned) return false;
    if (filter === "UNLEARNED" && w.learned) return false;
    if (searchQ.trim()) {
      const q = searchQ.toLowerCase();
      const matchMod = w.modernTurkish.toLowerCase().includes(q);
      const matchTrans = w.transliteration.toLowerCase().includes(q);
      const matchOtt = w.primaryOttoman.includes(q);
      if (!matchMod && !matchTrans && !matchOtt) return false;
    }
    return true;
  });

  const handleExportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(words, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "lugat_kelimeligim.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E1D5]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-burgundy-700 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            <span>Şahsi Hafıza Defteri</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
            Kelimeliğim ve Çalışma Listem
          </h1>
          <p className="text-sm text-ink-600">
            Sözlükte keşfettiğiniz ve hıfzetmek istediğiniz kelimeleri buradan
            takip edin.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {totalSaved > 0 && (
            <>
              <button
                onClick={handleExportJSON}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#DFD5C4] hover:bg-[#F2ECE1] text-xs font-semibold text-ink-700 flex items-center gap-1.5 transition-colors"
                title="JSON Olarak Dışa Aktar"
              >
                <Download className="w-3.5 h-3.5" />
                <span>İndir</span>
              </button>

              <Link
                href="/ogrenme"
                className="px-4 py-2 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Talim Yap</span>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-3 gap-4">
        <div className="manuscript-panel p-4 text-center">
          <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
            Toplam Kayıt
          </span>
          <div className="font-serif text-2xl font-bold text-ink-900 mt-1">
            {totalSaved}
          </div>
        </div>

        <div className="manuscript-panel p-4 text-center bg-emerald-50/40 border-emerald-200">
          <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
            Öğrenildi
          </span>
          <div className="font-serif text-2xl font-bold text-emerald-900 mt-1">
            {learnedCount}
          </div>
        </div>

        <div className="manuscript-panel p-4 text-center bg-amber-50/40 border-amber-200">
          <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
            Tekrar Bekleyen
          </span>
          <div className="font-serif text-2xl font-bold text-amber-900 mt-1">
            {unlearnedCount}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center p-1 bg-[#F0EAE1] rounded-xl border border-[#DFD5C4]">
          <button
            onClick={() => setFilter("ALL")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === "ALL"
                ? "bg-white text-burgundy-800 shadow-sm"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            Tümü ({totalSaved})
          </button>
          <button
            onClick={() => setFilter("UNLEARNED")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === "UNLEARNED"
                ? "bg-white text-burgundy-800 shadow-sm"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            Tekrar Bekleyenler ({unlearnedCount})
          </button>
          <button
            onClick={() => setFilter("LEARNED")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === "LEARNED"
                ? "bg-white text-burgundy-800 shadow-sm"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            Öğrenilenler ({learnedCount})
          </button>
        </div>

        {totalSaved > 0 && (
          <div className="relative">
            <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Kayıtlılar içinde ara..."
              className="pl-9 pr-3 py-1.5 rounded-xl bg-white border border-[#DFD5C4] text-xs font-medium focus:outline-none focus:border-burgundy-600 w-full sm:w-56"
            />
          </div>
        )}
      </div>

      {/* Words List */}
      {filteredWords.length === 0 ? (
        <div className="manuscript-panel p-12 text-center space-y-4">
          <Bookmark className="w-12 h-12 text-ink-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-ink-800">
            {totalSaved === 0
              ? "Kelimeliğinizde Henüz Kelime Bulunmuyor"
              : "Bu Kriterde Kelime Bulunamadı"}
          </h3>
          <p className="text-xs text-ink-500 max-w-sm mx-auto">
            {totalSaved === 0
              ? "Sözlükte dolaşırken beğendiğiniz kelimelerin yanındaki kaydet simgesine tıklayarak buraya ekleyebilirsiniz."
              : "Arama filtresini temizlemeyi deneyin."}
          </p>
          {totalSaved === 0 && (
            <div className="pt-2">
              <Link
                href="/sozluk"
                className="px-5 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Sözlüğü Aç</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredWords.map((item) => (
            <div
              key={item.id}
              className="manuscript-panel p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D5C6B1] transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/kelime/${item.slug}`}
                    className="font-serif text-xl font-bold text-ink-900 hover:text-burgundy-700 transition-colors"
                  >
                    {item.modernTurkish}
                  </Link>
                  <span className="font-serif italic text-sm text-ink-500">
                    ({item.transliteration})
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                    {item.origin}
                  </span>
                </div>

                {item.firstMeaning && (
                  <p className="text-xs text-ink-600 line-clamp-1 max-w-xl">
                    {item.firstMeaning}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div
                  dir="rtl"
                  className="font-arabic text-3xl font-bold text-burgundy-800"
                >
                  {item.primaryOttoman}
                </div>

                {/* Learned Toggle */}
                <button
                  onClick={() => {
                    updateWordLearnedStatus(item.slug, !item.learned);
                    refreshWords();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    item.learned
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                      : "bg-[#FAF7F2] text-ink-700 border-[#DFD5C4] hover:bg-[#F2ECE1]"
                  }`}
                >
                  {item.learned ? "Öğrenildi ✓" : "Öğrenildi Olarak İşaretle"}
                </button>

                {/* Remove */}
                <button
                  onClick={() => {
                    toggleSaveWord({
                      id: item.id,
                      slug: item.slug,
                      modernTurkish: item.modernTurkish,
                      primaryOttoman: item.primaryOttoman,
                      transliteration: item.transliteration,
                      origin: item.origin,
                    });
                    refreshWords();
                  }}
                  className="p-1.5 rounded-lg text-ink-400 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                  title="Listeden Kaldır"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
