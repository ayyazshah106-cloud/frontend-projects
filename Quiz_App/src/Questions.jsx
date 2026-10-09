import React from "react";
import questions from "./questions.json";

const Questions = ({ setisOver, setscore, currentIndex, setcurrentIndex }) => {
  const currentQuestion = questions[currentIndex];

  const onHandleClick = (option) => {
    if (!currentQuestion) return;

    if (option === currentQuestion.answer) {
      setscore((previous) => previous + 1);
    }

    if (currentIndex < questions.length - 1) {
      setcurrentIndex((previous) => previous + 1);
    } else {
      setisOver(true);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col gap-2.5 self-center">
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <div className="flex flex-row justify-center" key={`${currentIndex}-${index}`}>
          <button
            type="button"
            onClick={() => onHandleClick(option)}
            className="bg-gray-600 text-white px-5 py-1.5 mx-1.5 rounded-lg hover:bg-gray-700 w-fit hover:cursor-pointer"
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Questions;
