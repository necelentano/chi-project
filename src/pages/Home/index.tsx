import { Box, Paper } from "@mui/material";
import FormHeader from "../../components/forms/common/FormHeader";
import FormTitle from "../../components/forms/common/FormTitle";
import { Link } from "react-router-dom";
import FormButton from "../../components/forms/common/FormButton";

function Home() {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "380px",
        p: "32px",
        borderRadius: "8px",
      }}
    >
      <FormHeader />
      <Box
        sx={{
          mb: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <FormTitle title="Home Page" />
      </Box>
      <Box
        sx={{
          mb: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
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
