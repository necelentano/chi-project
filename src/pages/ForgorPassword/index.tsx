import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../utils/hooks/redux";
import DynamicForm from "../../components/forms/DynamicForm";
import { forgotPasswordFormData } from "../../components/forms/formsData/forgotPassword";
import { useForgotPasswordMutation } from "../../store/firebaseApi";
import { TAuthError } from "../../utils/types";
import Paper from "@mui/material/Paper";
import FormHeader from "../../components/forms/common/FormHeader";
import Box from "@mui/material/Box";
import FormTitle from "../../components/forms/common/FormTitle";
import FormDescription from "../../components/forms/common/FormDescription";
import FormButton from "../../components/forms/common/FormButton";

import styles from "./styles";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const [emailIsSent, setEmailIsSent] = useState<boolean>(false);

  const [forgotPassword, { isLoading, isError, error, isSuccess }] =
    useForgotPasswordMutation();

  const sentDescription =
    "Link to change your password has been sent to provided email if we have it inside our system";

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSuccess) {
      toast.info(`Email was sent. Please check your inbox`);
      setEmailIsSent(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(
        `${(error as TAuthError).name}: ${(error as TAuthError).code}`
      );
    }
  }, [isError, error]);

  const contentAfterEmailSent = (
    <Paper variant="outlined" sx={styles.paperContainer}>
      <FormHeader />
      <Box sx={styles.wrapper}>
        <FormTitle title="Forgot Password?" />
        <FormDescription description={sentDescription} />
      </Box>
      <Link to="/login">
        <FormButton btnType="text">Go to Login Page</FormButton>
      </Link>
    </Paper>
  );

  return emailIsSent ? (
    contentAfterEmailSent
  ) : (
    <DynamicForm
      template={forgotPasswordFormData}
      submitHandler={forgotPassword}
      isError={isError}
      error={error as TAuthError}
      isLoading={isLoading}
    />
  );
};

export default ForgotPassword;
