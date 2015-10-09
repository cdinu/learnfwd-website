import React, { Component } from 'react';
// import styles from './products.css';
import { Link } from 'react-router';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          Products
        </h1>
        <div className='row'>
          <div className='col-xs-6'>
            <div className='text-center'>
              <Link to='/lfa'><button className ='btn btn-danger'>LFA</button></Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='text-center'>
              <Link to='/lfp'><button className ='btn btn-danger'>LFP</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpProducts';
