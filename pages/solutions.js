import React, { Component } from 'react';
import styles from './solutions.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          Solutions for
        </h1>
        <ul>
          <li>Educational Publishers</li>
          <li>Schools & Teachers / K-12</li>
          <li>Corporate Training</li>
        </ul>
      </div>
    );
  }
}

Page.displayName = 'LfpSolutions';
