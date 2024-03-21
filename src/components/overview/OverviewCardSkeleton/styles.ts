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

  titleSkeleton: {
    mb: "10px",
  },
  dataSkeleton: {
    borderRadius: "8px",
    mb: "3px",
  },
};

export default styles;
