import React from "react";
import { Counter } from "./tasks/Counter";
import { TemperatureConverter } from "./tasks/TemperatureConverter";
import { FlightBooker } from "./tasks/FlightBooker";

import "./App.css";

console.log("the hell");

const App = () => {
  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TemperatureConverter />
      <FlightBooker />
    </main>
  );
};

export default App;
