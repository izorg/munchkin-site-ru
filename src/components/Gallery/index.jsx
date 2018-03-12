import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import en from './data/en.json';
import ru from './data/ru.json';

const styles = {
  gallery: {
    textAlign: 'center',
  },

  item: {
    display: 'inline-block',
  },

  image: {
    height: 'auto',
    maxWidth: '100%',
  },
};

const Gallery = ({ classes, lang }) => {
  let data;

  switch (lang) {
    case 'ru':
      data = ru;
      break;

    case 'en':
    default:
      data = en;
      break;
  }

  return (
    <div className={classes.gallery}>
      {data.map(({ image, title }) => (
        <Paper
          className={classes.item}
          component="a"
          key={image}
          href={image}
          title={title}
        >
          <img
            alt={title}
            className={classes.image}
            height="567"
            src={image}
            width="360"
          />
        </Paper>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  lang: PropTypes.string,
};

Gallery.defaultProps = {
  lang: 'en',
};

export default withStyles(styles)(Gallery);
