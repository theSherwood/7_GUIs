<script>
  import Card from "../components/card.svelte";

  let flightMap = {
    1: "one-way flight",
    2: "return flight"
  };

  let flightType = 1;
  let startDate = formatAsString(new Date());
  let returnDate = formatAsString(new Date());

  $: error1 = !tryAsDate(startDate);
  $: error2 = !tryAsDate(returnDate);
  $: error3 = tryAsDate(returnDate) < tryAsDate(startDate);

  function formatAsString(date) {
    return date
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join(".");
  }

  function tryAsDate(dateString) {
    let dateArr = dateString.split(".").reverse();
    if (dateArr[1].length !== 2 || dateArr[2].length !== 2) {
      return false;
    }
    let date = new Date(dateArr.join("-"));
    return date.valueOf() || false;
  }

  function book() {
    let timeStrings = {
      1: " for " + startDate,
      2: " from " + startDate + " to " + returnDate
    };
    alert(
      "You have booked a " + flightMap[flightType] + timeStrings[flightType]
    );
  }
</script>

<Card title="Flight Booker">
  <div>
    <select bind:value={flightType}>
      <option value={1}>{flightMap[1]}</option>
      <option value={2}>{flightMap[2]}</option>
    </select>
    <input bind:value={startDate} class:error={error1} />
    <input
      bind:value={returnDate}
      class:error={error2}
      disabled={flightType === 1} />
    <button on:click={book} disabled={error1 || error2 || error3}>Book</button>
  </div>
</Card>

<style>
  div {
    max-width: 400px;
    margin: auto;
  }

  div > * {
    width: 100%;
    display: block;
  }

  button {
    background: #fff;
  }

  :disabled {
    background: #eee;
  }

  .error {
    background: #dd9999;
  }
</style>