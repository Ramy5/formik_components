import { ErrorMessage, Field } from "formik";
import React, { InputHTMLAttributes } from "react";
import TextError from "./TextError";

interface TTextarea extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
const Textarea = ({ name, label, ...rest }: TTextarea) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
