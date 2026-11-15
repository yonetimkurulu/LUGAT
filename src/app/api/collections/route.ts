import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const collections = await prisma.vocabularyCollection.findMany({
      include: {
        _count: {
          select: { items: true },
        },
        items: {
          take: 4,
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
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(collections);
  } catch (error) {
    console.error("Collections API error:", error);
    return NextResponse.json({ error: "Koleksiyonlar getirilemedi." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (!title) {
      return NextResponse.json({ error: "Koleksiyon başlığı gereklidir." }, { status: 400 });
    }

    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/g, "-")
        .replace(/^-|-$/g, "") +
      "-" +
      Date.now().toString(36);

    const newCollection = await prisma.vocabularyCollection.create({
      data: {
        slug,
        title,
        description: description || "Kullanıcı özel lügat koleksiyonu",
        isFeatured: false,
      },
    });

    return NextResponse.json(newCollection, { status: 201 });
  } catch (error) {
    console.error("Create collection error:", error);
    return NextResponse.json({ error: "Koleksiyon oluşturulamadı." }, { status: 500 });
  }
}
