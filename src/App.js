import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/increaseCounter";

function App() {
  return (
    <div>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
    </div>
  );
}

export default App;
