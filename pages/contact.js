import React, { Component } from 'react';
import Image from '../components/image';
import styles from './contact.css';

styles.contact = 'mdl-grid ' + styles.contact;
styles.contactContent = 'mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet ' + styles.contactContent;
// styles.contactImage = 'mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-cell--bottom ' + styles.contactImage;
styles.contactHeader = 'mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet ' + styles.contactHeader;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.contactHeader}>
          <div className={styles.paintingImage}>
            <Image src='/img/logo-painting.png'/>
          </div>
        </div>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Contact</h1>
          <p>
            <strong>Address:</strong> c/o Saffery Champness, Lion House, Red Lion Street, London, WC1R 4GB, UK
          </p>
          <br></br>
          {/* <p>
            32 Naval House, 6 Victory Parade, Plumstead Road, London, SE18 6FN, UK
          </p>
          */}
          <br></br>
          <p>
            <strong>VAT:</strong> GB 216 7298 91
          </p>
          <br></br>
          <p>
            <strong>Register number:</strong> 09401061
          </p>
          <br></br>
          <p>
            <strong>Email to: </strong>
            <a href="mailto:hello@learnfwd.com" target="_top">hello@learnfwd.com</a>
          </p>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpContact';

