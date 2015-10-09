import React, { Component } from 'react';
import styles from './contact.css';
export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.example}>
          Contact
        </h1>
        <p>
          - email: hello@learnfwd.com
          - address: c/o Saffery Champness, Lion House, Red Lion Street, London, WC1R 4GB, UK
          - 32 Naval House, 6 Victory Parade, Plumstead Road, London, SE18 6FN, UK
          - VAT: GB 216 7298 91
          - register number: 09401061
        </p>
      </div>

    );
  }
}

Page.displayName = 'LfpContact';

