import {html, o} from 'sinuous'
import {card} from '../components/card'

import "./counter.css";

export const counter = () => {
  let count = o(0)

  return html`
    <${card} title="Counter">
      ${count}
      <button onclick=${()=>count(count()+1)}>+</button>
    <//>
  `
};