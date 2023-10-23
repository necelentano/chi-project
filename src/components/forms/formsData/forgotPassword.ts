import { TField, TFooterItem } from "../../../utils/types";
import forgotPasswordSchema from "../schemas/forgotPasswordSchema";

export type TForgotPasswordFormData = {
  header: boolean;
  title: string;
  description: string;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof forgotPasswordSchema;
  footer: TFooterItem[];
  isModal: boolean;
};

export const forgotPasswordFormData: TForgotPasswordFormData = {
  header: true,
  title: "Forgot password?",
  description: "Enter your email from registered account",
  fields: [
    {
      name: "email",
      textFieldType: "email",
      placeholder: "Your email",
      label: "Email",
      isPassword: false,
      inputType: "text",
      options: undefined,
    },
  ],
  submit: {
    buttonText: "Send",
    buttonType: "contained",
  },
  yupSchema: forgotPasswordSchema,
  footer: [
    {
      text: "Don't have an account?",
      linkText: "Sign up",
      to: "/signup",
    },
  ],
  isModal: false,
};
