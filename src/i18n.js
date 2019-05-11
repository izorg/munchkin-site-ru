import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../languages/en.json';
import ru from '../languages/ru.json';

const EN = 'en';
const RU = 'ru';

const allMessages = {
  [EN]: en,
  [RU]: ru,
};

export const availableLocales = [EN, RU];

export const defaultLocale = EN;

i18n.use(initReactI18next).init({
  keySeparator: false,
  lng: defaultLocale,
  resources: {
    [EN]: {
      translation: allMessages[EN],
    },
    [RU]: {
      translation: allMessages[RU],
    },
  },
});

export const getLocaleFromLocation = ({ pathname }) => {
  const locale = pathname.split('/')[1].toLowerCase();

  return availableLocales.includes(locale) ? locale : defaultLocale;
};
