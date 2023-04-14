import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Gifs from "./pages/Gifs";
import Search from "./components/Search";
import GifDetail from "./components/GifDetail";
import { GifsContextProvider } from "./context/gifContext";
import Error from "./pages/404";
import "./App.css";

function App() {
  return (
    <GifsContextProvider>
      <div className="App">
        <section className="header">
          <Logo />
          <Search />
          <Route component={Home} path="/Giphy-App-v2" />
        </section>
        <section className="gifsContainer">
          <Route component={Error} path="/Giphy-App-v2/gif/404" />
          <Route component={Gifs} path="/Giphy-App-v2/search/:keyword" />
          <Route component={GifDetail} path="/Giphy-App-v2/gif/:id" />
        </section>
      </div>
    </GifsContextProvider>
  );
}

export default App;
