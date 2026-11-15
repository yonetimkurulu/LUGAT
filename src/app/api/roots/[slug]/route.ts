import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const root = await prisma.root.findUnique({
      where: { slug },
      include: {
        relations: {
          include: {
            word: {
              include: {
                meanings: { orderBy: { orderIndex: "asc" } },
                spellings: true,
                examples: true,
                sourceRelations: { include: { source: true } },
              },
            },
          },
          orderBy: { orderIndex: "asc" },
        },
      },
    });

    if (!root) {
      return NextResponse.json({ error: "Kök bulunamadı." }, { status: 404 });
    }

    // Organize tree nodes for visualization
    const groupedByType: Record<string, any[]> = {};
    for (const rel of root.relations) {
      const type = rel.morphologicalType || "Diğer Müştaklar";
      if (!groupedByType[type]) groupedByType[type] = [];
      groupedByType[type].push(rel);
    }

    return NextResponse.json({
      ...root,
      groupedByType,
    });
  } catch (error) {
    console.error("Root detail API error:", error);
    return NextResponse.json({ error: "Kök bilgisi getirilemedi." }, { status: 500 });
  }
}
