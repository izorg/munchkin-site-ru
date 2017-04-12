import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const PageError = ({ error, errorText }) => (
  <div>
    <Helmet>
      <title>{`${error}`}</title>
    </Helmet>
    <p>
      {`${error} ${errorText}`}
    </p>
  </div>
);

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
};

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found',
};

export default PageError;
