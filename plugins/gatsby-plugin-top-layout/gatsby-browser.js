/* eslint-disable import/no-extraneous-dependencies,import/prefer-default-export,react/prop-types,react/jsx-filename-extension */
import React from 'react';

import TopLayout from '../../src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
