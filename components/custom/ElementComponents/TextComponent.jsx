import React from "react";

const TextComponent = ({ style, textarea }) => {
  console.log(`textarea`, textarea);
  return (
    <div>
      <h2 style={style}>{textarea}</h2>
    </div>
  );
};

export default TextComponent;
