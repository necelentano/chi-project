import { PropsWithChildren, Suspense, useState } from "react";

import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";

import DashboardSideNav from "../../DashboardSideNav";
import DashboardHeader from "../../DashboardHeader";
import Loader from "../../Loader";

import styles from "./styles";

const drawerWidth = 255;

const DashLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={styles.container}>
      <Box component="nav" sx={styles.navigationWrapper(drawerWidth)}>
        <Hidden smUp>
          <DashboardSideNav
            PaperProps={styles.sideNavPaperProps(drawerWidth)}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onCloseListItem={handleDrawerToggle}
          />
        </Hidden>
        <DashboardSideNav
          PaperProps={styles.sideNavPaperProps(drawerWidth)}
          sx={styles.dashboardSideNav}
        />
      </Box>

      <Box sx={styles.pageContentWrapper}>
        <DashboardHeader onToggleSideNav={handleDrawerToggle} />

        <Box sx={styles.pageContent}>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default DashLayout;
