import PropTypes from 'prop-types';

export default PropTypes.shape({
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
});
