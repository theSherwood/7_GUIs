<script>
  import Card from "../../components/card.svelte";
  import {cells} from './store.js'
  import {sampleData} from './sampleData.js'
  import {Parser} from './parse.js'
  cells.set(sampleData)

  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  export let shape = [100, 100]
  const rows = range(shape[1])
  const columns = letterRange(shape[0])
  const p = (new Parser(cells, columns, rows))
  let focused
  let tBody

  function range(n) {
    return [...Array(n).keys()]
  }

  function letterRange(n) {
    return range(n).map(getNumberAsLetters)
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

  function handleClick(e) {
    $cells[e.target.id] = $cells[e.target.id] || ''
  }

  function handleFocus(e, key) {
    focused = key
    setTimeout(() => {
      // The timeout allows the selection to occur after
      // the parsing switch inside a cell
      e.target.setSelectionRange(0, 9999);
    }, 10)
  }

  function handleBlur(key) {
    focused = undefined
  }

  function handleInput(e, key) {
    $cells[key] = e.target.value
  }

  function handleKeydown(e, column, row) {
    // Navigate across the spreadsheet with arrow keys (and alt/option key)
    let selector
    if (e.key === "ArrowUp") {
      let newRow = findAdjacent(rows, row, 'before')
      selector = newRow !== null ? column+newRow : null
    }
    if (e.key === "ArrowDown") {
      let newRow = findAdjacent(rows, row, 'after')
      selector = newRow !== null ? column+newRow : null
    }
    if (e.key === "ArrowLeft" && e.altKey) {
      let newColumn = findAdjacent(columns, column, 'before')
      selector = newColumn !== null ? newColumn+row : null
    }
    if (e.key === "ArrowRight" && e.altKey) {
      let newColumn = findAdjacent(columns, column, 'after')
      selector = newColumn !== null ? newColumn+row : null
    }

    if (selector) {
      e.preventDefault()
      let input = tBody.querySelector('#input-'+selector)
      input.focus()
    }
  }

  function findAdjacent(arr, value, direction) {
    let index = arr.indexOf(value)
    if (index === -1) return null
    if (direction === 'before') return arr[index-1] === undefined ? null : arr[index-1]
    if (direction === 'after') return arr[index+1] || null
    return null
  }

  function clear() {
    cells.set({})
  }
</script>

<Card title="Cells">
  <div class="wrapper">
    <table on:click={handleClick}>
      <thead>
        <tr>
          <td class='row-key'></td>
          {#each columns as column}
            <td class='column-key'>{column}</td>
          {/each}
        </tr>
      </thead>
      <tbody bind:this={tBody}>
        {#each rows as i}
          <tr id={'row-'+i}>
            <td class='row-key'>{i}</td>
            {#each columns as j}
              <td id={j+i}>
                <input 
                  id={'input-'+j+i}
                  value={
                    focused === j+i 
                    ? $cells[j+i] || ''
                    : p.parse($cells[j+i])
                  }
                  on:focus={(e)=>handleFocus(e, j+i)}
                  on:blur={handleBlur}
                  on:keydown={(e)=>handleKeydown(e, j, i)}
                  on:input={(e)=>handleInput(e, j+i)}
                />
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <button on:click={clear}>Clear</button>
</Card>

<style>
  .wrapper {
    margin: auto;
    overflow: scroll;
    max-width: 600px;
    max-height: 600px;
    border: solid 1px #ddd;
  }

  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: solid 1px #ddd;
    background: white;
  }

  td {
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

  button {
    background: white;
  }

  .row-key {
    width: min-content;
    padding-left: 15px;
    padding-right: 15px;
  }

  .column-key {
    min-width: 120px;
  }
</style>
