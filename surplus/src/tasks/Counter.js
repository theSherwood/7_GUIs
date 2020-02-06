import * as Surplus from "surplus";
import S from 's-js'
import Card from "../components/Card";

import "./Counter.css";

const Counter = () => {
  let count = S.data(10);

  return (
    <Card title="Counter">
      {count()}
      <button onClick={() => {
        console.log(S.sample(count))
        count(count() + 1)}
        }>+</button>
    </Card>
  );
};

export default Counter