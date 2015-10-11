import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
  render() {
    const { className, role, src } = this.props;
    return (
        <img className={className} role={role} src={src}/>
    );
  }
}

Image.displayName = 'LfImage';
Image.propTypes = {
  className: PropTypes.string,
  role: PropTypes.string,
  src: PropTypes.string.isRequired,
};
