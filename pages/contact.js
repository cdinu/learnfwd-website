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
          Email to:
          <a href="hello@learnfwd.com?Subject=Hello%20again" target="_top">hello@learnfwd.com</a>
        </p>
        <p>
          Address: c/o Saffery Champness, Lion House, Red Lion Street, London, WC1R 4GB, UK
        </p>
        <p>
          32 Naval House, 6 Victory Parade, Plumstead Road, London, SE18 6FN, UK
        </p>
        <p>
          VAT: GB 216 7298 91
        </p>
        <p>
          Register number: 09401061
        </p>
      </div>
    );
  }
}

Page.displayName = 'LfpContact';

