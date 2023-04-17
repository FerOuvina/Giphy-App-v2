import React from "react";
import { Link } from "wouter";
import { LogoContainer, LogoContainerImg } from "../styled components/Logo";

export default function Logo() {
  return (
    <LogoContainer>
      <figcaption>
        <Link to="/Giphy-App-v2">
          <LogoContainerImg
            src="/Logo.png"
            alt="Page Logo"
            title="Home"
          ></LogoContainerImg>
        </Link>
      </figcaption>
    </LogoContainer>
  );
}
