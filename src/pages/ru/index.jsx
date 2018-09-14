import React from 'react';

import Home from '../../components/Home/index';
import Layout from '../../components/Layout/ru';
import withRoot from '../../withRoot';

export default withRoot(() => (
  <Layout locale="ru">
    <Home />
  </Layout>
));
