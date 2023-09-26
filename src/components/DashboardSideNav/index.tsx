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

interface IUpdatedDrawerProps extends DrawerProps {
  onCloseListItem?: () => void;
}

const DashboardSideNav = (props: IUpdatedDrawerProps) => {
  const { onCloseListItem, ...other } = props;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 255,
          boxSizing: "border-box",
          bgcolor: "bgDark.main",
          color: "#DDE2FF",
        },
      }}
      variant="permanent"
      anchor="left"
      {...other}
    >
      <Toolbar sx={{ mt: "18px" }}>
        <Avatar
          alt="Logo"
          src={logo}
          sx={{ width: 32, height: 32, mr: "12px" }}
        />
        <Typography>Dashboard Kit</Typography>
      </Toolbar>

      <List>
        {navbadItemsList.map((item) => {
          if (item.label === "Divider") {
            return (
              <Divider
                key={item.id}
                sx={{ bgcolor: "#DFE0EB", my: "8px", opacity: "0.2" }}
              />
            );
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
                sx={{
                  "&.MuiListItemButton-root": {},
                  "&.Mui-selected": {
                    bgcolor: "#5f5f5f",
                    borderLeft: "3px solid #DDE2FF",
                    boxSizing: "border-box",
                    paddingLeft: "13px",
                    ":hover": {
                      bgcolor: "#5f5f5f",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#DDE2FF" }}>
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
