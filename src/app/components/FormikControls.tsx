import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Date from "./Date";

interface IFormikControlsWithoutSelect {
  control: "input" | "textarea" | "radio" | "checkbox" | "date" | "select";
  type?: string;
  label: string;
  name: string;
  [key: string]: unknown;
}

interface IFormikControlsWithSelect extends IFormikControlsWithoutSelect {
  options: Array<{ value: string; key: string }>;
}

type TFormikControls = IFormikControlsWithoutSelect | IFormikControlsWithSelect;

const FormikControls = ({ control, ...rest }: TFormikControls) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return (
        <Select
          {...rest}
          options={(rest as IFormikControlsWithSelect).options}
        />
      );
    case "radio":
      return (
        <Radio
          {...rest}
          options={(rest as IFormikControlsWithSelect).options}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          {...rest}
          options={(rest as IFormikControlsWithSelect).options}
        />
      );
    case "date":
      return <Date {...rest} />;
    default:
      return null;
  }
};

export default FormikControls;
