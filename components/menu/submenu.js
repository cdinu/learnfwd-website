import React, { Component, PropTypes } from 'react';
import MenuItem from './menu-item';
import styles from './submenu.css';

export default class Submenu extends Component {
  items() {
    const itemList = [];
    this.props.items.forEach((item, index) => {
      itemList.push(<MenuItem index={index} key={index} {...item}/>);
    });
    return itemList;
  }

  render() {
    if (!this.props.items || !this.props.items.length) {
      return null;
    }

    return (
      <div className={styles.submenu} style={{display: (this.props.isOpen) ? 'block' : 'none'}}>
        {this.items()}
      </div>
    );
  }
}

Submenu.displayName = 'LfSubmenu';
Submenu.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array,
};
