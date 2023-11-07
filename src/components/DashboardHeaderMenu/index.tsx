import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../store/firebaseApi";

import styles from "./styles";

type TDashboardHeaderMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
};

const DashboardHeaderMenu = ({
  anchorEl,
  handleClose,
  open,
}: TDashboardHeaderMenuProps) => {
  const navigate = useNavigate();
  const [logout] = useLogOutMutation();

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: styles.paper,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        onClick={() => {
          handleClose();
          navigate("/settings/reset-password");
        }}
      >
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Reset password
      </MenuItem>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default DashboardHeaderMenu;
