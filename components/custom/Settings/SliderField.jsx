import { Slider } from "@/components/ui/slider";
import React from "react";

function SliderField({ label, value, onHandleStyleChange, type = "px" }) {
  const FormattedValue = value_ => {
    return Number(value_.toString().replace(type, ""));
  };

  return (
    <div>
      <label>
        {label} ({value})
      </label>
      <Slider
        className="mt-1"
        onValueChange={v => {
          const number = Number(v);

          if (isNaN(number)) {
            return;
          }

          onHandleStyleChange(number + type);
        }}
        defaultValue={[FormattedValue(value)]}
        max={100}
        step={1}
      />
    </div>
  );
}

export default SliderField;
