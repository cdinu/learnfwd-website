import React, { Component } from 'react';
import styles from './corporate.css';
import Image from '../components/image';
import { Link } from 'react-router';
styles.maxW = 'mdl-grid ' + styles.maxW;
styles.lfaLeft = 'mdl-cell mdl-cell--4-col ' + styles.lfaLeft;
styles.lfaRight = 'mdl-cell mdl-cell--8-col ' + styles.lfaRight;
export default class Page extends Component {
  render() {
    return (
      <div>
        <div className={styles.firstView}>
          <Image src='/img/corporate-abacus.png' />
          <h1>Solutions for Corporate Training</h1>
          <h4>Training can be fun, engaging and not expensive.<br/>Good technology is the key.</h4>
          <span className={styles.contactUsButton}>
            <a href="https://www.hypersay.com">GET STARTED</a>
          </span>
        </div>
        <div className={styles.corporateFirst}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft + ' ' + styles.centerT}>
              <Image src='/img/corporate-cloud.png' />
            </div>
            <div className={styles.lfaRight}>
              <h3>Training materials digitised and accesible through your browser, in the cloud?</h3>
            </div>
          </div>
        </div>
        <div className={styles.corporateSecond}>
          <div className={styles.maxW}>
            <div className={styles.lfaRight}>
              <h3>Hassle-free training groups?</h3>
              <p>Right from inside the course you can start a group. Keep them all connected and engaged. No special setup required.</p>
            </div>
            <div className={styles.lfaLeft + ' ' + styles.centerT}>
              <Image src='/img/corporate-groups.png' />
            </div>
          </div>
        </div>
        <div className={styles.corporateThird}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft + ' ' + styles.centerT}>
              <Image src='/img/corporate-feedback.png' />
            </div>
            <div className={styles.lfaRight}>
              <h3>Instant feedback?</h3>
              <p>Add quizzes and gather feedback right from the course material.<br/>Collect all answers immediately.</p>
            </div>
          </div>
        </div>
        <div className={styles.corporateForth}>
          <div className={styles.maxW}>
            <div className={styles.lfaRight}>
              <h3>Change content on-the-fly!</h3>
              <p>Have some last-minute changes to your course?<br/> You can add content on-the-fly during the training session and the new content gets distributed automatically to your audience.</p>
            </div>
            <div className={styles.lfaLeft + ' ' + styles.centerT}>
              <Image src='/img/corporate-edit.png' />
            </div>
          </div>
        </div>
        <div className={styles.corporateFifth}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft + ' ' + styles.centerT}>
              <Image src='/img/corporate-travel.png' />
            </div>
            <div className={styles.lfaRight}>
              <h3>Cutting travelling costs?</h3>
              <p>In case of emergency (or cost reduction) you can even deliver courses remotely.<br/>And still have a good control of your classroom.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpCorporate';
