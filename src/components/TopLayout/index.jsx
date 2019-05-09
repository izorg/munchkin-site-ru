import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import theme from '../../styles/munchkinTheme';

const TopLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

TopLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopLayout;
