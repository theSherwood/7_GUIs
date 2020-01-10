<script>
  import Card from "../../components/card.svelte";
  import {cells} from './store.js';

  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let shape = [5, 10]
  let focused
  $: console.log($cells)
  let rows = range(shape[1])
  let columns = letterRange(shape[0])

  function range(n) {
    return [...Array(n).keys()]
  }

  function getBase26(n) {
    let result = []
    while (n > 25) {
      let remainder = n%26
      result.push(remainder)
      n = Math.floor(n/26) - 1
    }
    result.push(n)
    return result.reverse()
  }

  function getNumberAsLetters(n) {
    let arr = getBase26(n)
    return arr.map(num => LETTERS[num]).join('')
  }

  function letterRange(n) {
    return range(n).map(getNumberAsLetters)
  }

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
    <thead>
      <tr>
        <td class='column-key'></td>
        {#each columns as column}
          <td>{column}</td>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as i}
        <tr id={'row-'+i}>
          <td class='column-key'>{i}</td>
          {#each columns as j}
            <td id={j+i}>
              <input 
                value={
                  focused === j+i 
                  ? $cells[j+i] || ''
                  : $cells[j+i] || add('2,3')}
                on:focus={()=>handleFocus(j+i)}
                on:input={(e)=>handleInput(e, j+i)}
              />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
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

  .column-key {
    width: min-content;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
