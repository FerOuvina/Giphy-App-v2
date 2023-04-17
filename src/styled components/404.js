import styled from "@emotion/styled";

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--lightOrange);
  border: 2px solid var(--lightOrange);

  &:hover {
    box-shadow: 0 0 0 4px var(--lightOrange);
  }
`;
