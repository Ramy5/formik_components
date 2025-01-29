import { ErrorMessage, Field } from "formik";
import React, { InputHTMLAttributes } from "react";
import { IField } from "./Radio";
import TextError from "./TextError";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: Array<{ key: string; value: string }>;
}

const Checkbox = ({ name, label, options, ...rest }: ICheckbox) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: { field: IField }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.key}
                  {...field}
                  value={option.value}
                  checked={field.value?.includes(option.value)}
                />
                <label htmlFor={option.key}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;
