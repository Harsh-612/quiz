import { title } from "process";
import React from "react";
import { Chart } from "react-google-charts";
interface ResultCardProps {
  score: number;
  responses: number[];
  questions: {
    questionNumber: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const ResultCard: React.FC<ResultCardProps> = ({
  score,
  responses,
  questions,
}) => {
  const data = [
    ["Response", "Result"],
    ["Correct", score],
    ["Incorrect", questions.length - score],
  ];
  const options = { colors: ["#0a0", "#FF5261"] };
  return (
    <section className="bg-white rounded-2xl shadow-xl md:w-1/2 mx-auto p-8 h-auto">
      <h1 className="text-4xl font-semibold mb-6 text-center text-[#FF5261]">
        Quiz Result
      </h1>
      <div className="w-full h-2 bg-gray-300 rounded-2xl mb-6 flex">
        <div
          style={{ width: `${(score / questions.length) * 100}%` }}
          className="bg-[#FF5261] rounded-2xl progressBar"
        ></div>
      </div>
      <div className="text-lg mb-8">
        <p className="text-center text-2xl font-bold text-[#4CAF50]">
          Your Score: {score}/{questions.length}
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="mb-4 font-bold text-lg">Your Responses:</p>
          <ul>
            {responses.map((response, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <div className="flex-grow">
                    <span>
                      <strong>
                        {questions[index].options[response - 1].substring(0, 2)}
                        &nbsp;
                      </strong>
                    </span>
                    <span>
                      {questions[index].options[response - 1].substring(3)}
                    </span>
                    <span
                      className={`ml-4 ${
                        response === questions[index].correctAnswer
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {response === questions[index].correctAnswer
                        ? "(Correct)"
                        : "(Incorrect)"}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <Chart chartType="PieChart" data={data} options={options}></Chart>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
