import {createState} from 'solid-js'
import Card from "../components/Card";

import "./TempConverter.css";

function trunc(n) {
  return Number(n.toFixed(2));
}
function remove0(n) {
  if (n.length > 1 && n[0] === "0" && n[1] !== ".") {
    return n.slice(1);
  }
  return n;
}
function getC(f) {
  return trunc((5 / 9) * (f - 32));
}
function getF(c) {
  return trunc((9 / 5) * c + 32);
}
let r = /^-?\d*.?\d*$/;

const TempConverter = () => {
  let [state, setState] = createState({
    c: 0,
    f: 32
  })

  const updateFromC = e => update(e, "c", "f", getF);
  const updateFromF = e => update(e, "f", "c", getC);

  const update = (e, from, to, get) => {
    let value = e.target.value || "0";
    if (value === "0-" || value === "-") {
      setState({[from] : "-"});
    } else if (r.test(value)) {
      value = remove0(value) || 0;
      setState({
        [from]: value,
        [to]: get(value) || 0
      })
    }
  };

  function handleKeyDown(e) {
    if (
      ["Backspace", "Tab", "Alt", "ArrowLeft", "ArrowRight", "Meta"].includes(
        e.key
      )
    )
      return;
    if (
      (e.target.value === "" && !"1234567890.-".includes(e.key)) ||
      (e.target.value === "0" && !"1234567890.-".includes(e.key)) ||
      (e.target.value !== "0" && !"123456789.".includes(e.key)) ||
      (e.target.value.includes(".") && !"123456789".includes(e.key))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <Card title="Temperature Converter">
      <span>
        <input value={state.c} onkeydown={handleKeyDown} oninput={updateFromC} />
        Celsius
      </span>
      =
      <span>
        <input value={state.f} onkeydown={handleKeyDown} oninput={updateFromF} />
        Fahrenheit
      </span>
    </Card>
  )
};

export default TempConverter