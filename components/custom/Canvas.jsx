"use client";
import {
  useDragDropElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/app/provider";
import React, { useState } from "react";
import ColumnLayout from "../layoutElements/ColumnLayout";

function Canvas() {
  const [dragOver, setDragOver] = useState(false);
  const { screenSize, setScreenSize } = useScreenSize();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();

  const onDragOver = e => {
    e.preventDefault();
    setDragOver(true);
  };
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      console.log(`emailTemplate`, emailTemplate);
      setEmailTemplate(prev => [...prev, dragElementLayout?.dragLayout]);
    }
  };

  const getLayoutComponent = layout => {
    if (layout?.type == "column") {
      return <ColumnLayout layout={layout} />;
    }
  };
  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`p-6 w-full ${screenSize == "desktop" ? "max-w-2xl" : "max-w-md"} ${dragOver ? "bg-purple-100 p-4" : "bg-white"}`}
        onDragOver={onDragOver}
        onDrop={() => onDropHandle()}
        onDragLeave={() => setDragOver(false)}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((item, index) => (
            <div key={index}>{getLayoutComponent(item)}</div>
          ))
        ) : (
          <h2 className="p-4 text-center bg-gray-100 border border-dashed ">
            Add Layout Here
          </h2>
        )}
      </div>
    </div>
  );
}

export default Canvas;
