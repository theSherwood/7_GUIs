import { o } from "sinuous";
import { button } from "../elements";
import { card } from "../components/card";

import "./counter.css";

export const counter = () => {
  let count = o(0);

  return card(
    { title: "Counter" },
    count,
    button.onclick(() => count(count() + 1))("+")
  );
};
