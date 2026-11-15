import React from "react";
import Link from "next/link";
import { BookOpen, ShieldCheck, GitFork, Feather } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3EDE2] border-t border-[#E5DDCF] mt-24 text-ink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-burgundy-700 text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-bold">
                ل
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-ink-900">
                LÜGAT
              </span>
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">
              Kelimelerin köklerine inen, Osmanlı Türkçesi hazinesini iştikak,
              imla ve kaynaklarıyla tahlil eden dijital lügat ve öğrenme
              platformu.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-ink-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-burgundy-700" />
              <span>Doğrulanmış Muteber Kaynaklar</span>
            </div>
          </div>

          {/* Column 2: Muteber Kaynaklar */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-ink-900 tracking-wide uppercase">
              Müracaat Kaynakları
            </h4>
            <ul className="text-xs space-y-2 text-ink-600">
              <li>
                <span className="font-medium text-ink-800">Kâmûs-ı Türkî</span>{" "}
                — Şemseddin Sâmi (1900)
              </li>
              <li>
                <span className="font-medium text-ink-800">Lugat-ı Nâcî</span> —
                Muallim Nâci (1891)
              </li>
              <li>
                <span className="font-medium text-ink-800">
                  Osmanlıca-Türkçe Lûgat
                </span>{" "}
                — Ferit Devellioğlu
              </li>
              <li>
                <span className="font-medium text-ink-800">
                  Misalli Büyük Sözlük
                </span>{" "}
                — Kubbealtı Lugatı
              </li>
              <li>
                <span className="font-medium text-ink-800">Lehçe-i Osmânî</span>{" "}
                — Ahmet Vefik Paşa (1876)
              </li>
            </ul>
          </div>

          {/* Column 3: Hızlı Keşif */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-ink-900 tracking-wide uppercase">
              Hızlı Keşif
            </h4>
            <ul className="text-xs space-y-2 text-ink-600">
              <li>
                <Link
                  href="/sozluk?q=eleştiri"
                  className="hover:text-burgundy-700 transition-colors"
                >
                  Modern Kelime: Eleştiri → Tenkit
                </Link>
              </li>
              <li>
                <Link
                  href="/kokler/hkm"
                  className="hover:text-burgundy-700 transition-colors"
                >
                  Merkezi Kök: H-K-M (ح-ك-م) Ailesi
                </Link>
              </li>
              <li>
                <Link
                  href="/kokler/ktb"
                  className="hover:text-burgundy-700 transition-colors"
                >
                  Kitabet Kökü: K-T-B (ك-ت-ب) Ağacı
                </Link>
              </li>
              <li>
                <Link
                  href="/ogrenme"
                  className="hover:text-burgundy-700 transition-colors"
                >
                  Osmanlıca İmla ve Okuma Talimi
                </Link>
              </li>
              <li>
                <Link
                  href="/koleksiyonlar/osmanlica-temel-hukuk"
                  className="hover:text-burgundy-700 transition-colors"
                >
                  Mecelle ve Osmanlı Hukuk Terimleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: İlim ve Metodoloji */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-ink-900 tracking-wide uppercase">
              Metodoloji ve Güven
            </h4>
            <p className="text-xs text-ink-600 leading-relaxed">
              LÜGAT’ta yer alan her kelime, salt yapay zekâ tahmini değil;
              metinlerde şahitli, vezin ve bâb kaidelerine riayet eden otantik
              verilerle sunulur. Doğrulama derecesi her maddede şeffafça
              belirtilir.
            </p>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 text-xs text-burgundy-700 hover:text-burgundy-800 font-semibold"
              >
                <span>Sözlük İdare ve Veri Girişi</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5DDCF] flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-4">
          <p>© {new Date().getFullYear()} LÜGAT — Osmanlı Türkçesi Dijital Sözlük ve Öğrenme Platformu.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>UTF-8 Arap Harfli Metin Desteği</span>
            <span>•</span>
            <span>İştikak & Kök Haritası</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
