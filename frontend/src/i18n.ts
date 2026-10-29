import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationHE from "../assets/i18n/he.json";
import translationEN from "../assets/i18n/en.json";

const resources = {
  he: {
    translation: translationHE,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "he",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
