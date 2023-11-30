'use client'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import axios from "axios";
export default function Sidebar() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [limit, setLimit] = useState();
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();

  const fetchRandomQuestions = async () => {
    try {
      const response = await fetch(
        `https://quizapi.io/api/v1/questions`,
        {
          method: "GET",
          headers: {
            "x-api-key": 'ZKYbWtrl2S4dGFlpdX0V2g2CCK1BJET4DuNmJ8jQ',
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

  const need = '?limit=${limit}&difficulty=${difficulty}&category=${category}'



  return (
    <div className='h-[100%] w-[20%] text-slate-900  rounded-[3px] flex flex-col gap-[2rem] gradient'>
      <div className="h-[20rem] relative top-8 flex flex-col gap-[2rem] item-center justify-center">
        <button className="w-[80%] h-[5rem] buttonGradient flex self-center reletive top-[5rem] rounded-[8px] text-gray-800 font-bold text-[30px] justify-center">
          <p className="text-center flex self-center justify-self-center" onClick={fetchRandomQuestions}  >random quiz</p>
        </button>
        <button className="h-[5rem] w-[5rem]  text-[30px] bg-red-800 text-center self-center rounded-[10px]">
          OR
        </button>
      </div>
      <div className="w-[92%] h-[30rem] bg-red-300 flex self-center flex-col rounded-[5px]">
        <h1 className="text-center mt-3 mb-2 text-2xl font-semibold">categories</h1>
        <div className="gap-[5px] grid auto-rows-auto w-[100%] grid-cols-3 h-[9rem] pl-2 mt-2">
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
        </div>
        <div className="flex flex-col mt-[.7rem] ml-2">
          <h2 className="text-center text-2xl font-semibold">difficality</h2>
          <div className="grid grid-cols-3 mt-3">
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          </div>
        </div>
        <div className="mt-5 flex self-center flex-col">
          <h1 className="text-center mb-2 text-2xl font-semibold">limit</h1>
          <input type="range" min={0} max={20} id="range"/>
        </div>
        <button className="w-[14rem] h-[3.5rem] bg-teal-800 rounded-[10px] flex self-center mt-4 text-center">
          search
        </button>
      </div>
    </div>
  )
}
