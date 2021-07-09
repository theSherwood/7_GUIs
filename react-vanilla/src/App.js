import React from "react";
import { Counter } from "./tasks/Counter";
import { TemperatureConverter } from "./tasks/TemperatureConverter";
import { FlightBooker } from "./tasks/FlightBooker";
import { Timer } from "./tasks/Timer";
import { CRUD } from "./tasks/CRUD"

import "./App.css";

const App = () => {
  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TemperatureConverter />
      <FlightBooker />
      <Timer />
      <CRUD />
    </main>
  );
};

export default App;
