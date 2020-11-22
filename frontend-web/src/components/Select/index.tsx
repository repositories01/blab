import React, { SelectHTMLAttributes, useRef, useEffect } from "react";
import { useField } from "@unform/core";

import "./styles.css";
import { SelectForm } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <SelectForm ref={inputRef} value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Select an option
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </SelectForm>
    </div>
  );
};

export default Select;
