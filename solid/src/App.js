import Counter from './tasks/Counter'
import TemperatureConverter from './tasks/TemperatureConverter'
import FlightBooker from './tasks/FlightBooker'
import Timer from './tasks/Timer'
import CRUD from './tasks/CRUD'
import CircleDrawer from './tasks/CircleDrawer'
import Cells from './tasks/Cells/Cells'

import './App.css';

function App() {
  return (
    <main class="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TemperatureConverter />
      <FlightBooker />
      <Timer />
      <CRUD />
      <CircleDrawer />
      <Cells />
    </main>
  );
}

export default App;
