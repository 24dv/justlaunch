
import enTranslations from './en';
import nlTranslations from './nl';

export type TranslationKey = keyof typeof enTranslations;

export type Translations = {
  [key in TranslationKey]: string;
};

export type Language = 'en' | 'nl';

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  nl: nlTranslations
};

export default translations;
