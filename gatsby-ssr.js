/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';

import PageLayout from './src/components/PageLayout';
import RootLayout from './src/components/RootLayout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link href="/favicon.png" key="favicon" rel="shortcut icon" />,
  ]);
};

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
