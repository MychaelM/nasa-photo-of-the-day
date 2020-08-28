import React from "react";
import { Pic, ContainerDiv } from '../styled-components/Pic';

export default function PicOfDay(props) {
  return (
    <ContainerDiv>
      <Pic src={props.data.url} alt={props.data.title} />
      <h3>{props.data.title}</h3>
      <p>{props.data.explanation}</p>
    </ContainerDiv>
  );
}
