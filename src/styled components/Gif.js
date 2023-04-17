import styled from "@emotion/styled";
import { Link } from "wouter";

export const GifContainer = styled.section`
  height: 100%;
  position: relative;
  cursor: pointer;

  :nth-of-type(11n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  :nth-of-type(8n + 1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }

  :nth-of-type(10n + 3) {
    grid-column: span 2;
    grid-row: span 2;
  }

  :hover:nth-of-type(5n + 1) {
    box-shadow: 0 0 0 var(--gifShadow-size) var(--cyan);
  }

  :hover:nth-of-type(5n + 2) {
    box-shadow: 0 0 0 var(--gifShadow-size) var(--yellow);
  }

  :hover:nth-of-type(5n + 3) {
    box-shadow: 0 0 0 var(--gifShadow-size) var(--orange);
  }

  :hover:nth-of-type(5n + 4) {
    box-shadow: 0 0 0 var(--gifShadow-size) var(--green);
  }

  :hover:nth-of-type(5n + 5) {
    box-shadow: 0 0 0 var(--gifShadow-size) var(--purple);
  }

  :hover:nth-of-type(5n + 1) h4 {
    background-color: var(--cyan);
    color: black;
  }

  :hover:nth-of-type(5n + 2) h4 {
    background-color: var(--yellow);
    color: black;
  }

  :hover:nth-of-type(5n + 3) h4 {
    background-color: var(--orange);
    color: white;
  }

  :hover:nth-of-type(5n + 4) h4 {
    background-color: var(--green);
    color: black;
  }

  :hover:nth-of-type(5n + 5) h4 {
    background-color: var(--purple);
    color: white;
  }

  :nth-of-type(5n + 1) img {
    background-color: var(--cyan);
  }
  :nth-of-type(5n + 2) img {
    background-color: var(--yellow);
  }
  :nth-of-type(5n + 3) img {
    background-color: var(--orange);
  }
  :nth-of-type(5n + 4) img {
    background-color: var(--green);
  }
  :nth-of-type(5n + 5) img {
    background-color: var(--purple);
  }
`;

export const LinkStyled = styled(Link)`
  height: 100%;
  text-decoration: none;
  display: block;
  position: relative;
`;

export const H4Styled = styled.h4`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  font-size: 12px;
  color: #fff;
  margin: 0;
  position: absolute;
`;

export const ImgStyled = styled.img`
  width: 100%;
  //object-fit: contain;
  vertical-align: top;
  height: inherit;
  object-fit: cover;
`;
