import styled from "@emotion/styled";

export const GifContainer = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  grid-auto-rows: auto;
  grid-template-rows: min-content;
  grid-auto-flow: row dense;
  grid-gap: 2px;
  align-items: center;
`;