/* eslint-disable react/require-default-props,react/forbid-prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { BodyContainer } from 'phenomic';

import Loading from '../../components/Loading/index';

const Page = ({ body, children, footer, head, header, isLoading }) => (
  <div>
    <Helmet>
      <title>{head.title}</title>
    </Helmet>
    <div>
      { header }
      <div>
        {
          isLoading
            ? <Loading />
            : <BodyContainer>{body}</BodyContainer>
        }
      </div>
      { children }
      { footer }
    </div>
  </div>
);

Page.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.element,
  head: PropTypes.object.isRequired,
  header: PropTypes.element,
  isLoading: PropTypes.bool,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
