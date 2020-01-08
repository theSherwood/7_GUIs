<script>
  import Card from '../components/card.svelte'

  let c = 0
  let f

  function trunc(n) {
    return Number(n.toFixed(2))
  }
  function updateC() {
    f = Number(f) || 0
    c = trunc((5/9) * (f - 32))
  }
  function updateF() {
    c = Number(c) || 0 
    f = trunc(((9/5) * c) + 32)
  }

  updateF()
</script>

<Card title={'Temperature Converter'}>
  <span><input bind:value={c} on:input={updateF}/> Celsius</span>
  &nbsp;&nbsp;=&nbsp;&nbsp;
  <span><input bind:value={f} on:input={updateC}/> Fahrenheit</span>
</Card>

<style>
  span {
    display: inline-block;
  }
</style>