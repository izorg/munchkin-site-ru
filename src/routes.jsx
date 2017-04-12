import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import App from './components/App';
import Homepage from './layouts/Homepage';
import Page from './layouts/Page';
import PageError from './layouts/PageError';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Homepage,
      Page,
      PageError,
    }}
  />
);

export default (
  <Route component={App}>
    <Route path="*" component={PageContainer} />
  </Route>
);
