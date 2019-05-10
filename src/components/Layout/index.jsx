import React from 'react';
import { makeStyles } from '@material-ui/core';

import LanguageSwitcher from '../LanguageSwitcher';

const useStyles = makeStyles(
  (theme) => ({
    '@global': {
      body: {
        padding: theme.spacing(1),
      },
    },

    header: {
      marginBottom: theme.spacing(4),
    },
  }),
  { name: 'Layout' },
);

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <LanguageSwitcher />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
