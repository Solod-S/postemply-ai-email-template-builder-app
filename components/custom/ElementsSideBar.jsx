"use client";
import Layout from "@/data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/data/ElementList";
import { useDragDropElementLayout } from "@/app/provider";

function ElementsSideBar() {
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();
  const onDragLayoutStart = layout => {
    setDragElementLayout({ dragLayout: { ...layout, id: Date.now() } });
  };
  return (
    <div className="p-5 h-screen overflow-y-auto">
      <h2 className="font-black text-lg">Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {Layout.map((layout, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => onDragLayoutStart(layout)}
          >
            <ElementLayoutCard layout={layout} />
          </div>
        ))}
      </div>
      <h2 className="font-black text-lg mt-6">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ElementList.map((element, index) => (
          <ElementLayoutCard layout={element} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ElementsSideBar;
