import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import "../stylesheets/ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return (
    <div className="gifContainer">
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} url={url} key={id} />
      ))}
    </div>
  );
}
