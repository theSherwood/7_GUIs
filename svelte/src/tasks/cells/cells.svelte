<script>
  import Card from "../../components/card.svelte";
  import {cells} from './store.js';

  let shape = [5, 10]
  let focused
  $: console.log($cells)

  function range(n) {
    return [...Array(n).keys()]
  }

  let rows = range(shape[1])
  let columns = range(shape[0])

  function handleClick(e) {
    console.log(e.target)
    $cells[e.target.id] = ''
  }

  function handleFocus(key) {
    focused = key
  }

  function handleInput(e, key) {
    $cells[key] = e.target.value
  }

  function add(key) {
    return Number($cells[key] || 0) + 3
  }
</script>

<Card title="Cells">
  <table on:click={handleClick}>
    {#each rows as row, i}
      <tr id={'row-'+i}>
        {#each columns as cell, j}
          <td id={i+','+j}>
            <input 
              value={
                focused === i+','+j 
                ? $cells[i+','+j] || ''
                : $cells[i+','+j] || add('2,3')}
              on:focus={()=>handleFocus(i+','+j)}
              on:input={(e)=>handleInput(e, i+','+j)}
            />
          </td>
        {/each}
      </tr>
    {/each}
  </table>
</Card>

<style>
  table {
    table-layout: auto;
    border-collapse: collapse;
    border: solid 1px #ddd;
    background: white;
    margin: auto;
  }

  td {
    width: 100px;
    height: 30px;
    border: solid 1px #ddd;
    overflow: hidden;
  }

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: right;
    border: none;
    outline: none;
  }

  input:focus {
    text-align: left;
  }
</style>
