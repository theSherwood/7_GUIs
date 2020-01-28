import Counter from './tasks/Counter'
import TempConverter from './tasks/TempConverter'
import FlightBooker from './tasks/FlightBooker'
import Timer from './tasks/Timer'
import './App.css';

function App() {
  return (
    <main class="App">
      <a href="../../index.html">Home</a>

      <Counter />
      <TempConverter />
      <FlightBooker />
      <Timer />
    </main>
  );
}

export default App;
