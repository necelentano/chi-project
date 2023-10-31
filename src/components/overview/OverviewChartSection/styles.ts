const styles = {
  paper: {
    bgcolor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  paperIsMobile: {
    flexDirection: "column",
  },
  chartSectionWrapper: {
    width: "100%",
  },
  chartSectionHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    padding: "32px",
  },
  chartSectionHeaderWrapperIsMobile: {
    alignItems: "center",
    flexDirection: "column",
  },
  leftSideTitle: {
    fontSize: "19px",
    fontWeight: "700",
    color: "#252733",
    mb: "4px",
  },
  leftSideDate: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#9FA2B4",
  },
  leftSideWrapper: {
    mb: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  colorIndicatorWrapper: {
    display: "flex",
  },
  colorIndicator: (bgcolor: string) => ({
    fontSize: "12px",
    fontWeight: "600",
    color: "#9FA2B4",
    position: "relative",
    ml: "40px",
    "&:before": {
      bgcolor,
      content: '""',
      display: "block",
      height: "2px",
      width: "16px",
      position: "absolute",
      top: "8px",
      left: "-24px",
    },
  }),
  overviewSummary: {
    maxWidth: "340px",
    width: "100%",
    borderLeft: "1px solid #DFE0EB",
    "& .MuiBox-root:last-of-type": {
      borderBottom: 0,
    },
  },
  overviewSummaryIsMobile: {
    maxWidth: "100%",
    borderLeft: "none",
    "& .MuiBox-root:first-of-type": {
      borderTop: "1px solid #DFE0EB",
    },
  },
};

export default styles;
