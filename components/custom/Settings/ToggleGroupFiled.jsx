import React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function ToggleGroupFiled({ label, value, options, onHandleStyleChange }) {
  return (
    <div>
      <label>{label}</label>
      <ToggleGroup
        type="single"
        defaultValue={value}
        onValueChange={v => {
          if (!v) return;
          onHandleStyleChange(v);
        }}
      >
        {options?.length > 0 &&
          options?.map((option, index) => (
            <ToggleGroupItem
              className="w-full cursor-pointer"
              key={index}
              value={option?.value}
            >
              <option.icon />
            </ToggleGroupItem>
          ))}
      </ToggleGroup>
    </div>
  );
}

export default ToggleGroupFiled;
