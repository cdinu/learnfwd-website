import React, { Component, PropTypes } from 'react';
import styles from './demo-button.css';
import DemoModal from './demo-modal';

export default class DemoButton extends Component {
  setModal(show) {
    this.modalShow = show;
    this.forceUpdate();
  }
  render() {
    const { className, children, style } = this.props;
    let demoModal;
    if (this.modalShow) {
      demoModal = <DemoModal onClose={() => this.setModal(false)}/>;
    }

    return (
      <a className={styles.button + ' ' + className} href='#' onClick={() => this.setModal(true)} style={style}>{children}{demoModal}</a>
    );
  }
}

DemoButton.displayName = 'LfDemoButton';
DemoButton.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};
