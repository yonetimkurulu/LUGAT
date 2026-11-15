import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import VerificationBadge from "@/components/VerificationBadge";
import SaveWordButton from "@/components/SaveWordButton";
import { ArrowLeft, ArrowRight, LayoutGrid, GitFork } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      relations: {
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

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <Link
          href="/kategoriler"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-burgundy-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Kategorilere Dön</span>
        </Link>
      </div>

      {/* Category banner */}
      <div className="manuscript-panel p-8 bg-gradient-to-r from-burgundy-900 to-[#4A1420] text-white space-y-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-gold-300">
          Istılah Sahası
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gold-100">
          {category.name}
        </h1>
        <p className="text-sm text-stone-200 max-w-2xl leading-relaxed">
          {category.description}
        </p>
        <div className="pt-2 text-xs text-gold-300/80 font-medium">
          Bu sahada kayıtlı {category.relations.length} doğrulanmış kavram
          bulunmaktadır.
        </div>
      </div>

      {/* Words in category */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-bold text-ink-900">
          {category.name} Istılahları ve Maddeleri
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.relations.map(({ word }) => (
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
      </div>
    </div>
  );
}
