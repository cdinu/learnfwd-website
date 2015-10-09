import React, { Component } from 'react';
import styles from './products.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.bg}>
          Products
        </h1>
      </div>
    );
  }
}

Page.displayName = 'LfpProducts';
