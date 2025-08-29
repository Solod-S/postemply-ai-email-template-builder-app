"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import ToggleGroupFiled from "./Settings/ToggleGroupFiled";
import {
  AArrowUp,
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLower,
  CaseUpper,
} from "lucide-react";
import DropDownField from "./Settings/DropDownField";

const TetAlignOptions = [
  { value: "left", icon: AlignLeft },
  { value: "center", icon: AlignCenter },
  { value: "right", icon: AlignRight },
];
const TetTransformOptions = [
  { value: "uppercase", icon: CaseUpper },
  { value: "lowercase", icon: CaseLower },
  { value: "capitalize", icon: AArrowUp },
];

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  useEffect(() => {
    // console.log(`el`, selectedElement?.layout?.[selectedElement?.index]);
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    // console.log(fieldName, " value" + value);
    // Copy of current selected El
    const updatedData = { ...selectedElement };
    // Update the specific field
    updatedData.layout[selectedElement.index][fieldName] = value;
    // Update Original selected El
    setSelectedElement(updatedData);
  };
  const onHandleStyleChange = (fieldName, value) => {
    console.log(fieldName, " value " + value);

    let updatedElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: value, // <--- сюда
          },
        },
      },
    };

    setSelectedElement(updatedElement);
  };

  return (
    <div className="p-5 flex flex-col gap-3">
      <h2 className="font-black text-lg">Settings</h2>
      {element?.content && (
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={value => onHandleInputChange("content", value)}
        />
      )}
      {element?.url && (
        <InputField
          label={"Url"}
          value={element?.url}
          onHandleInputChange={value => onHandleInputChange("url", value)}
        />
      )}
      {element?.textarea && (
        <TextAreaField
          label={"Text Area"}
          value={element?.textarea}
          onHandleInputChange={value => onHandleInputChange("textarea", value)}
        />
      )}
      {element?.style?.textAlign && (
        <ToggleGroupFiled
          label={"Text Align"}
          options={TetAlignOptions}
          value={element?.style?.textAlign}
          onHandleStyleChange={value => onHandleStyleChange("textAlign", value)}
        />
      )}
      {element?.style?.width && (
        <SliderField
          label={"Width"}
          value={element?.style?.width}
          type="%"
          onHandleStyleChange={value => onHandleStyleChange("width", value)}
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label={"Background Color"}
          value={element?.style?.backgroundColor}
          onHandleStyleChange={value =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}
      {element?.style?.color && (
        <ColorPickerField
          label={"Text Color"}
          value={element?.style?.color}
          onHandleStyleChange={value => onHandleStyleChange("color", value)}
        />
      )}
      {element?.style?.textTransform && (
        <ToggleGroupFiled
          label={"Text Transform"}
          options={TetTransformOptions}
          value={element?.style?.textTransform}
          onHandleStyleChange={value =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label={"Font Size"}
          value={element?.style?.fontSize}
          onHandleStyleChange={value => onHandleStyleChange("fontSize", value)}
        />
      )}
      {element?.style?.fontWeight && (
        <DropDownField
          label={"Font Weight"}
          options={["normal", "bold"]}
          value={element?.style?.fontWeight}
          onHandleStyleChange={value =>
            onHandleStyleChange("fontWeight", value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label={"Padding"}
          value={element?.style?.padding}
          onHandleStyleChange={value => onHandleStyleChange("padding", value)}
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label={"Border Radius"}
          value={element?.style?.borderRadius}
          onHandleStyleChange={value =>
            onHandleStyleChange("borderRadius", value)
          }
        />
      )}
    </div>
  );
}

export default Settings;
