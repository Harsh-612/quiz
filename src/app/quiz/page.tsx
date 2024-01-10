"use client";

import QuizCard from "@/components/QuizCard";
import ResultCard from "@/components/ResultCard";
import React, { useState } from "react";

interface Question {
  questionNumber: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const Page: React.FC = () => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [responses, setResponses] = useState<number[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<Question[]>([
    {
      questionNumber: 1,
      question: "What is the largest ocean on Earth?",
      options: [
        "A. Atlantic Ocean",
        "B. Indian Ocean",
        "C. Arctic Ocean",
        "D. Pacific Ocean",
      ],
      correctAnswer: 4,
    },
    {
      questionNumber: 2,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "A. J.K. Rowling",
        "B. Harper Lee",
        "C. George Orwell",
        "D. Jane Austen",
      ],
      correctAnswer: 2,
    },
    {
      questionNumber: 3,
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["A. Oxygen", "B. Nitrogen", "C. Carbon Dioxide", "D. Hydrogen"],
      correctAnswer: 3,
    },
    {
      questionNumber: 4,
      question: "Who developed the theory of relativity?",
      options: [
        "A. Isaac Newton",
        "B. Albert Einstein",
        "C. Galileo Galilei",
        "D. Stephen Hawking",
      ],
      correctAnswer: 2,
    },
    {
      questionNumber: 5,
      question: "What is the capital of Japan?",
      options: ["A. Seoul", "B. Beijing", "C. Tokyo", "D. Bangkok"],
      correctAnswer: 3,
    },
  ]);

  return (
    <>
      <main className="bg-blue-100 h-screen w-screen flex justify-center items-center">
        {questionNumber <= questions.length ? (
          <QuizCard
            questionNumber={questionNumber}
            questions={questions}
            setQuestionNumber={setQuestionNumber}
            setScore={setScore}
            setResponses={setResponses}
            setAnswers={setAnswers}
          />
        ) : (
          <ResultCard
            score={score}
            responses={responses}
            questions={questions}
          />
        )}
      </main>
    </>
  );
};

export default Page;
