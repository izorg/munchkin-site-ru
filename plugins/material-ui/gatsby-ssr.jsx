/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { createGenerateClassName, MuiThemeProvider } from 'material-ui/styles';

import theme from '../../src/styles/munchkinTheme';

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheets = new SheetsRegistry();
  const jss = create(preset());

  jss.options.createGenerateClassName = createGenerateClassName;

  // eslint-disable-next-line function-paren-newline
  const bodyHTML = renderToString(
    // eslint-disable-next-line react/jsx-filename-extension
    <JssProvider registry={sheets} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>,
  ); // eslint-disable-line function-paren-newline

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
