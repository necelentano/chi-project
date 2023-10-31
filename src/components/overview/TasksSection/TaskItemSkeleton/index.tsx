import { Box, Skeleton } from "@mui/material";

import styles from "./styles";

const TaskItemSkeleton = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftSideWrapper}>
        <Box sx={styles.circularSkeletonWrapper}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={24}
            height={24}
          />
        </Box>
        <Box sx={styles.lineSkeletonWrapper}>
          <Skeleton animation="wave" height={10} width="70%" />
        </Box>
      </Box>
      <Box sx={styles.rightSideWrapper}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={32}
          width={72}
          sx={styles.rectangularSkeleton}
        />
      </Box>
    </Box>
  );
};

export default TaskItemSkeleton;
