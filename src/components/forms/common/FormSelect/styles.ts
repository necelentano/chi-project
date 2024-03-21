const styles = {
  select: (placeholder: string) => ({
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#FCFDFE",
    fontSize: "14px",
    "& .MuiInputBase-input": {
      py: "12px",
    },
    "& .MuiSelect-icon": {
      marginRight: "16px",
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
    "& .MuiSelect-select .notranslate::after": {
      content: `"${placeholder}"`,
      opacity: 0.42,
    },
  }),
};

export default styles;
