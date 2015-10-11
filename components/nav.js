import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import Menu from './menu';
import styles from './nav.css';

export default class LfwdNav extends Component {
  render() {
    let navStyle = styles.navbar;
    if (this.props.location.pathname === '/') {
      navStyle = styles.navbarHome;
    }

    return (
      <Navbar default toggleNavKey={0} className={navStyle}>
        <NavBrand>
          <Link to="/" className={'hidden-xs hidden-sm '}><Image className={styles.lfwdLogo} src="/img/logo-learnfwd-03.png" responsive /></Link>
          <Link to="/" className={'hidden-lg hidden-md'}>Learn Forward</Link>
        </NavBrand>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <Menu items={this.props.menu}/>
        </Nav>
      </Navbar>
    );
  }
}

LfwdNav.displayName = 'LfwdNav';
LfwdNav.propTypes = {
  location: PropTypes.object,
  menu: PropTypes.array,
};

