import React from "react";
import { Link } from "wouter";
import { LogoContainer, LogoContainerImg } from "../styled components/Logo";
import PageLogo from '/Logo.png'

export default function Logo() {
  return (
    <LogoContainer>
      <figcaption>
        <Link to="/Giphy-App-v2">
          <LogoContainerImg
            src={PageLogo}
            alt="Page Logo"
            title="Home"
          ></LogoContainerImg>
        </Link>
      </figcaption>
    </LogoContainer>
  );
}
