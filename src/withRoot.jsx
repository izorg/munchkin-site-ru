import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import Css from './components/Css';
import { getLocaleFromLocation, getMessages, setIntlLocale } from './i18n';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);

      setIntlLocale(getLocaleFromLocation(props.location));
    }

    render() {
      const { location } = this.props;

      const locale = getLocaleFromLocation(location);

      return (
        <Fragment>
          <Helmet>
            <html lang={locale} />
          </Helmet>
          <IntlProvider locale={locale} messages={getMessages(locale)}>
            <Fragment>
              <Css />
              <Component {...this.props} />
            </Fragment>
          </IntlProvider>
        </Fragment>
      );
    }
  }

  WithRoot.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  return WithRoot;
}

export default withRoot;
