import React, { Component, PropTypes } from 'react';
import Nav from './nav';
import Footer from './footer';

document.setMeta = function docSetMeta(name, content) {
  const meta = document.querySelectorAll('meta[name="' + name + '"]');
  if (!meta.length) {
    return;
  }

  meta[meta.length - 1].setAttribute('content', content);
};

export default class App extends Component {
  componentDidMount() {
    this.updateMeta();
  }

  componentWillReceiveProps() {
    this.updateMeta();
  }

  updateMeta() {
    const meta = this.props.route.meta;
    const path = this.props.location.pathname;

    const what = meta[path] || meta['/'];
    const title = what.title || meta['/'].title;
    const description = what.description || meta['/'].description;
    console.log('tit', title, description);
  }

  render() {
    return (
      <div className={'lfpApp lfp-page-' + this.props.location.pathname.substr(1)}>
        <Nav location={this.props.location} menu={this.props.route.menu}/>
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
  location: PropTypes.object,
  route: PropTypes.object,
};

