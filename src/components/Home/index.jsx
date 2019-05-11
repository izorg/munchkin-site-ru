import React from 'react';
import { useTranslation } from 'react-i18next';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Apple from 'mdi-material-ui/Apple';
import GooglePlay from 'mdi-material-ui/GooglePlay';

const useStyles = makeStyles(
  (theme) => ({
    header: {
      color: theme.palette.common.black,
      fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,

      [theme.breakpoints.down('md')]: {
        fontSize: 45,
      },
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

const Home = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const title = t('home.title', { defaultValue: 'Munchkin Level Counter' });

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
        {t('home.description', {
          defaultValue: 'Simple but powerful Munchkin level counter',
        })}
      </Typography>

      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          href={t('home.link', {
            defaultValue: 'https://web.allmunchkins.com',
          })}
          variant="contained"
        >
          {t('home.try', { defaultValue: 'Try' })}
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
        <Link to="/privacy">
          {t('home.privacy', { defaultValue: 'Privacy Policy' })}
        </Link>
      </Typography>
    </div>
  );
};

export default Home;
