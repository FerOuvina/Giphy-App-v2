import React from "react";
import ListOfTrendingGifs from "../components/ListOfTrendingGifs";
import Spinner from "../components/LoadingSpinner";
import LazyTrending from "../components/TrendingLazy";
import useTrendingGifs from "../hooks/useTrendingGifs";
import "../stylesheets/Home.css";

export default function Home() {
  const { Loading } = useTrendingGifs();

  if (Loading) return <Spinner />;

  return (
    <div className="homeContainer">
      <div className="homeContainer__titleContainer">
        <h1 className="homeContainer__titleContainer--title">Trending Gifs</h1>
      </div>
      <div className="flexContainer">
        <ListOfTrendingGifs />
        <LazyTrending />
      </div>
    </div>
  );
}
