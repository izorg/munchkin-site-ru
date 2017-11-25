import React from 'react';
import Helmet from 'react-helmet';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { withStyles } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import munchkinWoff from '../fonts/munchkin.woff';
import munchkinWoff2 from '../fonts/munchkin.woff2';

import LanguageSwitcher from '../components/LanguageSwitcher';
import favicon from '../favicon.png';
import { getMessages } from '../i18n';
import munchkinTheme from '../styles/munchkinTheme';

addLocaleData([...en, ...ru]);

const Fragment = ({ children }) => children;

const styles = {
  '@global': {
    '@font-face': {
      fontFamily: 'Munchkin',
      src: `
        url(${munchkinWoff2}) format('woff2'),
        url(${munchkinWoff}) format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },

    html: {
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
    },
  },

  header: {
    marginBottom: '2em',
  },
};

// eslint-disable-next-line react/prop-types
const Layout = ({ children, classes, location }) => {
  const locale = location.pathname.indexOf('/ru/') === 0 ? 'ru' : 'en';

  return (
    <MuiThemeProvider theme={munchkinTheme}>
      <IntlProvider locale={locale} messages={getMessages(locale)} textComponent={Fragment}>
        <div>
          <Helmet>
            <html lang={locale} />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link href={favicon} rel="shortcut icon" />
          </Helmet>

          <header className={classes.header}>
            <LanguageSwitcher location={location} />
          </header>
          <main>
            {children()}
          </main>
        </div>
      </IntlProvider>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(Layout);
