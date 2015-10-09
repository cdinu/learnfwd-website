import React, { Component } from 'react';
import styles from './lfp.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          Learn Forward Platform (LFP)
        </h1>
        <h3>Hosted platform for universities that provide on-line, real-time courses</h3>
        <p>Built upon LearnFwd Classroom but featuring a hosted online platform that allows professors to create and customise learning materials using WYSIWYG editors. Add centralised management of students, classes and learning materials and you’ve got yourself a very useful real-time software for higher education.</p>
        <ul>
          <li>Hosted platform (no local server required)</li>
          <li>Simple WYSIWYG editor for educational materials</li>
          <li>Centrally managed accounts for professors & students</li>
          <li>Central catalogues of courses that students can join</li>
          <li>Real-time collaboration among any remote points of access</li>
        </ul>
      </div>
    );
  }
}

Page.displayName = 'LfpLFP';
