import { html, o } from "sinuous";
import { card } from "../components/card";

import "./temperatureConverter.css";

function trunc(n) {
  return Number(n.toFixed(2));
}

function remove0(n) {
  if (/^0\d+$/.test(n)) return n.slice(1);
  if (/^-0\d+$/.test(n)) return "-" + n.slice(2);
  return n;
}

function getC(f) {
  return trunc((5 / 9) * (f - 32)) || -17.78; // 0 F
}
function getF(c) {
  return trunc((9 / 5) * c + 32) || 32; // 0 C
}
let r = /^-?\d*.?\d*$/;
function isValid(temp) {
  if (/^-?\d*$/.test(temp)) return true;
  if (/^-?\d+[.]?\d*$/.test(temp)) return true;
  return false;
}

export const temperatureConverter = () => {
  let c = o(0);
  let f = o(32);

  const updateFromC = e => update(e, c, f, getF);
  const updateFromF = e => update(e, f, c, getC);

  const update = (e, from, to, get) => {
    let value = e.target.value; //|| "0";
    if (!isValid(value)) return;
    value = remove0(value)
    from(value)
    to(get(value))
  };

  return html`
    <${card} title="Temperature Converter">
      <span>
        <input value=${c} oninput=${updateFromC} />
        Celsius
      </span>
      =
      <span>
        <input value=${f} oninput=${updateFromF} />
        Fahrenheit
      </span>
    <//>
  `;
};
