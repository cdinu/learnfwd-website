import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>Jumbotron</div>
    );
  }
}

App.displayName = 'LfHeader';
App.propTypes = {
  menu: PropTypes.array,
  path: PropTypes.string,
};

