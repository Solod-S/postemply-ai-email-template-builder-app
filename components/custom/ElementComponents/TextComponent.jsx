import React from "react";

const TextComponent = ({ style, textarea }) => {
  return (
    <div>
      <h2 style={style}>{textarea}</h2>
    </div>
  );
};

export default TextComponent;
