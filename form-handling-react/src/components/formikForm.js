import React from "react";
import { useFormik, Field, ErrorMessage } from "formik";
import RegistrationForm from "./RegistrationForm";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: { RegistrationForm },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormikForm;
