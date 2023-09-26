// This page could be deleted in the future

import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import { Link as RouterLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ mr: "auto", ml: "30px", mb: "20px" }}>
        <Button
          variant="outlined"
          startIcon={<WestIcon />}
          component={RouterLink}
          to="/dashboard/settings"
        >
          Back to settings
        </Button>
      </Box>
      <ResetPasswordForm />
    </Box>
  );
};

export default ResetPassword;
