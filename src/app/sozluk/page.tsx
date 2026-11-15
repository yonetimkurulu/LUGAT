"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import VerificationBadge from "@/components/VerificationBadge";
import SaveWordButton from "@/components/SaveWordButton";
import {
  Search,
  Filter,
  GitFork,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Quote,
  X,
  Keyboard,
} from "lucide-react";
import { isArabicScript } from "@/lib/searchUtils";

function SozlukContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQ = searchParams.get("q") || "";
  const initialOrigin = searchParams.get("origin") || "ALL";
  const initialPos = searchParams.get("pos") || "ALL";
  const initialStatus = searchParams.get("status") || "ALL";

  const [query, setQuery] = useState(initialQ);
  const [origin, setOrigin] = useState(initialOrigin);
  const [pos, setPos] = useState(initialPos);
  const [status, setStatus] = useState(initialStatus);

  const [words, setWords] = useState<any[]>([]);
  const [matchingRoots, setMatchingRoots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedWordIds, setExpandedWordIds] = useState<Record<string, boolean>>({});
  const [showArabicKeyboard, setShowArabicKeyboard] = useState(false);

  // Arabic virtual keyboard keys
  const arabicKeys = [
    "ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ",
    "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض",
    "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "گ", "ڭ",
    "ل", "م", "ن", "و", "ه", "ي", "ء", "آ"
  ];

  // Fetch results whenever filters or query change
  useEffect(() => {
    let active = true;
    setLoading(true);

    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (origin !== "ALL") params.set("origin", origin);
    if (pos !== "ALL") params.set("pos", pos);
    if (status !== "ALL") params.set("status", status);

    fetch(`/api/search?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setWords(data.words || []);
        setMatchingRoots(data.matchingRoots || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search error:", err);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [query, origin, pos, status]);

  const toggleExpand = (id: string) => {
    setExpandedWordIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addArabicChar = (char: string) => {
    setQuery((prev) => prev + char);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-burgundy-700 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Kapsamlı Osmanlı Türkçesi Lügati</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Sözlük ve İştikak Araması
        </h1>
        <p className="text-sm text-ink-600 max-w-3xl leading-relaxed">
          Modern Türkçe kelimeler (örn: <em>Eleştiri</em>), Osmanlıca karşılıklar (örn: <em>Tenkid</em>),
          Arap harfli orijinal imlalar (örn: <em>تنقيد</em>) veya kökler (örn: <em>حكم</em>) ile arama yapın.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="space-y-3">
        <div className="relative">
          <div className="relative flex items-center bg-white rounded-2xl border-2 border-[#DFD5C4] focus-within:border-burgundy-700 focus-within:ring-2 focus-within:ring-burgundy-100 shadow-sm h-14 px-4">
            <Search className="w-5 h-5 text-ink-400 mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              dir={isArabicScript(query) ? "rtl" : "ltr"}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Modern Türkçe veya Osmanlıca kelime / imla girin..."
              className={`w-full bg-transparent text-ink-900 placeholder:text-ink-400 focus:outline-none ${
                isArabicScript(query) ? "font-arabic text-2xl font-bold" : "text-base font-medium"
              }`}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="p-1 rounded-full text-ink-400 hover:text-ink-700 hover:bg-stone-100 mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowArabicKeyboard(!showArabicKeyboard)}
              className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                showArabicKeyboard
                  ? "bg-gold-500 text-ink-950 border-gold-600 font-bold"
                  : "bg-[#FAF7F2] text-ink-700 border-[#DFD5C4] hover:bg-[#F2ECE1]"
              }`}
              title="Arap Harfli Sanal Klavye"
            >
              <Keyboard className="w-4 h-4" />
              <span className="hidden sm:inline">Arapça Klavye</span>
            </button>
          </div>
        </div>

        {/* Virtual Arabic Keyboard */}
        {showArabicKeyboard && (
          <div className="p-4 rounded-xl bg-[#F4EFE5] border border-[#DFCDB7] shadow-inner space-y-2">
            <div className="flex items-center justify-between text-xs text-ink-600 font-semibold mb-1">
              <span>Osmanlıca ve Arapça Harf Paleti:</span>
              <button
                onClick={() => setShowArabicKeyboard(false)}
                className="text-burgundy-700 hover:underline"
              >
                Kapat
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-end" dir="rtl">
              {arabicKeys.map((k) => (
                <button
                  key={k}
                  onClick={() => addArabicChar(k)}
                  className="w-9 h-9 rounded-lg bg-white border border-[#D5C6AD] hover:bg-burgundy-50 hover:border-burgundy-600 text-burgundy-900 font-arabic text-xl font-bold shadow-sm transition-all flex items-center justify-center"
                >
                  {k}
                </button>
              ))}
              <button
                onClick={() => setQuery((prev) => prev.slice(0, -1))}
                className="px-3 h-9 rounded-lg bg-stone-200 border border-stone-300 text-xs font-bold text-ink-800 hover:bg-stone-300 flex items-center justify-center"
              >
                Sil (⌫)
              </button>
            </div>
          </div>
        )}

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
          <div className="flex items-center gap-1.5 text-ink-500 font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtreler:</span>
          </div>

          {/* Origin filter */}
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#DFD5C4] text-ink-700 font-medium focus:outline-none focus:border-burgundy-600"
          >
            <option value="ALL">Tüm Kökenler</option>
            <option value="Arapça">Arapça Kökenli</option>
            <option value="Farsça">Farsça Kökenli</option>
            <option value="Türkçe">Türkçe Kökenli</option>
          </select>

          {/* Part of speech */}
          <select
            value={pos}
            onChange={(e) => setPos(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#DFD5C4] text-ink-700 font-medium focus:outline-none focus:border-burgundy-600"
          >
            <option value="ALL">Tüm Kelime Türleri</option>
            <option value="İsim">İsim</option>
            <option value="Sıfat">Sıfat</option>
            <option value="Fiil">Fiil</option>
            <option value="Zarf">Zarf</option>
          </select>

          {/* Verification Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#DFD5C4] text-ink-700 font-medium focus:outline-none focus:border-burgundy-600"
          >
            <option value="ALL">Tüm Doğrulama Durumları</option>
            <option value="VERIFIED">Kaynakla Doğrulanmış</option>
            <option value="EDITORIAL">Editoryal Açıklama</option>
            <option value="APPROXIMATE">Yaklaşık Karşılık</option>
            <option value="PENDING">Doğrulama Bekliyor</option>
          </select>

          {(origin !== "ALL" || pos !== "ALL" || status !== "ALL" || query) && (
            <button
              onClick={() => {
                setQuery("");
                setOrigin("ALL");
                setPos("ALL");
                setStatus("ALL");
              }}
              className="text-burgundy-700 hover:text-burgundy-900 font-semibold underline text-xs"
            >
              Filtreleri Sıfırla
            </button>
          )}

          <div className="ml-auto text-ink-500 font-medium">
            Toplam <strong>{words.length}</strong> kelime bulundu
          </div>
        </div>
      </div>

      {/* Matching Roots Banner if any */}
      {matchingRoots.length > 0 && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-burgundy-50 via-[#FAF4E8] to-[#FDFCF9] border border-gold-400/50 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-burgundy-900 uppercase tracking-wide">
            <GitFork className="w-4 h-4 text-burgundy-700" />
            <span>Doğrudan Kök Ailesi Bulundu</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
            {matchingRoots.map((r) => (
              <Link
                key={r.id}
                href={`/kokler/${r.slug}`}
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E0D5C3] hover:border-burgundy-600 hover:shadow-sm transition-all group"
              >
                <div>
                  <div className="font-serif font-bold text-sm text-ink-900 group-hover:text-burgundy-700">
                    Kök: {r.rootLettersModern}
                  </div>
                  <div className="text-xs text-ink-600 mt-0.5 line-clamp-1">
                    {r.primaryMeaning}
                  </div>
                </div>
                <div
                  dir="rtl"
                  className="font-arabic text-2xl font-bold text-burgundy-800"
                >
                  {r.rootLettersArabic}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Results List */}
      {loading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-burgundy-700 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-ink-500 font-medium font-serif">
            Lügat sahifeleri taranıyor...
          </p>
        </div>
      ) : words.length === 0 ? (
        <div className="manuscript-panel p-12 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-burgundy-50 text-burgundy-700 flex items-center justify-center mx-auto text-2xl font-serif">
            ؟
          </div>
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Aradığınız Kriterlere Uygun Madde Bulunamadı
          </h3>
          <p className="text-xs text-ink-600 leading-relaxed">
            "{query}" için doğrudan kayıt bulunamadı. Lütfen kelimenin kökünü,
            eş anlamlısını veya Latin / Osmanlıca alternatif imlasını deneyin.
          </p>
          <div className="pt-2">
            <Link
              href="/admin"
              className="text-xs font-semibold text-burgundy-700 hover:underline"
            >
              + Yönetim Panelinden Bu Kelimeyi Yeni Madde Olarak Ekle
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {words.map((w) => {
            const isExpanded = !!expandedWordIds[w.id];

            return (
              <div
                key={w.id}
                className="manuscript-panel p-6 hover:border-[#D5C6B1] transition-all"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Link
                        href={`/kelime/${w.slug}`}
                        className="font-serif text-2xl font-bold text-ink-900 hover:text-burgundy-700 transition-colors"
                      >
                        {w.modernTurkish}
                      </Link>
                      <span className="font-serif italic text-sm text-ink-500">
                        ({w.transliteration})
                      </span>
                      <VerificationBadge
                        status={w.verificationStatus}
                        size="sm"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-ink-600">
                      <span className="font-semibold text-ink-800">
                        {w.origin}
                      </span>
                      <span>•</span>
                      <span>{w.partOfSpeech}</span>
                      {w.modernEquivalents && (
                        <>
                          <span>•</span>
                          <span className="text-ink-500">
                            Modern karşılıklar:{" "}
                            <strong className="text-ink-700">
                              {w.modernEquivalents}
                            </strong>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Ottoman Script display & action */}
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div
                      dir="rtl"
                      className="font-arabic text-4xl sm:text-5xl font-bold text-burgundy-800 leading-tight"
                    >
                      {w.primaryOttoman}
                    </div>
                    <SaveWordButton
                      word={{
                        id: w.id,
                        slug: w.slug,
                        modernTurkish: w.modernTurkish,
                        primaryOttoman: w.primaryOttoman,
                        transliteration: w.transliteration,
                        origin: w.origin,
                        firstMeaning: w.meanings[0]?.definition,
                      }}
                      size="sm"
                    />
                  </div>
                </div>

                {/* Meanings */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE0] space-y-2">
                  {w.meanings
                    .slice(0, isExpanded ? undefined : 2)
                    .map((m: any, idx: number) => (
                      <div
                        key={m.id}
                        className="text-sm text-ink-800 flex items-start gap-2.5"
                      >
                        <span className="font-serif font-bold text-burgundy-700 shrink-0 mt-0.5">
                          {idx + 1}.
                        </span>
                        <div className="leading-relaxed">
                          {m.register && (
                            <span className="font-semibold text-xs text-ink-500 italic mr-1.5">
                              [{m.register}]
                            </span>
                          )}
                          <span>{m.definition}</span>
                        </div>
                      </div>
                    ))}

                  {w.meanings.length > 2 && !isExpanded && (
                    <button
                      onClick={() => toggleExpand(w.id)}
                      className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-900 inline-flex items-center gap-1 mt-1"
                    >
                      <span>+{w.meanings.length - 2} ilave tanımı göster</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Expanded Details: Root, Sources, Examples */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#EAE2D5] space-y-4 bg-[#FAF7F2] p-4 rounded-xl text-xs">
                    {/* Root & Bab */}
                    {w.rootRelations && w.rootRelations.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-semibold text-ink-800 uppercase tracking-wider text-[10px] block">
                          İştikak & Morfolojik Münasebet:
                        </span>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/kokler/${w.rootRelations[0].root.slug}`}
                            className="font-bold text-burgundy-700 hover:underline inline-flex items-center gap-1"
                          >
                            <GitFork className="w-3 h-3" />
                            <span>
                              {w.rootRelations[0].root.rootLettersModern} (
                              {w.rootRelations[0].root.rootLettersArabic}) Kökü
                            </span>
                          </Link>
                          <span>—</span>
                          <span className="font-medium text-gold-800">
                            {w.rootRelations[0].morphologicalPattern}
                          </span>
                        </div>
                        <p className="text-ink-600 mt-1">
                          {w.rootRelations[0].meaningContribution}
                        </p>
                      </div>
                    )}

                    {/* Citations & Sources */}
                    {w.sourceRelations && w.sourceRelations.length > 0 && (
                      <div className="space-y-1 pt-2 border-t border-[#EAE2D5]">
                        <span className="font-semibold text-ink-800 uppercase tracking-wider text-[10px] block">
                          Müracaat Edilen Kaynak:
                        </span>
                        <div className="text-ink-700">
                          <strong className="text-ink-900">
                            {w.sourceRelations[0].source.title}
                          </strong>{" "}
                          ({w.sourceRelations[0].source.author},{" "}
                          {w.sourceRelations[0].source.year})
                          {w.sourceRelations[0].citation && (
                            <p className="italic text-ink-600 mt-0.5">
                              "{w.sourceRelations[0].citation}"
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => toggleExpand(w.id)}
                      className="text-xs font-semibold text-ink-600 hover:text-ink-900 inline-flex items-center gap-1 pt-1"
                    >
                      <span>Ayrıntıları Daralt</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Footer Bar */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                  {w.rootRelations && w.rootRelations.length > 0 ? (
                    <Link
                      href={`/kokler/${w.rootRelations[0].root.slug}`}
                      className="text-gold-800 hover:text-gold-900 font-semibold inline-flex items-center gap-1"
                    >
                      <GitFork className="w-3 h-3" />
                      <span>
                        Kök Şeceresini İncele (
                        {w.rootRelations[0].root.rootLettersModern})
                      </span>
                    </Link>
                  ) : (
                    <span className="text-ink-400">Müstakil madde</span>
                  )}

                  <Link
                    href={`/kelime/${w.slug}`}
                    className="inline-flex items-center gap-1 text-burgundy-700 hover:text-burgundy-900 font-bold"
                  >
                    <span>Maddenin Tüm Sayfası</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SozlukPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-10 h-10 border-4 border-burgundy-700 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-3 text-sm text-ink-600 font-serif">Sözlük yükleniyor...</p>
        </div>
      }
    >
      <SozlukContent />
    </Suspense>
  );
}
