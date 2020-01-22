import React from "react";
import "./App.css";
import DataCall from "../src/components/DataCall/DataCall";
import logo from "../src/assets/nasaLogo.png";
import TitleBar from "../src/components/TitleBar/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar img={logo} />
      <DataCall cardimg={logo} />
    </div>
  );
}

export default App;
