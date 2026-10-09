import React, { useCallback, useState } from "react";
import questions from "./questions.json";
import Timer from "./Timer";
import Questions from "./Questions";
import Result from "./Result";
import Reset_button from "./Reset_button";

// Change this value if your quiz should have a different time limit (seconds).
const INITIAL_TIME = 60;

const App = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [isOver, setisOver] = useState(false);
  const [leftTime, setLeftTime] = useState(INITIAL_TIME);

  const resetQuiz = useCallback(() => {
    setcurrentIndex(0);
    setscore(0);
    setLeftTime(INITIAL_TIME);
    setisOver(false);
  }, []);

  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <Timer
        LeftTime={leftTime}
        setLeftTime={setLeftTime}
        setisOver={setisOver}
        isOver={isOver}
      />

      {!isOver && currentIndex < questions.length ? (
        <Questions
          setisOver={setisOver}
          setscore={setscore}
          currentIndex={currentIndex}
          setcurrentIndex={setcurrentIndex}
        />
      ) : (
        <Result score={score} onReset={resetQuiz} />
      )}

      <Reset_button
        setcurrentIndex={setcurrentIndex}
        setscore={setscore}
        setisOver={setisOver}
        setLeftTime={setLeftTime}
        initialTime={INITIAL_TIME}
      />
    </main>
  );
};

export default App;
