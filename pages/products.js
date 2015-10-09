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
        <div className="row">
          <div className="col-sm-6">
            <div>
              <h2>What is a context-aware digital textbook?</h2>
              <p>The technology currently used for digital textbooks is ePub3, a file format coming from "classical" ebooks. The thing with classical ebooks is that they are made for solitary reading. Image yourself, late at night, reading "Sense and Sensibility" . It's just you and the book. However this is not the preferred scenario when it comes to education. Education is collaborative: it happens in schools & classrooms, where you have colleagues and teachers, assignments to make, you work in groups, you build common projects. Nothing solitary. </p>
              <p>Dissatisfied with the limitations imposed by ePub3 but happy with the underlying technology (HTML5 & Javascript) we set off to build HTML5 textbooks that know when they are in a classroom, that can work perfectly online  & offline, that connect to classrooms (right from inside the textbook itself).  They save your progress, your answers, they let you work in groups. And all from inside the best "reader" app in the world: your own browser. </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="content content-features">
              <h2>Features</h2>
              <h4>Authoring tool</h4>
              <h4>Collaborative & Real-time</h4>
              <h4>Automatic backup</h4>
              <h4>Offline mode</h4>
              <h4>Advanced Exercises</h4>
              <h4>Hosted Platform</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfpProducts';
