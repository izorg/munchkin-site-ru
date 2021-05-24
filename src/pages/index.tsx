import {
  AppBar,
  Box,
  Button,
  Container,
  Link as MuiLink,
  makeStyles,
  SvgIcon,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { mdiApple, mdiGooglePlay } from "@mdi/js";
import { Link } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import { Helmet } from "react-helmet";
import { defineMessages, useIntl } from "react-intl";

const displayName = "Home";

const messages = defineMessages({
  description: {
    id: "home.description",
    defaultValue: "Simple but powerful Munchkin level counter",
  },

  privacy: {
    id: "home.privacy",
    defaultValue: "Privacy Policy",
  },

  title: {
    id: "home.title",
    defaultValue: "Munchkin Level Counter",
  },

  try: {
    id: "home.try",
    defaultValue: "Try",
  },
});

const useStyles = makeStyles(
  (theme) => ({
    "@global": {
      "@font-face": {
        fontFamily: "Munchkin",
        src: "url(/fonts/munchkin.woff2) format('woff2'), url(/fonts/munchkin.woff) format('woff')",
        fontWeight: "normal",
        fontStyle: "normal",
      },
    },

    title: {
      fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,
    },
  }),
  { name: displayName }
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
              color="inherit"
              component={Link}
              disabled={locale === "en"}
              size="small"
              to={localizedPath({
                defaultLang,
                locale: "en",
                path: "/",
                prefixDefault: undefined,
              })}
            >
              EN
            </Button>
            <Button
              color="inherit"
              component={Link}
              disabled={locale === "ru"}
              size="small"
              to={localizedPath({
                defaultLang,
                locale: "ru",
                path: "/",
                prefixDefault: undefined,
              })}
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
          {title}
        </Typography>
        <Typography align="center" gutterBottom>
          {formatMessage(messages.description)}
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
              color="inherit"
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
              color="inherit"
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
          <MuiLink component={Link} to="/privacy" underline="always">
            {formatMessage(messages.privacy)}
          </MuiLink>
        </Box>
      </Container>
    </>
  );
};

Home.displayName = displayName;

export default Home;
