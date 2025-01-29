import { ErrorMessage, Field } from "formik";
import DatePicker from "react-datepicker";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

interface IDate {
  name: string;
  label: string;
}

const Date = ({ name, label }: IDate) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({
          field,
          form,
        }: {
          field: { value: Date | null };
          form: { setFieldValue: (field: string, value: Date | null) => void };
        }) => {
          return (
            <DatePicker
              id={name}
              selected={field.value}
              onChange={(val: Date | null) => form.setFieldValue(name, val)}
              dateFormat="yyyy/MM/dd"
              isClearable
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Date;
