import {createState, onCleanup, createMemo} from 'solid-js'
import Card from "../presentationalComponents/Card";

import "./Timer.css";

const Timer = () => {
  const MAX = 30000;

  let [state, setState] = createState({
    duration: 5000,
    start: undefined,
    time: undefined,
    interval: undefined
  })

  let durationFormatted = createMemo(() => (state.duration / 1000).toFixed(1))
  let progress = createMemo(() => (state.time - state.start) / state.duration)

  function createInterval() {
    return setInterval(() => {
      setState({
        time: new Date().valueOf()
      })
    }, 10);
  }
  function startTimer() {
    clearInterval(state.interval);
    let date = new Date().valueOf()
    setState({
      start: date,
      time: date,
      interval: createInterval()
    })
  }

  onCleanup(() => clearInterval(state.interval))

  startTimer();

  return (
    <Card title="Timer">
      <div class="wrapper">
        Elapsed Time:
        <progress value={progress() || 0} />
        <div class="duration">{durationFormatted()}s</div>
        Duration:
        <input
          type="range"
          min={0}
          max={MAX}
          value={state.duration}
          oninput={e => setState({duration: e.target.value})}
        />
        <button onclick={startTimer}>Reset Timer</button>
      </div>
    </Card>
  )
};

export default Timer