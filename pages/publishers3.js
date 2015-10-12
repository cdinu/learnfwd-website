import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './publishers3.css';
import Image from '../components/image';

styles.front = 'mdl-grid ' + styles.front;
styles.frontImage = 'mdl-cell mdl-cell--6-col ' + styles.frontImage;
styles.evolving = 'mdl-grid ' + styles.evolving;
styles.evolvingLeft = 'mdl-cell mdl-cell--7-col ' + styles.evolvingLeft;
styles.evolvingRight = 'mdl-cell mdl-cell--5-col ' + styles.evolvingRight;
styles.classroomM = 'mdl-grid ' + styles.classroomM;
styles.classroomMleft = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.classroomMleft;
styles.classroomMright = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.classroomMright;
styles.kat = 'mdl-grid ' + styles.kat;
styles.katImage = 'mdl-cell mdl-cell--4-col mdl-cell--8-col-phone ' + styles.katImage;
styles.katContent = 'mdl-cell mdl-cell--8-col ' + styles.katContent;
styles.control = 'mdl-grid ' + styles.control;
styles.controlLeft = 'mdl-cell mdl-cell--6-col ' + styles.controlLeft;
styles.controlRight = 'mdl-cell mdl-cell--6-col ' + styles.controlRight;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.publishers}>
        <div className={styles.front}>
          <div className={styles.frontImage}>
            <Image src='/img/solutions-for-educational-publishers.png'/>
          </div>
          <h1>Solutions for Educational Publishers</h1>
          <h2>You have the content.</h2>
          <h2>We add digitisation services, real-time technology and proven expertise.</h2>
          <h2>Together we create the best digital textbooks.</h2>
        </div>
        <div className={styles.evolving}>
          <div className={styles.evolvingLeft}>
            <h1>Textbooks are evolving.</h1>
            <h2>PDFs & ePubs are not genuine digital textbooks and your customers know that.</h2>
          </div>
          <div className={styles.evolvingRight}>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/pdf-icon.png' />
              </div>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/epub-icon.png' />
              </div>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/lfa-icon.png' />
              </div>
            </div>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElementBottom}>
                <span>static layout</span>
              </div>
              <div className={styles.evolvingRightElementBottom}>
                <span>no digital exercises only fit for individual studying</span>
              </div>
              <div className={styles.evolvingRightElementBottom}>
                <span>collaborative classroom-ready context-aware</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.classroomM}>
          <div className={styles.classroomMleft}>
            <div className={styles.vcenter}>
              <h1>Classroom management</h1>
              <h2>Embedded tools for creating and joining virtual classrooms. </h2>
              <h2>From inside the textbook!</h2>
            </div>
          </div>
          <div className={styles.classroomMright}>
            <Image src='/img/publishers-classroom-management-image.png'/>
          </div>
        </div>
        <div className={styles.kat}>
          <div className={styles.katImage}>
            <Image src='/img/publishers-meet-kat.png'/>
          </div>
          <div className={styles.katContent}>
            <h1>Meet Kat</h1>
            <h2>Learning should be fun!</h2>
            <h2>We have added Kat, the teaching assistant. She knows when you struggle with an exercise, can offer suggestions and congratulates you when you make progress.</h2>
            <br/>
            <h2>Careful, though, she also gets mad! </h2>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.controlLeft}>
            <h1>Stay in control</h1>
            <h2>Most solution-providers tie you in to their proprietary software. We use open-source standards and give you the largest possible degree of freedom. </h2>
          </div>
          <div className={styles.controlRight}>
            <h1>Custom developments</h1>
            <h2>We are open to making integration with your LMS (i.e. for account management) or any other custom developements. </h2>
          </div>
        </div>
        <div className={styles.getDemo}>
          <h1>We work with publishers big and small</h1>
          <h2>If you like what you see don’t hesitate to contact us.</h2>
          <h2>We’ll discuss your needs and our services, plus we can do a proper demo for you. </h2>
          <span className={styles.getDemoButton}>
            <Link to='/demo'>GET A DEMO</Link>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfPublishers';


