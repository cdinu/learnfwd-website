import React, { Component, PropTypes } from 'react';
import MenuItem from './menu-item';

export default class Menu extends Component {
  constructor() {
    super();
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
  }

  onMenuItemSelected(index) {
    if (this.openItem === index) {
      // close menu
      delete this.openItem;
    } else {
      this.openItem = index;
    }


    this.forceUpdate();
  }

  render() {
    const items = [];

    this.props.items.forEach((item, index) => {
      items.push(
        <MenuItem
          index={index}
          key={index}
          isOpen={this.openItem === index}
          onSelect={this.onMenuItemSelected}
          {...item}
        />
      );
    });

    return (
      <nav>{items}</nav>
    );
  }
}

Menu.displayName = 'LfMenu';
Menu.propTypes = {
  items: PropTypes.array.isRequired,
};
