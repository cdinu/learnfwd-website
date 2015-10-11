import React, { Component, PropTypes } from 'react';

import Nav from './nav';
import Jumbotron from './jumbotron';

export default class Header extends Component {
  render() {
    let jumbotron;

    if (this.props.path === 'home') {
      jumbotron = <Jumbotron />;
    }

    return (
      <header>
        {jumbotron}
        <Nav menu={this.props.menu}/>
      </header>
    );
  }
}

Header.displayName = 'LfHeader';
Header.propTypes = {
  menu: PropTypes.array,
  path: PropTypes.string,
};

