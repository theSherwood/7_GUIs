import React from "react";
import {Counter} from './tasks/Counter'
import {TemperatureConverter} from './tasks/TemperatureConverter'

import './App.css'

const App = () => {
  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TemperatureConverter />
    </main>
  );
};

export default App;
