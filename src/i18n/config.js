import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en-US.json';
import ru from './locales/ru-RU.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    lng: navigator.language.split('-')[0] || 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;