import { writable } from 'svelte/store'

export const cells = writable({
  A0: 'Data',
  A1: '20',
  A2: '15',
  A3: 'text',
  C0: 'Formula',
  D0: 'Output',
  C1: '"=sum(A1:A2)"',
  D1: '=sum(A1:A2)',
  C2: '"=sub(D1:A1)"',
  D2: '=sub(D1:A1)',
  C3: '"=mul(D2:A2)"',
  D3: '=mul(D2:A2)',
  C4: '"=div(D3:A1)"',
  D4: '=div(D3:A1)',
  C5: '"=mod(A1:A2)"',
  D5: '=mod(A1:A2)',
  C7: '"=sum(A1:A3)"',
  D7: '=sum(A1:A3)',
  C8: '"=sum(A1:A4)"',
  D8: '=sum(A1:A4)',
  C9: '"=sumA1:A4)"',
  D9: '=sumA1:A4)',
  C10: '"=sm(A1:A4)"',
  D10: '=sm(A1:A4)',
  C11: '"=sum(A1:307)"',
  D11: '=sum(A1:307)',
  C12: '"=sum(159:4)"',
  D12: '=sum(159:4)',
  C14: '"=A1"',
  D14: '=A1',
  C15: '"=A3"',
  D15: '=A3'
})
