import React, { Component } from 'react';

import styles from './schools2.css';
import Image from '../components/image';
styles.builtCR = 'mdl-grid ' + styles.builtCR;
styles.onOff = 'mdl-grid ' + styles.onOff;
styles.controlClass = 'mdl-grid ' + styles.controlClass;

styles.builtCRLeft = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.builtCRLeft;
styles.builtCRRight = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.builtCRRight;

styles.onOffLeft = 'mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.onOffLeft;
styles.onOffRight = 'mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.onOffRight;

styles.controlClassLeft = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.controlClassLeft;
styles.controlClassRight = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.controlClassRight;
export default class Page extends Component {
  render() {
    return (
      <div className={styles.schools}>
        <div className={styles.builtCR}>
          <div className={styles.builtCRLeft}>
            <h1>Built for classroom</h1>
            <h2>Education is a collaborative process and students are able to work in groups when solving the quizzes you added to your lessons.</h2>
          </div>
          <div className={styles.builtCRRight}>
            <Image src='/img/schools-collaborative.png'/>
          </div>
        </div>
        <div className={styles.onOff}>
          <div className={styles.onOffLeft}>
            <Image src='/img/schools-wireless.png'/>
          </div>
          <div className={styles.onOffRight}>
            <h1>Online & Offline</h1>
            <h2>What if the internet fails?</h2>
            <br></br>
            <h2>You can keep teaching your lesson: the lessons and all solved exercises are automatically saved in everyone’s browser.</h2>
          </div>
        </div>
        <div className={styles.controlClass}>
          <div className={styles.controlClassLeft}>
            <h1>Control your class</h1>
            <h2>Start a virtual classroom from your own lesson. No sign-up for you or your students required. See who’s paying attention (or not).</h2>
            <br></br>
            <h2>The simplest tool you will find.</h2>
          </div>
          <div className={styles.controlClassRight}>
            <Image src='/img/schools-control-your-class.png'/>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfSchools2';
