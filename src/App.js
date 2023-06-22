import "./App.css";
import React from "react";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Weather city="Tabriz" />
      </header>
    </div>
  );
}

export default App;
