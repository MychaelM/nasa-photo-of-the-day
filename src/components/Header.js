import React, { useState, useEffect } from 'react';
// import App from "./App.js";

export default function Header(props) {
  console.log(props);
return (
  // <div>
  //   {!props.title ? (
  //     <h3>Loading.......</h3>
  //   )
  //   :
  //   (
  //     <header>
  //       <h1>{props.data}</h1>
  //     </header>
  //   )}
  // </div>
  <header>
    <h1>{props.data.title}</h1>
  </header>
);
}