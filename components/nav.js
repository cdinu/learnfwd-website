import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './nav.css';
// <nav className={styles.nav}>
//           <Link to='/'>Home</Link>
//           <Link to='/about'>About</Link>
//         </nav>
export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className={'mdl-layout mdl-js-layout mdl-layout--fixed-header' + styles.test}>
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <img src='http://learnfwd.com/assets/img/logo-learnfwd-03.png' className={styles.logoHeader}></img>
              <span className="mdl-layout-title">Learn Forward</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to="/">Home</Link>
                <Link className="mdl-navigation__link" to="/about">About</Link>
                <Link className="mdl-navigation__link" to="/demo">Demo</Link>
                <Link className="mdl-navigation__link" to="/team">Team</Link>
                <Link className="mdl-navigation__link" to="/contact">Contact</Link>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Learn Forward</span>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/">Home</Link>
              <Link className="mdl-navigation__link" to="/about">About</Link>
              <Link className="mdl-navigation__link" to="/demo">Demo</Link>
              <Link className="mdl-navigation__link" to="/team">Team</Link>
              <Link className="mdl-navigation__link" to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

Nav.displayName = 'LfwdNav';
