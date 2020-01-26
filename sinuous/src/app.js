import {html} from 'sinuous'
import './app.css'

import {counter} from './tasks/counter'
import {tempConverter} from './tasks/tempConverter'
import {flightBooker} from './tasks/flightBooker'
import {timer} from './tasks/timer'
import {crud} from './tasks/crud'
import {circDrawer} from './tasks/circDrawer'
import {cells} from './tasks/cells/cells'

export const app = () => {
  return html`
    <main className="App">
      <a href="../../index.html">Home</a>

      <${counter} />
      <${tempConverter} />
      <${flightBooker} />
      <${timer} />
      <${crud} />
      <${circDrawer} />
      <${cells} />
    </main>
  `;
} 