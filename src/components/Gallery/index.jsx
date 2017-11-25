import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import en from './data/en.json';
import ru from './data/ru.json';

import { classesObject } from '../../utils/propTypes';

const styles = {
  gallery: {
    textAlign: 'center',
  },

  item: {
    margin: 0,
  },

  image: {
    border: '1px solid #000000',
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
        <a
          className={classes.item}
          data-flickr-embed="true"
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
        </a>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  classes: classesObject.isRequired,
  lang: PropTypes.string,
};

Gallery.defaultProps = {
  lang: 'en',
};

export default withStyles(styles)(Gallery);
