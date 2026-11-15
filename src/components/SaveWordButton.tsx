"use client";

import React, { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";
import { isWordSaved, toggleSaveWord } from "@/lib/personalWords";

interface SaveWordButtonProps {
  word: {
    id: string;
    slug: string;
    modernTurkish: string;
    primaryOttoman: string;
    transliteration: string;
    origin: string;
    firstMeaning?: string;
  };
  size?: "sm" | "md" | "lg";
}

export default function SaveWordButton({
  word,
  size = "md",
}: SaveWordButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isWordSaved(word.slug));
    const handleUpdate = () => setSaved(isWordSaved(word.slug));
    window.addEventListener("lugat_saved_words_changed", handleUpdate);
    return () => window.removeEventListener("lugat_saved_words_changed", handleUpdate);
  }, [word.slug]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleSaveWord(word);
    setSaved(newState);
  };

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-1.5 rounded-lg border transition-all ${
        saved
          ? "bg-burgundy-700 text-white border-burgundy-800 shadow-sm"
          : "bg-white text-ink-700 border-[#DFD6C8] hover:border-burgundy-600 hover:text-burgundy-800"
      } ${
        isSmall
          ? "px-2 py-1 text-[11px]"
          : isLarge
          ? "px-4 py-2.5 text-sm font-semibold"
          : "px-3 py-1.5 text-xs font-medium"
      }`}
      title={saved ? "Kelimelikten çıkar" : "Kelimeliğime kaydet"}
    >
      <Bookmark
        className={`${
          isSmall ? "w-3.5 h-3.5" : isLarge ? "w-4 h-4" : "w-4 h-4"
        } ${saved ? "fill-current" : ""}`}
      />
      <span>{saved ? "Kaydedildi" : "Kaydet"}</span>
    </button>
  );
}
