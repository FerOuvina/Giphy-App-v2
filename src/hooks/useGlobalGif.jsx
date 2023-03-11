import { useContext } from "react";
import gifContext from "../context/gifContext";

export default function useGlobalGif() {
  const { gifs } = useContext(gifContext);
  return gifs;
}
