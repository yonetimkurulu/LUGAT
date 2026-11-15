import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import VerificationBadge from "@/components/VerificationBadge";
import SaveWordButton from "@/components/SaveWordButton";
import { ArrowLeft, Library, GitFork } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const collection = await prisma.vocabularyCollection.findUnique({
    where: { slug },
    include: {
      items: {
        include: {
          word: {
            include: {
              meanings: { orderBy: { orderIndex: "asc" } },
              rootRelations: { include: { root: true } },
            },
          },
        },
      },
    },
  });

  if (!collection) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <Link
          href="/koleksiyonlar"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-burgundy-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Koleksiyonlara Dön</span>
        </Link>
      </div>

      {/* Collection Header */}
      <div className="manuscript-panel p-8 bg-gradient-to-r from-[#242220] to-[#171615] text-[#FAF7F2] space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-gold-300">
            Muntazam Seçki
          </span>
          {collection.isFeatured && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-400/40 font-bold">
              Resmi Koleksiyon
            </span>
          )}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gold-100">
          {collection.title}
        </h1>
        <p className="text-sm text-stone-300 max-w-2xl leading-relaxed">
          {collection.description}
        </p>
        <div className="pt-2 text-xs text-stone-400 font-medium">
          Bu koleksiyonda {collection.items.length} kelime yer almaktadır.
        </div>
      </div>

      {/* Words list */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-bold text-ink-900">
          Koleksiyon Muhteviyatı
        </h3>

        {collection.items.length === 0 ? (
          <div className="manuscript-panel p-8 text-center text-xs text-ink-500">
            Bu koleksiyona henüz kelime eklenmemiştir.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collection.items.map(({ word }) => (
              <div
                key={word.id}
                className="manuscript-panel p-5 flex flex-col justify-between hover:border-[#D5C6B1] transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/kelime/${word.slug}`}
                          className="font-serif text-lg font-bold text-ink-900 hover:text-burgundy-700 transition-colors"
                        >
                          {word.modernTurkish}
                        </Link>
                        <VerificationBadge
                          status={word.verificationStatus}
                          size="sm"
                        />
                      </div>
                      <div className="text-xs text-ink-500 font-serif italic mt-0.5">
                        {word.transliteration}
                      </div>
                    </div>

                    <div
                      dir="rtl"
                      className="font-arabic text-3xl font-bold text-burgundy-800"
                    >
                      {word.primaryOttoman}
                    </div>
                  </div>

                  {word.meanings.length > 0 && (
                    <p className="text-xs text-ink-700 mt-2.5 line-clamp-2 leading-relaxed">
                      {word.meanings[0].definition}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                  {word.rootRelations.length > 0 ? (
                    <Link
                      href={`/kokler/${word.rootRelations[0].root.slug}`}
                      className="text-gold-800 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <GitFork className="w-3 h-3" />
                      <span>
                        Kök: {word.rootRelations[0].root.rootLettersModern}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-ink-400">{word.origin}</span>
                  )}

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
                      size="sm"
                    />
                    <Link
                      href={`/kelime/${word.slug}`}
                      className="text-burgundy-700 hover:text-burgundy-900 font-bold"
                    >
                      Aç →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
