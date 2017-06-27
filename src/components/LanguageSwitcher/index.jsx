import React from 'react';
import PropTypes from 'prop-types';

import cn from './style.css';

import Item from './Item';

const LanguageSwitcher = ({ language }) => (
  <div>
    <Item className={cn.item} href="/" disabled={language === 'en'}>en</Item>
    <Item className={cn.item} href="/ru/" disabled={language === 'ru'}>ru</Item>
  </div>
);

LanguageSwitcher.propTypes = {
  language: PropTypes.string,
};

LanguageSwitcher.defaultProps = {
  language: 'en',
};

export default LanguageSwitcher;
