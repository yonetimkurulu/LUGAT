import React from "react";
import { CheckCircle2, AlertCircle, HelpCircle, BookMarked } from "lucide-react";

interface VerificationBadgeProps {
  status: string;
  size?: "sm" | "md";
}

export default function VerificationBadge({
  status,
  size = "md",
}: VerificationBadgeProps) {
  const configs: Record<
    string,
    { label: string; color: string; icon: React.ElementType; title: string }
  > = {
    VERIFIED: {
      label: "Kaynakla doğrulanmış",
      color: "bg-emerald-50 text-emerald-800 border-emerald-300",
      icon: CheckCircle2,
      title: "Bu kelime Kâmûs-ı Türkî veya muteber Osmanlı lügatlerinde şahitli olarak doğrulanmıştır.",
    },
    EDITORIAL: {
      label: "Editoryal açıklama",
      color: "bg-amber-50 text-amber-800 border-amber-300",
      icon: BookMarked,
      title: "Bu madde etimolojik kaideler ve lügat heyeti notlarıyla şerhedilmiştir.",
    },
    APPROXIMATE: {
      label: "Yaklaşık karşılık",
      color: "bg-blue-50 text-blue-800 border-blue-300",
      icon: AlertCircle,
      title: "Modern Türkçe kavram ile tarihi kelime arasındaki mana tam örtüşmeyip yaklaşık mukabildir.",
    },
    PENDING: {
      label: "Doğrulama bekliyor",
      color: "bg-stone-100 text-stone-700 border-stone-300",
      icon: HelpCircle,
      title: "Bu madde yazma veya matbu nüshalardan doğrulanma sürecindedir.",
    },
  };

  const config = configs[status] || configs["PENDING"];
  const Icon = config.icon;

  const isSmall = size === "sm";

  return (
    <span
      title={config.title}
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${
        config.color
      } ${isSmall ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"}`}
    >
      <Icon className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
      <span>{config.label}</span>
    </span>
  );
}
