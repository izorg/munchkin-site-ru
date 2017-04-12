import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'phenomic/lib/client';

class Item extends Component {
  componentWillMount() {
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    browserHistory.push(this.props.href);
  }

  render() {
    return (
      <FlatButton {...this.props} onTouchTap={this.handleTouchTap} style={{ minWidth: 36 }} />
    );
  }
}

Item.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Item;
