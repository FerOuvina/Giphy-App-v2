import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword }) {
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

  return gifs;
}
