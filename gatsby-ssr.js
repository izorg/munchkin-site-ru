/* eslint-disable react/jsx-no-undef,react/prop-types,react/jsx-filename-extension */
import React from 'react';

import TopLayout from './src/components/TopLayout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" href="/favicon.png" rel="shortcut icon" />,
  ]);
};

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
