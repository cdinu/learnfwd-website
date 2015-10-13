import React, { Component, PropTypes } from 'react';
import styles from './demo-modal.css';

export default class DemoModal extends Component {
  render() {
    return (
      <div>
        <div className={styles.overlay}>
          <div className={styles.card}>
            <div className={styles.close}>Close</div>
          </div>
        </div>
      </div>
      );
  }
}

DemoModal.displayName = 'LfDemoModal';
DemoModal.propTypes = {
  onClose: PropTypes.func,
};
