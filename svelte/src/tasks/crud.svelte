<script>
  import Card from "../components/card.svelte";

  let prefix = ''
  let entries = [
    ['Paul', 'Atreides'],
    ['Gurney', 'Halleck'],
    ['Duncan', 'Idaho']
  ]
  $: filteredEntries = entries.filter(
    entry => entry[1].toLowerCase().startsWith(prefix.toLowerCase())
  )
  let selected = 0
  let name = ''
  let surname = ''

  function createHandler() {
    entries.push([name, surname])
    entries = entries
  }
  function updateHandler() {
    entries[selected] = [name, surname]
    entries = entries
  }
  function deleteHandler() {
    entries = entries.filter((entry, i) => i != selected)
  }
</script>

<Card title="CRUD">
  <div class="wrapper">
    Filter prefix: 
    <input bind:value={prefix} />
    <select bind:value={selected} size='4'>
      {#each filteredEntries as entry, i}
        <option value={i}>{entry[1]}, {entry[0]}</option>
      {/each}
    </select>
    <div>
      Name:
      <input bind:value={name} />
      Surname:
      <input bind:value={surname} />
    </div>
    <div class="buttons">
      <button on:click={createHandler}>Create</button>
      <button on:click={updateHandler}>Update</button>
      <button on:click={deleteHandler}>Delete</button>
    </div>
  </div>
</Card>

<style>
  .wrapper {
    max-width: 400px;
    text-align: left;
    margin: auto;
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: auto;
    grid-gap: 10px 10px;
    grid-auto-flow: row;
  }

  .buttons {
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    flex: 1 1 0%;
  }

  input {
    width: 100%;
  }
</style>