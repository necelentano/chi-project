import { PropsWithChildren, Suspense, useState } from "react";

import Box from "@mui/material/Box";

import DashboardSideNav from "../../DashboardSideNav";
import DashboardHeader from "../../DashboardHeader";
import Loader from "../../Loader";

import styles from "./styles";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 255;

const DashLayout = ({ children }: PropsWithChildren) => {
  const isTablet = useMediaQuery("(max-width:899px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={styles.container}>
      <Box component="nav" sx={styles.navigationWrapper(drawerWidth)}>
        {isTablet ? (
          <DashboardSideNav
            PaperProps={styles.sideNavPaperProps(drawerWidth)}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onCloseListItem={handleDrawerToggle}
          />
        ) : (
          <DashboardSideNav
            PaperProps={styles.sideNavPaperProps(drawerWidth)}
            sx={styles.dashboardSideNav}
          />
        )}
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
