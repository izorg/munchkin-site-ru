import React from 'react';
import AdSense from 'react-adsense';
import Helmet from 'react-helmet';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'normalize.css';

import './style.css';
import munchkinTheme from '../../styles/munchkinTheme';

addLocaleData([...en, ...ru]);

const App = props => (
  <MuiThemeProvider theme={munchkinTheme}>
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
        <script>{`
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11062557-8', 'auto');
        ga('send', 'pageview');
      `}</script>
      </Helmet>

      {props.children}

      <AdSense.Google
        client="ca-pub-8911738675751781"
        slot="4838760545"
        style={{
          display: 'block',
          height: '50px',
          margin: '50px auto 0',
          width: '320px',
        }}
      />

      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default App;
