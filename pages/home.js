import React, { Component } from 'react';
import styles from './home.css';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.background}>
          HomePage
        </h1>
        <div className='text-center'>
        <button type="button" className="btn btn-danger navbar-btn">We have bootstrap</button>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpHome';
