import { useLocation } from '@reach/router';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';

import en from '../../../languages/en.json';
import ru from '../../../languages/ru.json';

enum Locale {
  EN = 'en',
  RU = 'ru',
}

const allMessages = {
  [Locale.EN]: en,
  [Locale.RU]: ru,
};

const availableLocales = [Locale.EN, Locale.RU];

const defaultLocale = Locale.EN;

const getLocaleFromLocation = ({ pathname }: Window['location']): Locale => {
  const locale = pathname.split('/')[1].toLowerCase() as Locale;

  return availableLocales.includes(locale) ? locale : defaultLocale;
};

const LocaleProvider: React.FC = ({ children }) => {
  const locale = getLocaleFromLocation(useLocation());

  return (
    <IntlProvider locale={locale} messages={allMessages[locale]}>
      <Helmet>
        <html lang={locale} />
      </Helmet>
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
