import "./Card.css";

const Card = ({ title, children }) => {
  return (
    <section className={"card " + title.replace(" ", "-")}>
      <h2>{title}</h2>
      {children}
    </section>
  )
};

export default Card
