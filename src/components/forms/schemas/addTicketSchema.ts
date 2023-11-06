import * as yup from "yup";

const addTicketSchema = yup.object().shape({
  ticketDescription: yup
    .string()
    .required("Ticket description is required")
    .min(10, "Should have a minimum length of 10")
    .max(60, "Should have a maximum length of 60"),
  customerName: yup
    .string()
    .required("Customer name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(6, "Should have a minimum length of 6")
    .max(15, "Should have a maximum length of 15"),
  date: yup.date().required("Date is required"),
  priority: yup
    .string()
    .oneOf(["low", "normal", "high"])
    .required("Please select the priority"),
});

export default addTicketSchema;
