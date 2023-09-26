import { useState, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../utils/hooks/redux";
import { TStoreUser } from "../../utils/types";
import { useGetHeaderTitle } from "../../utils/hooks/getHeaderTitle";
import DashboardHeaderMenu from "../DashboardHeaderMenu";

type TDashboardHeader = {
  onToggleSideNav: () => void;
};

const DashboardHeader = ({ onToggleSideNav }: TDashboardHeader) => {
  const user = useAppSelector<TStoreUser>((state) => state.auth.user);
  const location = useLocation();

  const headerTitle = useGetHeaderTitle(location.pathname);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#F7F8FC" }}>
      <Toolbar>
        <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onToggleSideNav}
            edge="start"
            sx={{ color: "#252733", mt: { xs: "-40px" } }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { sm: "space-between", xs: "flex-start" },
            width: "100%",
            py: "20px",
            flexDirection: { sm: "row", xs: "column-reverse" },
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "bold", color: "#252733" }}
            >
              {headerTitle}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: { xs: "auto" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchIcon
                sx={{ color: "#C5C7CD", width: "22px", height: "22px" }}
              />
              <Badge
                color="primary"
                variant="dot"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "primary",
                    border: "1px solid #F7F8FC",
                  },
                }}
              >
                <NotificationsIcon
                  sx={{
                    color: "#C5C7CD",
                    width: "22px",
                    height: "22px",
                    ml: "25px",
                  }}
                />
              </Badge>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ ml: "32px" }} />
            <Box
              sx={{
                color: "#252733",
                fontSize: "14px",
                ml: "32px",
                fontWeight: "600",
              }}
            >
              {user?.name}
            </Box>
            <Box sx={{ ml: "14px" }}>
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
                    sx={{
                      width: 40,
                      height: 40,
                      border: "2px solid #C5C7CD",
                    }}
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
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
