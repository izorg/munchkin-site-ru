import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import LanguageSwitcher from '../LanguageSwitcher/index';

const styles = (theme) => ({
  '@global': {
    body: {
      padding: theme.spacing(1),
    },
  },

  header: {
    marginBottom: theme.spacing(4),
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
