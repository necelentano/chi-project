import { TField, TFooterItem } from "../../../utils/types";

import signupSchema from "../schemas/signupSchema";

export type TSignupFormData = {
  header: boolean;
  title: string;
  description: string;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof signupSchema;
  footer: TFooterItem[];
  isModal: boolean;
};

export const signupFormData: TSignupFormData = {
  header: true,
  title: "Sign Up",
  description: "Create a new account",
  fields: [
    {
      name: "email",
      placeholder: "Your email",
      label: "Email",
      isPassword: false,
      inputType: "text",
      options: undefined,
      textFieldType: "email",
    },
    {
      name: "firstName",
      textFieldType: "text",
      placeholder: "First name",
      label: "First name",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
    {
      name: "lastName",
      textFieldType: "text",
      placeholder: "Last name",
      label: "Last name",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
    {
      name: "password",
      textFieldType: "password",
      placeholder: "Your password",
      label: "Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
    },
    {
      name: "confirmPassword",
      textFieldType: "password",
      placeholder: "Confirm your password",
      label: "Confirm Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
    },
  ],
  submit: {
    buttonText: "Register",
    buttonType: "contained",
  },
  yupSchema: signupSchema,
  footer: [
    {
      text: "Already have an account?",
      linkText: "Log in",
      to: "/login",
    },
    {
      text: "Forgot password?",
      linkText: "Enter your email",
      to: "/forgot-password",
    },
  ],
  isModal: false,
};
