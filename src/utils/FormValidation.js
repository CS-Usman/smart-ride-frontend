import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .email("Invalid email"),
  password: yup.string().required(),
});

export const SignUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .email("Invalid email"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(12, "Password should not exceed 12 characters."),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Invalid phone number"),
});

export default LoginValidationSchema;
