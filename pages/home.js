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
styles.pilotImgContainer = 'mdl-cell mdl-cell--4-col mdl-cell--6-tablet mdl-cell--12-col-phone mdl-grid ' + styles.pilotImgContainer;
styles.pilotImg = 'mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--3-col-phone';

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
              <div className={styles.linkContainer}>
                <Link to='/publishers'><span>See what we can do</span></Link>
              </div>
              <div className={styles.spacerCard}></div>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.imgContainer}>
                <Image src='/img/teacher.png' />
              </div>
              <h2>Schools &amp; Teachers</h2>
              <p>
                Tired of spending fortunes on useless
                software? Try Hypersay
                for lesson planning &amp; delivery. Engage your students and gain insight into their learning.
                <br/>
              </p>
              <div className={styles.spacerCard}></div>
              <div className={styles.linkContainer}>
                <Link to='/schools'><span>Discover more</span></Link>
              </div>
            </div>
            <div className={styles.solutionCard}>
              <Image src='/img/abacus.png' />
              <h2>Corporate training</h2>
              <p>
                Power-up your training capacities, engage your audience with interactive polls, solicit questions or comment your slides, and collect feedback on your presentations.
              </p>
              <div className={styles.spacerCard}></div>
              <div className={styles.linkContainer}>
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
                <br></br>
                <Link to='/authoring-tool'><span>Features and services</span></Link>
              </div>
            </div>
            <div className={styles.productCard}>
              <img alt="Hypersay" src="bg-dark-1024.png" />
              <p>All your decks on one platform, ready to be presented to anyone, anywhere, with no app to download – just a simple web URL.</p>
              <div className={'styles.linkContainer'}>
                <Link to='/hypersay'><span>GET STARTED</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'mdl-grid ' + styles.pilotsSection}>
          <div className={styles.pilotImgContainer}>
            <div className={styles.pilotImg}><Image src='/img/logo-eton.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-oxford.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-hodder.png' /></div>
          </div>
          <div className={styles.pilotImgContainer}>
            <div className={styles.pilotImg}><Image src='/img/logo-harper.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-tlse.png' /></div>
            <div className={styles.pilotImg}><Image src='/img/logo-art.png' /></div>
          </div>
          <div className={styles.pilotImgContainer}>
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
