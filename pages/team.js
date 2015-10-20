import React, { Component } from 'react';
import styles from './team.css';
import Image from '../components/image';
styles.teamMax = 'mdl-grid ' + styles.teamMax;
styles.teamFirst = 'mdl-grid ' + styles.teamFirst;
styles.teamCo = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.teamCo;

export default class Page extends Component {
  render() {
    return (
      <div>
        <div className={styles.teamCt}>
        <h1 className={styles.mainh1}>Team</h1>
          <div className={styles.teamMax}>
            <div className={styles.teamCo}>
              <Image src='/img/team/paul.png'/>
              <h1>Paul Balogh</h1>
              <p>Co-founder & CEO</p>
              <div className={styles.socialM}>
                <a href='https://www.linkedin.com/in/paulbalogh'><Image src='/img/team/linkedin.png'/></a>
                <a href='https://twitter.com/paulbalogh'><Image src='/img/team/twitter.png'/></a>
                <a href='https://www.facebook.com/daseinpaul'><Image src='/img/team/facebook.png'/></a>
              </div>
              <p>He&apos;s a cross-breed between humanities and technology. He graduated from the Faculty of Philosophy but worked as system administrator, web programmer and web designer. He tried to combine these two in several ways: founded Zeta Books in 2006 (academic publisher); business developer (LibHumanitas, 2009 and Humanitas Digital 2011). Now he is back to entrepreneurship with Learn Forward.
              </p>
            </div>
            <div className={styles.teamCo}>
              <Image src='/img/team/dinu.png'/>
              <h1>Cristian Dinu</h1>
              <p>Co-founder & CTO</p>
              <div className={styles.socialM}>
                <a href='https://www.linkedin.com/in/cdinu'><Image src='/img/team/linkedin.png'/></a>
                <a href='https://twitter.com/cdinu'><Image src='/img/team/twitter.png'/></a>
                <a href='https://www.facebook.com/cristian.dinu.infoideea'><Image src='/img/team/facebook.png'/></a>
              </div>
              <p>When he felt his corporate days (IBM, Vodafone) had been over, Dinu took up entrepreneurship and never looked back. He founded InfoIdeea in 2006 (ecommerce systems) and became certified project manager. Should that not be enough, he is also recently interested in humanities, particularly history and literature.
              </p>
              <p>Check out his <a href='http://cristiandinu.info/'>personal webpage</a> (in Romanian)</p>
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
        <div className={styles.teamCt2}>
          <h1 className={styles.mainh1}>Advisors</h1>
          <div className={styles.teamMax}>
            <div className={styles.teamCo}>
              <Image src='/img/team/barrie.png'/>
              <h1>Barrie Heptonstall</h1>
              <p>Barrie has spent 25 years working in senior management roles for a giant US-based technology company, and is an expert on enterprise software sales. He <a href="http://angel.co" target="_blank">angel invests</a> in startups in the UK and California (including Learn Forward).
              </p>
            </div>
            <div className={styles.teamCo}>
              <Image src='/img/team/charles.png'/>
              <h1>Charles Cormack</h1>
              <p>Experienced International Business Development professional, and Chairman of <a href="https://www.ccbaltic.eu" target="_blank">CCG a specialist consultancy</a> working between the UK , Latvia, Lithuania, Russia and Romania.
              </p>
            </div>
            <div className={styles.teamCo}>
              <Image src='/img/team/angela.png'/>
              <h1>Angela McFarlane</h1>
              <p>Angela McFarlane is an international author and practitioner in engagement and learning, an experienced and inspiring leader, respected researcher and thoughtsmith. Her latest book: <a href="#" target="_blank">Authentic Learning for the Digital Generation: Realising the potential of technology in the classroom</a> is a fundamental work for EdTech companies looking to build teacher-proof solutions.
              </p>
            </div>
            <div className={styles.teamCo}>
              <Image src='/img/team/owen.png'/>
              <h1>Owen White</h1>
              <p>Owen has a tremendous 20-year experience in EdTech, 11 with Pearson in several roles including Digital Strategy Director.
              </p>
              <p> He is currently advising and investing in early stage startups through Emerge Education with a special focus on making sure there’s a clear product-market fit, customer-based product development and tested user-experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.teamCt}>
          <h1 className={styles.mainh1}>Past team members</h1>
          <div className={styles.teamMax}>
            <div className={styles.teamCo}>
              <Image src='/img/team/marius.png'/>
              <h1>Marius Petcu</h1>
              <p>Full-stack software engineer</p>
              <p>How do you call someone who started (back in highschool, mind you) building his own game engine from scratch? Crazy? Over-ambitious? By age we should call him "junior software engineer". Not by skill, though: javascript, C++, Objective C, software architecture... you name it!
              </p>
            </div>
            <div className={styles.teamCo}>
              <Image src='/img/team/theo.png'/>
              <h1>Theo Vararu</h1>
              <p>Full-stack software engineer</p>
              <p>Do not get fooled by his borderline-hipster-boyishgeekish look. Or by his young age. He is a powerhouse when it comes to modern web development technologies, software development principles, efficient interface programming and the likes. He is strongly opinionated (we regard it as a feature, not a bug) and he has a keen sense of design.<br/>Rare stuff when it comes to programmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfTeam';


