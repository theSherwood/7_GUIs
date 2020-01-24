import {html} from 'sinuous'
import './app.css'

import {counter} from './tasks/counter'

export const app = () => {
  return html`
    <main className="App">
      <a href="../../index.html">Home</a>

      <${counter} />
    </main>
  `;
} 