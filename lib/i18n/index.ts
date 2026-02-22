import en from './en.json';
import vi from './vi.json';
import zh from './zh.json';

export const locales = ['en', 'vi', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, typeof en> = { en, vi, zh };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.en;
}

export type Dictionary = typeof en;
