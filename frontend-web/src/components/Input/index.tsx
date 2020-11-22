import React, { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";
import { InputForm } from "./style";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <InputForm
        isErrored={!!error}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        id={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
