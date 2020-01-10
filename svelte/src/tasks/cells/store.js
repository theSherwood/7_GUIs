import { writable } from 'svelte/store'

export const cells = writable({
  '0,0': 'hello',
  '2,4': 2
})
