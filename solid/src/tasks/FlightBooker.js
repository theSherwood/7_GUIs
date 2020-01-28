import { createState, createMemo } from "solid-js";
import Card from "../components/Card";
import "./FlightBooker.css";

let flightMap = {
  1: "one-way flight",
  2: "return flight"
};

function tryAsDate(dateString) {
  let dateArr = dateString.split(".").reverse();
  if (dateArr[1].length !== 2 || dateArr[2].length !== 2) {
    return false;
  }
  let date = new Date(dateArr.join("-"));
  return date.valueOf() || false;
}

function formatAsString(date) {
  return date
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");
}

const FlightBooker = () => {
  let [state, setState] = createState({
    flightType: 1,
    startDate: formatAsString(new Date()),
    returnDate: formatAsString(new Date())
  });

  let error1 = createMemo(() => !tryAsDate(state.startDate));
  let error2 = createMemo(() => !tryAsDate(state.returnDate));
  let error3 = createMemo(
    () => tryAsDate(state.returnDate) < tryAsDate(state.startDate)
  );

  let isBookButtonDisabled = createMemo(() => error1() || error2() || error3());
  let isOneWay = createMemo(() => state.flightType === 1);
  let startDateClass = createMemo(() => (error1() ? "error" : ""));
  let returnDateClass = createMemo(() => (error2() ? "error" : ""));

  function book() {
    let timeStrings = {
      1: " for " + state.startDate,
      2: " from " + state.startDate + " to " + state.returnDate
    };
    alert(
      "You have booked a " +
        flightMap[state.flightType] +
        timeStrings[state.flightType]
    );
  }

  return (
    <Card title="Flight Booker">
      <div>
        <select
          value={state.flightType}
          onchange={e => setState({ flightType: Number(e.target.value) })}
        >
          <option value={1}>{flightMap[1]}</option>
          <option value={2}>{flightMap[2]}</option>
        </select>
        <input
          value={state.startDate}
          class={startDateClass()}
          oninput={e => setState({ startDate: e.target.value })}
        />
        <input
          value={state.returnDate}
          class={returnDateClass()}
          oninput={e => setState({ returnDate: e.target.value })}
          disabled={isOneWay()}
        />
        <button onclick={book} disabled={isBookButtonDisabled()}>
          Book
        </button>
      </div>
    </Card>
  );
};

export default FlightBooker;
