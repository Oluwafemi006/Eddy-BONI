import { createContext, useContext, type ReactNode } from "react";
import { fr } from "./fr";
import { en } from "./en";
import type { Page } from "@/seo/routes";

export type Language = "fr" | "en";

const translations = { fr, en };

type LanguageContextValue = {
  language: Language;
  /** The page being rendered, used to link to its other-language equivalent. */
  page: Page;
  t: typeof fr;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// The language comes from the URL (/ or /en/), so prerendered HTML and the hydrated app always agree.
export function LanguageProvider({
  language,
  page,
  children,
}: {
  language: Language;
  page: Page;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ language, page, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
