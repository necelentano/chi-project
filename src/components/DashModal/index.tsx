import { Modal } from "@mui/material";
import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../../utils/hooks/redux";
import { setModalOpen } from "../../store/modalSlice";

type TDashModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const DashModal = ({
  isOpen,
  handleClose,
  children,
}: PropsWithChildren<TDashModalProps>) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(setModalOpen(false));
    };
  }, [dispatch]);
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <>{children}</>
    </Modal>
  );
};

export default DashModal;
