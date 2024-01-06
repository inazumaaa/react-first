import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../src/components/card"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 test-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Rohan" btnText='click me' />
      <Card username="Solanki"  btnText='visit me' />
    </>
  );
}

export default App;
