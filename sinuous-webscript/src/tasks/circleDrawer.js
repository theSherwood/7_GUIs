import { o } from "sinuous";
import { subscribe, sample } from "sinuous/observable";
import { frag, div, input, svg, circle, button, p } from "../elements";
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
        (c) => c.x === resizing().x && c.y === resizing().y
      );
      let newPresent = sample(present).slice();
      newPresent[resizingIndex] = {
        ...sample(present)[resizingIndex],
        r: Number(radius()),
      };
      present(newPresent);
    }
  });

  function handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();
    let c = e.target;
    resizing({
      x: c.cx.baseVal.value,
      y: c.cy.baseVal.value,
      r: c.r.baseVal.value,
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

  const overlay = () =>
    frag(
      div.class`overlay`.onclick(endResize)(),
      div.class`resizer`(
        p`Adjust radius of circle at (${() => resizing().x},
        ${() => resizing().y})`,
        p(radius),
        input.type`range`
          .min(0)
          .max(100)
          .value(radius)
          .oninput((e) => radius(e.target.value))
      )
    );

  const circleSVG = ({ c, handleRightClick }) =>
    circle.cx(c.x).cy(c.y).r(c.r).fill`white`.stroke`black`
      .onclick((e) => {
        e.preventDefault();
        e.stopPropagation();
      })
      .oncontextmenu(handleRightClick);

  const view = card(
    { title: "Circle Drawer" },
    div.class`wrapper`(
      div.class`buttons`(
        button.disabled(() => !step()).onclick(undo)("Undo"),
        button.disabled(() => step() === snapshots().length - 1).onclick(redo)(
          "Redo"
        )
      ),
      div.class`canvas`(
        svg.onclick(addCircle)(() =>
          present().map((c) => circleSVG({ c, handleRightClick }))
        )
      ),
      () => resizing() && overlay()
    )
  );

  return view;
};
