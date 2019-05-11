import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { addLocaleData } from 'react-intl';
import intlEn from 'react-intl/locale-data/en';
import intlRu from 'react-intl/locale-data/ru';

import en from '../languages/en.json';
import ru from '../languages/ru.json';

const EN = 'en';
const RU = 'ru';

const allMessages = {
  [EN]: en,
  [RU]: ru,
};

const allIntlLocale = {
  [EN]: intlEn,
  [RU]: intlRu,
};

export const availableLocales = [EN, RU];

export const defaultLocale = EN;

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  keySeparator: false,
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

export const getMessages = (locale) => allMessages[locale || defaultLocale];

export const setIntlLocale = (locale) =>
  addLocaleData(allIntlLocale[locale || defaultLocale]);

export default i18n;
