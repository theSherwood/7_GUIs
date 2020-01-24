import {html, o} from 'sinuous'
import { card } from "../components/Card";

import "./tempConverter.css";

// TODO: use onkeydown instead of oninput

function trunc(n) {
  return Number(n.toFixed(2));
}
function getC(f) {
  return trunc((5 / 9) * (f - 32));
}
function getF(c) {
  return trunc((9 / 5) * c + 32);
}
let r = /^-?\d*.?\d*$/;

export const tempConverter = () => {
  let c = o(0)
  let f = o(32)

  function updateFromC(e) {
    let value = e.target.value || '0'
    if (value === "0-") {
      c("-");
    } else if (r.test(value)) {
      value = Number(value) || 0;
      c(value);
      f(getF(value));
    }
  }

  function updateFromF(e) {
    let value = e.target.value || '0'
    if (value === "0-") {
      f('-')
    } else if (r.test(value)) {
      value = Number(value) || 0;
      f(value);
      c(getC(value));
    }
  }

  return html`
    <${card} title="Temperature Converter">
      <span>
        <input value=${c} oninput=${updateFromC} /> Celsius
      </span>
      =
      <span>
        <input value=${f} oninput=${updateFromF} /> Fahrenheit
      </span>
    <//>
  `
};
