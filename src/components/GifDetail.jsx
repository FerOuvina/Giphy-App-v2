import React from "react";
import useGifById from "../hooks/useGifById";
import Gif from "./Gif";

export default function ({ params }) {
  const { gif } = useGifById({ id: params.id });

  return <Gif {...gif} />;
}
