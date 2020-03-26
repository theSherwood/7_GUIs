import { createState } from "solid-js";
import Card from "../presentationalComponents/Card";

import "./Counter.css";

const Counter = () => {
  let [state, setState] = createState({count: 0});

  return (
    <Card title="Counter">
      {state.count}
      <button onclick={() => setState("count", c => c+1)}>+</button>
    </Card>
  )
};

export default Counter