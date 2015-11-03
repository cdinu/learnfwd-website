import React, { Component } from 'react';
import styles from './footer.css';

import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    const sectionStyle = 'mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone';
    return (
      <footer className={'mdl-grid ' + styles.footer} style={{backgroundImage: 'url(/img/ruler.png);', backgroundColor: '#363636', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left', backgroundSize: '100px', margin: 0, color: '#fff', paddingBottom: 40}}>
        <div className={sectionStyle}>
          <strong className='sectionTitle'>Products &amp; services</strong>
          <Link className={styles.sectionLink} to='/authoring-tool'>Learn Forward Author</Link>
          <Link className={styles.sectionLink} to='/platform'>Learn Forward Platform</Link>
        </div>
        <div className={sectionStyle}>
          <strong className='sectionTitle'>Solutions</strong>
          <Link className={styles.sectionLink} to='/publishers'>For Educational Publishers</Link>
          <Link className={styles.sectionLink} to='/schools'>For Teachers &amp; Schools</Link>
          <Link className={styles.sectionLink} to='/corporate'>For Corporate Training</Link>
        </div>
        <div className={sectionStyle}>
          <strong className='sectionTitle'>Company</strong>
          <Link className={styles.sectionLink} to='/team'>Team & Advisors</Link>
          <Link className={styles.sectionLink} to='/contact'>Contact Us</Link>
          {/*
          <Link className={styles.sectionLink} to='lfa'>Press</Link>
          <Link className={styles.sectionLink} to='lfa'>Jobs</Link>
          <Link className={styles.sectionLink} to='lfa'>Investors</Link>
           */}
        </div>
        <div className={sectionStyle}>
          <strong className='sectionTitle'>Learn Forward Limited</strong>
          <span className={styles.sectionLink} to='lfa'>Registered in England and Wales</span>
          <a className={styles.sectionLink} href='https://beta.companieshouse.gov.uk/company/09401061' target='_blank'>Register nr. 9401061</a>
          <a className={styles.sectionLink} href='http://ec.europa.eu/taxation_customs/vies/viesquer.do?ms=GB&iso=GB&vat=216729891' target='_blank'>VAT nr. GB&thinsp;216729891</a>
          <a className={styles.sectionLink} href='mai&#108;t&#111;&#58;hello&#64;%&#55;&#50;&#37;&#54;&#53;a%&#54;4%66w&#37;64%2Ec%6Fm'>&#104;&#101;&#108;&#108;&#111;&#64;re&#97;&#100;fwd&#46;&#99;om</a>
        </div>
      </footer>
    );
  }
}

Footer.displayName = 'LfFooter';

