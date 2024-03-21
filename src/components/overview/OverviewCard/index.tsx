import { Paper, Typography } from "@mui/material";

import styles from "./styles";

type TOverviewCardProps = {
  title: string;
  data: number;
};

const OverviewCard = ({ title, data }: TOverviewCardProps) => {
  return (
    <Paper variant="outlined" sx={styles.paper}>
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.data}>{data}</Typography>
    </Paper>
  );
};

export default OverviewCard;
