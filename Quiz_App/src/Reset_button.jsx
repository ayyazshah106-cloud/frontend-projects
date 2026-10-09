import React from "react";

const Reset_button = ({
  setcurrentIndex,
  setscore,
  setisOver,
  setLeftTime,
  initialTime = 60,
}) => {
  const onReset = () => {
    setcurrentIndex(0);
    setscore(0);
    setLeftTime(initialTime);
    setisOver(false);
  };

  return (
    <button
      type="button"
      onClick={onReset}
      className="text-white bg-gray-900 border border-transparent hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 shadow-sm font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
    >
      Reset Quiz
    </button>
  );
};

export default Reset_button;
