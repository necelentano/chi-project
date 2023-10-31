import { Box, Paper } from "@mui/material";
import FormHeader from "../../components/forms/common/FormHeader";
import FormTitle from "../../components/forms/common/FormTitle";
import { Link } from "react-router-dom";
import FormButton from "../../components/forms/common/FormButton";

import styles from "./styles";

function Home() {
  return (
    <Paper variant="outlined" sx={styles.paperContainer}>
      <FormHeader />
      <Box sx={styles.itemsContainer}>
        <FormTitle title="Home Page" />
      </Box>
      <Box sx={styles.itemsContainer}>
        <Link to="/login">
          <FormButton btnType="contained">Go to Login Page</FormButton>
        </Link>
        <Link to="/signup">
          <FormButton btnType="contained">Go to Signup Page</FormButton>
        </Link>
        <Link to="/forgot-password">
          <FormButton btnType="contained">
            Go to Forgot Password Page
          </FormButton>
        </Link>
      </Box>
    </Paper>
  );
}

export default Home;
