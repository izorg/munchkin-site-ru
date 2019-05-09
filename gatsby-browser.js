/* eslint-disable react/jsx-filename-extension,react/prop-types,import/prefer-default-export */
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';

import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
