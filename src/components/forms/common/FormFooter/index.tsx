import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";

type FormFooterProps = {
  text: string;
  linkText: string;
  to: string;
};

function FormFooter({ text, linkText, to }: FormFooterProps) {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text}>{text}</Typography>
      <RouterLink to={to} style={styles.routerLink}>
        {linkText}
      </RouterLink>
    </Box>
  );
}

export default FormFooter;
