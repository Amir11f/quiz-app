"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
// import axios from "axios";
export default function Sidebar() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [limit, setLimit] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');


  const fetchRandomQuestions = async () => {
    try {
      const response = await fetch(`https://quizapi.io/api/v1/questions`, {
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

  const fetchQuestions = async () => {
    try {
      const responseC= await fetch(`https://quizapi.io/api/v1/questions?limit=${limit}&difficulty=${difficulty}&category=${category}`, {
        method: "GET",
        headers: {
          "x-api-key": key!,
        },
      });
      console.log('first')

      if (responseC.ok) {
        const result = await responseC.json();
        setRandomQuestions(result);
      } else {
        console.log(responseC)
        console.log("Failed to fetch");
      }
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  console.log(category)
  console.log(difficulty)


  return (
    <div className="h-[100%] w-[20%] text-slate-900  rounded-[3px] flex flex-col gap-[2rem] gradient">
      <div className="h-[15rem] relative top-8 flex flex-col gap-[2rem] item-center justify-center">
        <button className="w-[80%] h-[5rem] buttonGradient flex self-center reletive top-[5rem] rounded-[8px] text-gray-800 font-bold text-[30px] justify-center">
          <p
            className="text-center flex self-center justify-self-center"
            onClick={fetchRandomQuestions}
          >
            random quiz
          </p>
        </button>
        <button className="h-[5rem] w-[5rem]  text-[30px] hover:bg-green-700 bg-red-800 text-center self-center rounded-[10px]">
          OR
        </button>
      </div>
      <div className="w-[92%] h-[38rem] bg-blue-300 flex self-center flex-col rounded-[5px]">
        <h1 className="text-center mt-3 -mb-2 text-[28px] font-semibold relative bottom-2">
          categories
        </h1>
        <div className="flex flex-col w-[100%] grid-cols-3 h-[14.8rem] pl-2 mt-2">
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 border-t-2 text-center text-[18px]" onClick={()=>setCategory('Linux')} >Linux</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('BASH')}>BASH</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('PHP')}>PHP</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('HTML')}> HTML </p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('MySQL')}>MySQL</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('Docker')}>Docker</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('WordPress')}>WordPress</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('Kubernetes')}>Kubernetes</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('JavaScript')}>JavaScript</p>
          </div>
          <div className="w-[auto] rounded-[5px] border-b-2">
            <p className="ml-[2px] hover:text-red-900 font-bold cursor-pointer  h-7 text-center text-[18px]" onClick={()=>setCategory('DevOps')}>DevOps</p>
          </div>
        </div>
        <div className="flex flex-col relative top-[5rem] ml-2">
          <h2 className="text-center text-[28px] font-semi18ld font-bold">difficality</h2>
          <div className="grid grid-cols-3 mt-3">
            <div className="w-[5rem]  bg-red-200 font-bold cursor-pointer  hover:bg-green-300 text-[18px] rounded-[5px]">
              <p className="ml-[2px] text-center h-[auto] hover:text-red-800 text-[18px]" onClick={()=>{setDifficulty('Easy')}}>Easy</p>
            </div>
            <div className="w-[5rem]  bg-red-200 font-bold  cursor-pointer  hover:bg-green-300 text-[18px]  rounded-[5px]">
              <p className="ml-[2px] text-center h-[auto] hover:text-red-800 text-[18px]" onClick={()=>{setDifficulty('Medium')}}>Medium </p>
            </div>
            <div className="w-[5rem]  bg-red-200  font-bold cursor-pointer hover:bg-green-300 text-[18px] rounded-[5px]">
              <p className="ml-[2px] text-center h-[auto] hover:text-red-800 text-[18px]" onClick={()=>{setDifficulty('Hard')}}>Hard</p>
            </div>
          </div>
        </div>
        <div className=" flex self-center flex-col relative top-[5rem]">
          <h1 className="text-center mt-3 -mb-2 text-[28px] font-semibold relative bottom-2">limit</h1>
          <input type="range" min={0} max={20} id="range" />
        </div>
        <button className="w-[14rem] relative top-[5rem] h-[3.5rem] bg-teal-800 rounded-[10px] flex justify-center items-center text-[30px] font-bold text-green-100 self-center hover:shadow-2xl hover:text-blue-300 mt-4 text-center " onClick={fetchQuestions}>
          search
        </button>
      </div>
    </div>
  );
}
