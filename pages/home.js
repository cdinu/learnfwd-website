import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../components/image';

import styles from './home.css';

styles.solutionCard = [
  'mdl-cell', 'mdl-cell--4-col ',
  styles.card, styles.solutionCard,
].join(' ');

styles.productCard = [
  'mdl-cell', 'mdl-cell--6-col ',
  'mdl-cell--12-col-tablet',
  styles.card, styles.productCard,
].join(' ');

styles.h1 = 'mdl-cell mdl-cell--12-col ' + styles.h1;
styles.pilotImgContainer = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-grid ' + styles.pilotImgContainer;
styles.pilotImg = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className='mdl-grid'>
          <h1 className={styles.h1}>Solutions</h1>
          <div className={'mdl-grid ' + styles.solutionCardContainer}>
            <div className={'mdl-cell--12-col-tablet ' + styles.solutionCard}>
              <div className={styles.imgContainer}>
                <Image src='/img/book.png' />
              </div>
              <h2>Publishers</h2>
              <p>
                Upgrading your textbooks or thinking to start fresh?
                Our technology powers state-of-the-art textbooks in
                ways you didn’t think possible.
              </p>
              <div className={'styles.linkContainer'}>
                <Link to='/publishers'><span>See what we can do</span></Link>
              </div>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.imgContainer}>
                <Image src='/img/teacher.png' />
              </div>
              <h2>Schools &amp; Teachers</h2>
              <p>
                Tired of spending fortunes on useless
                software? We are building a platform
                for lesson planning &amp; delivery.
                <br/>
                Sign up your school for early access.
              </p>
              <div className={'styles.linkContainer'}>
                <Link to='/schools'><span>About the platform</span></Link>
              </div>
            </div>
            <div className={styles.solutionCard}>
              <Image src='/img/abacus.png' />
              <h2>Corporate training</h2>
              <p>
                There’s life beyond spreadsheets,
                docs and powerpoint. Power-up your
                training capacities with exciting and
                engaging tech.
              </p>
              <div className={'styles.linkContainer'}>
                <Link to='/corporate'><span>Find out more</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className={'mdl-grid ' + styles.productSection} style={{backgroundImage: 'url(/img/lamp.png)'}}>
          <h1 className={styles.h1}>Products</h1>
          <div className={'mdl-grid ' + styles.productCardContainer}>
            <div className={styles.productCard}>
              <h2>
                <span className={styles.faded}>&lt;</span>Author<span className={styles.faded}>/&gt;</span>
              </h2>
              <p>Professional Authoring Tool for state-of-the-art digital textbooks.</p>
              <div className={'styles.linkContainer'}>
                <Link to='/lfa'><span>Features and services</span></Link>
              </div>
            </div>
            <div className={styles.productCard}>
              <h2>
                <span className={styles.faded}>◉</span> Platform
              </h2>
              <p>Digital lesson planning &amp; delivery tool.  With a twist.</p>
              <div className={'styles.linkContainer'}>
                <Link to='/lfp'><span>Details and signup</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'mdl-grid ' + styles.pilotsSection}>
          <div className={styles.pilotImgContainer}>
            <div className={styles.pilotImg}><Image src='/img/logo-eton.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-oxford.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-hodder.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-harper.png' /></div>
          </div>
          <div className={styles.pilotImgContainer}>
            <div className={styles.pilotImg}><Image src='/img/logo-tlse.png' style={{width: '45%'}} /><Image src='/img/logo-art.png' style={{width: '45%', float: 'right'}} /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-samsung.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-jar.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-humanitas.png' /></div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfHome';
