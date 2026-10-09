import React from "react";
import questions from "./questions.json";

const Result = ({ score, onReset }) => {
  const total = questions.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  return (
    <div className="text-center py-6">
      <span className="text-sm text-gray-400">Quiz complete</span>
      <p className="text-4xl font-semibold text-gray-900 mt-2">
        {score}
        <span className="text-xl text-gray-400"> / {total}</span>
      </p>
      <p className="text-sm text-indigo-600 mt-1">{percentage}% correct</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full px-4 py-2.5"
        >
          Start Again
        </button>
      )}
    </div>
  );
};

export default Result;
