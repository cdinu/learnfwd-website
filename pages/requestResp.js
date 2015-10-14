import React, { Component } from 'react';
import styles from './requestResp.css';
import Image from '../components/image';

styles.requestBox = 'mdl-grid ' + styles.requestBox;
styles.requestTitle = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestTitle;
styles.requestImage = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestImage;
styles.requestForm = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestForm;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.requestPage}>
        <div className={styles.requestBox}>
          <h1 className={styles.requestTitle}> Request a Demo</h1>
          <div className={styles.requestImage}>
            <Image src='/img/hand-pointing-down.png' />
          </div>
          <h2>Request sent</h2>
          <h2>successfully</h2>
          <div className={styles.tickImage}>
            <Image src='/img/tick.png' />
          </div>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpRequest';
