import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
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
import signupSchema from "../schemas/signupSchema";
import { useSignUpMutation } from "../../../store/firebaseApi";
import { useAppSelector } from "../../../utils/hooks/redux";
import { TAuthError } from "../../../utils/types";

export type SignupFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
  });

  const [sigup, { isLoading, isError: isSignupError, error: signupError }] =
    useSignUpMutation();

  const onSubmit = ({
    firstName,
    lastName,
    email,
    password,
  }: SignupFormValues) => {
    sigup({ firstName, lastName, email, password });
  };

  useEffect(() => {
    if (user) {
      toast.info(`Welcome to Dashboard Kit!`);
      navigate("/dashboard");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSignupError) {
      toast.error(
        `${(signupError as TAuthError).name}: ${
          (signupError as TAuthError).code
        }`
      );
    }
  }, [isSignupError, signupError]);

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
        <FormInputWrapper>
          <FormLabel text="Email" />
          <FormInput
            placeholder="Email address"
            id="email"
            type="email"
            register={register("email")}
            error={errors.email ? true : false}
          />
          {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="First Name" />
          <FormInput
            placeholder="Your first name"
            id="firstName"
            type="text"
            register={register("firstName")}
            error={errors.firstName ? true : false}
          />
          {errors.firstName ? (
            <ErrorText>{errors.firstName.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Last Name" />
          <FormInput
            placeholder="Your last name"
            id="lastName"
            type="text"
            register={register("lastName")}
            error={errors.lastName ? true : false}
          />
          {errors.lastName ? (
            <ErrorText>{errors.lastName.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Password" />
          <FormInput
            placeholder="Password"
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
          <FormLabel text="Confirm Password" />
          <FormInput
            placeholder="Confirm password"
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
          Register
        </FormButton>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isSignupError ? (
            <ErrorText>{`${(signupError as TAuthError).name}: ${
              (signupError as TAuthError).code
            }`}</ErrorText>
          ) : null}
        </Box>
      </Box>

      <FormFooter
        text="Already have an account?"
        linkText="Log in"
        to="/login"
      />
      <FormFooter
        text="Forgot password?"
        linkText="Enter your email"
        to="/forgot-password"
      />
    </Paper>
  );
};

export default SignupForm;
