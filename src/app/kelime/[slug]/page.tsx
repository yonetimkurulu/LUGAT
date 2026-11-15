import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import VerificationBadge from "@/components/VerificationBadge";
import SaveWordButton from "@/components/SaveWordButton";
import RootBreadcrumb from "@/components/RootBreadcrumb";
import RootFamilyTree from "@/components/RootFamilyTree";
import {
  BookOpen,
  GitFork,
  Quote,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2,
  Library,
  Feather,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WordDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch word with all relations
  const word = await prisma.word.findUnique({
    where: { slug },
    include: {
      spellings: true,
      meanings: { orderBy: { orderIndex: "asc" } },
      examples: true,
      sourceRelations: {
        include: { source: true },
      },
      categoryRelations: {
        include: { category: true },
      },
      synonyms: {
        include: {
          synonymWord: true,
        },
      },
      targetSynonyms: {
        include: {
          word: true,
        },
      },
      rootRelations: {
        include: {
          root: {
            include: {
              relations: {
                include: {
                  word: {
                    select: {
                      id: true,
                      slug: true,
                      modernTurkish: true,
                      primaryOttoman: true,
                      transliteration: true,
                      partOfSpeech: true,
                      origin: true,
                      verificationStatus: true,
                      meanings: { take: 1 },
                    },
                  },
                },
                orderBy: { orderIndex: "asc" },
              },
            },
          },
        },
      },
    },
  });

  if (!word) {
    notFound();
  }

  // Primary root if exists
  const primaryRootRel = word.rootRelations[0] || null;
  const primaryRoot = primaryRootRel?.root || null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Linguistic Discovery Pathway Breadcrumb */}
      <RootBreadcrumb
        modernWord={word.modernTurkish}
        ottomanWord={word.primaryOttoman}
        rootLettersModern={primaryRoot?.rootLettersModern}
        rootLettersArabic={primaryRoot?.rootLettersArabic}
        rootSlug={primaryRoot?.slug}
      />

      {/* Main Manuscript Card */}
      <div className="manuscript-panel p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FAF7F2] border-2 border-[#E2D8C9]">
        {/* Subtle calligraphic watermark */}
        <div
          dir="rtl"
          aria-hidden="true"
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.035] font-arabic text-[14rem] sm:text-[20rem] text-burgundy-950 pointer-events-none select-none leading-none"
        >
          {word.primaryOttoman}
        </div>

        <div className="relative z-10 space-y-6">
          {/* Top badges & actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#ECE3D5]">
            <div className="flex flex-wrap items-center gap-2">
              <VerificationBadge status={word.verificationStatus} size="md" />
              {word.categoryRelations.map((cr) => (
                <Link
                  key={cr.category.id}
                  href={`/kategoriler/${cr.category.slug}`}
                  className="px-2.5 py-1 rounded-full bg-[#F4EFE5] hover:bg-gold-100 text-ink-700 text-xs font-medium border border-[#E0D5C3] transition-colors"
                >
                  {cr.category.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <SaveWordButton
                word={{
                  id: word.id,
                  slug: word.slug,
                  modernTurkish: word.modernTurkish,
                  primaryOttoman: word.primaryOttoman,
                  transliteration: word.transliteration,
                  origin: word.origin,
                  firstMeaning: word.meanings[0]?.definition,
                }}
                size="md"
              />
            </div>
          </div>

          {/* Primary Word Presentation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 tracking-tight">
                  {word.modernTurkish}
                </h1>
                <span className="text-sm px-2 py-0.5 rounded bg-stone-100 text-ink-600 font-medium">
                  {word.partOfSpeech}
                </span>
              </div>

              {/* Transliteration */}
              <div className="font-serif text-xl sm:text-2xl text-burgundy-700 italic font-semibold">
                {word.transliteration}
              </div>

              <div className="text-xs text-ink-500 flex flex-wrap items-center gap-3 pt-1">
                <span>
                  Menşei:{" "}
                  <strong className="text-ink-800">{word.origin}</strong>
                  {word.originDetail ? ` (${word.originDetail})` : ""}
                </span>
                {word.modernEquivalents && (
                  <>
                    <span>•</span>
                    <span>
                      Günümüz Dili:{" "}
                      <strong className="text-ink-800">
                        {word.modernEquivalents}
                      </strong>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Ottoman Arabic Script Calligraphy */}
            <div className="text-right">
              <div
                dir="rtl"
                className="font-arabic text-6xl sm:text-7xl font-bold text-burgundy-800 tracking-wide select-all"
              >
                {word.primaryOttoman}
              </div>
              <span className="text-[11px] text-ink-400 font-serif uppercase tracking-widest block mt-1">
                Klasik Matbu İmla
              </span>
            </div>
          </div>

          {/* Alternative Spellings if any */}
          {word.spellings.length > 1 && (
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5] flex flex-wrap items-center gap-4 text-xs">
              <span className="font-semibold text-ink-700">
                Tespit Edilen Diğer İmlalar:
              </span>
              {word.spellings.map((sp) => (
                <div
                  key={sp.id}
                  className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2D8C9]"
                >
                  <span
                    dir="rtl"
                    className="font-arabic text-xl font-bold text-burgundy-800"
                  >
                    {sp.arabicScript}
                  </span>
                  <span className="text-ink-600">({sp.spellingType})</span>
                  {sp.notes && (
                    <span className="text-[11px] text-ink-400 italic">
                      — {sp.notes}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Detailed Meanings */}
          <div className="space-y-4 pt-6 border-t border-[#ECE3D5]">
            <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-burgundy-700" />
              <span>Lügat Tarifleri ve Manaları</span>
            </h3>

            <div className="space-y-3">
              {word.meanings.map((m, idx) => (
                <div
                  key={m.id}
                  className="p-4 rounded-xl bg-white border border-[#EAE3D6] flex items-start gap-3 shadow-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-burgundy-50 text-burgundy-800 font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 border border-burgundy-200">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    {m.register && (
                      <span className="inline-block px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-serif italic text-xs font-semibold mr-2">
                        {m.register}
                      </span>
                    )}
                    <span className="text-base text-ink-800 leading-relaxed font-sans">
                      {m.definition}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Synonyms with Nuance Notes */}
          {word.synonyms.length > 0 && (
            <div className="space-y-3 pt-6 border-t border-[#ECE3D5]">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>Müradifler (Eş Anlamlılar) ve Anlam Nüansları</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {word.synonyms.map((syn) => (
                  <div
                    key={syn.id}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-ink-900">
                        {syn.synonymText}
                      </span>
                      {syn.synonymWord && (
                        <Link
                          href={`/kelime/${syn.synonymWord.slug}`}
                          className="text-xs text-burgundy-700 hover:underline font-semibold"
                        >
                          Maddesine Git →
                        </Link>
                      )}
                    </div>
                    {syn.nuanceNote && (
                      <p className="text-xs text-ink-600 leading-relaxed">
                        <strong className="text-ink-800 font-medium">
                          Nüans İzahı:{" "}
                        </strong>
                        {syn.nuanceNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Examples Sentences with Author Citations */}
          {word.examples.length > 0 && (
            <div className="space-y-3 pt-6 border-t border-[#ECE3D5]">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center gap-2">
                <Quote className="w-4 h-4 text-burgundy-700" />
                <span>Edebi Şahitler ve Metin Örnekleri</span>
              </h3>

              <div className="space-y-3">
                {word.examples.map((ex) => (
                  <div
                    key={ex.id}
                    className="p-5 rounded-xl bg-gradient-to-r from-[#FAF8F4] to-[#FDFCF9] border-l-4 border-l-burgundy-700 border border-[#EAE2D5] space-y-2 shadow-xs"
                  >
                    {/* Ottoman text if available */}
                    {ex.sentenceOttoman && (
                      <div
                        dir="rtl"
                        className="font-arabic text-xl sm:text-2xl text-burgundy-950 font-bold leading-relaxed pb-1 border-b border-[#F0E9DE]"
                      >
                        {ex.sentenceOttoman}
                      </div>
                    )}

                    {/* Modern Sentence */}
                    <p className="text-sm text-ink-800 italic font-serif leading-relaxed">
                      "{ex.sentenceModern}"
                    </p>

                    {/* Author & Work Citation */}
                    {(ex.author || ex.sourceWork) && (
                      <div className="flex items-center gap-2 text-xs text-ink-500 font-medium pt-1">
                        {ex.author && (
                          <span className="font-semibold text-ink-700">
                            — {ex.author}
                          </span>
                        )}
                        {ex.sourceWork && (
                          <span className="italic text-ink-600">
                            ({ex.sourceWork})
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Authoritative Sources */}
          {word.sourceRelations.length > 0 && (
            <div className="space-y-3 pt-6 border-t border-[#ECE3D5]">
              <h3 className="font-serif text-sm font-bold text-ink-900 uppercase tracking-wider flex items-center gap-2 text-stone-600">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Müracaat Edilen Muteber Kaynaklar</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {word.sourceRelations.map((sr) => (
                  <div
                    key={sr.id}
                    className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs space-y-1"
                  >
                    <div className="font-bold text-ink-900">
                      {sr.source.title} ({sr.source.year})
                    </div>
                    <div className="text-ink-600">
                      Müellif: {sr.source.author}
                      {sr.pageNumber ? ` • Sahife: ${sr.pageNumber}` : ""}
                    </div>
                    {sr.citation && (
                      <div className="italic text-ink-500 pt-1 border-t border-stone-200">
                        "{sr.citation}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Root & Family Tree Section */}
      {primaryRoot && (
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-burgundy-700 text-xs font-semibold uppercase tracking-wider">
                <GitFork className="w-4 h-4" />
                <span>Kök ve Müştaklar Ailesi</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
                {word.modernTurkish} Kelimesinin İştikak Ağacı
              </h3>
            </div>
            <Link
              href={`/kokler/${primaryRoot.slug}`}
              className="text-xs font-semibold text-burgundy-700 hover:text-burgundy-900 flex items-center gap-1"
            >
              <span>Müstakil Kök Sayfası</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <RootFamilyTree root={primaryRoot} highlightWordSlug={word.slug} />
        </div>
      )}

      {/* Bottom Practice CTA */}
      <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#DFD5C4] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-lg font-bold text-ink-900">
            Bu Kelimeyi ve İmlasını Pekiştirin
          </h4>
          <p className="text-xs text-ink-600">
            Talimhane modülünde bu kelime ve kök ailesine dair okuma ve anlam
            sınavlarına katılın.
          </p>
        </div>
        <Link
          href="/ogrenme"
          className="px-5 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-semibold text-xs transition-colors shrink-0 shadow-sm"
        >
          Talimhaneye Geç →
        </Link>
      </div>
    </div>
  );
}
