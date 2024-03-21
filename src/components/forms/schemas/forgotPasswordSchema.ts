import * as yup from "yup";

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
});

export default forgotPasswordSchema;
