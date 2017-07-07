import React from 'react';
import PropTypes from 'prop-types';

import cn from './style.css';

import en from './data/en.json';
import ru from './data/ru.json';

const Gallery = ({ lang }) => {
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
    <div className={cn.gallery}>
      {data.map(({ originalImage, thumbnailImage, title }) => (
        <a
          className={cn.item}
          data-flickr-embed="true"
          key={originalImage}
          href={originalImage}
          title={title}
        >
          <img
            alt={title}
            className={cn.image}
            height="500"
            src={thumbnailImage}
            width="317"
          />
        </a>
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

export default Gallery;
