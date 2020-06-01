import { api } from "sinuous";
import builders from "webscript";

export const {
  main,
  a,
  button,
  progress,
  span,
  section,
  h2,
  div,
  input,
  select,
  option,
  p,
  table,
  thead,
  tbody,
  tr,
  td,
} = builders(api.h);
export const { svg, circle } = builders(api.hs);

export const frag = (...elements) => {
  let fragment = new DocumentFragment();
  elements.forEach((element) => {
    fragment.append(element);
  });
  return fragment;
};
