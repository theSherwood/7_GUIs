<script>
  import Card from "../components/card.svelte";

  const MAX = 30000;

  let duration = 5000;
  let start;

  let time;
  let interval;
  function createInterval() {
    return setInterval(() => {
      time = new Date().valueOf();
    }, 10);
  }
  function startTimer() {
    clearInterval(interval)
    start = new Date().valueOf();
    time = start;
    interval = createInterval();
  }

  startTimer();
</script>

<Card title="Timer">
  <div class="wrapper">
    Elapsed Time:
    <progress value={(time-start)/duration} />
    <div class="duration">{(duration / 1000).toFixed(1)}s</div>
    Duration:
    <input type="range" min={0} max={MAX} bind:value={duration} />
    <button on:click={startTimer}>Reset Timer</button>
  </div>
</Card>

<style>
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