import createMuiTheme from 'material-ui/styles/createMuiTheme';
import brown from 'material-ui/colors/brown';

const theme = {
  palette: {
    primary: {
      main: brown[500],
    },
  },

  typography: {
    fontFamily: '"Roboto", "San Francisco", "Helvetica", "Arial", sans-serif',
  },
};

export default createMuiTheme(theme);
