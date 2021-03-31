import MuiProvider from "./src/components/MuiProvider";

export const onInitialClientRender = () => {
  // Remove the server-side injected CSS.
  const jssStyles = document.querySelector("#jss-server-side");

  if (jssStyles) {
    jssStyles.parentElement?.removeChild(jssStyles);
  }
};

export const wrapRootElement = MuiProvider;
