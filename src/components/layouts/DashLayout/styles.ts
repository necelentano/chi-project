const styles = {
  container: {
    display: "flex",
    overflow: "hidden",
    minHeight: "100vh",
    bgcolor: "#F7F8FC",
  },
  navigationWrapper: (drawerWidth: number) => ({
    width: { md: drawerWidth },
    flexShrink: { md: 0 },
  }),
  sideNavPaperProps: (drawerWidth: number) => ({
    style: { width: drawerWidth },
  }),
  dashboardSideNav: {
    display: { lg: "block", md: "block", sm: "none", xs: "none" },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 255,
      boxSizing: "border-box",
      bgcolor: "bgDark.main",
      color: "#DDE2FF",
    },
  },
  pageContentWrapper: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  pageContent: {
    bgcolor: "#F7F8FC",
  },
};

export default styles;
