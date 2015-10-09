import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './nav.css';

// <Link to="/">Home</Link>
// <Link to="/solutions">Solutions</Link>
// <Link to="/demo">Demo</Link>
// <Link to="/about">About us</Link>
// <Link to="/contact">Contact</Link>
export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar test navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" dataToggle="collapse" dataTarget="#bs-example-navbar-collapse-1" ariaExpanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Learn Forward</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/contact">Contact</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" dataToggle="dropdown" role="button" ariaHaspopup="true" ariaExpanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

Nav.displayName = 'LfwdNav';
