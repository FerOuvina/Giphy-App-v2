import styled from "@emotion/styled";
import { Mobile, Tablet } from "../stylesheets/MediaQuerys";

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

  & > h1 {
    ${Mobile.max480} {
      font-size: 2rem;
      margin-bottom: 0;
      padding: 0;
    }

    ${Mobile.max568} {
      font-size: 2.2rem;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;

  ${Mobile.max480} {
    flex-direction: column;
  }

  ${Mobile.max568} {
    flex-direction: column;
  }

  ${Mobile.max640} {
    flex-direction: column;
  }

  ${Mobile.max736} {
    flex-direction: column;
  }

  ${Mobile.max812} {
    flex-direction: column;
  }

  ${Tablet.max834} {
    flex-direction: column;
  }
`;
