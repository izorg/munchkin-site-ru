import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import common from '@material-ui/core/colors/common';

const theme = {
  palette: {
    background: {
      default: common.white,
    },
    primary: brown,
  },

  typography: {
    fontFamily: '"Roboto", "San Francisco", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
};

export default responsiveFontSizes(createMuiTheme(theme));
