import { useState, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";

import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../utils/hooks/redux";
import { TStoreUser } from "../../utils/types";
import { getHeaderTitle } from "../../utils/helpers";
import DashboardHeaderMenu from "../DashboardHeaderMenu";

import styles from "./styles";
import { useMediaQuery } from "@mui/material";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";

type TDashboardHeader = {
  onToggleSideNav: () => void;
};

const DashboardHeader = ({ onToggleSideNav }: TDashboardHeader) => {
  const user = useAppSelector<TStoreUser>((state) => state.auth.user);
  const location = useLocation();
  const isTablet = useMediaQuery("(max-width:899px)");

  const headerTitle = getHeaderTitle(location.pathname);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={styles.appbar}>
      <Toolbar>
        {isTablet ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onToggleSideNav}
            edge="start"
            sx={styles.mobileMenuIcon}
          >
            <MenuIcon />
          </IconButton>
        ) : null}

        <Box sx={styles.headerContainer}>
          <Box>
            <Typography sx={styles.headerTitle}>{headerTitle}</Typography>
          </Box>

          <Box sx={styles.headerMiddleSectionWrapper}>
            <Box sx={styles.iconsWrapper}>
              <HeaderSearch />
              <HeaderNotification />
            </Box>
            <Divider orientation="vertical" flexItem sx={styles.divider} />
            <Box sx={styles.usernameAvatarWrapper}>
              <Box sx={styles.userNameWrapper}>
                {user?.name ? user.name : "Hello, user"}
              </Box>
              <Box sx={styles.menuWrapper}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      alt={user?.name}
                      src={user?.photo}
                      sx={styles.avatar}
                    />
                  </IconButton>
                </Tooltip>
                <DashboardHeaderMenu
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={handleClose}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
