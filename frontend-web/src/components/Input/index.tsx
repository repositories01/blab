import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  
  name: string;
  label: string;
}


const Input: React.FC<InputProps> = ({  label, name,placeholder, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" placeholder={placeholder} id={name} {...rest} />
    </div>
  );
};

export default Input;
