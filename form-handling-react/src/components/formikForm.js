import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import RegistrationSchema from "../schemas";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

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
