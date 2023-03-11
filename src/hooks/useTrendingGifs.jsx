import { useEffect, useState } from "react";
import getTrendingGifs from "../services/getTrendingGifs";

export default function useTrendingGifs() {
  const [gifs, setGifs] = useState([]);
  useEffect(
    function () {
      getTrendingGifs().then((gifs) => setGifs(gifs));
    },
    []
  );
  
  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return gifs;
}
