import { createState, createEffect } from "solid-js";
import Card from "../../components/Card";
import { sampleData } from "./sampleData.js";
import { Parser } from "./parse.js";

import "./Cells.css";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function range(n) {
  return [...Array(n).keys()];
}
function letterRange(n) {
  return range(n).map(getNumberAsLetters);
}
function getBase26(n) {
  let result = [];
  while (n > 25) {
    let remainder = n % 26;
    result.push(remainder);
    n = Math.floor(n / 26) - 1;
  }
  result.push(n);
  return result.reverse();
}
function getNumberAsLetters(n) {
  let arr = getBase26(n);
  return arr.map(num => LETTERS[num]).join("");
}
function findAdjacent(arr, value, direction) {
  let index = arr.indexOf(value);
  if (index === -1) return null;
  if (direction === "before")
    return arr[index - 1] === undefined ? null : arr[index - 1];
  if (direction === "after") return arr[index + 1] || null;
  return null;
}

const Cells = props => {
  let shape = props.shape || [100, 100];
  let rows = range(shape[1]);
  let columns = letterRange(shape[0]);
  let tBody;

  let [state, setState] = createState({
    data: sampleData,
    focused: undefined
  });
  const p = new Parser(state, columns, rows);

  function createNewCell(key) {
    if (!(key in state.data)) {
      setState("data", [key], () => "");
    }
  }
  function handleFocus(e, key) {
    createNewCell(key);
    setState({ focused: key });
    setTimeout(() => {
      // The timeout allows the selection to occur after
      // the parsing switch inside a cell
      e.target.setSelectionRange(0, 9999);
    }, 10);
  }
  function handleBlur() {
    setState({ focused: undefined });
  }
  function handleInput(e, key) {
    setState("data", [key], () => e.target.value);
  }
  function handleKeydown(e, column, row) {
    // Navigate across the spreadsheet with arrow keys (and alt/option key)
    let selector;
    if (e.key === "ArrowUp") {
      let newRow = findAdjacent(rows, row, "before");
      selector = newRow !== null ? column + newRow : null;
    }
    if (e.key === "ArrowDown" || e.key === "Enter") {
      let newRow = findAdjacent(rows, row, "after");
      selector = newRow !== null ? column + newRow : null;
    }
    if (e.key === "ArrowLeft" && e.altKey) {
      let newColumn = findAdjacent(columns, column, "before");
      selector = newColumn !== null ? newColumn + row : null;
    }
    if (e.key === "ArrowRight" && e.altKey) {
      let newColumn = findAdjacent(columns, column, "after");
      selector = newColumn !== null ? newColumn + row : null;
    }

    if (selector) {
      e.preventDefault();
      let input = tBody.querySelector("#input-" + selector);
      input.focus();
    }
  }
  function clear() {
    setState({ data: {} });
  }

  return (
    <Card title="Cells">
      <div class="wrapper">
        <table>
          <thead>
            <tr>
              <td class="row-key"></td>
              {columns.map(column => (
                <td class="column-key">{column}</td>
              ))}
            </tr>
          </thead>
          <tbody ref={tBody}>
            {rows.map(i => (
              <tr id={"row-" + i}>
                <td class="row-key">{i}</td>
                {columns.map(j => (
                  <td id={j + i}>
                    <input
                      id={"input-" + j + i}
                      value={
                        j + i in state.data
                          ? state.focused === j + i
                            ? state.data[j + i]
                            : p.parse(state.data[j + i])
                          : ""
                      }
                      onfocus={e => handleFocus(e, j + i)}
                      onblur={handleBlur}
                      onkeydown={e => handleKeydown(e, j, i)}
                      oninput={e => handleInput(e, j + i)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onclick={clear}>Clear</button>
    </Card>
  );
};

export default Cells;
