import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './menu.css';

export default class Menu extends Component {
  componentWillMount() {
    const menu = [];

    function addItems(parent, children) {
      children.forEach( (item, index) => {
        const { items, label, to } = item;
        let link = label;
        let submenu;
        const submenuItems = [];

        if (to) {
          link = <Link to={to}>{label}</Link>;
        } else {
          link = <span>{label}</span>;
        }

        if (items) {
          addItems(submenuItems, items);
        }

        if (submenuItems.length) {
          submenu = <ul>{submenuItems}</ul>;
        }

        parent.push(<li key={index}>{link}{submenu}</li>);
      });
    }

    addItems(menu, this.props.items);
    this.menu = <ul className={styles.menu}>{menu}</ul>;
  }

  render() {
    return (
      <nav className={this.props.className} role='navigation'>
        {this.menu}
      </nav>
    );
  }
}

Menu.displayName = 'LfMenu';
Menu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};
