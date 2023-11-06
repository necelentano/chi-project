import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Should have a minimum length of 2")
    .max(20, "Should have a maximum length of 20"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Should have a minimum length of 2")
    .max(20, "Should have a maximum length of 20"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should have a minimum length of 6")
    .max(15, "Password should have a maximum length of 15"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default signupSchema;
