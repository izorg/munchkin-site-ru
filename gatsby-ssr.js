/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import {
  createGenerateClassName,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import theme from './src/styles/munchkinTheme';

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
  const sheets = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  const bodyHTML = renderToString(
    <JssProvider generateClassName={generateClassName} registry={sheets}>
      <MuiThemeProvider sheetsManager={new Map()} theme={theme}>
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>,
  );

  replaceBodyHTMLString(bodyHTML);

  setHeadComponents([
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      id="server-side-jss"
      key="server-side-jss"
    />,
  ]);
};
