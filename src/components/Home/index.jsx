import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Badge from '../Badge';

const styles = (theme) => ({
  header: {
    color: theme.palette.common.black,
    fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,

    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
  },

  buttonContainer: {
    margin: '2em auto 1em',
    textAlign: 'center',
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
      variant="display4"
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
        variant="raised"
      >
        {intl.formatMessage(messages.try)}
      </Button>
    </div>

    <Typography align="center" gutterBottom>
      <Badge />
    </Typography>

    <Typography align="center" gutterBottom>
      <a href="/privacy.html">{intl.formatMessage(messages.privacy)}</a>
    </Typography>
  </div>
);

Home.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(withStyles(styles)(Home));
