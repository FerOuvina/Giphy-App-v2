import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Gifs from "./pages/Gifs";
import Search from './components/Search'
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="header">
        <Logo />
        <Search />
        <Route component={Home} path="/Giphy-App-v2"></Route>
      </section>

      <section className="gifsContainer">
        <Route component={Gifs} path="/Giphy-App-v2/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
