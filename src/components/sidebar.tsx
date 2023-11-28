
export default function Sidebar() {
  return (
    <div className='h-[100%] w-[20%] text-slate-900  rounded-[3px] flex flex-col gap-[2rem] gradient'>
      <div className="h-[20rem] relative top-8 flex flex-col gap-[2rem] item-center justify-center">
        <button className="w-[80%] h-[5rem] buttonGradient flex self-center reletive top-[5rem] rounded-[8px] text-gray-800 font-bold text-[30px] justify-center">
          <p className="text-center flex self-center justify-self-center">random quiz</p>
        </button>
        <button className="h-[5rem] w-[5rem]  text-[30px] bg-red-800 text-center self-center rounded-[10px]">
          OR
        </button>
      </div>
      <div className="w-[92%] h-[25rem] bg-red-300 flex self-center flex-col">
        <div className="gap-[9px] grid auto-rows-auto w-[100%] grid-cols-3 h-[9rem]">
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>
          <div className="w-[5rem] h-[2.5rem] bg-yellow-400"><p>rem</p></div>    
        </div>
        <div className="flex flex-col mt-[2rem] ">
          <h2>difficality</h2>
          <div className="grid grid-cols-3 mt-3">
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
            <div className="w-[5rem] h-[2.5rem] bg-yellow-400 rounded-[5px]"><p>rem</p></div>
          </div>
        </div>
        <div>
          <input type="range" min={0} max={40} value={0} />
        </div>
      </div>
    </div>
  )
}
