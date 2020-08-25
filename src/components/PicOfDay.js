import React from "react";

export default function PicOfDay(props) {
  return <img src={props.data.url} alt={props.data.title}/>
}
