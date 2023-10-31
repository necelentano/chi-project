import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import styles from "./styles";

const FormInputWrapper = ({ children }: PropsWithChildren) => {
  return <Box sx={styles.formInputWrapper}>{children}</Box>;
};

export default FormInputWrapper;
