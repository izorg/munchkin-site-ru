import { createTheme, colors, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },

    palette: {
      background: {
        default: colors.common.white,
      },
      primary: colors.brown,
    },

    typography: {
      fontFamily: '"Roboto", "San Francisco", "Helvetica", "Arial", sans-serif',
    },
  })
);

export default theme;
