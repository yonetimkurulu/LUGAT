import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { format, data } = body; // format: 'json' | 'csv', data: string or array

    let wordsToImport: any[] = [];

    if (format === "csv") {
      // Parse CSV: headers: modernTurkish,primaryOttoman,transliteration,origin,partOfSpeech,meaning,verificationStatus
      const lines = (data as string).split("\n").filter((l) => l.trim().length > 0);
      if (lines.length <= 1) {
        return NextResponse.json({ error: "CSV verisi boş veya geçersiz." }, { status: 400 });
      }

      const headers = lines[0].split(",").map((h) => h.trim());
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",").map((c) => c.trim().replace(/^["']|["']$/g, ""));
        if (cols.length >= 2) {
          wordsToImport.push({
            modernTurkish: cols[0],
            primaryOttoman: cols[1],
            transliteration: cols[2] || cols[0],
            origin: cols[3] || "Arapça",
            partOfSpeech: cols[4] || "İsim",
            definition: cols[5] || "Tanım girilmedi",
            verificationStatus: cols[6] || "PENDING",
          });
        }
      }
    } else {
      // JSON format
      wordsToImport = Array.isArray(data) ? data : JSON.parse(data);
    }

    let importedCount = 0;
    for (const item of wordsToImport) {
      if (!item.modernTurkish || !item.primaryOttoman) continue;

      const slug =
        item.modernTurkish
          .toLowerCase()
          .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/g, "-")
          .replace(/^-|-$/g, "") +
        "-" +
        Math.floor(Math.random() * 10000);

      const word = await prisma.word.create({
        data: {
          slug,
          modernTurkish: item.modernTurkish,
          transliteration: item.transliteration || item.modernTurkish,
          primaryOttoman: item.primaryOttoman,
          origin: item.origin || "Arapça",
          partOfSpeech: item.partOfSpeech || "İsim",
          verificationStatus: item.verificationStatus || "PENDING",
          modernEquivalents: item.modernEquivalents || item.modernTurkish,
          meanings: {
            create: [
              {
                orderIndex: 1,
                definition: item.definition || item.meaning || "Tanım girilmedi.",
              },
            ],
          },
          spellings: {
            create: [
              {
                arabicScript: item.primaryOttoman,
                spellingType: "Klasik İmla",
              },
            ],
          },
        },
      });

      importedCount++;
    }

    return NextResponse.json({
      success: true,
      importedCount,
      message: `${importedCount} adet kelime başarıyla içe aktarıldı.`,
    });
  } catch (error) {
    console.error("Import error:", error);
    return NextResponse.json({ error: "İçe aktarma sırasında hata oluştu." }, { status: 500 });
  }
}
