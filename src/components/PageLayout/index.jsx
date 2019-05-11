import React, { useMemo } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import { getLocaleFromLocation, getMessages, setIntlLocale } from '../../i18n';

const PageLayout = ({ children, location }) => {
  const locale = getLocaleFromLocation(location);
  const { i18n } = useTranslation();

  useMemo(() => {
    setIntlLocale(locale);
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <Helmet>
        <html lang={locale} />
      </Helmet>
      <IntlProvider locale={locale} messages={getMessages(locale)}>
        {children}
      </IntlProvider>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default PageLayout;
