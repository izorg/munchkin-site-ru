import React from 'react';
import { useIntl } from 'react-intl';

import Item from './Item';

const LanguageSwitcher = () => {
  const { locale } = useIntl();

  return (
    <div style={{ textAlign: 'right' }}>
      <Item disabled={locale === 'en'} to="/">
        en
      </Item>
      <Item disabled={locale === 'ru'} to="/ru/">
        ru
      </Item>
    </div>
  );
};

export default LanguageSwitcher;
