import React from "react";
import "./App.css";
import EssayForm from "./component/form/EssayForm";
import NameForm from "./component/form/NameForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
        <EssayForm />
      </header>
    </div>
  );
}

export default App;
