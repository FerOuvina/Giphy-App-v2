import styled from "@emotion/styled";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapper__TitleContainer = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  & > h1 {
    font-size: 3rem;
    color: white;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;
