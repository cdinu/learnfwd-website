import React, { Component } from 'react';
import styles from './lfp.css';
import { Link } from 'react-router';

export default class Page extends Component {
  render() {
    const style = {
      background: 'url(' + '/img/platform-background.png' + ')',
      backgroundSize: 'cover',
    };
    return (
      <div>
        <div className={styles.lfpFirst} style={style}>
          <h1>
            <span className={styles.faded}>◉</span>Hypersay
          </h1>
          <h2>Create beautiful and responsive presentations engaging the audience in real time</h2>
          <h2> </h2>
        </div>
        <div className={styles.lfaSecond}>
          <div className={styles.maxW}>
            <p><strong>Simply.</strong> Drag & drop your powerpoint presentation @ www.hypersay.com. </p>
            <p><strong>Quick.</strong> Add interactions: quize, text question, text section (markdown support), YouTube videos.</p>
            <p><strong>Responsive. </strong>Connect to your presentation on any browser on any device.</p>
            <p><strong>Secure. </strong>All media that you upload is available in your personal media library.</p>
            <p><strong>Real-time. </strong>Get instant feedback from your audience.</p>
            <p><strong>Polls. </strong>Create beautiful interactive polls in the browser.</p>
            <p><strong>Votes. </strong>Vote casting likes with an awesome like counter.</p>
          </div>
        </div>
        <div className={styles.lfaSeventh}>
          <p>Sign up your school for an early invite.</p>
          <span className={styles.getDemoButton}>
            <Link to='/signup'>SIGN UP</Link>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpLFP';
