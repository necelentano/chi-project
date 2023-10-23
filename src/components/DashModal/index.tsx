import { Modal } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../utils/hooks/redux";
import { setModalOpen } from "../../store/modalSlice";

const DashModal = ({ isOpen, handleClose, children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(setModalOpen(false));
    };
  }, [dispatch]);
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
