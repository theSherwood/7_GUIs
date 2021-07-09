import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

import "./CRUD.css";

let initialState = [
  ["Paul", "Atreides"],
  ["Gurney", "Halleck"],
  ["Duncan", "Idaho"],
];

let Entries = ({ prefix, entries, selected, setSelected }) => {
  let filteredEntries = entries
    .map((entry, i) => [entry[0], entry[1], i])
    .filter((entry) => entry[1].toLowerCase().startsWith(prefix.toLowerCase()));

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      size="4"
    >
      {filteredEntries.map((entry, i) => (
        <option value={i} key={i + entry[0] + entry[1]}>
          {entry[1]}, {entry[0]}
        </option>
      ))}
    </select>
  );
};

let NamesAndButtons = ({ create, update, del }) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");

  return (
    <>
      <div>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
        Surname:
        <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>
      <div className="buttons">
        <button onClick={() => create(name, surname)}>Create</button>
        <button onClick={() => update(name, surname)}>Update</button>
        <button onClick={del}>Delete</button>
      </div>
    </>
  );
};

export const CRUD = () => {
  let [prefix, setPrefix] = useState("");
  let [entries, setEntries] = useState(initialState);
  let [selected, setSelected] = useState(-1);

  function create(name, surname) {
    let newEntries = entries.slice();
    newEntries.push([name, surname]);
    setEntries(newEntries);
  }
  function update(name, surname) {
    if (selected > -1) {
      let newEntries = entries.slice();
      newEntries[selected] = [name, surname];
      setEntries(newEntries);
    }
  }
  function del() {
    if (selected > -1) setEntries(entries.filter((v, i) => i != selected));
  }

  return (
    <Card title="CRUD">
      <div className="wrapper">
        Filter prefix:
        <input
          value={prefix}
          onChange={(e) => {
            setPrefix(e.target.value);
            setSelected(-1);
          }}
        />
        <Entries
          entries={entries}
          prefix={prefix}
          selected={selected}
          setSelected={setSelected}
        />
        <NamesAndButtons create={create} update={update} del={del} />
      </div>
    </Card>
  );
};
