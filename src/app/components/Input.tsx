import { ErrorMessage, Field } from "formik";
import React, { InputHTMLAttributes } from "react";
import TextError from "./TextError";

interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = (props: TInputProps) => {
  const { name, label, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
