import en from '../languages/en.json';
import ru from '../languages/ru.json';

const allMessages = {
  en,
  ru,
};

// eslint-disable-next-line import/prefer-default-export
export const getMessages = locale => allMessages[locale || 'en'];
