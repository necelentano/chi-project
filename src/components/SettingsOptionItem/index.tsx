import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./styles";

type TSettingsOptionItemProps = {
  title: string;
  desc: string;
  buttonText: string;
  route: string;
};

const SettingsOptionItem = ({
  title,
  desc,
  buttonText,
  route,
}: TSettingsOptionItemProps) => {
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1" sx={styles.description}>
          {desc}
        </Typography>
      </Box>
      <Button component={RouterLink} to={route}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default SettingsOptionItem;
