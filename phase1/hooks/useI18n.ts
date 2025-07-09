import { useParams } from "next/navigation";
import { translations, Locale } from "@/i18n/translations";

export const useI18n = () => {
  const params = useParams();
  const locale: Locale =
    params?.locale === "ja" || params?.locale === "en" ? params.locale : "en";
  const t = translations[locale];

  const switchLanguage = (newLocale: Locale) => {
    window.location.pathname = `/${newLocale}`;
  };

  return {
    t,
    locale,
    switchLanguage,
    isJapanese: locale === "ja",
  };
};
