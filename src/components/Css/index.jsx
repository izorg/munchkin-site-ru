/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';

import munchkinWoff from '../../fonts/munchkin.woff';
import munchkinWoff2 from '../../fonts/munchkin.woff2';

const useStyles = makeStyles(
  {
    '@global': {
      '@font-face': {
        fontFamily: 'Munchkin',
        src: `
        url(${munchkinWoff2}) format('woff2'),
        url(${munchkinWoff}) format('woff')`,
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    },
  },
  { name: 'Css ' },
);

const Css = () => {
  useStyles();

  return <CssBaseline />;
};

export default Css;
