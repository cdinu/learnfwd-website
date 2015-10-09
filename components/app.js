import React, { Component, PropTypes } from 'react';
import Nav from './nav';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='lfpApp'>
        <aside>
          <Nav/>
        </aside>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

App.displayName = 'lfpApp';
App.propTypes = {
  children: PropTypes.object,
};

