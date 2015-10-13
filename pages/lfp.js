import React, { Component } from 'react';
import styles from './lfp.css';
import { Link } from 'react-router';

export default class Page extends Component {
  render() {
    const style = {
      background: 'url(' + '/img/platform-background.png' + ')',
    };
    return (
      <div>
        <div className={styles.lfpFirst} style={style}>
          <h1>
            <span className={styles.faded}>◉</span>Platform
          </h1>
          <h2>Digital lesson planning & </h2>
          <h2>delivery tool.</h2>
          <h2>With a twist.</h2>
        </div>
        <div className={styles.lfaSecond}>
          <div className={styles.maxW}>
            <p>We are currently working on a platform that allows teachers to create, adapt and deliver lessons in a very straightforward manner.</p>
          </div>
        </div>
        <div className={styles.lfaSeventh}>
          <p>Sign up your school for an early invite.</p>
          <span className={styles.getDemoButton}>
            <Link to='/contact'>SIGN UP</Link>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpLFP';
