import React, { Component } from 'react';
import { Link } from 'react-router';

import Image from '../components/image';
import styles from './schools.css';

styles.maxwidth = 'mdl-grid ' + styles.maxwidth;
styles.front = 'mdl-grid ' + styles.front;
styles.digitised = 'mdl-grid ' + styles.digitised;
styles.digitisedImage = 'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--12-col-phone ' + styles.digitisedImage;
styles.digitisedContent = 'mdl-cell mdl-cell--9-col mdl-cell--9-col-tablet mdl-cell--12-col-phone ' + styles.digitisedContent;

styles.works = 'mdl-grid ' + styles.works;
styles.worksImage = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.worksImage;
styles.worksContent = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.worksContent;


styles.onOff = 'mdl-grid ' + styles.onOff;
styles.controlClass = 'mdl-grid ' + styles.controlClass;

styles.builtCR = 'mdl-grid ' + styles.builtCR;
styles.builtCRLeft = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.builtCRLeft;
styles.builtCRRight = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.builtCRRight;

styles.onOffLeft = 'mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.onOffLeft;
styles.onOffRight = 'mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.onOffRight;

styles.controlClassLeft = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.controlClassLeft;
styles.controlClassRight = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.controlClassRight;

styles.meetKat = 'mdl-grid ' + styles.meetKat;
styles.meetKatImg = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.meetKatImg;
styles.meetKatText = 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--middle ' + styles.meetKatText;

styles.oneMore = 'mdl-grid ' + styles.oneMore;
styles.oneMoreFigure = 'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--12-col-phone ' + styles.oneMoreFigure;
styles.oneMoreText = 'mdl-cell mdl-cell--9-col mdl-cell--9-col-tablet mdl-cell--12-col-phone ' + styles.oneMoreText;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.schools}>
        <div className={styles.front}>
          <div className={styles.frontImage}>
            <Image src='/img/schools-teacher.png'/>
          </div>
          <h1>Solutions for Schools &amp; Teachers</h1>
          <h2>
            There’s no EdTech without designing digital content &amp; software
            that is reliable and easy to use in an actual classroom.
            <br/>
            We help you keep students engaged and save time in two ways.
          </h2>
        </div>
        <div className={styles.oneMore}>
          <div className={styles.maxwidth}>
          <div className={styles.oneMoreFigure}>
            <span className={styles.circledTwo}>1</span>
          </div>
          <div className={styles.meetKatImg}>
            <img alt="Hypersay" src="bg-dark-1024.png" />
          </div>
          <div>
            <h2 className={styles.oneMoreTextDescription}>
              Say goodbye to traditional PowerPoint presentations and make them truly interactive.
            </h2>
            <h2 className={styles.oneMoreTextDescription}>
              <strong>Hypersay</strong> takes regular PowerPoint and pushes them out live, connects the presenter and presentation with the audience through their own smartphones, tablets or laptops with no app to download – just a simple web URL.
            </h2>
            <h2 className={styles.oneMoreTextDescription}>
              Attendees can write personal notes, or participate in polls, live Q&A, upvote content, or feedback questionnaires.
            </h2>
            <div className={styles.oneMoreTextCtA}>
              <span className={styles.contactUs}>
                <a href="https://www.hypersay.com/">TRY NOW</a>
              </span>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.digitised}>
          <div className={styles.maxwidth}>
          <div className={styles.oneMoreFigure}>
            <span className={styles.circledTwo}>2</span>
          </div>
          <div className={styles.digitisedContent}>
            <h1>Have your content digitised</h1>
            <h2>Designing lessons is part of a teacher’s best work.</h2>
            <h2>
              Why not having your own content digitised and used instead of buying expensive
              paper textbooks?
            </h2>
          </div>
          </div>
        </div>
        <div className={styles.works}>
          <div className={styles.maxwidth}>
          <div className={styles.worksImage}>
            <Image src='/img/schools-responsive.png'/>
          </div>
          <div className={styles.worksContent}>
            <h1>It just works</h1>
            <h2>Your digitised lessons work on all devices.</h2>
            <h2>Laptop, tablet, smartphone, we’ve got you covered.</h2>
            <h2>No need for installations or maintenance. </h2>
          </div>
          </div>
        </div>
        <div className={styles.builtCR}>
          <div className={styles.maxwidth}>
          <div className={styles.builtCRLeft}>
            <h1>Built for classroom</h1>
            <h2>
              Education is a collaborative process and students are able to work
              in groups when solving the quizzes you added to your lessons.
            </h2>
          </div>
          <div className={styles.builtCRRight}>
            <Image src='/img/schools-collaborative.png'/>
          </div>
          </div>
        </div>
        <div className={styles.onOff}>
          <div className={styles.maxwidth}>
          <div className={styles.onOffLeft}>
            <Image src='/img/schools-wireless.png'/>
          </div>
          <div className={styles.onOffRight}>
            <h1>Online &amp; Offline</h1>
            <h2>What if the internet fails?</h2>
            <h2>
              You can keep teaching your lesson: the lessons and all solved
              exercises are automatically saved in everyone’s browser.
            </h2>
          </div>
          </div>
        </div>
        <div className={styles.controlClass}>
          <div className={styles.maxwidth}>
          <div className={styles.controlClassLeft}>
            <h1>Control your class</h1>
            <h2>
              Start a virtual classroom from your own lesson. No sign-up for you
              or your students required. See who’s paying attention (or not).
            </h2>
            <br></br>
            <h2>The simplest tool you will find.</h2>
          </div>
          <div className={styles.controlClassRight}>
            <Image src='/img/schools-control-your-class.png'/>
          </div>
          </div>
        </div>
        <div className={styles.meetKat}>
          <div className={styles.maxwidth}>
          <div className={styles.meetKatImg}>
            <Image src='/img/schools-kat.png'/>
          </div>
          <div className={styles.meetKatText}>
            <h1 className={styles.meetKatTextTitle}>Meet Kat, your newest TA</h1>
            <h2 className={styles.meetKatTextDescription}>
              She is there when your’re not.
            </h2>
            <h2 className={styles.meetKatTextDescription}>
              Kat helps your students with their progress,
              celebrates their accomplishments
              and encourages them to go further.
            </h2>
          </div>
          </div>
        </div>
        <div className={styles.getInTouch}>
          <h1>
            Get in touch with us
          </h1>
          <h2>
            If you like what you see don’t hesitate to contact us.<br/>
            We’ll discuss your needs and our services, plus we can do a proper demo&nbsp;for&nbsp;you.
          </h2>
          <span className={styles.contactUs}>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </div>
        <div className={styles.bottomSpacer} />
      </div>
    );
  }
}

Page.displayName = 'LfSchools';
