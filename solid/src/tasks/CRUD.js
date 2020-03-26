import { createState, createEffect, createMemo } from "solid-js";
import Card from "../presentationalComponents/Card";

import "./CRUD.css";

const CRUD = () => {
  let [state, setState] = createState({
    prefix: "",
    name: "",
    surname: "",
    selected: -1,
    entries: [
      ["Paul", "Atreides"],
      ["Gurney", "Halleck"],
      ["Duncan", "Idaho"]
    ]
  });

  let filteredEntries = createMemo(() =>
    // get filtered entries in which entry[1] startsWith prefix
    // get array of [entry[0], entry[1], index]
    state.entries
      .map((entry, i) => [entry[0], entry[1], i])
      .filter(entry =>
        entry[1].toLowerCase().startsWith(state.prefix.toLowerCase())
      )
  );

  createEffect(() => {
    state.prefix;
    setState({ selected: -1 });
  });

  function createHandler() {
    setState({
      entries: state.entries.concat([[state.name, state.surname]])
    });
  }
  function updateHandler() {
    // if selected > -1 then update entries[selected]
    if (state.selected > -1) {
      setState("entries", [state.selected], [state.name, state.surname]);
    }
  }
  function deleteHandler() {
    // if selected > -1 then delete entries[selected]
    if (state.selected > -1) {
      setState({
        entries: state.entries.filter((entry, i) => i != state.selected)
      });
    }
  }

  return (
    <Card title="CRUD">
      <div class="wrapper">
        Filter prefix:
        <input
          value={state.prefix}
          oninput={e => setState({ prefix: e.target.value })}
        />
        <select
          value={state.selected}
          oninput={e => setState({ selected: e.target.value })}
          size="4"
        >
          {filteredEntries().map(entry => (
            <option value={entry[2]}>
              {entry[1]}, {entry[0]}
            </option>
          ))}
        </select>
        <div>
          Name:
          <input
            value={state.name}
            oninput={e => setState({ name: e.target.value })}
          />
          Surname:
          <input
            value={state.surname}
            oninput={e => setState({ surname: e.target.value })}
          />
        </div>
        <div class="buttons">
          <button onclick={createHandler}>Create</button>
          <button onclick={updateHandler}>Update</button>
          <button onclick={deleteHandler}>Delete</button>
        </div>
      </div>
    </Card>
  );
};

export default CRUD;
