import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import logo from "../../../../assets/logo.svg";
import styles from "./styles";

function FormHeader() {
  return (
    <>
      <Box sx={styles.logoWrapper}>
        <Avatar alt="Logo" src={logo} sx={styles.logo} />
      </Box>
      <Typography sx={styles.text}>Dashboard Kit</Typography>
    </>
  );
}

export default FormHeader;
