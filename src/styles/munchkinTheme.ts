import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@material-ui/core';
import brown from '@material-ui/core/colors/brown';
import common from '@material-ui/core/colors/common';

const theme: ThemeOptions = {
  palette: {
    background: {
      default: common.white,
    },
    primary: brown,
  },

  typography: {
    fontFamily: '"Roboto", "San Francisco", "Helvetica", "Arial", sans-serif',
  },
};

export default responsiveFontSizes(createMuiTheme(theme));
