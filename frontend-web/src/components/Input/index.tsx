import React, { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";
import { InputForm, Error } from "./style";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  icon: Icon,
  type,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const { fieldName, defaultValue, error, registerField } = useField(name);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: "value",
  //   });
  // }, [fieldName, registerField]);

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <InputForm
        // isErrored={!!error}
        // defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        id={name}
        {...rest}
        >
        {Icon && <Icon size={20} />}
       
      </InputForm>
      {/* {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )} */}
    </div>
  );
};

export default Input;
