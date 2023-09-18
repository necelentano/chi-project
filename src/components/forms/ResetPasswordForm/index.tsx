import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FormHeader from "../common/FormHeader";
import FormDescription from "../common/FormDescription";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import FormButton from "../common/FormButton";
import FormFooter from "../common/FormFooter";
import FormTitle from "../common/FormTitle";
import ErrorText from "../common/ErrorText";
import resetPasswordSchema from "../schemas/resetPasswordSchema";

export type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log(data);
  };

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
        <FormTitle title="Reset Password" />
        <FormDescription description="Enter new password" />
      </Box>

      <Box
        sx={{ width: "100%", mb: "32px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Box sx={{ position: "relative" }}>
          <FormLabel text="New Password" />
          <FormInput
            placeholder="Your new password"
            id="password"
            type="password"
            register={register("password")}
            isPassword
          />
          {errors.password ? (
            <ErrorText>{errors.password.message}</ErrorText>
          ) : null}
        </Box>
        <Box sx={{ position: "relative" }}>
          <FormLabel text="Confirm New Password" />
          <FormInput
            placeholder="Confirm new password"
            id="confirmPassword"
            type="password"
            register={register("confirmPassword")}
            isPassword
          />
          {errors.confirmPassword ? (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
          ) : null}
        </Box>
        <FormButton btnType="contained">Send</FormButton>
      </Box>

      <FormFooter
        text="Don't have an account?"
        linkText="Sign up"
        to="/signup"
      />
      <FormFooter
        text="Forgot password?"
        linkText="Enter your email"
        to="/forgot-password"
      />
    </Paper>
  );
};

export default ResetPasswordForm;
