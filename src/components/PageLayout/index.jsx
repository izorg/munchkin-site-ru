import React, { useMemo } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { getLocaleFromLocation } from '../../i18n';

const PageLayout = ({ children, location }) => {
  const locale = getLocaleFromLocation(location);
  const { i18n } = useTranslation();

  useMemo(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <Helmet>
        <html lang={locale} />
      </Helmet>
      {children}
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default PageLayout;
