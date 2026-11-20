import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  isArabicScript,
  normalizeArabicScript,
  normalizeLatinText,
} from "@/lib/searchUtils";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";
    const origin = searchParams.get("origin")?.trim();
    const pos = searchParams.get("pos")?.trim();
    const status = searchParams.get("status")?.trim();
    const categorySlug = searchParams.get("category")?.trim();
    const limit = parseInt(searchParams.get("limit") || "30", 10);

    const isArabic = isArabicScript(q);
    const normalizedQ = isArabic ? normalizeArabicScript(q) : normalizeLatinText(q);

    // Fetch candidate words with relations
    const allWords = await prisma.word.findMany({
      where: {
        AND: [
          origin && origin !== "ALL" ? { origin } : {},
          pos && pos !== "ALL" ? { partOfSpeech: pos } : {},
          status && status !== "ALL" ? { verificationStatus: status } : {},
          categorySlug
            ? {
                categoryRelations: {
                  some: { category: { slug: categorySlug } },
                },
              }
            : {},
        ],
      },
      include: {
        spellings: true,
        meanings: { orderBy: { orderIndex: "asc" } },
        rootRelations: {
          include: {
            root: true,
          },
        },
        categoryRelations: {
          include: {
            category: true,
          },
        },
        sourceRelations: {
          include: {
            source: true,
          },
        },
      },
      orderBy: [{ isWordOfDay: "desc" }, { viewCount: "desc" }],
    });

    // Fetch candidate library texts
    const allLibraryTexts = await prisma.libraryText.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        titleOttoman: true,
        author: true,
        period: true,
        genre: true,
        summary: true,
        poeticMeter: true,
      },
    });

    // If query is empty, return initial prominent words
    if (!q) {
      return NextResponse.json({
        query: "",
        isArabic: false,
        total: allWords.length,
        words: allWords.slice(0, limit),
        matchingRoots: [],
        matchingLibraryTexts: [],
      });
    }

    // Filter words using flexible normalized matching
    const matchingWords = allWords.filter((w) => {
      if (isArabic) {
        // Arabic search: check primary Ottoman script or spellings
        const normPrimary = normalizeArabicScript(w.primaryOttoman);
        if (normPrimary.includes(normalizedQ)) return true;

        const spMatch = w.spellings.some((sp) =>
          normalizeArabicScript(sp.arabicScript).includes(normalizedQ)
        );
        if (spMatch) return true;

        // Also check if matches root letters in Arabic
        const rootMatch = w.rootRelations.some((rel) =>
          normalizeArabicScript(rel.root.rootLettersArabic).includes(normalizedQ)
        );
        if (rootMatch) return true;

        return false;
      } else {
        // Latin search: check modern Turkish, transliteration, equivalents, meanings, notes
        const normModern = normalizeLatinText(w.modernTurkish);
        if (normModern.includes(normalizedQ)) return true;

        const normTranslit = normalizeLatinText(w.transliteration);
        if (normTranslit.includes(normalizedQ)) return true;

        const normEquiv = normalizeLatinText(w.modernEquivalents);
        if (normEquiv.includes(normalizedQ)) return true;

        // Check meanings
        const meaningMatch = w.meanings.some((m) =>
          normalizeLatinText(m.definition).includes(normalizedQ)
        );
        if (meaningMatch) return true;

        // Check root letters modern
        const rootMatch = w.rootRelations.some((rel) =>
          normalizeLatinText(rel.root.rootLettersModern).includes(normalizedQ) ||
          normalizeLatinText(rel.root.primaryMeaning).includes(normalizedQ)
        );
        if (rootMatch) return true;

        return false;
      }
    });

    // Also search matching roots
    const allRoots = await prisma.root.findMany({
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
              },
            },
          },
        },
      },
    });

    const matchingRoots = allRoots.filter((r) => {
      if (isArabic) {
        return normalizeArabicScript(r.rootLettersArabic).includes(normalizedQ);
      } else {
        return (
          normalizeLatinText(r.rootLettersModern).includes(normalizedQ) ||
          normalizeLatinText(r.primaryMeaning).includes(normalizedQ) ||
          normalizeLatinText(r.slug).includes(normalizedQ)
        );
      }
    });

    // Match library texts
    const matchingLibraryTexts = allLibraryTexts.filter((t) => {
      if (isArabic) {
        return (
          normalizeArabicScript(t.titleOttoman).includes(normalizedQ) ||
          normalizeArabicScript(t.title).includes(normalizedQ)
        );
      } else {
        return (
          normalizeLatinText(t.title).includes(normalizedQ) ||
          normalizeLatinText(t.author).includes(normalizedQ) ||
          normalizeLatinText(t.genre).includes(normalizedQ) ||
          normalizeLatinText(t.summary).includes(normalizedQ) ||
          normalizeLatinText(t.slug).includes(normalizedQ) ||
          (t.poeticMeter && normalizeLatinText(t.poeticMeter).includes(normalizedQ))
        );
      }
    });

    return NextResponse.json({
      query: q,
      isArabic,
      total: matchingWords.length,
      words: matchingWords.slice(0, limit),
      matchingRoots: matchingRoots.slice(0, 5),
      matchingLibraryTexts: matchingLibraryTexts.slice(0, 5),
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Arama sırasında bir hata meydana geldi." },
      { status: 500 }
    );
  }
}
