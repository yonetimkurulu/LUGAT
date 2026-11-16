import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Safely fetch word data via findUnique so read queries never fail if DB write lock is held
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
            synonymWord: {
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
        targetSynonyms: {
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
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!word) {
      return NextResponse.json({ error: "Kelime bulunamadı." }, { status: 404 });
    }

    // Safely increment view count without blocking or risking read error
    prisma.word.update({
      where: { id: word.id },
      data: { viewCount: { increment: 1 } },
    }).catch(() => {});

    return NextResponse.json(word);
  } catch (error) {
    console.error("Word detail API error:", error);
    return NextResponse.json(
      { error: "Kelime detayı getirilemedi." },
      { status: 500 }
    );
  }
}
