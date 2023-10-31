const styles = {
  chip: (textColor: string, bgColor: string) => ({
    color: textColor,
    fontSize: "11px",
    fontWeight: 700,
    borderRadius: "8px",
    bgcolor: bgColor,
    "& .MuiChip-label": {
      textTransform: "uppercase",
    },
  }),
};

export default styles;
