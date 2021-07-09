import React from "react";
import { Counter } from "./tasks/Counter";
import { TemperatureConverter } from "./tasks/TemperatureConverter";
import { FlightBooker } from "./tasks/FlightBooker";
import { Timer } from "./tasks/Timer";

import "./App.css";

const App = () => {
  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TemperatureConverter />
      <FlightBooker />
      <Timer />
    </main>
  );
};

export default App;
