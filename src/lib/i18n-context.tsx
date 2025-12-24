'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';
import { Noto_Sans_Bengali } from 'next/font/google';

const notoBengali = Noto_Sans_Bengali({
    subsets: ["bengali"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-bengali",
});

type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Simple persistence maybe?
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div className={language === 'bn' ? notoBengali.className : ''}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
