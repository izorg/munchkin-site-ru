import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import LanguageSwitcher from '../LanguageSwitcher/index';

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing.unit,
    },
  },

  header: {
    marginBottom: theme.spacing.unit * 4,
  },
});

// eslint-disable-next-line react/prop-types
const Layout = ({ children, classes }) => (
  <Fragment>
    <header className={classes.header}>
      <LanguageSwitcher />
    </header>
    <main>{children}</main>
  </Fragment>
);

export default withStyles(styles)(Layout);
