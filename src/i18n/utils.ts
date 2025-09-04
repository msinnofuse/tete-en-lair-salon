import deTranslations from './de.json';
import enTranslations from './en.json';

export type Language = 'de' | 'en';

export const translations = {
  de: deTranslations,
  en: enTranslations
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.de;
}

export function t(lang: Language, key: string): string {
  const trans = getTranslations(lang);
  const keys = key.split('.');
  let result: any = trans;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof result === 'string' ? result : key;
}