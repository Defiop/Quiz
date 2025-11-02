import React, { useState } from "react";

const Quiz = () => {
  const [showResult, setShowResult] = useState(false);
  if (showResult) {
    return (
      <div className="h-screen bg-[#001e4d] flex justify-center items-center p-4">
        <div className="bg-white max-w-lg p-6 w-full shadow-lg rounded-lg text-center">
          <h1 className="text-2xl font-bold text-[#001e4d] mb-6 text-center">
            Quiz Completed
          </h1>
          <p className="text-lg mb-6">
            Your Score: <strong>2 </strong>out of 5
          </p>
          <button className="rounded-lg bg-green-500 p-2 text-white">
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#001e4d] flex justify-center items-center p-4">
      <div className="bg-white max-w-lg p-6 w-full rounded-lg">
        <h1 className="text-2xl font-bold text-[#001e4d] mb-6">Simple Quiz</h1>
        <h2 className="text-xl font-semibold mb-2">
          What is the capital of France?
        </h2>
        <div className="grid gap-6 mb-6">
          <button className="text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-300">
            Berlin
          </button>
          <button className="text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-300">
            Paris
          </button>
          <button className="text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-300">
            Madrid
          </button>
          <button className="text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-300">
            Logos
          </button>
          <div className="flex flex-col items-center justify-center gap-3">
            <button className="bg-[#001e4d] text-white px-8 py-2 text-xl cursor-pointer">
              Next
            </button>
            <div className="text-gray-600 text-sm text-center">
              Question 1 of 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
