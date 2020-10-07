import React from "react";
import "./App.css";
import Hoc from "./component/hoc/HOC";
import StockList from "./component/hoc/StockList";
import UserList from "./component/hoc/UserList";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stocks title="Stocks" />
        <Users title="User" />
      </header>
    </div>
  );
}

export default App;
