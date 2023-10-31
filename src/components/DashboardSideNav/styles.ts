const styles = {
  drawer: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 255,
      boxSizing: "border-box",
      bgcolor: "bgDark.main",
      color: "#DDE2FF",
    },
  },
  toolbar: {
    mt: "18px",
  },
  avatar: {
    width: 32,
    height: 32,
    mr: "12px",
  },
  divider: {
    bgcolor: "#DFE0EB",
    my: "8px",
    opacity: "0.2",
  },
  listItemButton: {
    "&.Mui-selected": {
      bgcolor: "#5f5f5f",
      borderLeft: "3px solid #DDE2FF",
      boxSizing: "border-box",
      paddingLeft: "13px",
      ":hover": {
        bgcolor: "#5f5f5f",
      },
    },
  },
  listItemIcon: {
    color: "#DDE2FF",
  },
};

export default styles;
