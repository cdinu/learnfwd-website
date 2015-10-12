import React, { Component } from 'react';

import styles from './publishers1.css';
import Image from '../components/image';

styles.front = 'mdl-grid ' + styles.front;
styles.frontImage = 'mdl-cell mdl-cell--6-col ' + styles.frontImage;

styles.evolving = 'mdl-grid ' + styles.evolving;
styles.evolvingLeft = 'mdl-cell mdl-cell--7-col ' + styles.evolvingLeft;
styles.evolvingRight = 'mdl-cell mdl-cell--5-col ' + styles.evolvingRight;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.publishers}>
        <div className={styles.front}>
          <div className={styles.frontImage}>
            <Image src='/img/solutions-for-educational-publishers.png'/>
          </div>
          <h1>Solutions for Educational Publishers</h1>
          <h2>You have the content.</h2>
          <h2>We add digitisation services, real-time technology and proven expertise.</h2>
          <h2>Together we create the best digital textbooks.</h2>
        </div>
        <div className={styles.evolving}>
          <div className={styles.evolvingLeft}>
            <h1>Textbooks are evolving.</h1>
            <h2>PDFs & ePubs are not genuine digital textbooks and your customers know that.</h2>
          </div>
          <div className={styles.evolvingRight}>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/pdf-icon.png' />
              </div>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/epub-icon.png' />
              </div>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/lfa-icon.png' />
              </div>
            </div>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElementBottom}>
                <span>static layout</span>
              </div>
              <div className={styles.evolvingRightElementBottom}>
                no digital exercises only fit for individual studying
              </div>
              <div className={styles.evolvingRightElementBottom}>
                collaborative classroom-ready context-aware
              </div>
            </div>
          </div>
        </div>
        <div className={styles.front}>
          &nbsp;
        </div>


      </div>
    );
  }
}

Page.displayName = 'LfPublishers';


