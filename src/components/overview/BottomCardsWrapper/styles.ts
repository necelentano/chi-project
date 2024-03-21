const styles = {
  paper: {
    bgcolor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  cardHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: "20px",
    px: "32px",
    pt: "32px",
  },
  title: {
    color: "#252733",
    fontSize: "19px",
    fontWeight: 700,
    pb: "8px",
  },
  details: {
    color: "#9FA2B4",
    fontSize: "14px",
    fontWeight: 400,
    display: "flex",
  },
  detailsGroup: {
    color: "black",
    fontSize: "14px",
    fontWeight: 400,
    pl: "3px",
  },
  headerButton: {
    "&.MuiButton-text": {
      borderRadius: "8px",
      color: "primary.text",
      textTransform: "capitalize",
      py: "10px",
    },
  },
  headerButtonWrapper: {
    mt: "-8px",
  },
};

export default styles;
