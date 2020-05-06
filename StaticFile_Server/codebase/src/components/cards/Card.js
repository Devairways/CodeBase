import React from "react";

function Card() {
  const { title, text } = this.props;
  return (
    <card className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </card>
  );
}

export default Card;
