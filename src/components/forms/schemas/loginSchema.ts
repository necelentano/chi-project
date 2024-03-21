import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should have a minimum length of 6")
    .max(15, "Password should have a maximum length of 15"),
});

export default loginSchema;
