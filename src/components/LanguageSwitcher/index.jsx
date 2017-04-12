import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const LanguageSwitcher = ({ language }) => (
  <span>
    <Item href="/" disabled={language === 'en'}>en</Item>
    <Item href="/ru/" disabled={language === 'ru'}>ru</Item>
  </span>
);

LanguageSwitcher.propTypes = {
  language: PropTypes.string,
};

LanguageSwitcher.defaultProps = {
  language: 'en',
};

export default LanguageSwitcher;
