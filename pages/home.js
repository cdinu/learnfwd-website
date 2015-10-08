import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          HomePage
          <img src='/img/food.jpg' />
        </h1>
      </div>
    );
  }
}

Page.displayName = 'LfpHome';
