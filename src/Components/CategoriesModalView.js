import React from 'react';
import { Navbar, NavItem, Icon, Button, Modal } from 'react-materialize';

import '../index.css';

const CategoriesModalView = ({modalContent, closeModal}) => (
  <Modal
    modalOptions={{ dismissible: false }}
    open
    id="categoryListModal"
    className="center"
    actions=""
    >
      {modalContent}
      <Button
        id="modalCloseButton"
        style={styles.closeButton}
        onClick={() => closeModal()}
        className="modal-close"
        icon="close">
      </Button>
  </Modal>
);

const styles = {
  buttonContainer: {
    textAlign: 'center'
  },
  closeButton: {
    borderRadius: '50%',
    height: 35,
    width: 35,
    padding: 1,
    textAlign: 'center'
  }
}

export default CategoriesModalView;
