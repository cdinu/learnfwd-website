import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
import styles from './home.css';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.mainStripe}>
        <div style={{ background: 'url(/img/SnailTrail.jpg)', backgroundSize: 'cover' }} className={styles.imgBack}></div>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.callout}>
              <h1>Making the Digital Classroom Work</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpHome';
