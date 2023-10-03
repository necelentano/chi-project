import { Chip } from "@mui/material";

type TCommonChipProps = {
  label: string;
};

const CommonChip = ({ label }: TCommonChipProps) => {
  let bgColor = "";
  let textColor = "";

  switch (label) {
    case "new":
      bgColor = "#29CC97";
      textColor = "#FFFFFF";
      break;
    case "urgent":
      bgColor = "#FEC400";
      textColor = "#FFFFFF";
      break;
    default:
      bgColor = "#F0F1F7";
      textColor = "#9FA2B4";
  }

  return (
    <Chip
      sx={{
        color: textColor,
        fontSize: "11px",
        fontWeight: 700,
        borderRadius: "8px",
        bgcolor: bgColor,
        "& .MuiChip-label": {
          textTransform: "uppercase",
        },
      }}
      label={label}
    />
  );
};

export default CommonChip;
