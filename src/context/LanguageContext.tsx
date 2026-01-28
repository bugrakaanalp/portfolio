import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'EN' | 'TR';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, tr: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initialization (Sayfa yenilendiğinde dili hatırlar)
  const [lang, setLangState] = useState<Language>(() => {
    // SSR kontrolü (Next.js veya güvenli taraf için)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-lang') as Language;
      return saved || 'EN';
    }
    return 'EN';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('app-lang', newLang);
  };

  const t = (en: string, tr: string) => (lang === 'EN' ? en : tr);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}