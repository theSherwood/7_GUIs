import { html } from "sinuous-style";
import { o } from "sinuous";
import { card } from "../components/card";

export const counter = () => {
  let count = o(0);

  return html("counter")`
    <${card} title="Counter">
      ${count}
      <button onclick=${() => count(count() + 1)}>+</button>
    <//>

    <style local>
      button {
        margin-left: 15px;
      }
    </style>
  `;
};
