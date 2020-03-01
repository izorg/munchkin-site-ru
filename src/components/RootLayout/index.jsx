import { MuiThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../styles/munchkinTheme';
import Css from '../Css';

const displayName = 'RootLayout';

const RootLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Css />
    {children}
  </MuiThemeProvider>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

RootLayout.displayName = displayName;

export default RootLayout;
