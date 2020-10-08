import React from 'react';
// import App from "./App.js";

import {Head} from '../styled-components/Head';

export default function Header() {
  // console.log(props);
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
  <Head>
    <h1>NASA Pic Of The Day</h1>
  </Head>
);
}