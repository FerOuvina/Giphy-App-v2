import getGifById from "../services/getGifById";
import { useEffect, useState } from "react";
import { useGifs } from "./useGifs";

export default function useGifById({ id }) {
  const { gifs } = useGifs({});
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(
    function () {
      if (!gif) {
        // Call service if we don't have a gif
        getGifById({ id }).then((gif) => setGif(gif));
      }
    },
    [gif, id]
  );
  return { gif };
}
