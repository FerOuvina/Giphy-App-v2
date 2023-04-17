import React from "react";
import Gif from "./Gif";
import useTrendingGifs from "../hooks/useTrendingGifs";
import { GifContainer } from "../styled components/Gif";

export default function ListOfTrendingGifs() {
  const { gifs } = useTrendingGifs();

  return (
    <GifContainer>
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </GifContainer>
  );
}
