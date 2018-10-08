import { createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';

const theme = {
  palette: {
    primary: {
      main: brown[500],
    },
  },

  typography: {
    fontFamily: '"Roboto", "San Francisco", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
};

export default createMuiTheme(theme);
