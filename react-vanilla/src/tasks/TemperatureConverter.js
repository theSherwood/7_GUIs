import React, { useState } from "react";
import { Card } from "../components/Card";

import "./TemperatureConverter.css";

function trunc(n) {
  return Number(n.toFixed(2));
}
function getC(f) {
  return trunc((5 / 9) * (f - 32));
}
function getF(c) {
  return trunc((9 / 5) * c + 32);
}
let r = /^\d+.?\d*$/;

export const TemperatureConverter = () => {
  let [c, setC] = useState(0);
  let [f, setF] = useState(32);

  function updateFromC(e) {
    let { value } = e.target;
    if (r.test(value)) {
      value = Number(value);
      setC(value);
      setF(getF(value));
    }
  }

  function updateFromF(e) {
    let { value } = e.target;
    if (r.test(value)) {
      value = Number(value);
      setF(value);
      setC(getC(value));
    }
  }

  return (
    <Card title="Temperature Converter">
      <span>
        <input value={c} onChange={updateFromC} /> Celsius
      </span>
      =
      <span>
        <input value={f} onChange={updateFromF} /> Fahrenheit
      </span>
    </Card>
  );
};
