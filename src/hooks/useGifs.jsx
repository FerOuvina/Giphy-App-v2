import { useEffect, useContext, useState } from "react";
import getGifs from "../services/getGifs";
import gifContext from "../context/gifContext";

const initialPage = 0;

export function useGifs({ keyword, rating }) {
  const { gifs, setGifs } = useContext(gifContext);
  const [Loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState();
  const [page, setPage] = useState(initialPage);

  useEffect(
    function () {
      setLoading(true)
      getGifs({ keyword, rating }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      });
    },
    [keyword, setGifs, rating]
  );

  useEffect(
    function () {
      if (page === initialPage) return;

      setLoadingPage(true);

      getGifs({ keyword, page, rating }).then((moreGifs) => {
        setGifs((prevGifs) => prevGifs.concat(moreGifs));
        setLoadingPage(false);
      });
    },
    [page, keyword]
  );

  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].title === "") {
      gifs[i].title = "No Title";
    }
  }

  return { gifs, loadingPage, setPage, Loading };
}
