import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

import theme from "../theme";

export const cache = createCache({ key: "css", prepend: true });

const MuiProvider = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <Helmet>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Helmet>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MuiProvider;
