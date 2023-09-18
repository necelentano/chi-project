import { useState } from "react";
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
import forgotPasswordSchema from "../schemas/forgotPasswordSchema";

export type ForgotPasswordFormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const [emailIsSent, setEmailIsSent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data);
    setEmailIsSent(true);
  };

  const sentDescription =
    "Link to change your password has been sent to provided email if we have it inside our system";

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

      {!emailIsSent && (
        <>
          <Box
            sx={{ width: "100%", mb: "32px" }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Box sx={{ position: "relative" }}>
              <FormLabel text="Email" />
              <FormInput
                placeholder="Email address"
                id="email"
                type="email"
                register={register("email")}
              />
              {errors.email ? (
                <ErrorText>{errors.email.message}</ErrorText>
              ) : null}
            </Box>
            <FormButton btnType="contained">Send</FormButton>
          </Box>

          <FormFooter
            text="Don't have an account?"
            linkText="Sign up"
            to="/signup"
          />
        </>
      )}
    </Paper>
  );
};

export default ForgotPasswordForm;
