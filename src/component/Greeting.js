import React from "react";

function UserGreeting() {
  return <h1>welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
