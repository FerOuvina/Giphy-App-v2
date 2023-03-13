import React from "react";
import Gif from "./Gif";
import useGifs from "../hooks/useGifs";
import "../stylesheets/ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const gifs = useGifs({ keyword });

  return (
    <div className="gifContainerMain">
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </div>
  );
}
