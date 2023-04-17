import React from "react";
import { GifContainer, LinkStyled, H4Styled, ImgStyled } from "../styled components/Gif";

function Gif({ title, id, url }) {
  function inspectGif() {
    setTimeout(() => {
      let gif = document.querySelector(".gif__img");
      gif.style.width = "800px";
    }, 10);
  }
  if (location.pathname.includes("gif")) {
    inspectGif();
  }

  return (
    <GifContainer>
      <H4Styled>{title}</H4Styled>
      <LinkStyled to={`/Giphy-App-v2/gif/${id}`}>
        <ImgStyled src={url} alt={title} className="gif__img"></ImgStyled>
      </LinkStyled>
    </GifContainer>
  );
}

export default React.memo(Gif);
