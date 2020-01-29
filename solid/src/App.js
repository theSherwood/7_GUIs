import Counter from './tasks/Counter'
import TempConverter from './tasks/TempConverter'
import FlightBooker from './tasks/FlightBooker'
import Timer from './tasks/Timer'
import CRUD from './tasks/CRUD'
import CircDrawer from './tasks/CircDrawer'
import Cells from './tasks/Cells/Cells'

import './App.css';

function App() {
  return (
    <main class="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TempConverter />
      <FlightBooker />
      <Timer />
      <CRUD />
      <CircDrawer />
      <Cells />
    </main>
  );
}

export default App;
