import createEmotionServer from "@emotion/server/create-instance";
import { ServerStyleSheets } from "@material-ui/core";
import { renderToString } from "react-dom/server";

import MuiProvider, { cache } from "./src/components/MuiProvider";

const emotionServer = createEmotionServer(cache);

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new ServerStyleSheets();

  const bodyHTML = renderToString(sheets.collect(bodyComponent));

  const styles = emotionServer.extractCritical(bodyHTML);

  replaceBodyHTMLString(bodyHTML);

  setHeadComponents([
    sheets.getStyleElement(),
    <style
      key="emotion-style-tag"
      dangerouslySetInnerHTML={{ __html: styles.css }}
      data-emotion={`css ${styles.ids.join(" ")}`}
    />
  ]);
};

export const wrapRootElement = MuiProvider;
