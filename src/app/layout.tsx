import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LÜGAT — Osmanlı Türkçesi Dijital Sözlük ve Kök Sistemi",
  description:
    "Kelimelerin köklerine in, geçmişin dilini keşfet. Modern Türkçe ile Osmanlı Türkçesi kelimeleri, Arap harfli imlaları, iştikak kökleri ve muteber kaynaklarıyla birbirine bağlayan dijital lügat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-burgundy-100 selection:text-burgundy-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
