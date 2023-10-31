import InputLabel from "@mui/material/InputLabel";

import styles from "./styles";

type FormLabelProps = {
  text: string;
};

const FormLabel = ({ text }: FormLabelProps) => {
  return (
    <InputLabel shrink sx={styles.label}>
      {text.toUpperCase()}
    </InputLabel>
  );
};

export default FormLabel;
