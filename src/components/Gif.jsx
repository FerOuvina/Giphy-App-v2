import React from "react";
import { Link } from "wouter";
import "../stylesheets/Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="gif">
      <Link to={`/Giphy-App-v2/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}
