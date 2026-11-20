"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, X, ArrowRight, CornerDownLeft, BookOpen, GitFork } from "lucide-react";
import { isArabicScript } from "@/lib/searchUtils";

interface SearchBarProps {
  initialQuery?: string;
  placeholder?: string;
  autoFocus?: boolean;
  size?: "lg" | "md";
}

export default function SearchBar({
  initialQuery = "",
  placeholder = "Modern Türkçe, Osmanlıca imla veya kök arayın... (Örn: Eleştiri, Tenkid, تنقيد, حكم)",
  autoFocus = false,
  size = "lg",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [rootSuggestions, setRootSuggestions] = useState<any[]>([]);
  const [librarySuggestions, setLibrarySuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isArabic = isArabicScript(query);

  // Debounced autocomplete fetch
  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setSuggestions([]);
      setRootSuggestions([]);
      setLibrarySuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=6`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.words || []);
          setRootSuggestions(data.matchingRoots || []);
          setLibrarySuggestions(data.matchingLibraryTexts || []);
          setIsOpen(true);
        }
      } catch (err) {
        console.error("Autocomplete error:", err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    router.push(`/sozluk?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectWord = (slug: string) => {
    setIsOpen(false);
    router.push(`/kelime/${slug}`);
  };

  const handleSelectRoot = (slug: string) => {
    setIsOpen(false);
    router.push(`/kokler/${slug}`);
  };

  const handleSelectLibrary = (slug: string) => {
    setIsOpen(false);
    router.push(`/kutuphane/${slug}`);
  };

  const isLarge = size === "lg";

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`relative flex items-center bg-white rounded-2xl border-2 transition-all shadow-sm ${
            isArabic
              ? "border-gold-500/80 ring-2 ring-gold-200"
              : "border-[#DFD5C4] focus-within:border-burgundy-700 focus-within:ring-2 focus-within:ring-burgundy-100"
          } ${isLarge ? "h-16 px-4 sm:px-5" : "h-12 px-3 sm:px-4"}`}
        >
          {/* Left search icon */}
          <Search
            className={`text-ink-400 shrink-0 mr-3 ${
              isLarge ? "w-6 h-6" : "w-5 h-5"
            }`}
          />

          {/* Input */}
          <input
            type="text"
            dir={isArabic ? "rtl" : "ltr"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (suggestions.length > 0 || rootSuggestions.length > 0)
                setIsOpen(true);
            }}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={`w-full bg-transparent text-ink-900 placeholder:text-ink-400 focus:outline-none ${
              isArabic ? "font-arabic text-2xl font-bold" : "font-sans text-base sm:text-lg font-medium"
            }`}
          />

          {/* Right badges & actions */}
          <div className="flex items-center gap-2 shrink-0 ml-2">
            {isArabic && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-gold-100 text-gold-900 border border-gold-300">
                Osmanlıca İmla
              </span>
            )}

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSuggestions([]);
                }}
                className="p-1 rounded-full text-ink-400 hover:text-ink-700 hover:bg-stone-100 transition-colors"
                title="Temizle"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="submit"
              className={`rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium flex items-center justify-center transition-all ${
                isLarge
                  ? "h-10 px-4 text-sm font-semibold shadow-sm"
                  : "h-8 px-3 text-xs"
              }`}
            >
              <span className="hidden sm:inline">Ara</span>
              <ArrowRight className="w-4 h-4 sm:ml-1" />
            </button>
          </div>
        </div>
      </form>

      {/* Autocomplete dropdown */}
      {isOpen && (suggestions.length > 0 || rootSuggestions.length > 0 || librarySuggestions.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-[#E2D8C9] overflow-hidden z-50 divide-y divide-[#F2ECE1]">
          {/* Matching Roots Section */}
          {rootSuggestions.length > 0 && (
            <div className="p-3 bg-gradient-to-r from-burgundy-50/50 to-gold-50/30">
              <span className="text-[11px] font-semibold text-burgundy-800 uppercase tracking-wider block mb-2 px-1">
                Eşleşen Kök Şecereleri
              </span>
              <div className="flex flex-wrap gap-2">
                {rootSuggestions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleSelectRoot(r.slug)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E0D5C3] hover:border-burgundy-600 text-left transition-colors group"
                  >
                    <span
                      dir="rtl"
                      className="font-arabic text-base font-bold text-burgundy-800"
                    >
                      {r.rootLettersArabic}
                    </span>
                    <span className="font-serif font-bold text-xs text-ink-900">
                      {r.rootLettersModern}
                    </span>
                    <span className="text-[11px] text-ink-500 max-w-[140px] truncate">
                      ({r.primaryMeaning})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Library Texts Section */}
          {librarySuggestions.length > 0 && (
            <div className="p-2.5 bg-[#FAF7F0] border-b border-[#F0E8DC]">
              <span className="text-[11px] font-semibold text-gold-900 uppercase tracking-wider block mb-1.5 px-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-burgundy-700" />
                <span>Kütüphanede Eşleşen Eserler</span>
              </span>
              <div className="space-y-1">
                {librarySuggestions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectLibrary(item.slug)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors text-left group border border-transparent hover:border-[#E2D8C9]"
                  >
                    <div>
                      <div className="font-serif font-bold text-xs sm:text-sm text-ink-900 group-hover:text-burgundy-700">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-ink-500">
                        {item.author} • <span className="italic">{item.genre}</span>
                      </div>
                    </div>
                    <div
                      dir="rtl"
                      className="font-arabic text-lg font-bold text-burgundy-800 pl-2 shrink-0 hidden sm:block"
                    >
                      {item.titleOttoman}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Words Section */}
          {suggestions.length > 0 && (
            <div className="p-2 space-y-1">
              <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider block px-2 py-1">
                Kelimeler
              </span>
              {suggestions.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handleSelectWord(w.slug)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAF7F2] transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                      {w.modernTurkish}
                    </span>
                    <span className="text-xs text-ink-500 font-serif italic">
                      {w.transliteration}
                    </span>
                    {w.meanings && w.meanings.length > 0 && (
                      <span className="text-xs text-ink-600 max-w-xs truncate hidden sm:inline">
                        — {w.meanings[0].definition}
                      </span>
                    )}
                  </div>
                  <div
                    dir="rtl"
                    className="font-arabic text-xl font-bold text-burgundy-800 pl-2 shrink-0"
                  >
                    {w.primaryOttoman}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Full Search Link */}
          <div className="p-2.5 bg-[#FAF7F2] text-center">
            <button
              onClick={handleSubmit}
              className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-900 inline-flex items-center gap-1.5"
            >
              <span>"{query}" için tüm sonuçları gör</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
