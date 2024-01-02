import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setvalue] = useState(0);
  let addValue = () => {
    setvalue(value + 1);
    console.log("clicked", value);
  };
  let removevalue = () => {
    if (value - 1 >= 0) {
      setvalue(value - 1);
      console.log("Value changed", value - 1);
    } else {
      console.log("Negative value", value);
    }
  };
  return (
    <>
      <h1>Rohan is here</h1>
      <h2>counter value: {value}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
