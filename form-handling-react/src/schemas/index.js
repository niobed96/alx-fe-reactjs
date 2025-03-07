import * as yup from "yup";

const passwordRegex = new RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/
);

const RegistrationSchema = yup.object({
  username: yup.string().min(4).required("Please Enter USername"),
  email: yup
    .string()
    .email("Please Enter VAlid Email")
    .required("Please Enter Your Email"),
  password: yup
    .string()
    .matches(passwordRegex, "Please Enter Valid Password")
    .required("Please Enter Your password"),
});

export default RegistrationSchema;
