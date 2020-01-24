import React from "react";

import "./Card.css";

export const Card = ({ title, children }) => {
  return (
    <section className={"card " + title.replace(" ", "-")}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
