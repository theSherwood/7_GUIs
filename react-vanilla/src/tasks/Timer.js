import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

import "./Timer.css";

const MAX = 30000;

const formatDuration = (duration) => {
  return (duration / 1000).toFixed(1);
};

const getNow = () => new Date().valueOf();

const Progress = ({ start, duration }) => {
  let [time, setTime] = useState(start);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(getNow());
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={(time - start) / duration} />;
};

export const Timer = () => {
  let [duration, setDuration] = useState(5000);
  let [start, setStart] = useState(getNow());

  function resetTimer() {
    let now = getNow();
    setStart(now);
  }

  return (
    <Card title="Timer">
      <div className="wrapper">
        Elapsed Time: <Progress start={start} duration={duration} />
        <div className="duration">{formatDuration(duration)}</div>
        Duration:
        <input
          type="range"
          min="0"
          max={MAX}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </Card>
  );
};
