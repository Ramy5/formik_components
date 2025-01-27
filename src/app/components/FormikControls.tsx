import React from "react";

const FormikControls = (props) => {
  const { control } = props;

  switch (control) {
    case "input":
      return <input {...props} />;
    case "textarea":
      return <textarea {...props} />;
    case "select":
      return <select {...props} />;
    case "radio":
      return <div></div>;
    case "checkbox":
      return <div></div>;
    case "date":
      return <div></div>;
    default:
      return null;
  }

  return <div></div>;
};

export default FormikControls;
