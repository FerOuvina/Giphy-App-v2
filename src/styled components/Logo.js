import styled from "@emotion/styled";
import { Mobile } from "../stylesheets/MediaQuerys";

export const LogoContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const LogoContainerImg = styled.img`
  border-radius: 10px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  width: 180px;

  ${Mobile.max480} {
    width: 100px;
  }

  ${Mobile.max568} {
    width: 130px;
  }

  ${Mobile.max640} {
    width: 150px;
  }
`;
