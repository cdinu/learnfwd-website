import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Submenu from './submenu';
import styles from './menu-item.css';

export default class MenuItem extends Component {
  render() {
    let content = this.props.label;
    let menuStyle = styles.menuItem;

    if (this.props.to) {
      if (this.props.to.match(/^http[s]{0,1}:\/\//)) {
        content = (
          <a href={this.props.to}>{content}</a>
        );
      } else {

        content = (
          <Link to={this.props.to}>{content}</Link>
        );
      }
    }
    if (this.props.items && this.props.items.length) {
      content = content + ' ▾';
    }

    if (this.props.isOpen) {
      menuStyle = menuStyle + ' ' + styles.selected;
    }

    return (
      <nav className={menuStyle} onClick={() => this.props.onSelect && this.props.onSelect(this.props.index)}>
        {content}
        <Submenu items={this.props.items} isOpen={!!this.props.isOpen}/>
      </nav>
    );
  }
}

MenuItem.displayName = 'LfMenu';
MenuItem.propTypes = {
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  items: PropTypes.array,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  to: PropTypes.string,
};
