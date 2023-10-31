const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "#F7F8FC",
  },
  navigationWrapper: (drawerWidth: number) => ({
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  }),
  sideNavPaperProps: (drawerWidth: number) => ({
    style: { width: drawerWidth },
  }),
  dashboardSideNav: {
    display: { sm: "block", xs: "none" },
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
