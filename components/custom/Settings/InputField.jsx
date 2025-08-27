import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label>{label}</label>
      <Input
        value={value}
        onChange={e => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
