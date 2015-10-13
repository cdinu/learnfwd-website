import React, { Component } from 'react';
import styles from './lfa.css';
import { Link } from 'react-router';
styles.lfaThird = 'mdl-grid ' + styles.lfaThird;

export default class Page extends Component {
  render() {
    const style = {
      background: 'url(' + '/img/author-background.png' + ')',
    };
    return (
      <div>
        <div className={styles.lfaFirst} style={style}>
          <h1>
            <span className={styles.faded}>&lt;</span>Author<span className={styles.faded}>/&gt;</span>
          </h1>
          <h2>Professional Authoring Tool</h2>
          <h2>for educational content born digital.</h2>
        </div>
        <div className={styles.lfaSecond}>
          <div className={styles.maxW}>
            <p>We started our quest to make the digital classroom work by creating an authoring tool for a new kind of digital textbook.</p>
          </div>
        </div>
        <div className={styles.lfaThird}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft}>
              <p>Core features</p>
              <p>try them on <Link>Github</Link></p>
            </div>
            <div className={styles.lfaRight}>
              <ul>
                <li>no reader required: your browser is the best reader in the world</li>
                <li>built using open standards: HTML5, CSS, Javascript, Node.js. In fact LearnFwd Author is a node package (try `npm install -g lfa`).</li>
                <li>super-fast command-line tool that uses mainly HTML (jade precompiler) and CSS (stylus precompiler) to produce clean HTML5 textbooks</li>
                <li>works both offline (local folder, CD) and online (on all kinds of web servers)</li>
                <li>automatically saves user&apos;s progress in local storage (all results to exercises, all notes, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lfaForth}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft}>
              <p>Assessment tools</p>
              <p>10+ types of exercises</p>
            </div>
            <div className={styles.lfaRight}>
              <p>Built upon LearnFwd Author but featuring advanced plugins for automatic backup of user’s progress, creating and using complex self-validating exercises and real-time collaborative features tailored for in-Built upon LearnFwd Author but featuring advanced plugins for automatic backup of user’s progress, creating and using complex self-validating exercises and real-time collaborative features tailored for inclassroom use (create / join classrooms, work in groups, share results etc.). Collaborative features require internet connection.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.lfaFifth}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft}>
              <p>Classroom management</p>
              <p>embedded in the textbook</p>
            </div>
            <div className={styles.lfaRight}>
              <ul>
                <li>create classrooms and invite people to join in</li>
                <li>join existing classrooms (regardless of your physical presence)</li>
                <li>discover classrooms based on geographical proximity (using geolocation)</li>
                <li>select a work group inside a classroom to share results and collaborate directly</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lfaSixth}>
          <div className={styles.maxW}>
            <div className={styles.lfaLeft}>
              <p>Teaching assistant</p>
              <p>built in and ready to help</p>
            </div>
            <div className={styles.lfaRight}>
              <ul>
                <li>customised help</li>
                <li>reacts to success / progrss & failure in solving the exercises</li>
                <li>interacts with the student</li>
                <li>especially suited for primary and secondary education</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lfaSeventh}>
          <p>Find more by requesting a demo.</p>
          <span className={styles.getDemoButton}>
            <Link to='/demo'>GET A DEMO</Link>
          </span>
        </div>
      </div>

    );
  }
}

Page.displayName = 'LfpLFA';
