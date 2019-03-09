import React from 'react';
import { Navbar, NavItem, Icon, Button, Modal } from 'react-materialize';

import '../index.css';

const ModalForm = ({
  closeModal,
  displayedContent,
  modalTitle
}) => (
  <Modal
    modalOptions={{ dismissible: false }}
    open
    fixedFooter
    style={styles.modal}
    header={[
      <span>
        <Button className="modal-close btn-flat right red-text" onClick={() => { closeModal() }}>
          <Icon>close</Icon>
        </Button>
      </span>,
      <p className="center">{modalTitle}</p>
    ]}>
    <div className="container">
      { displayedContent }
    </div>
  </Modal>
);

const styles = {
  menuItemsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  modal: {
    width: "100%",
    minHeight: "100vh",
    top: 0
  }
};

export default ModalForm;
