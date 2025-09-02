import React from "react";
import { AuthInputProps } from "../../../types/AuthInputProps";

export const AuthInput: React.FC<AuthInputProps> = ({
  type,
  placeholder,
  icon,
  required,
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-icon">
        <i className={`bi ${icon}`}></i>
      </span>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
      {type === "password" && (
        <span className="password-toggle">
          <i className="bi bi-eye"></i>
        </span>
      )}
    </div>
  );
};
