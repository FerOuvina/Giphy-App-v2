import getGifById from "../services/getGifById";
import { useEffect, useState } from "react";
import { useGifs } from "./useGifs";

export default function useGifById({ id }) {
  const { gifs } = useGifs({});
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(
    function () {
      if (!gif) {
        setLoading(true);
        // Call service if we don't have a gif
        getGifById({ id })
          .then((gif) => {
            setGif(gif);
            setLoading(false);
            setError(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(true);
          });
      }
    },
    [gif, id]
  );
  return { gif, Loading, Error };
}
