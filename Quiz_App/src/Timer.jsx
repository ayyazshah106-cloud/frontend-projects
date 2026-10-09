import React, { useEffect, useState } from "react";

const Timer = ({ setisOver, LeftTime, setLeftTime, isOver }) => {
  const [display, setDisplay] = useState("00 : 00");

  // Start one interval at a time, and always clean it up on reset/unmount.
  useEffect(() => {
    if (isOver || LeftTime <= 0) return;

    const intervalId = setInterval(() => {
      setLeftTime((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isOver, LeftTime > 0, setLeftTime]);

  useEffect(() => {
    if (LeftTime <= 0 && !isOver) {
      setisOver(true);
    }

    const minutes = Math.floor(LeftTime / 60).toString().padStart(2, "0");
    const seconds = Math.floor(LeftTime % 60).toString().padStart(2, "0");
    setDisplay(`${minutes} : ${seconds}`);
  }, [LeftTime, isOver, setisOver]);

  return <h1>⌚ Time Left: {display}</h1>;
};

export default Timer;
