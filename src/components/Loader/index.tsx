import { Box, CircularProgress } from "@mui/material";

import styles from "./styles";

const Loader = () => {
  return (
    <Box sx={styles.loaderWrapper}>
      <CircularProgress sx={styles.loader} />
    </Box>
  );
};

export default Loader;
