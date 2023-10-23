import { TField } from "../../../utils/types";
import addContactSchema from "../schemas/addContactSchema";

export type TAddContactFormData = {
  header: boolean;
  title: string;
  description: undefined;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof addContactSchema;
  footer: undefined;
  isModal: boolean;
};

export const addContactFormData: TAddContactFormData = {
  header: false,
  title: "Add new contact",
  description: undefined,
  fields: [
    {
      name: "image",
      textFieldType: "file",
      placeholder: "Add photo",
      label: "Photo",
      inputType: "imageUpload",
      isPassword: false,
      options: undefined,
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
      name: "email",
      textFieldType: "email",
      placeholder: "Email",
      label: "Email",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
    {
      name: "address",
      textFieldType: "text",
      placeholder: "Address",
      label: "Address",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
  ],
  submit: {
    buttonText: "Save",
    buttonType: "contained",
  },
  yupSchema: addContactSchema,
  footer: undefined,
  isModal: true,
};
