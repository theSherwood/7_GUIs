import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

import "./FlightBooker.css";

let flightTypes = ["one-way flight", "return flight"];

function tryAsDate(dateString) {
  try {
    let dateArr = dateString.split(".").reverse();
    if (dateArr[1].length !== 2 || dateArr[2].length !== 2) {
      return false;
    }
    let date = new Date(dateArr.join("-"));
    return date.getTime() || false;
  } catch (e) {
    return false;
  }
}

function formatAsString(date) {
  return date.toISOString().slice(0, 10).split("-").reverse().join(".");
}

export const FlightBooker = () => {
  const [flightType, setFlightType] = useState(0);
  const [startDate, setStartDate] = useState(formatAsString(new Date()));
  const [returnDate, setReturnDate] = useState(formatAsString(new Date()));

  let isOneWay = !flightType;

  // Errors
  let e1 = !tryAsDate(startDate);
  let e2 = !tryAsDate(returnDate);
  let e3 = !isOneWay && tryAsDate(returnDate) < tryAsDate(startDate);

  function book() {
    let timeStrings = [
      " for " + startDate,
      " from " + startDate + " to " + returnDate,
    ];
    alert(
      "You have booked a " + flightTypes[flightType] + timeStrings[flightType]
    );
  }

  return (
    <Card title="Flight Booker">
      <div>
        <select
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value={0}>{flightTypes[0]}</option>
          <option value={1}>{flightTypes[1]}</option>
        </select>
        <input
          value={startDate}
          className={e1 ? "error" : ""}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="dd.mm.yyyy"
        />
        <input
          value={returnDate}
          className={e2 ? "error" : ""}
          onChange={(e) => setReturnDate(e.target.value)}
          placeholder="dd.mm.yyyy"
          disabled={isOneWay}
        />
        <button onClick={book} disabled={e1 || e2 || e3} type="button">
          Book
        </button>
      </div>
    </Card>
  );
};
