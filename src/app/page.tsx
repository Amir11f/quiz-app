export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] border-2 border-solid border-red-500">
      <div className="flex flex-col item-center justify-center w-[100%]">
        <h1 className="text-center">Quiz App | Start a Random Quiz</h1>
        <div className="w-fit text-center mx-auto cursor-pointer border-2 border-solid border-black-500 p-[10px]">
          Start A Random Quiz
        </div>
        <h3 className=" text-center text-red-700">OR</h3>
        <div className="w-[80%] h-[50vh] border-2 border-solid border-yellow-600 text-center self-center text-yellow-700" >
          choose
        </div>
      </div>
    </div>
  );
}
