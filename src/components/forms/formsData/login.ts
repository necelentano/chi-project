import { TField, TFooterItem } from "../../../utils/types";
import loginSchema from "../schemas/loginSchema";

export type TLoginFormData = {
  header: boolean;
  title: string;
  description: string;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof loginSchema;
  footer: TFooterItem[];
  isModal: boolean;
};

export const loginFormData: TLoginFormData = {
  header: true,
  title: "Log in to Dashboard Kit",
  description: "Enter your email and password",
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
      name: "password",
      placeholder: "Your new password",
      label: "New Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
      textFieldType: "password",
    },
  ],
  submit: {
    buttonText: "Log in",
    buttonType: "contained",
  },
  yupSchema: loginSchema,
  footer: [
    {
      text: "Don't have an account?",
      linkText: "Sign up",
      to: "/signup",
    },
    {
      text: "Forgot password?",
      linkText: "Enter your email",
      to: "/forgot-password",
    },
  ],
  isModal: false,
};
