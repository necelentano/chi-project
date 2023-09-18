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
import signupSchema from "../schemas/signupSchema";

export type SignupFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
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
        <FormTitle title="Sign Up" />
        <FormDescription description="Create a new account" />
      </Box>

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
          {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}
        </Box>
        <Box sx={{ position: "relative" }}>
          <FormLabel text="First Name" />
          <FormInput
            placeholder="Your first name"
            id="firstName"
            type="text"
            register={register("firstName")}
          />
          {errors.firstName ? (
            <ErrorText>{errors.firstName.message}</ErrorText>
          ) : null}
        </Box>
        <Box sx={{ position: "relative" }}>
          <FormLabel text="Last Name" />
          <FormInput
            placeholder="Your last name"
            id="lastName"
            type="text"
            register={register("lastName")}
          />
          {errors.lastName ? (
            <ErrorText>{errors.lastName.message}</ErrorText>
          ) : null}
        </Box>
        <Box sx={{ position: "relative" }}>
          <FormLabel text="Password" />
          <FormInput
            placeholder="Password"
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
          <FormLabel text="Confirm Password" />
          <FormInput
            placeholder="Confirm password"
            id="confirmPassword"
            type="password"
            register={register("confirmPassword")}
            isPassword
          />
          {errors.confirmPassword ? (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
          ) : null}
        </Box>
        <FormButton btnType="contained">Register</FormButton>
      </Box>
      <FormFooter
        text="Forgot password?"
        linkText="Enter your email"
        to="/forgot-password"
      />
    </Paper>
  );
}

export default SignupForm;
