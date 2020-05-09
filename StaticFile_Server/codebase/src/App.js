import React from "react";
import NavBar from "./components/nav/Nav";
import Card from "./components/cards/Card";
import "./styles/imports.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card title="Hello World" text="Hello world, how we holding up" />
    </div>
  );
}

export default App;
