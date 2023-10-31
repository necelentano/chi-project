import { Typography, Box } from "@mui/material";

import styles from "./styles";

type TOverviewCardProps = {
  title: string;
  data: string;
};

const SummaryCard = ({ title, data }: TOverviewCardProps) => {
  return (
    <Box sx={styles.сontainer}>
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.data}>{data}</Typography>
    </Box>
  );
};

export default SummaryCard;
