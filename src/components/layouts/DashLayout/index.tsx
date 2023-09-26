import { PropsWithChildren, useState } from "react";

import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";

import DashboardSideNav from "../../DashboardSideNav";
import DashboardHeader from "../../DashboardHeader";

const drawerWidth = 255;

const DashLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#F7F8FC" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Hidden smUp>
          <DashboardSideNav
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onCloseListItem={handleDrawerToggle}
          />
        </Hidden>
        <DashboardSideNav
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{
            display: { sm: "block", xs: "none" },
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 255,
              boxSizing: "border-box",
              bgcolor: "bgDark.main",
              color: "#DDE2FF",
            },
          }}
        />
      </Box>

      <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <DashboardHeader onToggleSideNav={handleDrawerToggle} />

        <Box sx={{ bgcolor: "#F7F8FC" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashLayout;
