import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextAreaField({ label, value, onHandleInputChange, type = "px" }) {
  return (
    <div>
      <label>{label}</label>
      <Textarea
        placeholder="Type your message here."
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

export default TextAreaField;
