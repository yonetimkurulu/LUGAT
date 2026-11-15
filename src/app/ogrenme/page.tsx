"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  GitFork,
  ArrowRight,
  Bookmark,
  Trophy,
  Brain,
  Layers,
} from "lucide-react";
import {
  getSavedWords,
  updateWordLearnedStatus,
  SavedWordItem,
} from "@/lib/personalWords";

export default function OgrenmePage() {
  const [activeTab, setActiveTab] = useState<"quiz" | "reading" | "review">(
    "quiz"
  );
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Saved words for spaced repetition review
  const [savedWords, setSavedWords] = useState<SavedWordItem[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Quiz fetch error:", err);
        setLoading(false);
      });

    setSavedWords(getSavedWords());
  }, []);

  const currentQ = questions[currentIndex] || null;

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (currentQ && opt === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Filter reading questions for the reading tab
  const readingQuestions = questions.filter(
    (q) => q.type === "READING_SCRIPT" || q.targetScript
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <GraduationCap className="w-4 h-4 text-emerald-700" />
          <span>Talimhane — Kelime ve İmla Öğrenme Merkezi</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Osmanlı Türkçesi Talim ve İmtihanı
        </h1>
        <p className="text-sm text-ink-600 max-w-2xl leading-relaxed">
          Kelimelerin manasını kavrayın, matbu ve rik'a imlalarını okuyun,
          kök-müştak münasebetlerini çözün ve kaydettiğiniz kelimeleri aralıklı
          tekrar ile pekiştirin.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center p-1.5 bg-[#F0EAE1] rounded-xl border border-[#DFD5C4] max-w-lg mx-auto sm:mx-0">
        <button
          onClick={() => setActiveTab("quiz")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "quiz"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          Çoktan Seçmeli İmtihan
        </button>
        <button
          onClick={() => setActiveTab("reading")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "reading"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          İmla Okuma Talimi
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "review"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          Aralıklı Tekrar ({savedWords.length})
        </button>
      </div>

      {loading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-burgundy-700 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-ink-500 font-serif">
            Sorular ve talimler hazırlanıyor...
          </p>
        </div>
      ) : activeTab === "quiz" ? (
        /* Quiz Mode */
        quizFinished ? (
          <div className="manuscript-panel p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mx-auto border-2 border-gold-300">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-ink-900">
              İmtihan Tamamlandı!
            </h2>
            <div className="text-lg text-ink-700">
              Başarı Neticesi:{" "}
              <strong className="text-burgundy-800 font-serif text-2xl">
                {score} / {questions.length}
              </strong>
            </div>
            <p className="text-xs text-ink-600 max-w-md mx-auto">
              Tebrikler! Osmanlıca kelime hazinenizi ve iştikak şuurunuzu
              geliştirmeye devam edin.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleRestartQuiz}
                className="px-5 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-semibold text-xs flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tekrar Başla</span>
              </button>
              <Link
                href="/sozluk"
                className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] text-ink-800 border border-[#DFD5C4] font-semibold text-xs"
              >
                Sözlüğe Dön
              </Link>
            </div>
          </div>
        ) : currentQ ? (
          <div className="manuscript-panel p-6 sm:p-8 space-y-6">
            {/* Progress header */}
            <div className="flex items-center justify-between text-xs pb-4 border-b border-[#EAE3D6]">
              <span className="font-semibold text-ink-500">
                Soru {currentIndex + 1} / {questions.length}
              </span>
              <span className="font-bold text-burgundy-700">
                Skor: {score} Doğru
              </span>
            </div>

            {/* Target script display if reading/script */}
            {currentQ.targetScript && (
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-white border border-[#E2D8C9] text-center">
                <div
                  dir="rtl"
                  className="font-arabic text-6xl sm:text-7xl font-bold text-burgundy-800 tracking-wide"
                >
                  {currentQ.targetScript}
                </div>
                <span className="text-[11px] font-serif text-ink-400 uppercase tracking-widest block mt-2">
                  Osmanlıca Yazılışı
                </span>
              </div>
            )}

            {/* Prompt */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 leading-snug">
              {currentQ.prompt}
            </h3>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt: string, idx: number) => {
                const isSelected = selectedOption === opt;
                const isCorrect = isAnswered && opt === currentQ.correctAnswer;
                const isWrong = isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
                      isCorrect
                        ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold"
                        : isWrong
                        ? "bg-rose-50 border-rose-600 text-rose-950"
                        : isSelected
                        ? "border-burgundy-700 bg-burgundy-50"
                        : "border-[#E5DDD0] bg-white hover:border-gold-500 hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span className="text-sm font-medium leading-relaxed">
                      {opt}
                    </span>
                    {isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isWrong && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {isAnswered && (
              <div className="pt-4 border-t border-[#ECE3D5] space-y-4">
                <div className="p-4 rounded-xl bg-gold-50/60 border border-gold-300/80 text-xs text-ink-800 space-y-1">
                  <span className="font-bold text-gold-900 uppercase tracking-wider block">
                    İlmi İzah ve Lugavî Açıklama:
                  </span>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                  {currentQ.relatedWord && (
                    <div className="pt-2">
                      <Link
                        href={`/kelime/${currentQ.relatedWord.slug}`}
                        className="font-bold text-burgundy-700 hover:underline inline-flex items-center gap-1"
                      >
                        <span>
                          "{currentQ.relatedWord.modernTurkish}" Maddesini
                          İncele
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                  >
                    <span>
                      {currentIndex + 1 < questions.length
                        ? "Sonraki Soru"
                        : "Neticeyi Gör"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null
      ) : activeTab === "reading" ? (
        /* Reading script practice */
        <div className="space-y-6">
          <div className="manuscript-panel p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Eski Harfli Metin Okuma Egzersizi
            </h3>
            <p className="text-xs text-ink-600">
              Aşağıdaki Osmanlıca ibarelerin Latin okunuşlarını tahmin edin ve
              tıklayarak doğru telaffuzu doğrulayın.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {readingQuestions.map((rq, idx) => (
                <div
                  key={rq.id}
                  className="p-5 rounded-xl bg-white border border-[#E5DDD0] space-y-3"
                >
                  <div
                    dir="rtl"
                    className="font-arabic text-5xl font-bold text-burgundy-800 text-center py-3 bg-[#FAF7F2] rounded-lg"
                  >
                    {rq.targetScript}
                  </div>
                  <div className="text-xs font-medium text-ink-700">
                    {rq.prompt}
                  </div>
                  <details className="text-xs">
                    <summary className="font-bold text-burgundy-700 cursor-pointer hover:underline">
                      Doğru Okunuşu ve Manasını Göster
                    </summary>
                    <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                      <div className="font-bold text-ink-900">
                        {rq.correctAnswer}
                      </div>
                      <p className="text-ink-600 text-[11px]">
                        {rq.explanation}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Spaced Repetition Review */
        <div className="manuscript-panel p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#ECE3D5]">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink-900">
                Aralıklı Tekrar (Kelimelik İncelemesi)
              </h3>
              <p className="text-xs text-ink-600">
                Kaydettiğiniz kelimeleri hatırlama periyoduna göre gözden
                geçirin.
              </p>
            </div>
            <Link
              href="/kelimelik"
              className="text-xs font-semibold text-burgundy-700 hover:underline"
            >
              Kelimeliğe Git →
            </Link>
          </div>

          {savedWords.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <Bookmark className="w-10 h-10 text-ink-300 mx-auto" />
              <h4 className="font-serif text-base font-bold text-ink-800">
                Henüz Kayıtlı Kelimeniz Bulunmuyor
              </h4>
              <p className="text-xs text-ink-500 max-w-sm mx-auto">
                Sözlükte gezinirken ilginizi çeken kelimelerin yanındaki "Kaydet"
                butonuna basarak kelimeliğinize ekleyin.
              </p>
              <div className="pt-2">
                <Link
                  href="/sozluk"
                  className="px-4 py-2 rounded-lg bg-burgundy-700 text-white text-xs font-semibold"
                >
                  Sözlükte Kelime Keşfet
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {savedWords.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white border border-[#E5DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/kelime/${item.slug}`}
                        className="font-serif text-lg font-bold text-ink-900 hover:text-burgundy-700"
                      >
                        {item.modernTurkish}
                      </Link>
                      <span className="font-serif italic text-xs text-ink-500">
                        ({item.transliteration})
                      </span>
                      {item.learned ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                          Öğrenildi
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                          Tekrar Edilecek
                        </span>
                      )}
                    </div>
                    {item.firstMeaning && (
                      <p className="text-xs text-ink-600 line-clamp-1">
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

                    <button
                      onClick={() => {
                        updateWordLearnedStatus(item.slug, !item.learned);
                        setSavedWords(getSavedWords());
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        item.learned
                          ? "bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200"
                          : "bg-emerald-700 text-white border-emerald-800 hover:bg-emerald-800 shadow-sm"
                      }`}
                    >
                      {item.learned ? "Tekrara Al" : "Öğrendim ✓"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
