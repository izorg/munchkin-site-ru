/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../../src/styles/munchkinTheme';

exports.onInitialClientRender = () => {
  const cssStyles = window.document.getElementById('server-side-jss');

  if (cssStyles) {
    cssStyles.parentNode.removeChild(cssStyles);
  }
};

exports.wrapRootComponent = ({ Root }) => () => (
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
);
