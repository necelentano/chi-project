import { Paper, Skeleton } from "@mui/material";

import styles from "./styles";

const OverviewCardSkeleton = () => {
  return (
    <Paper variant="outlined" sx={styles.paper}>
      <Skeleton
        animation="wave"
        height={30}
        width="30%"
        sx={styles.titleSkeleton}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={46}
        width={72}
        sx={styles.dataSkeleton}
      />
    </Paper>
  );
};

export default OverviewCardSkeleton;
