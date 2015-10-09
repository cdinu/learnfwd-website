import React, { Component } from 'react';
import styles from './lfa.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          Learn Forward Author (LFA)
        </h1>
      </div>
    );
  }
}

Page.displayName = 'LfpLFA';
