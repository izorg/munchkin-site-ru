import React from 'react';

import Home from '../components/Home';
import Layout from '../components/Layout/en';
import withRoot from '../withRoot';

export default withRoot(() => (
  <Layout locale="en">
    <Home />
  </Layout>
));
