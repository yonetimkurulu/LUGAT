import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";

    const roots = await prisma.root.findMany({
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
              },
            },
          },
          orderBy: { orderIndex: "asc" },
        },
      },
      orderBy: { rootLettersModern: "asc" },
    });

    if (q) {
      const filtered = roots.filter(
        (r) =>
          r.rootLettersModern.toLowerCase().includes(q.toLowerCase()) ||
          r.rootLettersArabic.includes(q) ||
          r.primaryMeaning.toLowerCase().includes(q.toLowerCase()) ||
          r.relations.some((rel) =>
            rel.word.modernTurkish.toLowerCase().includes(q.toLowerCase())
          )
      );
      return NextResponse.json(filtered);
    }

    return NextResponse.json(roots);
  } catch (error) {
    console.error("Roots API error:", error);
    return NextResponse.json({ error: "Kökler getirilemedi." }, { status: 500 });
  }
}
