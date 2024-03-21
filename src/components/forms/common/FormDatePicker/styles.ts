const styles = {
  textField: {
    input: {
      "&::placeholder": {
        opacity: "0.42",
      },
    },
    color: "red",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#FCFDFE",
    fontSize: "14px",
    "& .MuiInputBase-input": {
      py: "12px",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid",
        borderColor: "#F0F1F7",
        borderRadius: "8px",
      },
      "&:hover fieldset": {
        borderColor: "#F0F1F7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#212121",
      },
      "&.Mui-error fieldset": {
        borderColor: "red",
      },
    },
  },
  openPickerButton: {
    mr: "0px",
  },
};

export default styles;
