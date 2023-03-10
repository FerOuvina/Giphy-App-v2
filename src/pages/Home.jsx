import React from "react";
import ListOfTrendingGifs from "../components/ListOfTrendingGifs";
import "../stylesheets/Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContainer__titleContainer">
        <h1 className="homeContainer__titleContainer--title">Trending Gifs</h1>
      </div>
      <ListOfTrendingGifs />
    </div>
  );
}
