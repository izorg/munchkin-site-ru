import {
  AppBar,
  Box,
  Container,
  makeStyles,
  SvgIcon,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { mdiApple, mdiGooglePlay } from '@mdi/js';
import { useLocalization } from 'gatsby-theme-i18n';
import { Button, Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { Helmet } from 'react-helmet';
import { defineMessages, useIntl } from 'react-intl';

const displayName = 'Home';

const messages = defineMessages({
  description: {
    id: 'home.description',
    defaultValue: 'Simple but powerful Munchkin level counter',
  },

  privacy: {
    id: 'home.privacy',
    defaultValue: 'Privacy Policy',
  },

  title: {
    id: 'home.title',
    defaultValue: 'Munchkin Level Counter',
  },

  try: {
    id: 'home.try',
    defaultValue: 'Try',
  },
});

const useStyles = makeStyles(
  (theme) => ({
    '@global': {
      '@font-face': {
        fontFamily: 'Munchkin',
        src:
          "url(/fonts/munchkin.woff2) format('woff2'), url(/fonts/munchkin.woff) format('woff')",
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    },

    title: {
      fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,
    },
  }),
  { name: displayName },
);

const Home = () => {
  const { formatMessage } = useIntl();

  const classes = useStyles();

  const { defaultLang, locale, localizedPath } = useLocalization();

  const title = formatMessage(messages.title);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <AppBar color="transparent" elevation={0} position="static">
          <Toolbar component={Box} justifyContent="flex-end">
            <Button
              disabled={locale === 'en'}
              size="small"
              to={localizedPath(defaultLang, 'en', '/')}
            >
              EN
            </Button>
            <Button
              disabled={locale === 'ru'}
              size="small"
              to={localizedPath(defaultLang, 'ru', '/')}
            >
              RU
            </Button>
          </Toolbar>
        </AppBar>
        <Typography
          align="center"
          className={classes.title}
          gutterBottom
          variant="h1"
        >
          {formatMessage(messages.title)}
        </Typography>
        <Typography align="center" gutterBottom>
          {title}
        </Typography>

        <Box mt={4} textAlign="center">
          <Button
            color="primary"
            href="https://web.allmunchkins.com"
            variant="contained"
          >
            {formatMessage(messages.try)}
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" marginTop={2}>
          <Box
            display="inline-flex"
            flexDirection="column"
            margin={2}
            width={200}
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.izorg.munchkin"
              rel="noopener noreferrer"
              size="large"
              startIcon={
                <SvgIcon>
                  <path d={mdiGooglePlay} />
                </SvgIcon>
              }
              target="_blank"
              variant="outlined"
            >
              Play Store
            </Button>
          </Box>
          <Box
            display="inline-flex"
            flexDirection="column"
            margin={2}
            width={200}
          >
            <Button
              href="https://itunes.apple.com/us/app/level-counter-for-munchkin/id1448937097?mt=8"
              rel="noopener noreferrer"
              size="large"
              startIcon={
                <SvgIcon style={{ marginTop: -4 }}>
                  <path d={mdiApple} />
                </SvgIcon>
              }
              target="_blank"
              variant="outlined"
            >
              App Store
            </Button>
          </Box>
        </Box>

        <Box marginTop={4} textAlign="center">
          <Link to="/privacy" underline="always">
            {formatMessage(messages.privacy)}
          </Link>
        </Box>
      </Container>
    </>
  );
};

Home.displayName = displayName;

export default Home;
