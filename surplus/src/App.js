import * as Surplus from "surplus";
import S from "s-js";
import Counter from './tasks/Counter'

import "./App.css";

console.log(S);

const App = () => {
  // let count = S.data(10);

  // return (
  //   <div>
  //     {count()}
  //     <button onClick={() => count(count() + 1)}>+</button>
  //   </div>
  // );

  return (
    <main className="App">
      <a href="../../index.html">Home</a>

      <Counter />
    </main>
  );
};

export default App;
