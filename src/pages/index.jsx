import React from 'react';

import Home from '../components/Home';
import Layout from '../components/Layout';
import withRoot from '../withRoot';

export default withRoot(() => (
  <Layout>
    <Home />
  </Layout>
));
