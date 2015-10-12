import React, { Component } from 'react';
import styles from './team.css';
import Image from '../components/image';
import { Link } from 'react-router';
styles.teamMax = 'mdl-grid ' + styles.teamMax;
styles.teamFirst = 'mdl-grid ' + styles.teamFirst;
styles.teamCo = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.teamCo;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.teamCt}>
        <div className={styles.teamMax}>
          <div className={styles.teamCo}>
            <Image src='/img/team/Paul.png'/>
            <h1>Paul Balogh</h1>
            <p>Co-founder & CEO</p>
            <p>He&apos;s a cross-breed between humanities and technology. He graduated from the Faculty of Philosophy but worked as system administrator, web programmer and web designer. He tried to combine these two in several ways: founded Zeta Books in 2006 (academic publisher); business developer (LibHumanitas, 2009 and Humanitas Digital 2011). Now he is back to entrepreneurship with Learn Forward.
            </p>
          </div>
          <div className={styles.teamCo}>
            <Image src='/img/team/Dinu.png'/>
            <h1>Cristian Dinu</h1>
            <p>Co-founder & CTO</p>
            <p>When he felt his corporate days (IBM, Vodafone) had been over, Dinu took up entrepreneurship and never looked back. He founded InfoIdeea in 2006 (ecommerce systems) and became certified project manager. Should that not be enough, he is also recently interested in humanities, particularly history and literature.
            </p>
            <p>Check out his <Link to='http://cristiandinu.info/'>personal webpage</Link> (in Romanian)</p>
          </div>
        </div>
        <div className={styles.teamFirst}>
          <div className='mdl-cell mdl-cell--4-col'>
            <Image src='/img/team/leo.png'/>
            <h1>Leo Budrincă</h1>
            <p>Content Manager</p>
          </div>
          <div className='mdl-cell mdl-cell--4-col'>
            <Image src='/img/team/iulian.png'/>
            <h1>Iulian Savin</h1>
            <p>Junior Web Developer</p>
          </div>
          <div className='mdl-cell mdl-cell--4-col'>
            <Image src='/img/team/mara.png'/>
            <h1>Mara Predescu</h1>
            <p>Junior Frontend Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfTeam';


