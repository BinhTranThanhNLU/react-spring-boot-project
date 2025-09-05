import React from "react";
import { FormHeaderProps } from "../../types/FormHeaderProps";

export const FormHeader:React.FC<FormHeaderProps> = ({headerMessage, message}) => {
  return (
    <div className="form-header text-center">
      <h2>{headerMessage}</h2>
      <p>{message}</p>
    </div>
  );
};
