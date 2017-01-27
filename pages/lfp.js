import React, { Component } from 'react';
import styles from './lfp.css';

export default class Page extends Component {
  render() {
    const style = {
      background: 'url(' + '/img/platform-background.png' + ')',
      backgroundSize: 'cover',
    };
    return (
      <div>
        <div className={styles.lfpFirst} style={style}>
          <img alt="Hypersay" className={styles.hypersayImg} src="bg-dark-1024.png" />
          <h2>Turn your powerpoint file into an engaging presentation featuring real-time interactions with your audience</h2>
        </div>
        <div className={styles.lfaSecond}>
          <div className={styles.maxW}>
            <h3 className={styles.featuresTitle}>Features:</h3>
            <ul className={styles.hsFeaturesList}>
              <li><strong>Easy.</strong> Drag & drop to upload your powerpoint presentation to the cloud</li>
              <li><strong>Quick.</strong>Add interactions: quizzes, text questions, further text (markdown support), YouTube videos</li>
              <li><strong>Responsive.</strong>Connect to your presentation on any browser on any device.</li>
              <li><strong>Real-time.</strong>Get instant feedback from your audience using:
                <ul className={styles.hsFeaturesList2}>
                  <li>Polls: Create beautiful interactive polls / quizzes in the browser under each slide</li>
                  <li>Likes: Receive likes (as hearts) from the audience in real-time</li>
                  <li>Questions: Have you audience type answers that reach you in real-time (as they type, really!)</li>
                </ul>
              </li>
              <li><strong>Augmentation.</strong> Add more information to your slides as text sections (markdown available) or YouTube videos.</li>
              {/* <li><strong>Polls.</strong>Create beautiful interactive polls in the browser.</li>
              <li><strong>Votes.</strong>Vote casting likes with an awesome like counter.</li>*/}
            </ul>
          </div>
        </div>
        <div className={styles.lfaSeventh}>
          <p>Distract the Distracted!</p>
          <span className={styles.getDemoButton}>
            <a href="https://www.hypersay.com">GET STARTED</a>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpLFP';
