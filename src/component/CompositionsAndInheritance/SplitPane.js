import React from "react";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <p>akje ijdjfiod kdjfj id jfkj ajjdfds</p>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <h1>Chat</h1>
      <p>akje </p>
      <p>ijdjfiod</p>
    </div>
  );
}

function Main() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default Main;
