import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FormHeader from "../common/FormHeader";
import FormDescription from "../common/FormDescription";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import FormButton from "../common/FormButton";
import FormFooter from "../common/FormFooter";
import FormTitle from "../common/FormTitle";
import FormInputWrapper from "../common/FormInputWrapper";
import ErrorText from "../common/ErrorText";
import forgotPasswordSchema from "../schemas/forgotPasswordSchema";
import { useForgotPasswordMutation } from "../../../store/firebaseApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks/redux";
import { TAuthError } from "../../../utils/types";

export type ForgotPasswordFormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const [emailIsSent, setEmailIsSent] = useState<boolean>(false);

  const [
    forgotPassword,
    {
      isLoading,
      isError: isForgotPassError,
      error: forgotPassError,
      isSuccess,
    },
  ] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = ({ email }: ForgotPasswordFormValues) => {
    forgotPassword(email);
    setEmailIsSent(true);
  };

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
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isForgotPassError) {
      toast.error(
        `${(forgotPassError as TAuthError).name}: ${
          (forgotPassError as TAuthError).code
        }`
      );
    }
  }, [isForgotPassError, forgotPassError]);

  const contentAfterEmailSent = (
    <Link to="/login">
      <FormButton btnType="text">Go to Login Page</FormButton>
    </Link>
  );

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
        <FormTitle title="Forgot Password?" />
        <FormDescription
          description={
            emailIsSent
              ? sentDescription
              : "Enter your email from registered account"
          }
        />
      </Box>

      {!emailIsSent ? (
        <>
          <Box
            sx={{ width: "100%", mb: "32px" }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <FormInputWrapper>
              <FormLabel text="Email" />
              <FormInput
                placeholder="Your valid email address"
                id="email"
                type="email"
                register={register("email")}
                error={errors.email ? true : false}
              />
              {errors.email ? (
                <ErrorText>{errors.email.message}</ErrorText>
              ) : null}
            </FormInputWrapper>
            <FormButton btnType="contained" loading={isLoading}>
              Send
            </FormButton>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {forgotPassError ? (
                <ErrorText>{`${(forgotPassError as TAuthError).name}: ${
                  (forgotPassError as TAuthError).code
                }`}</ErrorText>
              ) : null}
            </Box>
          </Box>

          <FormFooter
            text="Don't have an account?"
            linkText="Sign up"
            to="/signup"
          />
        </>
      ) : (
        contentAfterEmailSent
      )}
    </Paper>
  );
};

export default ForgotPasswordForm;
