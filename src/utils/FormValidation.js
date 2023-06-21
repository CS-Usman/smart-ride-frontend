import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .email("Invalid email"),
  password: yup.string().required(),
});

export const SignUpValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup
    .string()
    .required("Username is required")
    .email("Invalid email"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Invalid phone number"),
});

export const PasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(8)
    .max(12, "Password should not exceed 12 characters."),
  confirmPassword: yup.string().required(),
});

export default LoginValidationSchema;
