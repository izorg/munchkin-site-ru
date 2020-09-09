/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';

const displayName = 'Item';

const Item = ({ to, ...props }) => (
  <Button {...props} component={Link} size="small" to={to} />
);

Item.displayName = displayName;

export default Item;
