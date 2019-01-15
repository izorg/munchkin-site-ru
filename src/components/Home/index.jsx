import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Apple from 'mdi-material-ui/Apple';
import GooglePlay from 'mdi-material-ui/GooglePlay';

const styles = (theme) => ({
  header: {
    color: theme.palette.common.black,
    fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,

    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
  },

  buttonContainer: {
    margin: [[theme.spacing.unit * 4, 'auto', theme.spacing.unit * 2]],
    textAlign: 'center',
  },

  badges: {
    marginBottom: theme.spacing.unit * 4,
    textAlign: 'center',
  },

  badge: {
    margin: theme.spacing.unit * 2,
    width: 200,
  },

  badgeIcon: {
    marginRight: theme.spacing.unit,
  },
});

const messages = defineMessages({
  description: {
    id: 'home.description',
    defaultMessage: 'Simple but powerful Munchkin level counter',
  },

  link: {
    id: 'home.link',
    defaultMessage: 'https://web.allmunchkins.com',
  },

  privacy: {
    id: 'home.privacy',
    defaultMessage: 'Privacy Policy',
  },

  title: {
    id: 'home.title',
    defaultMessage: 'Munchkin Level Counter',
  },

  try: {
    id: 'home.try',
    defaultMessage: 'Try',
  },
});

const Home = ({ classes, intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage(messages.title)}</title>
    </Helmet>

    <Typography
      align="center"
      className={classes.header}
      gutterBottom
      variant="h1"
    >
      {intl.formatMessage(messages.title)}
    </Typography>

    <Typography align="center" gutterBottom>
      {intl.formatMessage(messages.description)}
    </Typography>

    <div className={classes.buttonContainer}>
      <Button
        color="primary"
        href={intl.formatMessage(messages.link)}
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

Home.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(withStyles(styles)(Home));
