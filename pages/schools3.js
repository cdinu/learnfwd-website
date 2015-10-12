import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './schools3.css';

import Image from '../components/image';

styles.meetKat = 'mdl-grid ' + styles.meetKat;
styles.meetKatImg = 'mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-phone ' + styles.meetKatImg;
styles.meetKatText = 'mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--12-col-phone ' + styles.meetKatText;

styles.oneMore = 'mdl-grid ' + styles.oneMore;
styles.oneMoreFigure = 'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--12-col-phone ' + styles.oneMoreFigure;
styles.oneMoreText = 'mdl-cell mdl-cell--9-col mdl-cell--9-col-tablet mdl-cell--12-col-phone ' + styles.oneMoreText;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.schools}>
        <div className={styles.meetKat}>
          <div className={styles.meetKatImg}>
            <Image src='/img/schools-kat.png'/>
          </div>
          <div className={styles.meetKatText}>
            <h1 className={styles.meetKatTextTitle}>Meet Kat, your newest TA</h1>
            <h2 className={styles.meetKatTextDescription}>
              She is there when your’re not.
            </h2>
            <h2 className={styles.meetKatTextDescription}>
              Kat helps your students with their progress,
              celebrates their accomplishments
              and encourages them to go further.
            </h2>
          </div>
        </div>
        <div className={styles.getInTouch}>
          <h1>
            Get in touch with us
          </h1>
          <h2>
            If you like what you see don’t hesitate to contact us.<br/>
            We’ll discuss your needs and our services, plus we can do a proper demo&nbsp;for&nbsp;you.
          </h2>
          <span className={styles.contactUs}>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </div>
        <div className={styles.oneMore}>
          <div className={styles.oneMoreFigure}>
            <span className={styles.circledTwo}>2</span>
          </div>
          <div className={styles.oneMoreText}>
            <h1 className={styles.oneMoreTextTitle}>
              One more thing… the platform!
            </h1>
            <h2 className={styles.oneMoreTextDescription}>
              The tools we use to create lessons for you are
              complex and require coding knowledge.
              <br />
              But we want to bring this power in the hands of
              teachers so we are creating an online platform to
              allow teachers to do digital lesson-planning.
            </h2>
            <h2 className={styles.oneMoreTextDescription}>
              With a twist.
            </h2>
            <div className={styles.oneMoreTextCtA}>
              <span className={styles.contactUs}>
                <Link to='/contact'>Contact Us</Link>
              </span>
              <span> as a teacher or a school for early access.</span>
            </div>
          </div>
        </div>
        <div className={styles.bottomSpacer} />
      </div>
    );
  }
}

Page.displayName = 'LfSchools3';
