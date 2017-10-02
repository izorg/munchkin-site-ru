import React from 'react';
import Helmet from 'react-helmet';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Badge from '../components/Badge';
import Gallery from '../components/Gallery';

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
      <title>All munchkins</title>
    </Helmet>

    <Typography align="center" className={classes.header} gutterBottom type="display4">
      All munchkins
    </Typography>

    <Typography align="center" gutterBottom>
      Simple but powerful Munchkin level counter
    </Typography>

    <div className={classes.buttonContainer}>
      <Button raised color="primary">Try</Button>
    </div>

    <Typography align="center" gutterBottom>
      <Badge />
    </Typography>

    <Gallery lang="en" />
  </div>
);

export default withStyles(styles)(Page);
