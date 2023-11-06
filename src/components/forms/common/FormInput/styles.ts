const styles = {
  adornmentIconButton: {
    color: "#9FA2B4",
    mr: "2px",
  },
  input: {
    "&.MuiOutlinedInput-root": {
      backgroundColor: "#FCFDFE",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-input": {
      py: "12px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid",
      borderColor: "#F0F1F7",
      borderRadius: "8px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F0F1F7",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#212121",
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
};

export default styles;
