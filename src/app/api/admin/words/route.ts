import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";
    const status = searchParams.get("status") || "ALL";

    const words = await prisma.word.findMany({
      where: {
        AND: [
          status !== "ALL" ? { verificationStatus: status } : {},
          q
            ? {
                OR: [
                  { modernTurkish: { contains: q } },
                  { primaryOttoman: { contains: q } },
                  { transliteration: { contains: q } },
                  { slug: { contains: q } },
                ],
              }
            : {},
        ],
      },
      include: {
        meanings: true,
        spellings: true,
        rootRelations: { include: { root: true } },
        sourceRelations: { include: { source: true } },
      },
      orderBy: { updatedAt: "desc" },
      take: 100,
    });

    return NextResponse.json(words);
  } catch (error) {
    console.error("Admin words error:", error);
    return NextResponse.json({ error: "Kelimeler getirilemedi." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      modernTurkish,
      transliteration,
      primaryOttoman,
      origin,
      partOfSpeech,
      verificationStatus,
      modernEquivalents,
      definitions, // string array
      spellings, // array of { arabicScript, spellingType }
      rootId,
      morphPattern,
      morphType,
      morphContrib,
      sourceId,
      citation,
    } = body;

    if (!modernTurkish || !primaryOttoman) {
      return NextResponse.json(
        { error: "Modern Türkçe kelime ve Osmanlıca imla zorunludur." },
        { status: 400 }
      );
    }

    const slug =
      modernTurkish
        .toLowerCase()
        .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/g, "-")
        .replace(/^-|-$/g, "") +
      "-" +
      Math.floor(Math.random() * 1000);

    const word = await prisma.word.create({
      data: {
        slug,
        modernTurkish,
        transliteration: transliteration || modernTurkish,
        primaryOttoman,
        origin: origin || "Arapça",
        partOfSpeech: partOfSpeech || "İsim",
        verificationStatus: verificationStatus || "VERIFIED",
        modernEquivalents: modernEquivalents || modernTurkish,
        meanings: {
          create: (definitions || ["Tanım belirtilmedi."]).map((def: string, i: number) => ({
            orderIndex: i + 1,
            definition: def,
          })),
        },
        spellings: {
          create: (spellings || [{ arabicScript: primaryOttoman, spellingType: "Klasik İmla" }]).map(
            (sp: any) => ({
              arabicScript: sp.arabicScript,
              spellingType: sp.spellingType || "Klasik İmla",
            })
          ),
        },
      },
    });

    // Root relation
    if (rootId) {
      await prisma.wordRootRelation.create({
        data: {
          wordId: word.id,
          rootId,
          morphologicalPattern: morphPattern || "Mücerred Masdar",
          morphologicalType: morphType || "Masdar",
          meaningContribution: morphContrib || "Kök manasının vezne dökülmüş hali.",
        },
      });
    }

    // Source relation
    if (sourceId) {
      await prisma.wordSourceRelation.create({
        data: {
          wordId: word.id,
          sourceId,
          citation: citation || null,
        },
      });
    }

    return NextResponse.json(word, { status: 201 });
  } catch (error) {
    console.error("Create word error:", error);
    return NextResponse.json({ error: "Kelime kaydedilemedi." }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, modernTurkish, transliteration, primaryOttoman, origin, partOfSpeech, verificationStatus, modernEquivalents } = body;

    if (!id) {
      return NextResponse.json({ error: "Kelime ID gereklidir." }, { status: 400 });
    }

    const updated = await prisma.word.update({
      where: { id },
      data: {
        modernTurkish,
        transliteration,
        primaryOttoman,
        origin,
        partOfSpeech,
        verificationStatus,
        modernEquivalents,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update word error:", error);
    return NextResponse.json({ error: "Kelime güncellenemedi." }, { status: 500 });
  }
}
