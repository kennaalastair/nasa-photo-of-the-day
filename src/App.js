import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Picture from "./Components/Picture";
import Explanation from "./Components/Explanation";

import axios from "axios";

import "./App.css";
// import Container from "./StyledWidgets.js";


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=Iljplx6QAEN6gCcQhBm3u5H56waqJ4FP2piyTjUi')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log('An unexpected error has occured, please try again later', err);
      })
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img src="https://ih0.redbubble.net/image.562683752.7556/pp,550x550.u6.jpg" style={{ height: '150px', width: '150px' }} />
        { data ? 
          <div>
            <Header title={data.title} date={data.date} />
            <Picture url={data.url} />
            <Explanation explanation={data.explanation} />
          </div>
          : <div>Loading</div>
        }
      </div>
    </div>
  );
}

export default App;
