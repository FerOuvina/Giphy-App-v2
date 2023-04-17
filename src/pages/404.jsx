import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ErrorContainer, Button } from "../styles/404";

const gifsID = ["14uQ3cOFteDaU", "9J7tdYltWyXIY", "UoeaPqYrimha6rdTFV"];

export default function Error() {
  const randomGif = () => {
    return `https://media.giphy.com/media/${
      gifsID[Math.floor(Math.random() * gifsID.length) + 1]
    }/giphy.gif`;
  };

  return (
    <ErrorContainer>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>

      <img
        src={randomGif()}
        alt="error 404 gif not found"
        className="errorContainer__gif--img"
      />

      <Link to="/Giphy-App-v2">
        <Button>Go back home</Button>
      </Link>
    </ErrorContainer>
  );
}
