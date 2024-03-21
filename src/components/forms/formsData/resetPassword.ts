import { TField } from "../../../utils/types";
import resetPasswordSchema from "../schemas/resetPasswordSchema";

export type TResetPasswordFormData = {
  header: boolean;
  title: undefined;
  description: undefined;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof resetPasswordSchema;
  footer: undefined;
  isModal: boolean;
};

export const resetPasswordFormData: TResetPasswordFormData = {
  header: false,
  title: undefined,
  description: undefined,
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
    {
      name: "currentPassword",
      textFieldType: "password",
      placeholder: "Your current password",
      label: "Current Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
    },
    {
      name: "password",
      textFieldType: "password",
      placeholder: "Your new password",
      label: "New Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
    },
    {
      name: "confirmPassword",
      textFieldType: "password",
      placeholder: "Your new password",
      label: "Confirm New Password",
      isPassword: true,
      inputType: "text",
      options: undefined,
    },
  ],
  submit: {
    buttonText: "Send",
    buttonType: "contained",
  },
  yupSchema: resetPasswordSchema,
  footer: undefined,
  isModal: false,
};
