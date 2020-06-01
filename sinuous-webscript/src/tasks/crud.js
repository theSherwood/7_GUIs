import { html, o } from "sinuous";
import { S, subscribe } from "sinuous/observable";
import { card } from "../components/card";

import "./crud.css";

export const crud = () => {
  let prefix = o("");
  let entries = o([
    o(["Paul", "Atreides"]),
    o(["Gurney", "Halleck"]),
    o(["Duncan", "Idaho"])
  ]);
  let filteredEntries = S(() =>
    // get filtered entries in which entry[1] startsWith prefix
    // get array of [entry[0], entry[1], index]  
    entries()
      .map((entry, i) => [entry()[0], entry()[1], i])
      .filter(entry =>
        entry[1].toLowerCase().startsWith(prefix().toLowerCase())
      )
  );
  let name = o("");
  let surname = o("");
  let selected = o(-1)
  subscribe(() => {prefix(); selected(-1)});

  function createHandler() {
    entries(entries().concat(o([name(), surname()])));
  }
  function updateHandler() {
    // if selected > -1 then update entries[selected]
    selected() > -1 && entries()[selected()]([name(), surname()]);
  }
  function deleteHandler() {
    // if selected > -1 then delete entries[selected]
    selected() > -1 && entries(entries().filter((entry, i) => i != selected()));
  }

  return html`
    <${card} title="CRUD">
      <div class="wrapper">
        Filter prefix:
        <input value=${prefix} oninput=${e => prefix(e.target.value)} />
        <select
          value=${selected}
          oninput=${e => selected(e.target.value)}
          size="4"
        >
          ${() =>
            filteredEntries().map(
              entry => html`
                <option value=${entry[2]}>${entry[1]}, ${entry[0]}</option>
              `
            )}
        </select>
        <div>
          Name:
          <input value=${name} oninput=${e => name(e.target.value)} />
          Surname:
          <input value=${surname} oninput=${e => surname(e.target.value)} />
        </div>
        <div class="buttons">
          <button onclick=${createHandler}>Create</button>
          <button onclick=${updateHandler}>Update</button>
          <button onclick=${deleteHandler}>Delete</button>
        </div>
      </div>
    <//>
  `;
};
