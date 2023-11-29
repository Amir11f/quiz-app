"use client";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [limit, setLimit] = useState();
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();

  const fetchRandomQuestions = async () => {
    try {
      const response = await fetch(
        `https://quizapi.io/api/v1/questions?limit=${limit}&difficulty=${difficulty}&category=${category}`,
        {
          method: "GET",
          headers: {
            "x-api-key": key!,
          },
        }
      );

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
    <div className="w-full bg-woman-in-black bg-contain bg-right bg-no-repeat flex flex-col z-10 overscroll-none max-h-screen h-screen overflow-y-hidden mainBackground">
      <Sidebar />
    </div>
  );
}
