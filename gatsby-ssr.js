/* eslint-disable import/prefer-default-export,react/jsx-filename-extension */
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon" href="/favicon.png" rel="shortcut icon" />,
  ]);
};
