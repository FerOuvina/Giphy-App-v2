import { useEffect, useState, useContext } from "react";
import getTrendingGifs from "../services/getTrendingGifs";
import gifContext from "../context/gifContext";

export default function useTrendingGifs() {
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(gifContext);
  useEffect(
    function () {
      getTrendingGifs().then((gifs) => setGifs(gifs));
    },
    [setGifs]
  );
  
  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return gifs;
}
