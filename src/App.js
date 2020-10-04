import React from "react";
import "./App.css";
import Greeting from "./component/Greeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting isLoggedIn={true} />
      </header>
    </div>
  );
}

export default App;
