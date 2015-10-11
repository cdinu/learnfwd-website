import React, { Component } from 'react';
import styles from './footer.css';
// import { Link } from 'react-router';

export default class Footer extends Component {
  renderx() {
    return (
      <footer className={styles.footer + ' ' + styles.textCenter}>
        <p className="sans">proudly created by <a href="http://readfwd.com" target="_blank" className="sans understyle">readfwd.com</a><span> &nbsp;| contact us </span><a href="mailto:hello@readfwd.com" className="sans understyle">hello@readfwd.com</a></p>
        <p className="sans">Learn Forward Limited | 9401061 | registered in England and Wales</p><a href="https://mixpanel.com/f/partner"><img src="https://cdn.mxpnl.com/site_media/images/partner/badge_blue.png" alt="Mobile Analytics"/></a>
      </footer>
    );
  }

  render() {
    return <footer>Footer</footer>;
  }
}

Footer.displayName = 'LfFooter';
