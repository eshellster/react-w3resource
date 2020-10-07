import React from "react";
import "./App.css";
import Hoc from "./component/hoc/HOC";

function App() {
  return (
    <div className="App">
      <header className="App-header">Higher-Order Component Tutorial</header>
    </div>
  );
}

export default Hoc(App);
