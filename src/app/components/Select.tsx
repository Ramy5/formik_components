import { ErrorMessage, Field } from "formik";
import React, { SelectHTMLAttributes } from "react";
import TextError from "./TextError";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    key: string;
  }>;
}

const Select = ({ name, label, options, ...rest }: ISelect) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
