/* eslint-disable import/no-extraneous-dependencies,react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import {
  createGenerateClassName,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import theme from './src/styles/munchkinTheme';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<link href="/favicon.png" rel="shortcut icon" />]);
};

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheets = new SheetsRegistry();
  const jss = create(preset());

  jss.options.createGenerateClassName = createGenerateClassName;

  const bodyHTML = renderToString(
    <JssProvider registry={sheets} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>,
  );

  replaceBodyHTMLString(bodyHTML);

  setHeadComponents([
    <style
      id="server-side-jss"
      key="server-side-jss"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ]);
};
