import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "Yup";

const passwordRegex = new RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/
);

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegistrationSchema = yup.object({
  username: yup.string().required("Please Enter USername").min(4),
  email: yup
    .string()
    .required("Please Enter Your Email")
    .email("Please Enter VAlid Email"),
  password: yup
    .string()
    .required("Please Enter Your password")
    .matches(passwordRegex, "Please Enter Valid Password"),
});

function formikForm() {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field type="text" name="username" placeholder="Enter Your Name" />
          <ErrorMessage
            name="username"
            component="p"
            style={{ color: "red" }}
          />
          {/* <div style={{ color: "red" }}>
                {errors.username && touched.username && (
                  <p>{errors.username}</p>
                )}
              </div> */}

          <Field type="email" name="email" placeholder="Enter Your Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          {/* <div style={{ color: "red" }}>
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div> */}
          <Field
            type="password"
            name="password"
            placeholder="Enter Your password"
          />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />
          {/* <div style={{ color: "red" }}>
                {errors.password && touched.password && (
                  <p>{errors.password}</p>
                )}
              </div> */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default formikForm;
