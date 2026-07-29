import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, T, translations } from "@/lib/translations";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

function detectLang(): Lang {
  const saved = localStorage.getItem("ar-lang") as Lang | null;
  if (saved && ["en", "fr", "nl"].includes(saved)) return saved;

  const codes = [navigator.language, ...(navigator.languages ?? [])];
  for (const code of codes) {
    const base = code.split("-")[0].toLowerCase();
    if (base === "fr") return "fr";
    if (base === "nl") return "nl";
  }
  return "en";
}

const LanguageContext = createContext<LanguageCtx>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ar-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
