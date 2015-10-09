import React, { Component } from 'react';
import styles from './solutions.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          Solutions for
        </h1>
      </div>
    );
  }
}

Page.displayName = 'LfpSolutions';
