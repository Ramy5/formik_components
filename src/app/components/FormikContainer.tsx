import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {};

const validationSchema = Yup.object({});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
