import React from "react";
import "./App.css";
import FilterableProductTable from "./component/thinkingReact/FilteravleProductTable";
import jsonData from "./component/thinkingReact/products.json";

function App() {
  const products = jsonData.products;
  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable productsJson={products} />
      </header>
    </div>
  );
}

export default App;
