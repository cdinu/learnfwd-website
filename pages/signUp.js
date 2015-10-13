import React, { Component } from 'react';
import styles from './signUp.css';
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
          <h1 className={styles.requestTitle}> Sign Up <br></br>for early access</h1>
          <div className={styles.requestImage}>
            <Image src='/img/hand-pointing-down.png' />
          </div>
          <div className={styles.requestForm}>
            <form className={styles.formBox}>
              <div className={styles.mailImage}>
                <Image src="/img/mail.png" />
              </div>
              <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Email" />
              <br></br>
              <div className={styles.mailImage}>
                <Image src="/img/school.png" />
              </div>
              <input type="text" name="school" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="School(optional)" />
              <br></br>
              <input type="submit" value="OK" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpSignUp';
