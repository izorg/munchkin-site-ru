import React from 'react';

import PageLayout from './src/components/PageLayout';
import RootLayout from './src/components/RootLayout';

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>;
};

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>;
};
