<script>
  import Card from "../components/card.svelte";

  let count = 0;
</script>

<Card title="Counter">
  {count}
  <button on:click={() => count++}>+</button>
</Card>

<style>
  button {
    margin-left: 15px;
  }
</style>