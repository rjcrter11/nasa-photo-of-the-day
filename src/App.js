import React from "react";
import "./App.css";
import DataCall from "../src/components/DataCall/DataCall";

import TitleBar from "../src/components/TitleBar/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <DataCall />
    </div>
  );
}

export default App;
