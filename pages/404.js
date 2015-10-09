import React, { Component } from 'react';
import styles from './404.css';

export default class Page extends Component {
  render() {
    return (
      <h1 className={styles.background}>
        404 - Not Found
      </h1>
    );
  }
}

Page.displayName = 'Lfp404';
