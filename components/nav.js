import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    );
  }
}

Nav.displayName = 'LfwdNav';
