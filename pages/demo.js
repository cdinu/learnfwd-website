import React, { Component } from 'react';
import styles from './demo.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.example}>
          Demo
        </h1>
      </div>
    );
  }
}

Page.displayName = 'LfpDemo';
