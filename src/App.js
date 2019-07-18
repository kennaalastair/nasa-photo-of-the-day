import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Picture from "./Components/Picture";
import Explanation from "./Components/Explanation";

import axios from "axios";

import "./App.css";

function App() {
  const [dateState, setDateState] = useState([]);
  const [titleState, setTitleState] = useState([]);
  const [explanationState, setExplanationState] = useState([]);
  const  [urlState, setUrlState] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=Iljplx6QAEN6gCcQhBm3u5H56waqJ4FP2piyTjUi')
      .then(res => {
        setDateState(res.data.date);
        setTitleState(res.data.title);
        setExplanationState(res.data.explanation);
        setUrlState(res.data.url);
      })
      .catch(err => {
        console.log('An unexpected error has occured, please try again later', err);
      })
  }, []);

  return (
    <div className="App">
      <img src="https://ih0.redbubble.net/image.562683752.7556/pp,550x550.u6.jpg" style={{ height: '150px', width: '150px' }} />
      <Header titleState={titleState} dateState={dateState} />
      <Picture urlState={urlState} />
      <Explanation explanationState={explanationState} />
    </div>
  );
}

export default App;
