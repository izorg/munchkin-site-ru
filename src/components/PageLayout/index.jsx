import PropTypes from 'prop-types';
import React from 'react';

import LocaleProvider from '../LocaleProvider';

const PageLayout = ({ children }) => (
  <LocaleProvider>{children}</LocaleProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
