import React from "react";
import "./FancyButton.css";

function FancyButton(props) {
  return <button className="FancyButton">{props.children}</button>;
}

export default FancyButton;
