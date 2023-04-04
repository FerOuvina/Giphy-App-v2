import React from "react";
import Gif from "./Gif";
import useGifs from "../hooks/useGifs";
import "../stylesheets/ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });

  const handlePage = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      <div className="gifContainerMain">
        {gifs.map(({ title, id, url }) => (
          <Gif title={title} url={url} key={id} id={id} />
        ))}
      </div>
      <div className="btnContainer">
        <button onClick={handlePage}>Show More</button>
      </div>
    </div>
  );
}
