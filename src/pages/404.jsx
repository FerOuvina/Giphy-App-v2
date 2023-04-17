import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import '../stylesheets/404.css'

const gifsID = [
  "14uQ3cOFteDaU",
  "9J7tdYltWyXIY",
  "UoeaPqYrimha6rdTFV",
];

export default function Error() {
  const randomGif = () => {
    return `https://media.giphy.com/media/${
      gifsID[Math.floor(Math.random() * gifsID.length) + 1]
    }/giphy.gif`;
  };

  return (
    <div className="errorContainer">
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>

      <div className="errorContainer__gif">
        <img
          src={randomGif()}
          alt="error 404 gif not found"
          className="errorContainer__gif--img"
        />
      </div>

      <div className="errorContainer__btn">
        <Link to="/Giphy-App-v2">
          <button>Go back home</button>
        </Link>
      </div>
    </div>
  );
}
