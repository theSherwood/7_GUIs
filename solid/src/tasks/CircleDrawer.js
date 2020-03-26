import { createState, createEffect, sample } from "solid-js";
import Card from "../components/Card";

import "./CircleDrawer.css";

const CircleDrawer = () => {
  const BASE_RADIUS = 30;

  let [state, setState] = createState({
    step: 0,
    snapshots: [[]],
    radius: BASE_RADIUS,
    resizing: false,
    present: []
  });

  createEffect(() => {
    setState({
      present: state.snapshots[state.step] || []
    });
  });
  createEffect(() => {
    // TODO: make idiomatic
    let presentSample = sample(() => state.present)
    if (state.resizing) {
      let resizingIndex = presentSample.findIndex(
        circle => circle.x === state.resizing.x && circle.y === state.resizing.y
      );
      let newPresent = presentSample.slice();
      newPresent[resizingIndex] = {
        ...presentSample[resizingIndex],
        r: Number(state.radius)
      };
      setState({ present: newPresent });
    }
  });

  function handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();
    let circle = e.target;
    let r = circle.r.baseVal.value;
    setState({
      resizing: {
        x: circle.cx.baseVal.value,
        y: circle.cy.baseVal.value,
        r: r
      },
      radius: r
    });
  }

  function addCircle(e) {
    let x = e.layerX;
    let y = e.layerY;
    let newSnapshot = state.present.slice();
    newSnapshot.push({ x, y, r: BASE_RADIUS });
    addSnapshot(newSnapshot);
  }

  function addSnapshot(newSnapshot) {
    setState("snapshots", s => [...s.slice(0, state.step + 1), newSnapshot]);
    setState("step", s => s + 1);
  }

  function undo() {
    setState("step", s => Math.max(s - 1, 0));
  }

  function redo() {
    setState("step", s => Math.min(s + 1, state.snapshots.length - 1));
  }

  function endResize() {
    setState({ resizing: false });
    if (state.radius !== state.resizing.r) {
      setState({ radius: BASE_RADIUS });
      addSnapshot(state.present.slice());
    }
  }

  const view = (
    <Card title="Circle Drawer">
      <div class="wrapper">
        <div class="buttons">
          <button disabled={!state.step} onclick={undo}>
            Undo
          </button>
          <button
            disabled={state.step === state.snapshots.length - 1}
            onclick={redo}
          >
            Redo
          </button>
        </div>
        <div class="canvas">
          <svg onclick={addCircle}>
            {state.present.map(cir => (
              <circle
                cx={cir.x}
                cy={cir.y}
                r={cir.r}
                fill="white"
                stroke="black"
                onclick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                oncontextmenu={handleRightClick}
              />
            ))}
          </svg>
        </div>
        {state.resizing ? (
          <>
            <div class="overlay" onclick={endResize}></div>
            <div class="resizer">
              <p>
                Adjust radius of circle at ({state.resizing.x},
                {state.resizing.y})
              </p>
              <p>{state.radius}</p>
              <input
                type="range"
                min={0}
                max={100}
                value={state.radius}
                oninput={e => setState({ radius: e.target.value })}
              />
            </div>
          </>
        ) : null}
      </div>
    </Card>
  );

  return view;
};

export default CircleDrawer;
