import React, { Component } from 'react';
import styles from './lfa.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          Learn Forward Author (LFA) - tool for everyone to try
        </h1>
        <p>
          Our core technology for creating advanced html5 digital textbooks. We keep it open-source and totally free for everybody to use. It is a command-line tool that help you build digital textbook that you can open in your own browser, no server-side or other app needed. Technologies used: HTML5, CSS, Javascript, node.js.
        </p>
        <h3>
          Free to use! <a href="https://github.com/learnfwd/lfa" target="_blank">See on github</a>
        </h3>
        <ul>
          <li>no reader required: your browser is the best reader in the world</li>
          <li>built using open standards: HTML5, CSS, Javascript, Node.js. In fact LearnFwd Author is a node package (try `npm install -g lfa`).</li>
          <li>super-fast command-line tool that uses mainly HTML (jade precompiler) and CSS (stylus precompiler) to produce clean HTML5 textbooks</li>
          <li>works both offline (local folder, CD) and online (on all kinds of web servers)</li>
          <li>automatically saves user's progress in local storage (all results to exercises, all notes, etc.)</li>
        </ul>
      <h1 className={styles.background}>
        LearnFwd Classroom
      </h1>
      <h3>
        Add powerful exercises and collaborative features for in-classroom use
      </h3>
      <p>
        Built upon LearnFwd Author but featuring advanced plugins for automatic backup of user’s progress, creating and using complex self-validating exercises and real-time collaborative features tailored for in-classroom use (create / join classrooms, work in groups, share results etc.). Collaborative features require internet connection.
      </p>
      <h3>
        10+ types of exercises
      </h3>
      <ul>
        <li>"pick one" (single choice)</li>
        <li>"select to highlight" (multiple-choice on all kinds of elements: images, text, buttons)</li>
        <li>"yes/no" (chose whether the statement is true or false)</li>
        <li>"free drawing pad" (automatically saved)</li>
        <li>"validated textline" (free writing areas validated with regular expressions)</li>
        <li>"drag and sort" (arrange items in the correct order: images, lists, boxes, etc.)</li>
        <li>"drag to bucket" (group items that satisfy a certain criterion)</li>
        <li>"split words/sentences" (split a string of text: e.g. split in syllables, add correct punctuation marks, etc.)</li>
        <li>"combine elements" (e.g. combine syllables in words, words in phrases, etc.; validate results based on provided dictionary)</li>
        <li>"connect points" (make the right connections; e.g. labels to photos)</li>
        <li>"arithmetic exercises" (validate results using equations)</li>
      </ul>
    <h3> 
      Classroom features
    </h3>
    <ul>
      <li>create classrooms and invite people to join in</li>
      <li>join existing classrooms (regardless of your physical presence)</li>
      <li>discover classrooms based on geographical proximity (using geolocation)</li>
      <li>select a work group inside a classroom to share results and collaborate directly</li>
    </ul> 
    <h3>
      Avatar
    </h3>
    <ul>
      <li>customised help</li>
      <li>reacts to success / progrss & failure in solving the exercises</li>
      <li>interacts with the student</li>
      <li>especially suited for primary and secondary education</li>
    </ul>
    <h3>
      Backup and restore (experimental)
    </h3> 
    <ul>
      <li>backup your data locally in a file</li>
      <li>restore your data from a local file using another browser</li>
    </ul>
      </div>
    );
  }
}

Page.displayName = 'LfpLFA';
