import {
  AppBar,
  Box,
  Button,
  Container,
  GlobalStyles,
  Link as MuiLink,
  SvgIcon,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { mdiApple, mdiGooglePlay, mdiMicrosoftWindows } from "@mdi/js";
import { Link } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import { Helmet } from "react-helmet";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  description: {
    id: "home.description",
    defaultMessage: "Simple but powerful Munchkin level counter",
  },

  privacy: {
    id: "home.privacy",
    defaultMessage: "Privacy Policy",
  },

  title: {
    id: "home.title",
    defaultMessage: "Munchkin Level Counter",
  },

  try: {
    id: "home.try",
    defaultMessage: "Try",
  },
});

const Home = () => {
  const { formatMessage } = useIntl();

  const { defaultLang, locale, localizedPath } = useLocalization();

  const title = formatMessage(messages.title);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "Munchkin",
            src: "url(/fonts/munchkin.woff2) format('woff2'), url(/fonts/munchkin.woff) format('woff')",
            fontWeight: "normal",
            fontStyle: "normal",
          },
        }}
      />
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
          gutterBottom
          sx={{
            fontFamily: (theme: Theme) =>
              `"Munchkin", ${theme.typography.fontFamily}`,
          }}
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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
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
          <Box
            display="inline-flex"
            flexDirection="column"
            margin={2}
            width={200}
          >
            <Button
              color="inherit"
              href="https://www.microsoft.com/store/apps/9PDVK4CF6NMF"
              rel="noopener noreferrer"
              size="large"
              startIcon={
                <SvgIcon style={{ marginTop: -2 }}>
                  <path d={mdiMicrosoftWindows} />
                </SvgIcon>
              }
              target="_blank"
              variant="outlined"
            >
              Windows
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

export default Home;
