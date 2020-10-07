import React from "react";
import "./App.css";
import FancyButton from "./component/forwardingRefs/FancyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyButton>Click me!</FancyButton>
      </header>
    </div>
  );
}

export default App;
