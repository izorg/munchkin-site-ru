import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line import/extensions,import/no-unresolved
import LocaleProvider from '../LocaleProvider';

const PageLayout = ({ children }) => (
  <LocaleProvider>{children}</LocaleProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
