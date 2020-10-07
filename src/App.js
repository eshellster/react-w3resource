import React from "react";
import "./App.css";
import FancyButton from "./component/forwardingRefs/FancyButton";

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      <header className="App-header">
        <FancyButton ref={ref}>Click me!</FancyButton>
      </header>
    </div>
  );
}

export default App;
