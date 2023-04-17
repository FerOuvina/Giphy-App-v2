import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Gifs from "./pages/Gifs";
import Search from "./components/Search";
import GifDetail from "./components/GifDetail";
import { GifsContextProvider } from "./context/gifContext";
import Error from "./pages/404";
import { GifsContainer } from "./styled components/Gifs";
import "./App.css";

function App() {
  return (
    <GifsContextProvider>
      <main className="App">
        <div className="appWrapper">
          <section className="header">
            <Logo />
            <Search />
            <Route component={Home} path="/Giphy-App-v2" />
          </section>
          <GifsContainer>
            <Route component={Error} path="/Giphy-App-v2/404" />
            <Route component={Gifs} path="/Giphy-App-v2/search/:keyword/:rating?" />
            <Route component={GifDetail} path="/Giphy-App-v2/gif/:id" />
          </GifsContainer>
        </div>
      </main>
    </GifsContextProvider>
  );
}

export default App;
