import React, { InputHTMLAttributes, useEffect, useRef } from "react";

import { InputForm, Error } from "./style";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, type, error, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <InputForm isErrored={error} id={name} {...rest} />
    </div>
  );
};

export default Input;
