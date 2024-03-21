import Typography from "@mui/material/Typography";

import styles from "./styles";

type TFormDescriptionProps = {
  description: string;
};

const FormDescription = ({ description }: TFormDescriptionProps) => {
  return <Typography sx={styles.description}>{description}</Typography>;
};

export default FormDescription;
