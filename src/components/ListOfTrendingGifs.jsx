import React from "react";
import Gif from "./Gif";
import useTrendingGifs from "../hooks/useTrendingGifs";
import "../stylesheets/ListOfGifs.css";

export default function ListOfTrendingGifs() {
  const gifs = useTrendingGifs();

  return (
    <div className="gifContainerMain">
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </div>
  );
}
