import en from '../languages/en.json';
import ru from '../languages/ru.json';

const allMessages = {
  en,
  ru,
};

const EN = 'en';
const RU = 'ru';

export const availableLocales = [EN, RU];

export const defaultLocale = EN;

export const getMessages = locale => allMessages[locale || defaultLocale];
