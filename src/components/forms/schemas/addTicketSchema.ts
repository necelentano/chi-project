import * as yup from "yup";

const addTicketSchema = yup.object().shape({
  ticketDescription: yup
    .string()
    .required("Ticket description is required")
    .min(10, "Description should have a minimum length of 10")
    .max(60, "Description should have a maximum length of 60"),
  customerName: yup
    .string()
    .required("customerName is required")
    .min(6, "customerName should have a minimum length of 6")
    .max(15, "customerName should have a maximum length of 15"),
  date: yup.date().required("Date is required"),
  priority: yup
    .string()
    .oneOf(["low", "normal", "high"])
    .required("Please select the priority"),
});

export default addTicketSchema;
