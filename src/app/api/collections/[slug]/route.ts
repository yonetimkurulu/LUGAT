import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
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
      return NextResponse.json({ error: "Koleksiyon bulunamadı." }, { status: 404 });
    }

    return NextResponse.json(collection);
  } catch (error) {
    console.error("Collection detail error:", error);
    return NextResponse.json({ error: "Koleksiyon detayı getirilemedi." }, { status: 500 });
  }
}

// Add or remove word from collection
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { wordId, action, note } = body; // action: 'add' | 'remove'

    const collection = await prisma.vocabularyCollection.findUnique({
      where: { slug },
    });

    if (!collection) {
      return NextResponse.json({ error: "Koleksiyon bulunamadı." }, { status: 404 });
    }

    if (action === "remove") {
      await prisma.collectionItem.deleteMany({
        where: {
          collectionId: collection.id,
          wordId,
        },
      });
      return NextResponse.json({ success: true, message: "Kelime koleksiyondan çıkarıldı." });
    } else {
      const existing = await prisma.collectionItem.findUnique({
        where: {
          collectionId_wordId: {
            collectionId: collection.id,
            wordId,
          },
        },
      });

      if (!existing) {
        await prisma.collectionItem.create({
          data: {
            collectionId: collection.id,
            wordId,
            note: note || null,
          },
        });
      }
      return NextResponse.json({ success: true, message: "Kelime koleksiyona eklendi." });
    }
  } catch (error) {
    console.error("Collection word update error:", error);
    return NextResponse.json({ error: "İşlem gerçekleştirilemedi." }, { status: 500 });
  }
}
