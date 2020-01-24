import React from "react";
import {Counter} from './tasks/Counter'
import {TempConverter} from './tasks/TempConverter'

import './App.css'

const App = () => {
  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TempConverter />
    </main>
  );
};

export default App;
