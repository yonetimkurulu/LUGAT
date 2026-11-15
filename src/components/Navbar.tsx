"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  GitFork,
  LayoutGrid,
  Bookmark,
  GraduationCap,
  Settings,
  Search,
  Menu,
  X,
  Library,
} from "lucide-react";
import { getSavedWords } from "@/lib/personalWords";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setSavedCount(getSavedWords().length);
    };
    updateCount();
    window.addEventListener("lugat_saved_words_changed", updateCount);
    return () => window.removeEventListener("lugat_saved_words_changed", updateCount);
  }, []);

  const navLinks = [
    { href: "/sozluk", label: "Sözlük", icon: Search },
    { href: "/kokler", label: "Kök Gezgini", icon: GitFork, badge: "Önemli" },
    { href: "/kategoriler", label: "Kategoriler", icon: LayoutGrid },
    { href: "/koleksiyonlar", label: "Koleksiyonlar", icon: Library },
    { href: "/ogrenme", label: "Talimhane", icon: GraduationCap },
    {
      href: "/kelimelik",
      label: "Kelimeliğim",
      icon: Bookmark,
      count: savedCount,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-burgundy-700 text-[#FAF7F2] flex items-center justify-center font-ruqaa text-2xl font-bold shadow-sm border border-gold-500/30 group-hover:bg-burgundy-800 transition-colors">
              ل
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold tracking-wider text-ink-900">
                  LÜGAT
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-gold-100 text-gold-800 border border-gold-300 font-sans font-medium">
                  Osmanlıca
                </span>
              </div>
              <span className="text-[10px] font-medium text-ink-500 uppercase tracking-widest font-sans">
                Dijital Sözlük & Kök Sistemi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-burgundy-50 text-burgundy-800 border border-burgundy-200 shadow-sm"
                      : "text-ink-700 hover:text-burgundy-700 hover:bg-[#F2ECE1]"
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-burgundy-700 text-white px-1.5 py-0.2 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                  {item.count !== undefined && item.count > 0 && (
                    <span className="text-[10px] bg-gold-500 text-white px-1.5 py-0.2 rounded-full font-bold">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="h-5 w-px bg-[#E2DACB] mx-1" />

            {/* Admin button */}
            <Link
              href="/admin"
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-md text-xs font-medium transition-all ${
                pathname.startsWith("/admin")
                  ? "bg-ink-800 text-white"
                  : "text-ink-600 hover:text-ink-900 hover:bg-[#EFE8DC]"
              }`}
              title="Yönetim Paneli"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Yönetim</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/kelimelik"
              className="relative p-2 rounded-md text-ink-700 hover:bg-[#F2ECE1]"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-burgundy-700 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-ink-700 hover:bg-[#F2ECE1]"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E1D5] bg-[#FAF7F2] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "bg-burgundy-50 text-burgundy-800 font-semibold border border-burgundy-200"
                    : "text-ink-700 hover:bg-[#F2ECE1]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-burgundy-700" />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && item.count > 0 && (
                  <span className="text-xs bg-gold-500 text-white px-2 py-0.5 rounded-full font-bold">
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[#E8E1D5]">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-ink-600 hover:text-ink-900"
            >
              <Settings className="w-4 h-4" />
              <span>Yönetim ve Sözlük Editörü</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
