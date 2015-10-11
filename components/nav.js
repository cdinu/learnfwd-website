import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Menu from './menu';
// import styles from './nav.css';

export default class LfNav extends Component {
  renderx() {
    return (
      <div>
        <Link to="/">Learn Forward</Link>
        <Menu items={this.props.menu}/>
      </div>
    );
  }

  render() {
    return (<div>Nav</div>);
  }

}

LfNav.displayName = 'LfNav';
LfNav.propTypes = {
  location: PropTypes.object,
  menu: PropTypes.array,
};

