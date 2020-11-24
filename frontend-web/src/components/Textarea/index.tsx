import React, { TextareaHTMLAttributes, useRef, useEffect } from "react";

import { useField } from "@unform/core";

import "./styles.css";
import { TextArea } from "./style";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({  placeholder, label, name, ...rest }) => {
  // const inputRef = useRef<HTMLTextAreaElement>(null);
  // const { fieldName, defaultValue, error, registerField } = useField(name);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: "value",
  //   });
  // }, [fieldName, registerField]);

  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <TextArea
        // isErrored={!!error}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        // ref={inputRef}
        id={name}
     {...rest} />
    </div>
  );
};

export default Textarea;
