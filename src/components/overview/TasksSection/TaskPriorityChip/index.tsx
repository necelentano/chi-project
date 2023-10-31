import { Chip } from "@mui/material";
import { TaskLabelEnum } from "../../../../utils/types";

import styles from "./styles";

type TCommonChipProps = {
  label: TaskLabelEnum;
};

const CommonChip = ({ label }: TCommonChipProps) => {
  let bgColor = "";
  let textColor = "";

  switch (label) {
    case TaskLabelEnum.New:
      bgColor = "#29CC97";
      textColor = "#FFFFFF";
      break;
    case TaskLabelEnum.Urgent:
      bgColor = "#FEC400";
      textColor = "#FFFFFF";
      break;
    default:
      bgColor = "#F0F1F7";
      textColor = "#9FA2B4";
  }

  return <Chip sx={styles.chip(textColor, bgColor)} label={label} />;
};

export default CommonChip;
