import React from "react";
import ListOfGifs from "../components/ListOfGifs";
import { GifsContainer } from "../styled components/Gifs";

export default function Gifs({ params }) {
  return (
    <GifsContainer>
      <ListOfGifs params={params} />
    </GifsContainer>
  );
}
