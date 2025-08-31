import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label>{label}</label>
      <Input
        value={value}
        onChange={e => {
          if (e.target.value.length > 0) {
            onHandleInputChange(e.target.value);
          } else {
            onHandleInputChange(" ");
          }
        }}
      />
    </div>
  );
}

export default InputField;
