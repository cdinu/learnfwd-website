import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Menu, MenuItem } from 'react-mdl';
import styles from './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout className={styles.layout}>
            <Header transparent={true} title="Learn Forward" style={{ color: 'white' }}>
              <Navigation>
                <Link to="/">Home</Link>
                <a href='#' name="more_vert" id="demo-menu-lower-left">Products</a>
                <Menu target="demo-menu-lower-left">
                  <MenuItem>
                    <Link to="/about">Learn Forward Author</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/about">Learn Forward Platform</Link>
                  </MenuItem>
                </Menu>
                <Link to="/solutions">Solutions</Link>
                <Link to="/demo">Demo</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Content />
          </Layout>
        </div>
      </div>

    );
  }
}

Nav.displayName = 'LfwdNav';
