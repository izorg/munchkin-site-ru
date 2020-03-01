import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ to, ...props }) => (
  <Button {...props} component={Link} size="small" to={to} />
);
