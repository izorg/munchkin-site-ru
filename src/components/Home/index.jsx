import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import { classesObject } from '../../utils/propTypes';

import Badge from '../Badge';
import Gallery from '../Gallery';

const styles = theme => ({
  header: {
    color: '#000000',
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

  title: {
    id: 'home.title',
    defaultMessage: 'All munchkins',
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

    <Typography align="center" className={classes.header} gutterBottom type="display4">
      {intl.formatMessage(messages.title)}
    </Typography>

    <Typography align="center" gutterBottom>
      {intl.formatMessage(messages.title)}
    </Typography>

    <div className={classes.buttonContainer}>
      <Button
        color="primary"
        href={intl.formatMessage(messages.link)}
        raised
      >
        {intl.formatMessage(messages.try)}
      </Button>
    </div>

    <Typography align="center" gutterBottom>
      <Badge />
    </Typography>

    <Gallery lang={intl.locale} />
  </div>
);

Home.propTypes = {
  classes: classesObject.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(withStyles(styles)(Home));
