import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import JssProvider from 'react-jss/lib/JssProvider';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Css from './components/Css';
import getPageContext from './getPageContext';
import { getLocaleFromLocation, getMessages, setIntlLocale } from './i18n';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);

      this.muiPageContext = getPageContext();

      setIntlLocale(getLocaleFromLocation(props.location));
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#server-side-jss');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
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
            <JssProvider
              generateClassName={this.muiPageContext.generateClassName}
            >
              {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
              <MuiThemeProvider
                sheetsManager={this.muiPageContext.sheetsManager}
                theme={this.muiPageContext.theme}
              >
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <Css />
                <Component {...this.props} />
              </MuiThemeProvider>
            </JssProvider>
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
