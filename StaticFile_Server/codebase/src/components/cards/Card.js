import React from "react";

function Card({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>
        <p>Course</p>
        <p>
          <b>
            <i>MongoDB Advanced Concepts</i>
          </b>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
