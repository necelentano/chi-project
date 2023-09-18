import * as yup from "yup";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password should have a minimum length of 5")
    .max(15, "Password should have a maximum length of 15"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default resetPasswordSchema;
