import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';

import axios from "axios";

function App() {

  const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => {
      console.log(res.data);
      console.log(res.data.title);
      setData(res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}, []);

  return (
    <div className="App">
      {/* {console.log(data.title)} */}
      <Header data={data}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
