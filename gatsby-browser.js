/* eslint-disable react/jsx-filename-extension */
import '@babel/polyfill';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './src/styles/munchkinTheme';

export const onInitialClientRender = () => {
  const cssStyles = window.document.getElementById('server-side-jss');

  if (cssStyles) {
    cssStyles.parentNode.removeChild(cssStyles);
  }
};

export const wrapRootComponent = ({ Root }) => () => (
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
);
