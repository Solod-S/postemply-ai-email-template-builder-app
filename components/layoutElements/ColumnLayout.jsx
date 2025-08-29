"use client";
import React, { useState } from "react";
import {
  useDragDropElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "@/app/provider";
import ButtonComponent from "../custom/ElementComponents/ButtonComponent";
import TextComponent from "../custom/ElementComponents/TextComponent";
import ImageComponent from "../custom/ElementComponents/ImageComponent";
import LogoComponent from "../custom/ElementComponents/LogoComponent";
import LogoHeaderComponent from "../custom/ElementComponents/LogoHeaderComponent";
import DividerComponent from "../custom/ElementComponents/DividerComponent";
import SocialMediaIcons from "../custom/ElementComponents/SocialIconsComponent";
import TextAreaComponent from "../custom/ElementComponents/TextAreaComponent";

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({ index: index, columnId: layout?.id });
  };

  const onDropHandle = () => {
    const index = dragOver?.index;
    setEmailTemplate(prevItem =>
      prevItem?.map(col =>
        col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const GetElementComponent = element => {
    if (element?.type === "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type === "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type === "TextArea") {
      return <TextAreaComponent {...element} />;
    } else if (element?.type === "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type === "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type === "LogoHeader") {
      return <LogoHeaderComponent {...element} />;
    } else if (element?.type === "Divider") {
      return <DividerComponent {...element} />;
    } else if (element?.type === "SocialIcons") {
      return <SocialMediaIcons {...element} />;
    }

    return element?.type;
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            className={`cursor-pointer p-0 flex items-center justify-center 
            ${!layout[index]?.type && `bg-gray-100 border border-dashed`} 
            ${index == dragOver?.index && dragOver?.columnId && `bg-green-50`} 
             ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && `border-blue-500 border-1`}`}
            key={index}
            onDrop={onDropHandle}
            onDragOver={event => onDragOverHandle(event, index)}
            onClick={() => setSelectedElement({ layout, index })}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnLayout;
