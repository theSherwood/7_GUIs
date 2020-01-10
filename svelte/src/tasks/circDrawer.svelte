<script>
  import Card from "../components/card.svelte";

  const BASE_RADIUS = 30

  let step = 0
  let snapshots = [[]]
  let radius = BASE_RADIUS
  let resizing = false
  $: present = snapshots[step]
  $: if (resizing) {
    let resizingIndex = present.findIndex(circle => circle.x === resizing.x && circle.y === resizing.y)
    let newPresent = present.slice()
    newPresent[resizingIndex] = {...present[resizingIndex], r: radius}
    present = newPresent
  }

  function handleRightClick(e) {
    let circle = e.target
    resizing = {
      x: circle.cx.baseVal.value, 
      y: circle.cy.baseVal.value,
      r: circle.r.baseVal.value
    }
    radius = resizing.r
  }

  function addCircle(e) {
    let x = e.layerX
    let y = e.layerY
    let newSnapshot = present.slice()
    newSnapshot.push({x,y,r: BASE_RADIUS})
    addSnapshot(newSnapshot)
  }

  function addSnapshot(newSnapshot) {
    let newSnapshots = snapshots.slice(0, step+1)
    newSnapshots.push(newSnapshot)
    snapshots = newSnapshots
    step++
  }

  function undo() {
    step = Math.max(step - 1, 0)
  }

  function redo() {
    step = Math.min(step + 1, snapshots.length - 1)
  }

  function endResize() {
    if (radius !== resizing.r) {
      radius = BASE_RADIUS
      addSnapshot(present.slice())
    }
    resizing = false
  }
</script>

<Card title="Circle Drawer">
  <div class="wrapper">
    <div class="buttons">
      <button disabled={!step} on:click={undo}>Undo</button>
      <button disabled={step === snapshots.length-1} on:click={redo}>Redo</button>
    </div>
    <div class="canvas">
      <svg on:click={addCircle}>
        {#each present as circle (circle.x + ',' + circle.y)}
          <circle 
            cx={circle.x} 
            cy={circle.y} 
            r={circle.r} 
            fill="white" 
            stroke="black"
            on:click|stopPropagation|preventDefault={()=>{}}   
            on:contextmenu|stopPropagation|preventDefault={handleRightClick}   
          />
        {/each}
      </svg>
    </div>

    {#if resizing}
      <div class="overlay" on:click={endResize}></div>
      <div class="resizer">
        <p>Adjust radius of circle at ({resizing.x}, {resizing.y})</p>
        <p>{radius}</p>
        <input type="range" min={0} max={100} bind:value={radius} />
      </div>
    {/if}
  </div>
</Card>

<style>
  .wrapper {
    max-width: 400px;
    text-align: left;
    margin: auto;
    position: relative;
  }

  .canvas {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
  }

  .resizer {
    background: rgba(200,200,200,.5);
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    transform: translateY(-50%);
    text-align: center;
  }

  .buttons {
    margin: auto;
    width: max-content;
  }

  svg {
    background: white;
    width: 100%;
    height: 100%;
  }

  button {
    background: white;
  }

  circle:hover {
    fill: #eee;
  }
</style>