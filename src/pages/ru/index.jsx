import React from 'react';
import Helmet from 'react-helmet';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Badge from '../../components/Badge';
import Gallery from '../../components/Gallery';

const styles = theme => ({
  header: {
    color: '#000000',
    fontFamily: `"Munchkin", ${theme.typography.fontFamily}`,

    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
  },

  buttonContainer: {
    margin: '2em auto 1em',
    textAlign: 'center',
  },
});

// eslint-disable-next-line react/prop-types
const Page = ({ classes }) => (
  <div>
    <Helmet>
      <title>Все манчкины</title>
    </Helmet>

    <Typography align="center" className={classes.header} gutterBottom type="display4">
      Все манчкины
    </Typography>

    <Typography align="center" gutterBottom>
      Простой и удобный счётчик уровней для игры в Манчкин
    </Typography>

    <div className={classes.buttonContainer}>
      <Button
        color="primary"
        href="https://web.allmunchkins.com/ru.html"
        raised
      >
        Попробовать
      </Button>
    </div>

    <Typography align="center" gutterBottom>
      <Badge />
    </Typography>

    <Gallery lang="ru" />
  </div>
);

export default withStyles(styles)(Page);
