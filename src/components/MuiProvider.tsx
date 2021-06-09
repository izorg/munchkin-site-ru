import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

import theme from "../theme";

const MuiProvider = ({ element }: { element: ReactNode }) => (
  <>
    <Helmet>
      <meta content="initial-scale=1, width=device-width" name="viewport" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  </>
);

export default MuiProvider;
