import createEmotionServer from "@emotion/server/create-instance";
import { renderToString } from "react-dom/server";

import MuiProvider, { cache } from "./src/components/MuiProvider";

const emotionServer = createEmotionServer(cache);

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const bodyHTML = renderToString(bodyComponent);

  const styles = emotionServer.extractCritical(bodyHTML);

  replaceBodyHTMLString(bodyHTML);

  setHeadComponents([
    <style
      key="emotion-style-tag"
      dangerouslySetInnerHTML={{ __html: styles.css }}
      data-emotion={`css ${styles.ids.join(" ")}`}
    />,
  ]);
};

export const wrapRootElement = MuiProvider;
