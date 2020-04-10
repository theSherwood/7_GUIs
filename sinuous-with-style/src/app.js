import { html } from "sinuous-style";

import { counter } from "./tasks/counter";
import { temperatureConverter } from "./tasks/temperatureConverter";
import { flightBooker } from "./tasks/flightBooker";
import { timer } from "./tasks/timer";
import { crud } from "./tasks/crud";
import { circleDrawer } from "./tasks/circleDrawer";
import { cells } from "./tasks/cells/cells";

export const app = () => {
  return html("app")`
    <main>
      <a href="../../index.html">Home</a>

      <${counter} />
      <${temperatureConverter} />
      <${flightBooker} />
      <${timer} />
      <${crud} />
      <${circleDrawer} />
      <${cells} />
    </main>

    <style local>
      main {
        max-width: 800px;
        margin: auto;
      }
    </style>
  `;
};
