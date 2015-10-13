import React, { Component } from 'react';
import styles from './404.css';
import Image from '../components/image';
import { Link } from 'react-router';
import DemoButton from '../components/demo-button.js';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Image src='/img/404.png'/>
        <h4>The page you&apos;re trying to reach doesn&apos;t exist.</h4>
        <p>Go back to <Link to='/'>learnfwd.com</Link> or <Link to='/contact'>contact us</Link> about the problem.</p>
        <DemoButton>ceva</DemoButton>
      </div>
    );
  }
}

Page.displayName = 'Lfp404';
