import { useState, useEffect } from "react";
import { translations, Locale } from "@/i18n/translations";

export const useI18n = () => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    // localStorageに保存された言語を優先
    const storedLocale =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (storedLocale === "en" || storedLocale === "ja") {
      setLocale(storedLocale);
    } else {
      // なければブラウザの言語設定を確認
      const browserLang =
        typeof navigator !== "undefined" ? navigator.language : "en";
      if (browserLang.startsWith("ja")) {
        setLocale("ja");
      }
    }
  }, []);

  const t = translations[locale];

  const switchLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  return {
    t,
    locale,
    switchLanguage,
    isJapanese: locale === "ja",
  };
};
