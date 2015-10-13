import React, { Component } from 'react';
import styles from './demo.css';

styles.demoPage = 'mdl-grid ' + styles.demoPage;
styles.demoTitle = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.demoTitle;
styles.demoContent = 'mdl-grid mdl-cell mdl-cell--12-col ' + styles.demoContent;
styles.features = 'mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--middle ' + styles.features;
styles.demoButtons = 'mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--middle ' + styles.demoButtons;
export default class Page extends Component {
  render() {
    return (
      <div className={styles.demoPage}>
        <h1 className={styles.demoTitle}>Demo</h1>
        <div className={styles.demoContent}>
          <div className={styles.features}>
            <h3>Features not to miss in the demo:</h3>
            <ul>
              <li>Change your automatically assigned name to your real name</li>
              <li>Check out all the great exercises (try to solve them, they are real exercises)</li>
              <li>Create a classroom (you became a teachet this way)</li>
              <li>Get another computer to access the same <a href="http://demo.lfwd.io" target="_blank">demo.lfwd.io</a> and join the classroom you created before (you become a student)</li>
              <li>If you feel adventurous get another tablet or smartphone and connect to the same classroom (another student)</li>
              <li>Select a group from both students (A, let's say) and solve exercises together</li>
              <li>Fun, right? If you liked it (or not) drop us an email at <a href="hello@learnfwd.com?Subject=Hello%20again" target="_top">hello@learnfwd.com</a></li>
            </ul>
          </div>  
          <div className={styles.demoButtons}>
            <button className="btn btn-danger navbar-btn" type="button"><a href="http://demo.lfwd.io" target="_blank">Open demo</a></button>
            <br></br>
            <p> or </p>
            <button className="btn btn-danger navbar-btn" type="button"><a href="http://demo.lfwd.io" target="_blank">Request a Demo</a></button>
          </div>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpDemo';
