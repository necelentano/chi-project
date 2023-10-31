import { Box, Skeleton } from "@mui/material";

import styles from "./styles";

const UnresolvedTicketItemSkeleton = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.skeletonWrapper}>
        <Skeleton animation="wave" height={30} width="100%" />
      </Box>
    </Box>
  );
};

export default UnresolvedTicketItemSkeleton;
