import React from "react";
import useGlobalGif from "../hooks/useGlobalGif";
import Gif from "./Gif";

export default function ({ params }) {
  const gifs = useGlobalGif();
  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  return <Gif {...gif} />;
}
