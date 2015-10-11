import React, { Component, PropTypes } from 'react';

import Image from './image';
import styles from './jumbotron.css';

export default class App extends Component {
  render() {
    return (
      <figure className={styles.jumbotron}>
        <Image role='banner' src='/img/jumbotron.png' />
        <figcaption>Making the Digital Classroom <strong>Work</strong><br/></figcaption>
      </figure>
    );
  }
}

App.displayName = 'LfJumbotron';
App.propTypes = {
  menu: PropTypes.array,
  path: PropTypes.string,
};

