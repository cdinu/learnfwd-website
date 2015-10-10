import React, { Component } from 'react';
import styles from './home.css';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.mainStripe}>
        <div style={{ background: 'url(/img/SnailTrail.jpg)', backgroundSize: 'cover' }} className={styles.imgBack}></div>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.callout}>
              <h1><a className={'animateUnderline'} href="#">Making the Digital Classroom Work</a></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpHome';
