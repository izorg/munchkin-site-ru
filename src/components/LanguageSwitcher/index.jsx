import React from 'react';

import LanguageSwitcherItem from './Item';

// eslint-disable-next-line react/prop-types
export default ({ location }) => (
  <div style={{ textAlign: 'right' }}>
    <LanguageSwitcherItem location={location} to="/">en</LanguageSwitcherItem>
    <LanguageSwitcherItem location={location} to="/ru/">ru</LanguageSwitcherItem>
  </div>
);
