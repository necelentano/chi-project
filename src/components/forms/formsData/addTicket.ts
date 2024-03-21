import { TField } from "../../../utils/types";
import addTicketSchema from "../schemas/addTicketSchema";

export type TAddTicketFormData = {
  header: boolean;
  title: string;
  description: undefined;
  fields: TField[];
  submit: {
    buttonText: string;
    buttonType: "text" | "contained";
  };
  yupSchema: typeof addTicketSchema;
  footer: undefined;
  isModal: boolean;
};

export const addTicketFormData: TAddTicketFormData = {
  header: false,
  title: "Add new ticket",
  description: undefined,
  fields: [
    {
      name: "ticketDescription",
      textFieldType: "text",
      placeholder: "Add description",
      label: "Ticket details",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
    {
      name: "customerName",
      textFieldType: "text",
      placeholder: "Name",
      label: "Customer name",
      inputType: "text",
      isPassword: false,
      options: undefined,
    },
    {
      name: "date",
      textFieldType: "date",
      placeholder: "Date",
      label: "Date",
      inputType: "dateTimePicker",
      isPassword: false,
      options: undefined,
    },
    {
      name: "priority",
      placeholder: "Choose priority",
      textFieldType: "select",
      label: "Choose priority",
      inputType: "select",
      isPassword: false,
      options: [
        { value: "low", text: "Low" },
        { value: "normal", text: "Normal" },
        { value: "high", text: "High" },
      ],
    },
  ],
  submit: {
    buttonText: "Save",
    buttonType: "contained",
  },
  yupSchema: addTicketSchema,
  footer: undefined,
  isModal: true,
};
