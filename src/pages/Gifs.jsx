import React from "react";
import ListOfGifs from "../components/ListOfGifs";
import "../stylesheets/Gifs.css";

export default function Gifs({ params }) {
  return (
    <div className="gifContainer">
      <ListOfGifs params={params} />
    </div>
  );
}
