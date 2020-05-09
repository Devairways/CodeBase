import React from "react";

function Card({ title, text }) {
  return (
    <card className="card">
      <h2>{title}</h2>
      <div>
        <p>Course</p>
        <p>MongoDB Advanced Concepts</p>
        <p>{text}</p>
      </div>
    </card>
  );
}

export default Card;
