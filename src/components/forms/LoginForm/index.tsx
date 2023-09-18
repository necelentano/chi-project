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
import loginSchema from "../schemas/loginSchema";

export type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
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
        <FormTitle title="Log in to Dashboard Kit" />
        <FormDescription description="Enter your email and password" />
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
        <FormButton btnType="contained">Log in</FormButton>
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
}

export default LoginForm;
