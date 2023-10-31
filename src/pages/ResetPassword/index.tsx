import { useEffect } from "react";

import { Box, Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DynamicForm from "../../components/forms/DynamicForm";
import { resetPasswordFormData } from "../../components/forms/formsData/resetPassword";
import { useResetPasswordMutation } from "../../store/firebaseApi";

import { TAuthError } from "../../utils/types";
import styles from "./styles";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [resetPassword, { isLoading, isError, error, isSuccess }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.info(
        `The password was reset. You are signed in with the new password`
      );
      navigate("/dashboard/settings");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(
        `${(error as TAuthError).name}: ${(error as TAuthError).code}`
      );
    }
  }, [isError, error]);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.buttonWrapper}>
        <Button
          variant="outlined"
          startIcon={<WestIcon />}
          component={RouterLink}
          to="/dashboard/settings"
        >
          Back to settings
        </Button>
      </Box>
      <DynamicForm
        template={resetPasswordFormData}
        submitHandler={resetPassword}
        isError={isError}
        error={error as TAuthError}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default ResetPassword;
