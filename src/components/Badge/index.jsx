import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { withStyles } from 'material-ui/styles';

import { classesObject } from '../../utils/propTypes';

const styles = {
  logoImage: {
    width: 240,
  },
};

const messages = defineMessages({
  alt: {
    id: 'badge.alt',
    defaultMessage: 'Get it on Google Play',
  },
  src: {
    id: 'badge.src',
    defaultMessage: 'https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png',
  },
});

const Badge = ({ classes, intl }) => (
  <a href="https://play.google.com/store/apps/details?id=com.izorg.munchkin">
    <img
      alt={intl.formatMessage(messages.alt)}
      className={classes.logoImage}
      src={intl.formatMessage(messages.src)}
    />
  </a>
);

Badge.propTypes = {
  classes: classesObject.isRequired, // eslint-disable-line react/no-typos
  intl: intlShape.isRequired, // eslint-disable-line react/no-typos
};

export default injectIntl(withStyles(styles)(Badge));
