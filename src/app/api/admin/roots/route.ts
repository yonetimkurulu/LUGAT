import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rootLettersModern, rootLettersArabic, origin, primaryMeaning, description } = body;

    if (!rootLettersModern || !rootLettersArabic) {
      return NextResponse.json(
        { error: "Kök harfleri (Latin ve Arapça) zorunludur." },
        { status: 400 }
      );
    }

    const slug = rootLettersModern.toLowerCase().replace(/[^a-z0-9]/g, "");

    const root = await prisma.root.create({
      data: {
        slug: slug || "kok-" + Date.now().toString(36),
        rootLettersModern,
        rootLettersArabic,
        origin: origin || "Arapça",
        primaryMeaning: primaryMeaning || "Asıl kök manası",
        description: description || null,
      },
    });

    return NextResponse.json(root, { status: 201 });
  } catch (error) {
    console.error("Create root error:", error);
    return NextResponse.json({ error: "Kök oluşturulamadı." }, { status: 500 });
  }
}
