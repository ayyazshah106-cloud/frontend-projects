import React from "react";

const Button = ({ color, setselectedColor, children }) => {
  // console.log(color);
  function setColor() {
    setselectedColor(color);
  }
  return (
    <div className="flex justify-center">
      <button
        onClick={setColor}
        style={{ background: color }}
        className="rounded-[4px] text-[10px] px-1.5 m-1 hover:cursor-pointer hover:bg-gray-800 z-10"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
