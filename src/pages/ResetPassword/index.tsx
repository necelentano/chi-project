// This page could be deleted in the future

import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import Box from "@mui/material/Box";

function ResetPassword() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="bgDark.main"
    >
      <ResetPasswordForm />
    </Box>
  );
}

export default ResetPassword;
