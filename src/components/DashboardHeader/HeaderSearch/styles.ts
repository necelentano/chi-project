const styles = {
  form: {
    display: "flex",
    flexDirection: "row",
  },
  textField: {
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red !important",
    },
  },
};

export default styles;
