import React, { useState } from "react";

const QuizCard = ({
  questionNumber,
  questions,
  setQuestionNumber,
  setScore,
  setResponses,
  setAnswers,
}: {
  questionNumber: number;
  questions: {
    questionNumber: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setResponses: React.Dispatch<React.SetStateAction<number[]>>;
  setAnswers: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const totalQuestions = questions.length;
  const width = `${(questionNumber / totalQuestions) * 100}%`;

  const [selection, setSelection] = useState<null | number>(null);
  const isCorrect = selection === questions[questionNumber - 1].correctAnswer;

  const handleNextQuestion = () => {
    if (selection !== null) {
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
      setResponses((prevResponses) => [...prevResponses, selection]);
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        questions[questionNumber - 1].correctAnswer,
      ]);

      setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
      setSelection(null);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl md:w-1/2 px-8 py-6">
      <h1 className="text-4xl font-semibold mb-6 text-center">Quiz</h1>
      <div className="w-full h-2 bg-gray-300 rounded-2xl mb-6 flex">
        <div
          style={{ width }}
          className="bg-[#FF5261] rounded-2xl progressBar"
        ></div>
      </div>
      <div className="text-lg mb-4">
        <strong>{questionNumber}.</strong>{" "}
        {questions[questionNumber - 1].question}
      </div>
      <div className="flex flex-col">
        {questions[questionNumber - 1].options.map((option, index) => (
          <div
            key={index}
            className={`${
              selection === null
                ? "bg-gray-100"
                : isCorrect && selection === index + 1
                ? "bg-green-300"
                : !isCorrect && selection === index + 1
                ? "bg-red-300"
                : "bg-gray-100"
            } flex justify-between items-center px-7 py-3 rounded-full mb-2 cursor-pointer text-base transition-all duration-300`}
            onClick={() => {
              if (selection === null) {
                setSelection(index + 1);
              }
            }}
          >
            <span>{option}</span>
            {selection !== null && (
              <span className="text-sm">
                {isCorrect && selection === index + 1
                  ? "Correct!"
                  : !isCorrect && selection === index + 1
                  ? "Wrong!"
                  : ""}
              </span>
            )}
          </div>
        ))}
      </div>
      {selection !== null && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleNextQuestion}
            className="bg-[#FF5261] text-white px-4 py-2 rounded-full cursor-pointer"
          >
            Next Question
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizCard;
