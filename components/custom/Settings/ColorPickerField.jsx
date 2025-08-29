import React from "react";

function ColorPickerField({ label, value, onHandleStyleChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        className="w-50 cursor-pointer"
        type="color"
        value={value}
        onChange={e => {
          onHandleStyleChange(e.target.value);
        }}
      />
    </div>
  );
}

export default ColorPickerField;
