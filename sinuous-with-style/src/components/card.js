import { html } from "sinuous-style";

export const card = ({ title }, ...children) => {
  return html("card")`
    <section className=${"cardssss " + title.replace(" ", "-")}>
      <h2>${title}</h2>
      ${children}
    </section>

    <style local>
      section {
        background: #f3f3f3;
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
      }

      h2 {
        margin-top: 0px;
        text-align: center;
      }
    </style>
  `;
};
