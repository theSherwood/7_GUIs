import { main, a } from "./elements";
import "./app.css";

import { counter } from "./tasks/counter";
import { temperatureConverter } from "./tasks/temperatureConverter";
import { flightBooker } from "./tasks/flightBooker";
import { timer } from "./tasks/timer";
import { crud } from "./tasks/crud";
import { circleDrawer } from "./tasks/circleDrawer";
import { cells } from "./tasks/cells/cells";

export const app = () => {
  return main.class`App`(
    a.href`../../index.html`("Home"),
    counter(),
    temperatureConverter(),
    flightBooker(),
    timer(),
    crud(),
    circleDrawer(),
    cells()
  );
};
