"use client";
import React, { useState } from "react";
import { useDragDropElementLayout, useEmailTemplate } from "@/app/provider";
import ButtonComponent from "../custom/ElementComponents/ButtonComponent";
import TextComponent from "../custom/ElementComponents/TextComponent";
import ImageComponent from "../custom/ElementComponents/ImageComponent";

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
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
    } else if (element?.type === "Image") {
      return <ImageComponent {...element} />;
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
            className={`p-2 flex items-center ${!layout[index]?.type && ` bg-gray-100 border border-dashed`} justify-center ${index == dragOver?.index && dragOver?.columnId && `bg-green-50`}`}
            key={index}
            onDrop={onDropHandle}
            onDragOver={event => onDragOverHandle(event, index)}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnLayout;
