import React from 'react';

import LanguageSwitcherItem from './Item';

// eslint-disable-next-line react/prop-types
export default ({ locale }) => (
  <div style={{ textAlign: 'right' }}>
    <LanguageSwitcherItem disabled={locale === 'en'} to="/">
      en
    </LanguageSwitcherItem>
    <LanguageSwitcherItem disabled={locale === 'ru'} to="/ru/">
      ru
    </LanguageSwitcherItem>
  </div>
);
