const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "380px",
    px: "32px",
    py: "32px",
    borderRadius: "8px",
  },
  paperIsModal: {
    borderRadius: "0px",
    py: "0px",
  },
  paperIsMobile: {
    maxWidth: "320px",
    px: "12px",
  },
  form: {
    width: "100%",
    mb: "32px",
  },
  topTextWrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  errorTextWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  modalCancelButton: {
    borderRadius: "8px",
    py: "9px",
    mb: "30px",
    "&.MuiButton-text": {
      textTransform: "inherit",
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  isHeight670: {
    height: "500px",
    overflowY: "scroll",
    paddingTop: "35%",
  },
};

export default styles;
