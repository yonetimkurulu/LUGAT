import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
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
      return NextResponse.json({ error: "Kategori bulunamadı." }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Category detail API error:", error);
    return NextResponse.json(
      { error: "Kategori detayı getirilemedi." },
      { status: 500 }
    );
  }
}
