import React from "react";
import "./App.css";
import ApodGrid from "./Components/ApodGrid";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket'>🚀</span>!
      </p>
      <ApodGrid data />
    </div>
  );
}

export default App;
