import { html, o, svg } from "sinuous";
import { subscribe, sample } from "sinuous/observable";
import { card } from "../components/card";

import "./circleDrawer.css";

export const circleDrawer = () => {
  const BASE_RADIUS = 30;

  let step = o(0);
  let snapshots = o([o([])]);
  let radius = o(BASE_RADIUS);
  let resizing = o(false);
  let present = o([]);
  subscribe(() => present(snapshots()[step()]()));
  subscribe(() => {
    if (resizing()) {
      let resizingIndex = sample(present).findIndex(
        circle => circle.x === resizing().x && circle.y === resizing().y
      );
      let newPresent = sample(present).slice();
      newPresent[resizingIndex] = {
        ...sample(present)[resizingIndex],
        r: Number(radius())
      };
      present(newPresent);
    }
  });

  function handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();
    let circle = e.target;
    resizing({
      x: circle.cx.baseVal.value,
      y: circle.cy.baseVal.value,
      r: circle.r.baseVal.value
    });
    radius(resizing().r);
  }

  function addCircle(e) {
    let x = e.layerX;
    let y = e.layerY;
    let newSnapshot = present().slice();
    newSnapshot.push({ x, y, r: BASE_RADIUS });
    addSnapshot(o(newSnapshot));
  }

  function addSnapshot(newSnapshot) {
    let newSnapshots = snapshots().slice(0, step() + 1);
    newSnapshots.push(newSnapshot);
    snapshots(newSnapshots);
    step(step() + 1);
  }

  function undo() {
    step(Math.max(step() - 1, 0));
  }

  function redo() {
    step(Math.min(step() + 1, snapshots().length - 1));
  }

  function endResize() {
    if (radius() !== resizing().r) {
      resizing(false);
      radius(BASE_RADIUS);
      addSnapshot(o(present().slice()));
    }
    resizing(false);
  }

  const overlay = () => html`
    <div class="overlay" onclick=${endResize}></div>
    <div class="resizer">
      <p>
        Adjust radius of circle at (${() => resizing().x},
        ${() => resizing().y})
      </p>
      <p>${radius}</p>
      <input
        type="range"
        min=${0}
        max=${100}
        value=${radius}
        oninput=${e => radius(e.target.value)}
      />
    </div>
  `;

  const circleSVG = ({ circle, handleRightClick }) => {
    return svg`
      <circle
        cx=${circle.x}
        cy=${circle.y}
        r=${circle.r}
        fill="white"
        stroke="black"
        onclick=${e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        oncontextmenu=${handleRightClick}
      />
    `;
  };

  const view = html`
    <${card} title="Circle Drawer">
      <div class="wrapper">
        <div class="buttons">
          <button disabled=${() => !step()} onclick=${undo}>Undo</button>
          <button
            disabled=${() => step() === snapshots().length - 1}
            onclick=${redo}
          >
            Redo
          </button>
        </div>
        <div class="canvas">
          ${() => svg`
            <svg onclick=${addCircle}>
              ${() =>
                present().map(
                  cir =>
                    html`
                      <${circleSVG}
                        circle=${cir}
                        handleRightClick=${handleRightClick}
                      />
                    `
                )}
            </svg>
          `}
        </div>
        ${() => resizing() && overlay}
      </div>
    <//>
  `;

  return view;
};
