import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';

import cn from './style.css';

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

const Badge = ({ intl }) => (
  <a href="https://play.google.com/store/apps/details?id=com.izorg.munchkin">
    <img
      alt={intl.formatMessage(messages.alt)}
      className={cn.logoImage}
      src={intl.formatMessage(messages.src)}
    />
  </a>
);

Badge.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Badge);
