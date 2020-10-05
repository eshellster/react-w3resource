import React from "react";
import "./App.css";
import EssayForm from "./component/form/EssayForm";
import FlavorForm from "./component/form/FlavorForm";
import NameForm from "./component/form/NameForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
        <EssayForm />
        <FlavorForm />
      </header>
    </div>
  );
}

export default App;
