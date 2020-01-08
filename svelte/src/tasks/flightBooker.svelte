<script>
  import Card from "../components/card.svelte";

  let flightType = 1
  let startDate = new Date()
  let returnDate

  function formatDate() {}
</script>

<Card title="Flight Booker">
  <select bind:value={flightType}>
    <option value={1}>one-way flight</option>
    <option value={2}>return flight</option>
  </select>
  <input />
  <input disabled={flightType === 1}/>
</Card>

<style>
  input:disabled {
    background: #ddd;
  }
</style>
