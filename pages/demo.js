import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import styles from './demo.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.example}>
          Demo
        </h1>
        <h3>Features not to miss in the demo:
        </h3>
        <ul>
          <li>Change your automatically assigned name to your real name</li>
          <li>Check out all the great exercises (try to solve them, they are real exercises)</li>
          <li>Create a classroom (you became a teachet this way)</li>
          <li>Get another computer to access the same <a href="http://demo.lfwd.io" target="_blank">demo.lfwd.io</a> and join the classroom you created before (you become a student)</li>
          <li>If you feel adventurous get another tablet or smartphone and connect to the same classroom (another student)</li>
          <li>Select a group from both students (A, let's say) and solve exercises together</li>
          <li>Fun, right? If you liked it (or not) drop us an email at <a href="hello@learnfwd.com?Subject=Hello%20again" target="_top">hello@learnfwd.com</a></li>
        </ul>
        <div className='text-center'>
        <button type="button" className="btn btn-danger navbar-btn"><a href="http://demo.lfwd.io" target="_blank">Open demo</a></button>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpDemo';
