import Typography from "@mui/material/Typography";

import styles from "./styles";

type TFormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: TFormTitleProps) => {
  return <Typography sx={styles.title}>{title}</Typography>;
};

export default FormTitle;
