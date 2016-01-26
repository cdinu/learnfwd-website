import React, { Component, PropTypes } from 'react';
import styles from './request.css';
import Image from '../components/image';

styles.requestBox = 'mdl-grid ' + styles.requestBox;
styles.requestTitle = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestTitle;
styles.requestImage = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestImage;
styles.requestForm = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestForm;

export default class Page extends Component {
  getErrorMessage() {
    if (this.error) {
      return (
        <div className={styles.emailError}>
          Something went wrong. It Amay be our servers or your address. Correct it, try again later or contact us by phone
          or by <a href='mailto:&#104;&#101;&#108;&#108;&#111;&#64;&#108;&#101;&#97;&#114;&#110;&#102;&#119;&#100;&#46;&#99;&#111;&#109;'>email</a>.
        </div>
      );
    }
    return '';
  }

  _send(evt) {
    const self = this;
    evt.preventDefault();
    const email = self.refs.email.value.trim();

    /* global SERVER:true */
    if (!SERVER) {
      const xhttp = new XMLHttpRequest();
      xhttp.open('POST', 'https://emailgw.lfwd.io/', true);
      xhttp.onreadystatechange = function onreadystatechange() {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
          if (xhttp.status === 200) {
            self.error = undefined;
            self.props.history.pushState(null, '/requestResp');
          } else {
            self.error = true;
            self.forceUpdate();
          }
        }
      };
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send('email=' + email);
    }
  }

  render() {
    return (
      <div className={styles.requestPage}>
        <div className={styles.requestBox}>
          <h1 className={styles.requestTitle}> Request a Demo</h1>
          <div className={styles.requestImage}>
            <Image src='/img/hand-pointing-down.png' />
          </div>
          {this.getErrorMessage()}
          <div className={styles.requestForm}>
            <form className={styles.formBox} method='POST' onSubmit={(evt)=> this._send(evt)}>
              <div className={styles.mailImage}>
                <Image src="/img/mail.png" />
              </div>
              <input name='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' placeholder='Email' ref='email' type='email'/>
              <br></br>
              <input type='submit' value='OK' />
            </form>
          </div>
        </div>
        <div className={styles.requestBottomLine}>
          <h2>Or you can try it yourself at <a href="https://demo.lfwd.io" target="_blank" >demo.lfwd.io</a></h2>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpRequest';
Page.propTypes = {
  history: PropTypes.object,
};
