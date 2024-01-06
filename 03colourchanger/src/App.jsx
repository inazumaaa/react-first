import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap 
      justify-center bottom-12 insert-x-0 px-2"
      >
        <div
          className="flex flex-wrap 
        justify-center gap-5 bg-black px-4 py-2 rounded-3xl "
        >
          <button onClick={() => setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "red"}}>Red</button>
           <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "blue"}}>Blue</button>
           <button onClick={() => setcolor("orange")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "orange"}}>Orange</button>
           <button onClick={() => setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  );
}

export default App;
