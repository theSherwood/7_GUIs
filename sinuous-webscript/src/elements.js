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
} = builders(api.h);
export const { svg } = builders(api.hs);
