import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";

import styles from "./styles";

const ErrorText = ({ children }: PropsWithChildren) => {
  return <Box sx={styles.wrapper}>{children}</Box>;
};

export default ErrorText;
