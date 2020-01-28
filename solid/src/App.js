import Counter from './tasks/Counter'
import TempConverter from './tasks/TempConverter'
import FlightBooker from './tasks/FlightBooker'
import Timer from './tasks/Timer'
import CRUD from './tasks/CRUD'
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
    </main>
  );
}

export default App;
