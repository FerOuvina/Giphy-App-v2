import styled from "@emotion/styled";
import { Mobile } from "../stylesheets/MediaQuerys";

export const GifContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  grid-auto-rows: auto;
  grid-template-rows: min-content;
  grid-auto-flow: row dense;
  grid-gap: 2px;
  align-items: center;

  ${Mobile.max480} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  ${Mobile.max568} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
