import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      style={{ background: color }}
      className="w-[150px] h-[150px]  text-center content-center m-auto "
    >
      Color
    </div>
  );
};

export default ColorBox;
