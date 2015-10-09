import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
// import { Grid, Row, Col } from 'react-bootstrap';
import styles from './nav.css';

// <Link to="/">Home</Link>
// <Link to="/solutions">Solutions</Link>
// <Link to="/demo">Demo</Link>
// <Link to="/about">About us</Link>
// <Link to="/contact">Contact</Link>
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
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavDropdown eventKey={2} title="Products" id="collapsible-navbar-dropdown">
            <MenuItem eventKey="1" href='/products'>Learn Forward Author</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2" href='/products'>Learn Forward Platform</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Solutions" id="collapsible-navbar-dropdown">
            <MenuItem eventKey="1" href='/solutions'>for Educational publishers</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2" href='/solutions'>for Schools & Teachers</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3" href='/solutions'>for Corporate Training</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="/demo">Demo</NavItem>
          <NavDropdown eventKey={5} title="About us" id="collapsible-navbar-dropdown">
            <MenuItem eventKey="1" href='/about'>Team</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2" href='/about'>Partners</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3" href='/about'>Jobs</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4" href='/contact'>Contact</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

LfwdNav.displayName = 'LfwdNav';
