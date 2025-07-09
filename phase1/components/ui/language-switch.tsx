"use client";

import { Globe } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

export const LanguageSwitch = () => {
  const { locale, switchLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <select
        value={locale}
        onChange={(e) => switchLanguage(e.target.value as "en" | "ja")}
        className="bg-transparent border-none text-sm text-gray-400 focus:outline-none cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="ja">JP</option>
      </select>
    </div>
  );
};
