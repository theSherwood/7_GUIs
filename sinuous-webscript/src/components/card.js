import { section, h2 } from "../elements";

import "./card.css";

export const card = ({ title }, ...children) => {
  return section.class("card " + title.replace(" ", "-"))(h2(title), children);
};
