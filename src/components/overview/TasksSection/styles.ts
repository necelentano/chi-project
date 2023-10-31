const styles = {
  container: {
    mt: "9px",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    pl: "32px",
    pr: "44px",
    borderBottom: "1px solid #DFE0EB",
    pb: "16px",
  },
  inputWrapper: {
    width: "100%",
    textOverflow: "ellipsis",
  },
  addTaskButtonWrapper: {
    width: "24px",
    height: "24px",
  },
  iconButton: {
    mt: "-3px",
  },
  taskListWrapper: {
    "& .MuiBox-root:last-of-type": {
      borderBottom: 0,
    },
  },
  skeletonTasksWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
  },
};

export default styles;
