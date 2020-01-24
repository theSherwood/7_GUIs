import {html} from 'sinuous'
import './app.css'

import {counter} from './tasks/counter'
import {tempConverter} from './tasks/tempConverter'
import {flightBooker} from './tasks/flightBooker'

export const app = () => {
  return html`
    <main className="App">
      <a href="../../index.html">Home</a>

      <${counter} />
      <${tempConverter} />
      <${flightBooker} />
    </main>
  `;
} 