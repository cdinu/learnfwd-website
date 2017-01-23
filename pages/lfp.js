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
          <h2>Create beautiful and responsive presentations engaging the audience in real-time</h2>
        </div>
        <div className={styles.lfaSecond}>
          <div className={styles.maxW}>
            <h3>Features:</h3>
            <ul>
              <li><strong>Easy.</strong> Drag & drop your powerpoint presentation.</li>
              <li><strong>Quick.</strong> Add interactions: quize, text question, text section (markdown support), YouTube videos.</li>
              <li><strong>Responsive. </strong>Connect to your presentation on any browser on any device.</li>
              <li><strong>Secure. </strong>All media that you upload is available in your personal media library.</li>
              <li><strong>Real-time. </strong>Get instant feedback from your audience.</li>
              <li><strong>Polls. </strong>Create beautiful interactive polls in the browser.</li>
              <li><strong>Votes. </strong>Vote casting likes with an awesome like counter.</li>
            </ul>
          </div>
        </div>
        <div className={styles.lfaSeventh}>
          <p>Distract the Distracted!</p>
          <span className={styles.getDemoButton}>
            <Link className={styles.sectionLink} to='/hypersay'>GET STARTED</Link>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpLFP';
