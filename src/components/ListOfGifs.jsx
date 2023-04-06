import React, { useEffect, useRef, useCallback } from "react";
import Gif from "./Gif";
import useGifs from "../hooks/useGifs";
import "../stylesheets/ListOfGifs.css";
import useObserver from "../hooks/useObserver";
import debounce from "just-debounce-it";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useObserver({ distance : '200px', externalRef, once: false });
  console.log(isNearScreen)

  const debounceHandleNextPage = useCallback(debounce(() => {
    setPage((prevPage) => prevPage + 1), 200
  }), [])

  useEffect(function(){
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <div>
      <div className="gifContainerMain">
        {gifs.map(({ title, id, url }) => (
          <Gif title={title} url={url} key={id} id={id} />
        ))}
      </div>
      <div className="watch" ref={externalRef}></div>
    </div>
  );
}
