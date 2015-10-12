import React, { Component } from 'react';

import styles from './publishers1.css';
import Image from '../components/image';


styles.fluid = 'mdl-grid ' + styles.fluid;
styles.fluidLeft = 'mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet ' + styles.fluidLeft;
styles.fluidRight = 'mdl-cell mdl-cell--7-col mdl-cell--12-col-tablet ' + styles.fluidRight;

styles.collaborative = 'mdl-grid ' + styles.collaborative;
styles.collaborativeLeft = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.collaborativeLeft;
styles.collaborativeRight = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.collaborativeRight;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.publishers}>
        <div className={styles.fluid}>
          <div className={styles.fluidLeft}>
            <Image src='/img/publishers-fluid-image.png'/>
          </div>
          <div className={styles.fluidRight}>
            <Image src='/img/publishers-fluid-layout.png'/>
            <h1>Fluid Layout</h1>
            <h2>Your content can retain 90% of the print layout.</h2>
            <h2>And still adapt for all screen sizes.</h2>
          </div>
        </div>
        <div className={styles.collaborative}>
          <div className={styles.collaborativeLeft}>
            <h1>Collaborative</h1>
            <h2>Education is a social process.</h2>
            <h2> We create textbooks that benefit from technologies, making them fit for modern classrooms where people learn together.</h2>
          </div>
          <div className={styles.collaborativeRight}>
            <Image src='/img/publishers-collaborative.png' />
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfPublishers1';


