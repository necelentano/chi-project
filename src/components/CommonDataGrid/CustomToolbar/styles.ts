const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  sortButtonWrapper: {
    display: "flex",
    ml: "32px",
  },
  sortButton: {
    mr: "32px",
    borderRadius: "8px",
    py: "6px",
    "&.MuiButton-text": {
      color: "#4B506D",
      textTransform: "capitalize",
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  formControl: {
    m: 1,
    minWidth: 150,
  },
  menuItemIcon: {
    "& .MuiSvgIcon-root": {
      fontSize: 18,
      marginRight: "8px",
    },
  },
  menuItemActive: {
    bgcolor: "primaryLight.main",
  },
  filterButtonWrapper: {
    pr: "32px",
    ml: "auto",
  },
  filterButton: {
    borderRadius: "8px",
    py: "6px",
    "&.MuiButton-text": {
      color: "#4B506D",
      textTransform: "capitalize",
      fontSize: "14px",
      fontWeight: 600,
    },
    "& .MuiDataGrid-filterForm": {
      flexDirection: "column",
      top: "20px",
    },
  },
  formButton: {
    borderRadius: "8px",
    py: "6px",
    "&.MuiButton-text": {
      textTransform: "inherit",
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  modalFormContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default styles;
