import React from "react";

function ColumnLayout({ layout }) {
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
            className="p-2 flex items-center bg-gray-100 border border-dashed justify-center"
            key={index}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnLayout;
