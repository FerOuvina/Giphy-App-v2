import React from "react";
import { Link } from "wouter";
import "../stylesheets/Gif.css";

export default function Gif({ title, id, url }) {
  function inspectGif() {
    setTimeout(() => {
      if (location.pathname.includes("gif")) {
        let gif = document.querySelector(".gifImg");
        gif.style.width = "800px";
        console.log(gif);
      }
    }, 10);
  }
  return (
    <div className="gif" onClick={inspectGif}>
      <Link to={`/Giphy-App-v2/gif/${id}`} className="gif__link">
        <h4>{title}</h4>
        <img src={url} alt={title} className="gifImg" />
      </Link>
    </div>
  );
}
