"use client";

import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

const options = [
  { value: "option1", key: "Option 1" },
  { value: "option2", key: "Option 2" },
  { value: "option3", key: "Option 3" },
];

const radioOptions = [
  { value: "option1", key: "Option 1" },
  { value: "option2", key: "Option 2" },
  { value: "option3", key: "Option 3" },
];

const checkboxOptions = [
  { value: "option1", key: "Checkbox 1" },
  { value: "option2", key: "Checkbox 2" },
  { value: "option3", key: "Checkbox 3" },
];

interface FormValues {
  email: string;
  description: string;
  select: string;
  radio: string;
  checkbox: string[];
  date: Date | null;
}

const initialValues: FormValues = {
  email: "",
  description: "",
  select: "",
  radio: "",
  checkbox: [],
  date: null,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  description: Yup.string().required("Required"),
  select: Yup.string().required("Required"),
  radio: Yup.string().required("Required"),
  checkbox: Yup.array().min(1, "At least one checkbox must be selected"),
  date: Yup.date().nullable().required("Required"),
});

const onSubmit = (values: typeof initialValues) => {
  console.log("Form data", values);
};

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
        <Form>
          <FormikControls
            control="input"
            label="Email"
            name="email"
            type="email"
          />
          <FormikControls
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControls
            control="select"
            label="Select a topic"
            name="select"
            options={options}
          />
          <FormikControls
            control="radio"
            options={radioOptions}
            label="Radio"
            name="radio"
          />
          <FormikControls
            control="checkbox"
            label="Checkbox topics"
            name="checkbox"
            options={checkboxOptions}
          />
          <FormikControls control="date" label="Pick a date" name="date" />
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
