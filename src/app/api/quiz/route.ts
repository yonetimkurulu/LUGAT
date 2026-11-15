import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const questions = await prisma.quizQuestion.findMany({
      include: {
        relatedWord: {
          select: {
            slug: true,
            modernTurkish: true,
            primaryOttoman: true,
          },
        },
      },
    });

    const parsed = questions.map((q) => ({
      ...q,
      options: typeof q.options === "string" ? JSON.parse(q.options) : q.options,
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Quiz API error:", error);
    return NextResponse.json({ error: "Sınav soruları getirilemedi." }, { status: 500 });
  }
}
