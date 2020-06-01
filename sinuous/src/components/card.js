import {html} from 'sinuous'

import "./card.css";

export const card = ({ title }, ...children) => {
  return html`
    <section class=${"card " + title.replace(" ", "-")}>
      <h2>${title}</h2>
      ${children}
    </section>
  `;
};
