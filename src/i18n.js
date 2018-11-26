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

export const getLocaleFromLocation = ({ pathname }) => {
  const locale = pathname.split('/')[1].toLocaleLowerCase();

  return availableLocales.includes(locale) ? locale : defaultLocale;
};

export const getMessages = (locale) => allMessages[locale || defaultLocale];

export const setIntlLocale = (locale) =>
  addLocaleData(allIntlLocale[locale || defaultLocale]);
