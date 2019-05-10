import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import { getLocaleFromLocation, getMessages, setIntlLocale } from '../../i18n';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);

    setIntlLocale(getLocaleFromLocation(props.location));
  }

  render() {
    const { children, location } = this.props;

    const locale = getLocaleFromLocation(location);

    return (
      <Fragment>
        <Helmet>
          <html lang={locale} />
        </Helmet>
        <IntlProvider locale={locale} messages={getMessages(locale)}>
          {children}
        </IntlProvider>
      </Fragment>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default PageLayout;
