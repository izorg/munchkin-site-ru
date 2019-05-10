import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';

import Css from '../Css';

import theme from '../../styles/munchkinTheme';

const RootLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Css />
    {children}
  </MuiThemeProvider>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
