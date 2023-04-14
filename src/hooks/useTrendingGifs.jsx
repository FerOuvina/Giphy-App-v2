import { useEffect, useContext, useState } from "react";
import getTrendingGifs from "../services/getTrendingGifs";
import gifContext from "../context/gifContext";

export default function useTrendingGifs() {
  const { gifs, setGifs } = useContext(gifContext);
  const [Loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getTrendingGifs().then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [setGifs, setLoading]
  );

  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return { gifs, Loading };
}
