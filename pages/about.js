import React, { Component } from 'react';
import styles from './about.css';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <h1>About us</h1>
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-sm-4">
            <img src="/public/img/team-dinu.jpg"/>
            <div>Co-Founder</div>
            <h3>CRISTIAN DINU</h3>
            <p>When he felt his corporate days (IBM, Vodafone) had been over, Dinu took up entrepreneurship and never looked back. He founded InfoIdeea in 2006 (ecommerce systems) and became certified project manager. Should that not be enough, he is also recently interested in humanities, particularly history and literature. Check out his <a href="http://cristiandinu.info/" target="_blank">personal webpage </a>(in Romanian).</p>
          </div>
          <div className="col-sm-4">
            <img src="/public/img/team-paul.jpg"/>
            <div>Co-Founder</div>
            <h3>PAUL BALOGH</h3>
            <p>Hes a cross-breed between humanities and technology. He graduated from the Faculty of Philosophy but worked as system administrator, web programmer and web designer. He tried to combine these two in several ways: founded Zeta Books in 2006 (academic publisher); business developer (LibHumanitas, 2009 and Humanitas Digital 2011). Now he is back to entrepreneurship with Read Forward.</p>
          </div>
          <div className="col-sm-4">
            <img src="/public/img/team-leo.jpg"/>
            <div>Content Manager</div>
            <h3>LEONTINA BUDRINCĂ</h3>
            <p>You think you can handle dozens of tasks in a highly stressful environment? You must be Leo’s relative. She has forged her patience in previous jobs leading the intricate affairs of one of the biggest e-commerce websites in Romania and her knowledge regarding online and her skills as team-leader recommended her as a very good project manager, fit for a company where too often creativity challenges good order. We have not been wrong.</p>
          </div>
        </div>
        <h2>Advisors</h2>
        <div className="row">
          <div className="col-sm-4">
            <h3>Angela McFarlane</h3>
            <div>Chief Executive at The College of Teachers UK, researcher in EdTech,international author</div>
          </div>
          <div className="col-sm-4">
            <h3>Charles Cormack</h3>
              <p>business dev investment</p>
          </div>
          <div className="col-sm-4">
            <h3>Owen White</h3>
              <p>20 years ed-tech experience, 11 at Pearson as digital strategy director</p>
          </div>
        </div>
        <h2>Outstanding past team members</h2>
        <div classNameName="row">
          <div className="col-sm-4">
            <img src="/public/img/team-marius.png"/>
            <div>Software Engineer</div>
            <h3>MARIUS PETCU</h3>
            <p>How do you call someone who started (back in highschool, mind you) building his own game engine from scratch? Crazy? Over-ambitious? By age we should call him "junior software engineer". Not by skill, though: javascript, C++, Objective C, software architecture... you name it!</p>
          </div>
          <div className="col-sm-4">
            <img src="/public/img/team-andrei.jpg"/>
            <div>Junior Software Engineer</div>
            <h3>ANDREI CONSTANTINESCU</h3>
            <p>Genuinely curious about web programming, he started in our company from contributions to small projects and quickly graduated to maintaining large websites by himself. He turns provocations into good practice and is progressing immensely. </p>
          </div>
          <div className="col-sm-4">
            <img src="/public/img/team-dana.jpg"/>
            <div>Junior content developer</div>
            <h3>DANA COTORAN</h3>
            <p>Possibly the quietest person youve ever met. Besides that, she is a fast learner: with no previous coding knowledge she managed to handle HTML5 and CSS in no time. She is a also a very good illustrator and she has a keen eye for design. These two skills make her a very good fit to handle HTML content from conversions to layout and colors.</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-sm-4">
            <img src="/public/img/team-theo.jpg/"/>
            <span>Software Engineer</span>
            <h3 className="cursive">THEODOR VĂRARU</h3>
            <p className="small">Do not get fooled by his borderline-hipster-boyish-geekish look. Or by his young age. He is a powerhouse when it comes to modern web development technologies, software development principles, efficient interface programming and the likes. He is strongly opinionated (we regard it as a feature, not a bug) and he has a keen sense of design. Rare stuff when it comes to programmers.</p>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpAbout';
