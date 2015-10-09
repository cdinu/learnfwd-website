import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import styles from './nav.css';

// <Link to="/">Home</Link>
// <Link to="/solutions">Solutions</Link>
// <Link to="/demo">Demo</Link>
// <Link to="/about">About us</Link>
// <Link to="/contact">Contact</Link>
export default class LfwdNav extends Component {
  render() {
    return (
      <Navbar inverse toggleNavKey={0}>
        <NavBrand><Link to="/">Learn Forward</Link></NavBrand>
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
          <NavItem eventKey={5} href="/about">About us</NavItem>
          <NavItem eventKey={6} href="/contact">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

LfwdNav.displayName = 'LfwdNav';
