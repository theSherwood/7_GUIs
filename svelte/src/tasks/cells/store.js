import { writable } from 'svelte/store'

export const cells = writable({
  'A0': 'hello',
  'D2': 2
})
