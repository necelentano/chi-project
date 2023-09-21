import { useEffect } from "react";
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
import ErrorText from "../common/ErrorText";
import FormInputWrapper from "../common/FormInputWrapper";
import loginSchema from "../schemas/loginSchema";
import { useLogInMutation } from "../../../store/firebaseApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks/redux";
import { TStoreUser } from "../../../utils/types";
import { TAuthError } from "../../../utils/types";

export type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const user = useAppSelector<TStoreUser>((state) => state.auth.user);
  const [
    login,
    { isLoading, isError: isLoginError, error: loginError, isSuccess },
  ] = useLogInMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Welcome back, ${user?.name}!`);
      navigate("/dashboard");
    }
  }, [isSuccess, navigate, user]);

  useEffect(() => {
    if (isLoginError) {
      toast.error(
        `${(loginError as TAuthError).name}: ${(loginError as TAuthError).code}`
      );
    }
  }, [isLoginError, loginError]);

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
        <FormTitle title="Log in to Dashboard Kit" />
        <FormDescription description="Enter your email and password" />
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

        <FormButton btnType="contained" loading={isLoading}>
          Log in
        </FormButton>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLoginError ? (
            <ErrorText>{`${(loginError as TAuthError).name}: ${
              (loginError as TAuthError).code
            }`}</ErrorText>
          ) : null}
        </Box>
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

export default LoginForm;
