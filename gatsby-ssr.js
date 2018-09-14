/* eslint-disable react/jsx-filename-extension,react/no-danger */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';

import getPageContext from './src/getPageContext';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link href="/favicon.png" key="favicon" rel="shortcut icon" />,
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
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
      id="server-side-jss"
      key="server-side-jss"
    />,
  ]);
};
