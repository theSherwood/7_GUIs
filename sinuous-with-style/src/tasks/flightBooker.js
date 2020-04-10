import { html, o } from "sinuous";
import { S } from "sinuous/observable";
import { card } from "../components/card";
import "./flightBooker.css";

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

export const flightBooker = () => {
  let flightType = o(1);
  let startDate = o(formatAsString(new Date()));
  let returnDate = o(formatAsString(new Date()));

  let error1 = S(() => !tryAsDate(startDate()));
  let error2 = S(() => !tryAsDate(returnDate()));
  let error3 = S(() => tryAsDate(returnDate()) < tryAsDate(startDate()));

  let isBookButtonDisabled = S(() => error1() || error2() || error3());
  let isOneWay = S(() => flightType() === 1);
  let startDateClass = S(() => (error1() ? "error" : ""));
  let returnDateClass = S(() => (error2() ? "error" : ""));

  function book() {
    let timeStrings = {
      1: " for " + startDate(),
      2: " from " + startDate() + " to " + returnDate()
    };
    alert(
      "You have booked a " + flightMap[flightType()] + timeStrings[flightType()]
    );
  }

  return html`
    <${card} title="Flight Booker">
      <div>
        <select value=${flightType} onchange=${e => flightType(e.target.value)}>
          <option value="{1}">${flightMap[1]}</option>
          <option value="{2}">${flightMap[2]}</option>
        </select>
        <input
          value=${startDate}
          class=${startDateClass}
          oninput=${e => startDate(e.target.value)}
        />
        <input
          value=${returnDate}
          class=${returnDateClass}
          oninput=${e => returnDate(e.target.value)}
          disabled=${isOneWay}
        />
        <button onclick=${book} disabled=${isBookButtonDisabled}>
          Book
        </button>
      </div>
    <//>
  `;
};
