import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import FormButton from "../common/FormButton";
import FormInputWrapper from "../common/FormInputWrapper";
import FormTitle from "../common/FormTitle";
import ErrorText from "../common/ErrorText";
import resetPasswordSchema from "../schemas/resetPasswordSchema";
import { useResetPasswordMutation } from "../../../store/firebaseApi";
import { TAuthError } from "../../../utils/types";

export type ResetPasswordFormValues = {
  email: string;
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const [
    resetPassword,
    { isLoading, isError: isResetError, error: resetError, isSuccess },
  ] = useResetPasswordMutation();

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log(data);
    const { email, currentPassword, password } = data;
    resetPassword({ email, currentPassword, password });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.info(
        `The password was reset. You are signed in with the new password`
      );
      navigate("/dashboard/settings");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isResetError) {
      toast.error(
        `${(resetError as TAuthError).name}: ${(resetError as TAuthError).code}`
      );
    }
  }, [isResetError, resetError]);

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
      <Box
        sx={{
          mb: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <FormTitle title="Reset Password" />
      </Box>
      <Box
        sx={{ width: "100%", mb: "32px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormInputWrapper>
          <FormLabel text="Email" />
          <FormInput
            placeholder="Your email"
            id="email"
            type="email"
            register={register("email")}
            error={errors.email ? true : false}
          />
          {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Current Password" />
          <FormInput
            placeholder="Your current password"
            id="currentPassword"
            type="password"
            register={register("currentPassword")}
            isPassword
            error={errors.currentPassword ? true : false}
          />
          {errors.currentPassword ? (
            <ErrorText>{errors.currentPassword.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="New Password" />
          <FormInput
            placeholder="Your new password"
            id="password"
            type="password"
            register={register("password")}
            isPassword
            error={errors.password ? true : false}
          />
          {errors.password ? (
            <ErrorText>{errors.password.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Confirm New Password" />
          <FormInput
            placeholder="Confirm new password"
            id="confirmPassword"
            type="password"
            register={register("confirmPassword")}
            isPassword
            error={errors.confirmPassword ? true : false}
          />
          {errors.confirmPassword ? (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
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
          {isResetError ? (
            <ErrorText>{`${(resetError as TAuthError).name}: ${
              (resetError as TAuthError).code
            }`}</ErrorText>
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
};

export default ResetPasswordForm;
