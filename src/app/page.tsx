"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const fetchRandomQuestions = async () => {
    try {
      const response = await fetch("https://quizapi.io/api/v1/questions", {
        method: "GET",
        headers: {
          "x-api-key": key!,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setRandomQuestions(result);
      } else {
        console.log("Failed to fetch");
      }
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    console.log(randomQuestions);
  }, [randomQuestions]);

  return (
    <div className="w-[100%] h-[100vh] border-2 border-solid border-red-500">
      <div>
        <h1 className="text-center">Quiz App | Start a Random Quiz</h1>
        <div
          className="w-fit text-center mx-auto cursor-pointer border-2 border-solid border-black-500 p-[10px]"
          onClick={fetchRandomQuestions}
        >
          Start A Random Quiz
        </div>
      </div>
    </div>
  );
}
