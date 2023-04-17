import React, { useEffect, useRef, useCallback } from "react";
import Gif from "./Gif";
import { useGifs } from "../hooks/useGifs";
import useObserver from "../hooks/useObserver";
import debounce from "just-debounce-it";
import Spinner from "../components/LoadingSpinner";
import { Helmet } from "react-helmet";
import { RATINGS } from "../services/settings";
import { GifContainer } from "../styled components/ListOfGifs";

export default function ListOfGifs({ params }) {
  const { keyword, rating = RATINGS[0] } = params;
  const { gifs, setPage, Loading } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useObserver({
    distance: "200px",
    externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => {
      setPage((prevPage) => prevPage + 1), 200;
    }),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  const title = gifs ? decodeURI(`Searching ${keyword} gifs | Giphy`) : "";

  if (Loading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title}`} />
      </Helmet>
      <GifContainer>
        {gifs.map(({ title, id, url }) => (
          <Gif title={title} url={url} key={id} id={id} />
        ))}
      </GifContainer>
      <div className="watch" ref={externalRef}></div>
    </>
  );
}
