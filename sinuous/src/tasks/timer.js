import { html, o } from "sinuous";
import { S } from "sinuous/observable";
import { card } from "../components/card";

import "./timer.css";

export const timer = () => {
  const MAX = 30000;

  let duration = o(5000);
  let durationFormatted = S(() => (duration() / 1000).toFixed(1));
  let start = o();
  let time = o();
  let progress = S(() => (time() - start()) / duration());
  let interval;

  function createInterval() {
    return setInterval(() => {
      time(new Date().valueOf());
    }, 10);
  }
  function startTimer() {
    clearInterval(interval);
    start(new Date().valueOf());
    time(start());
    interval = createInterval();
  }

  startTimer();

  return html`
    <${card} title="Timer">
      <div class="wrapper">
        Elapsed Time:
        <progress value=${progress} />
        <div class="duration">${durationFormatted}s</div>
        Duration:
        <input
          type="range"
          min=${0}
          max=${MAX}
          value=${duration}
          oninput=${e => duration(e.target.value)}
        />
        <button onclick=${startTimer}>Reset Timer</button>
      </div>
    <//>
  `;
};
