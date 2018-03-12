import React from 'react';
import matchPath from 'react-router/matchPath';
import Link from 'gatsby-link';
import Button from 'material-ui/Button';

// eslint-disable-next-line react/prop-types
export default ({ location, to, ...props }) => (
  <Button
    {...props}
    component={Link}
    disabled={!!matchPath(location.pathname, { exact: true, path: to })}
    size="small"
    to={to}
  />
);
