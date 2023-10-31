import Drawer, { DrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

import { navbadItemsList } from "./consts/navbarItemsList";
import logo from "../../assets/logo.svg";

import styles from "./styles";

interface IUpdatedDrawerProps extends DrawerProps {
  onCloseListItem?: () => void;
}

const DashboardSideNav = (props: IUpdatedDrawerProps) => {
  const { onCloseListItem, ...other } = props;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left" {...other}>
      <Toolbar sx={styles.toolbar}>
        <Avatar alt="Logo" src={logo} sx={styles.avatar} />
        <Typography>Dashboard Kit</Typography>
      </Toolbar>

      <List>
        {navbadItemsList.map((item) => {
          if (item.label === "Divider") {
            return <Divider key={item.id} sx={styles.divider} />;
          }
          return (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => {
                onCloseListItem && onCloseListItem();
                navigate(item.route);
              }}
            >
              <ListItemButton
                selected={location.pathname.includes(item.route)}
                sx={styles.listItemButton}
              >
                <ListItemIcon sx={styles.listItemIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default DashboardSideNav;
