import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fr } from "./fr";
import { en } from "./en";

export type Language = "fr" | "en";

const translations = { fr, en };
const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof fr;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
