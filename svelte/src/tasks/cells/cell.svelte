<script>
  export let j
  export let i
  export let focused
  export let data
  export let p
  export let handleFocus
  export let handleBlur
  export let handleKeydown
  export let handleInput

  let key = j + i
  let hasFocus = false
  $: if (focused === key && !hasFocus) {
    hasFocus = true
  } else if (focused !== key && hasFocus) {
    hasFocus = false
  }
</script>

{#if hasFocus}
  <input
    id={'input-' + key}
    value={$data[key] || ''}
    autofocus
    on:focus={() => handleFocus(key)}
    on:blur={() => handleBlur(key)}
    on:keydown={(e) => handleKeydown(e, j, i)}
    on:input={(e) => handleInput(e, key)}
  />
{:else}
  <div>{p.parse($data[key]) || ''}</div>
{/if}

<style>
  div {
    width: 100%;
    max-width: 120px;
    overflow: hidden;
    white-space: nowrap;
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
