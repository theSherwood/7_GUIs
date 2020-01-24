import { html, o } from "sinuous";
import { card } from "../components/Card";

import "./tempConverter.css";

function trunc(n) {
  return Number(n.toFixed(2));
}
function remove0(n) {
  if (n.length > 1 && n[0] === '0' && n[1] !== '.') {
    return n.slice(1)
  }
  return n
}
function getC(f) {
  return trunc((5 / 9) * (f - 32));
}
function getF(c) {
  return trunc((9 / 5) * c + 32);
}
let r = /^-?\d*.?\d*$/;

export const tempConverter = () => {
  let c = o(0);
  let f = o(32);

  const updateFromC = e => update(e, c, f, getF)
  const updateFromF = e => update(e, f, c, getC)

  const update = (e, from, to, get) => {
    let value = e.target.value || "0";
    if (value === "0-") {
      from("-");
    } else if (r.test(value)) {
      value = remove0(value) || 0;
      from(value);
      to(get(value) || 0);
    }
  }

  function handleKeyDown(e) {
    if (
      ["Backspace", "Tab", "Alt", "ArrowLeft", "ArrowRight", "Meta"].includes(
        e.key
      )
    )
      return;
    if (
      (e.target.value === "0" && !"1234567890.-".includes(e.key)) ||
      (e.target.value !== "0" && !"123456789.".includes(e.key)) ||
      (e.target.value.includes('.') && !"123456789".includes(e.key))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return html`
    <${card} title="Temperature Converter">
      <span>
        <input value=${c} onkeydown=${handleKeyDown} oninput=${updateFromC} />
        Celsius
      </span>
      =
      <span>
        <input value=${f} onkeydown=${handleKeyDown} oninput=${updateFromF} />
        Fahrenheit
      </span>
    <//>
  `;
};
