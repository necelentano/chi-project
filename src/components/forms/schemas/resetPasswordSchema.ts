import * as yup from "yup";

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  currentPassword: yup
    .string()
    .required("Current password is required")
    .min(6, "Password should have a minimum length of 6")
    .max(15, "Password should have a maximum length of 15"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should have a minimum length of 6")
    .max(15, "Password should have a maximum length of 15"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default resetPasswordSchema;
