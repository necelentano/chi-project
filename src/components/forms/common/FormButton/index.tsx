import Button from "@mui/material/Button";
import { PropsWithChildren } from "react";

import styles from "./styles";
import CircularProgress from "@mui/material/CircularProgress";

type FormButtonProps = {
  btnType: "text" | "contained";
  loading?: boolean;
};

const FormButton = ({
  children,
  btnType,
  loading,
}: PropsWithChildren<FormButtonProps>) => {
  return (
    <Button
      fullWidth
      variant={btnType === "text" ? "text" : "contained"}
      type="submit"
      sx={[styles.contained, styles.text]}
    >
      {loading ? <CircularProgress size={25} sx={styles.loader} /> : children}
    </Button>
  );
};

export default FormButton;
