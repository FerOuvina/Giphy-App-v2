import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="header">
        <figcaption className="header__fig">
          <Link to="/">
            <img src="../public/Logo.png" alt="Page Logo" title="Home" />
          </Link>
        </figcaption>
      </section>

      <section className="gifsContainer">
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
