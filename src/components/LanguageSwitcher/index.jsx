import React from 'react';
import { useTranslation } from 'react-i18next';

import Item from './Item';

const LanguageSwitcher = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div style={{ textAlign: 'right' }}>
      <Item disabled={language === 'en'} to="/">
        en
      </Item>
      <Item disabled={language === 'ru'} to="/ru/">
        ru
      </Item>
    </div>
  );
};

export default LanguageSwitcher;
