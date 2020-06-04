import { html } from "sinuous-style";
import { sample, o } from "sinuous/observable";
import { card } from "../../components/card";
import { sampleData } from "./sampleData.js";
import { Parser } from "./parse.js";

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
  return arr.map((num) => LETTERS[num]).join("");
}
function findAdjacent(arr, value, direction) {
  let index = arr.indexOf(value);
  if (index === -1) return null;
  if (direction === "before")
    return arr[index - 1] === undefined ? null : arr[index - 1];
  if (direction === "after") return arr[index + 1] || null;
  return null;
}

export const cells = (props) => {
  let shape = (props && props.shape) || [100, 100];

  Object.keys(sampleData).forEach((key) => {
    // Make each entry an observable
    sampleData[key] = o(sampleData[key]);
  });
  const data = o(sampleData);

  const rows = range(shape[1]);
  const columns = letterRange(shape[0]);
  const p = new Parser(data, columns, rows);

  let focused = o(undefined);
  let tBody; // Used as a ref

  function createNewCell(key) {
    let dataRef = sample(data);
    if (!dataRef[key]) {
      dataRef[key] = o("");
      data(dataRef);
    }
  }

  function handleFocus(e, key) {
    createNewCell(key);
    focused(key);
    setTimeout(() => {
      // The timeout allows the selection to occur after
      // the parsing switch inside a cell
      e.target.setSelectionRange(0, 9999);
    }, 10);
  }

  function handleBlur() {
    focused(undefined);
  }

  function handleInput(e, key) {
    sample(data)[key](e.target.value);
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
    data({});
  }

  const view = html('cells')`
    <${card} title="Cells">
      <div class="wrapper">
        <table>
          <thead>
            <tr>
              <td class="row-key"></td>
              ${() =>
                columns.map(
                  (column) => html()` <td class="column-key">${column}</td> `
                )}
            </tr>
          </thead>
          <tbody>
            ${() =>
              rows.map(
                (i) => html()`
                  <tr id=${"row-" + i}>
                    <td class="row-key">${i}</td>
                    ${() =>
                      columns.map(
                        (j) => html()`
                          <td id=${j + i}>
                            <input
                              id=${"input-" + j + i}
                              value=${() => {
                                return j + i in data()
                                  ? focused() === j + i
                                    ? data()[j + i]()
                                    : p.parse(data()[j + i]())
                                  : "";
                              }}
                              onfocus=${(e) => handleFocus(e, j + i)}
                              onblur=${handleBlur}
                              onkeydown=${(e) => handleKeydown(e, j, i)}
                              oninput=${(e) => handleInput(e, j + i)}
                            />
                          </td>
                        `
                      )}
                  </tr>
                `
              )}
          </tbody>
        </table>
      </div>
      <button onclick=${clear}>Clear</button>
    <//>

    <style local>
      .wrapper {
        margin: auto;
        overflow: scroll;
        max-width: 600px;
        max-height: 600px;
        border: solid 1px #ddd;
      }

      table {
        table-layout: fixed;
        border-collapse: collapse;
        border: solid 1px #ddd;
        background: white;
      }

      td {
        height: 30px;
        border: solid 1px #ddd;
        overflow: hidden;
      }

      input {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        text-align: right;
        border: none;
        outline: none;
      }

      input:focus {
        text-align: left;
      }

      .row-key {
        width: min-content;
        padding-left: 15px;
        padding-right: 15px;
      }

      .column-key {
        min-width: 120px;
      }
    </style>
  `;

  tBody = view.querySelector("tbody"); // Assign ref to domNode

  return view;
};