import { html } from "sinuous-style";
import { S, o } from "sinuous/observable";
import { card } from "../components/card";

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

  return html("timer")`
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
          oninput=${(e) => duration(e.target.value)}
        />
        <button onclick=${startTimer}>Reset Timer</button>
      </div>
    <//>

    <style local>
      .wrapper {
        max-width: 400px;
        text-align: left;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        grid-gap: 10px 10px;
        grid-auto-flow: row;
      }

      input {
        padding: 0;
        justify-self: stretch;
        align-self: center;
      }

      button {
        grid-column: 1/3;
        grid-row: auto;
      }

      .duration {
        grid-column: 2;
      }
    </style>
  `;
};
