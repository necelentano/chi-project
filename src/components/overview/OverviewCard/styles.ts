const styles = {
  paper: {
    bgcolor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    py: "32px",
    ":hover": {
      borderColor: "primary.main",
      boxShadow: "#DDE2FF 0px 0px 0px 3px",
      "& .MuiTypography-root": { color: "primary.main" },
    },
  },

  title: {
    fontSize: "19px",
    fontWeight: "bold",
    color: "#9FA2B4",
  },
  data: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#252733",
  },
};

export default styles;
