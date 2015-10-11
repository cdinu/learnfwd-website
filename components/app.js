import React, { Component, PropTypes } from 'react';

import Header from './header';
import Footer from './footer';

import styles from './app.css';

document.setMeta = function docSetMeta(name, content) {
  const meta = document.querySelectorAll('meta[name="' + name + '"]');
  if (!meta.length) {
    return;
  }

  meta[meta.length - 1].setAttribute('content', content);
};

export default class App extends Component {
  updateMeta() {
    const meta = this.props.route.meta;
    const path = this.props.location.pathname;

    const what = meta[path] || meta['/'];
    const title = what.title || meta['/'].title;
    const description = what.description || meta['/'].description;
    document.title = title;
    document.setMeta('description', description);
  }

  render() {
    this.updateMeta();
    let path = this.props.location.pathname.substr(1);
    path = path || 'home';
    path = path.replace(/\//g, '-');

    return (
      <section className={styles[path]}>
        <Header menu={this.props.route.menu} path={path} />
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </section>
    );
  }
}

App.displayName = 'LfApp';
App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.object,
};

