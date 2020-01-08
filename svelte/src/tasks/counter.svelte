<script>
  import Card from "../components/card.svelte";

  let count = 0;
</script>

<Card title="Counter">
  {count}&nbsp;&nbsp;&nbsp;
  <button on:click={() => count++}>+</button>
</Card>
