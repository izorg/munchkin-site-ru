import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/Button';
import { browserHistory } from 'phenomic/lib/client';

class Item extends Component {
  componentWillMount() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    browserHistory.push(this.props.href);
  }

  render() {
    return (
      <FlatButton {...this.props} onClick={this.handleClick} style={{ minWidth: 36 }} />
    );
  }
}

Item.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Item;
