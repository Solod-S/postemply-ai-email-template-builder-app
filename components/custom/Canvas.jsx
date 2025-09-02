"use client";
import {
  useDragDropElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/app/provider";
import React, { useEffect, useRef, useState } from "react";
import ColumnLayout from "../layoutElements/ColumnLayout";
import ViewHTMLDialog from "./ViewHTMLDialog";

function Canvas({ viewHTMLCode, closeDialog }) {
  const htmlRef = useRef();

  const [dragOver, setDragOver] = useState(false);
  const { screenSize, setScreenSize } = useScreenSize();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();
  const [htmlCode, setHTMLCode] = useState("");

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      console.log(`emailTemplate`, emailTemplate);
      setEmailTemplate((prev) => [...prev, dragElementLayout?.dragLayout]);
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type == "column") {
      return <ColumnLayout layout={layout} />;
    }
  };

  useEffect(() => {
    if (viewHTMLCode) {
      GetHTMLCode();
    }
  }, [viewHTMLCode]);

  const GetHTMLCode = () => {
    console.log(`!`, htmlRef);
    if (htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      setHTMLCode(htmlContent);
    }
  };
  return (
    <>
      <div className="mt-20 flex justify-center">
        <div
          className={`p-6 w-full ${screenSize == "desktop" ? "max-w-2xl" : "max-w-md"} ${dragOver ? "bg-purple-100 p-4" : "bg-white"}`}
          onDragOver={onDragOver}
          onDrop={() => onDropHandle()}
          onDragLeave={() => setDragOver(false)}
          ref={htmlRef}
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
      <ViewHTMLDialog
        openDialog={viewHTMLCode}
        htmlCode={htmlCode}
        closeDialog={closeDialog}
      />
    </>
  );
}

export default Canvas;
