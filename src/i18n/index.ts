import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './en.json';
import chinese from './zh.json';
import filipino from './ph.json';
const lng = localStorage.getItem('lang')
  ? JSON.parse(localStorage.getItem('lang')!)
  : 'en';
i18n.on('initialized', () => {});
i18n.on('languageChanged', () => {});
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // ns: ['common', 'error', 'menu'],
    // defaultNS: 'common',
    resources: {
      en: {
        translation: english,
      },
      zh: {
        translation: chinese,
      },
      ph: {
        translation: filipino,
      },
    },
    lng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
