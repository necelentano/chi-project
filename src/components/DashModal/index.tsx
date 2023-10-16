import { Modal } from "@mui/material";
import React from "react";

const DashModal = ({ isOpen, handleClose, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
};

export default DashModal;
