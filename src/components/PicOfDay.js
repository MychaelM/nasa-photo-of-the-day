import React from "react";

export default function PicOfDay(props) {
  return (
    <div>
      <img src={props.data.url} alt={props.data.title} />
      <h3>{props.data.title}</h3>
      <p>{props.data.explanation}</p>
    </div>
  );
}
