import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prop-types
export default ({ to, ...props }) => (
  <Button {...props} component={Link} size="small" to={to} />
);
