/* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Apple from 'mdi-material-ui/Apple';
import GooglePlay from 'mdi-material-ui/GooglePlay';
import { defineMessages, useIntl } from 'react-intl';

const useStyles = makeStyles(
  (theme) => ({
    header: {
      fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,
    },

    buttonContainer: {
      margin: [[theme.spacing(4), 'auto', theme.spacing(2)]],
      textAlign: 'center',
    },

    badges: {
      marginBottom: theme.spacing(4),
      textAlign: 'center',
    },

    badge: {
      margin: theme.spacing(2),
      width: 200,
    },

    badgeIcon: {
      marginRight: theme.spacing(1),
    },
  }),
  { name: 'Home' },
);

const messages = defineMessages({
  description: {
    id: 'home.description',
    defaultValue: 'Simple but powerful Munchkin level counter',
  },
  privacy: {
    id: 'home.privacy',
    defaultValue: 'Privacy Policy',
  },
  title: {
    id: 'home.title',
    defaultValue: 'Munchkin Level Counter',
  },
  try: {
    id: 'home.try',
    defaultValue: 'Try',
  },
});

const Home = () => {
  const classes = useStyles();
  const intl = useIntl();

  const title = intl.formatMessage(messages.title);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Typography
        align="center"
        className={classes.header}
        gutterBottom
        variant="h1"
      >
        {title}
      </Typography>

      <Typography align="center" gutterBottom>
        {intl.formatMessage(messages.description)}
      </Typography>

      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          href="https://web.allmunchkins.com"
          variant="contained"
        >
          {intl.formatMessage(messages.try)}
        </Button>
      </div>

      <div className={classes.badges}>
        <Button
          className={classes.badge}
          component="a"
          href="https://play.google.com/store/apps/details?id=com.izorg.munchkin"
          rel="noopener noreferrer"
          size="large"
          target="_blank"
          variant="outlined"
        >
          <GooglePlay className={classes.badgeIcon} />
          Play Store
        </Button>

        <Button
          className={classes.badge}
          component="a"
          href="https://itunes.apple.com/us/app/level-counter-for-munchkin/id1448937097?mt=8"
          rel="noopener noreferrer"
          size="large"
          target="_blank"
          variant="outlined"
        >
          <Apple className={classes.badgeIcon} />
          App Store
        </Button>
      </div>

      <Typography align="center" gutterBottom>
        <Link to="/privacy">{intl.formatMessage(messages.privacy)}</Link>
      </Typography>
    </div>
  );
};

export default Home;
