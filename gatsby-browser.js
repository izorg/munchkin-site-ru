/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './src/styles/munchkinTheme';

export const onInitialClientRender = () => {
  const cssStyles = window.document.getElementById('server-side-jss');

  if (cssStyles) {
    cssStyles.parentNode.removeChild(cssStyles);
  }
};

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <MuiThemeProvider theme={theme}>{element}</MuiThemeProvider>
);
