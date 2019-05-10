import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';

import Css from '../Css';

import theme from '../../styles/munchkinTheme';

const TopLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Css />
    {children}
  </MuiThemeProvider>
);

TopLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopLayout;
