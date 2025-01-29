import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

interface IRadio extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: Array<{ value: string; key: string }>;
}

export interface IField {
  name: string;
  value: string | undefined;
  onBlur: () => void;
  onChange: () => void;
}

const Radio = ({ name, label, options, ...rest }: IRadio) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: { field: IField }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
