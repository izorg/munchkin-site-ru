/* eslint-disable react/jsx-filename-extension,react/no-danger */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';

import getPageContext from './src/getPageContext';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" href="/favicon.png" rel="shortcut icon" />,
  ]);
};

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const muiPageContext = getPageContext.default
    ? getPageContext.default()
    : getPageContext();

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>,
  );

  replaceBodyHTMLString(bodyHTML);

  setHeadComponents([
    <style
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
      id="server-side-jss"
    />,
  ]);
};
