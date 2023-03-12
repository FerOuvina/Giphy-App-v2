import { useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import gifContext from "../context/gifContext";

export default function useGifs({ keyword }) {
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(gifContext);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword, setGifs]
  );

  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return gifs;
}
