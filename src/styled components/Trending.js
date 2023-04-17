import styled from "@emotion/styled";
import { Link } from "wouter";

export const TrendingSearchesContainer = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 3rem;
  height: 100%;
  bottom: 1rem;
  width: 40%;
  max-width: 300px;
`;

export const TrendingSearches = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const TrendingSearches__titleContainer = styled.div`
  padding: 0.8rem;
  color: white;
  text-align: right;
`;

export const TrendingSearches__listContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  background-color: var(--darkGreen);
  border: 1px solid var(--aquousGreen);
  border-radius: 10px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.11);
`;

export const TrendingSearches__list = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.3rem;
  margin: 1rem;
  text-align: right;
  list-style-position: inside;
`;

export const TrendingSearches__listItem = styled.li`
  list-style: none;
  margin: 0.2rem;
  padding: 0.2rem;

  :nth-child(5n + 1) {
    background-color: var(--yellow);
  }
  
  :nth-child(5n + 2) {
    background-color: var(--green);
  }
  
  :nth-child(5n + 3) {
    background-color: var(--cyan);
  }
  
  :nth-child(5n + 4) {
    background-color: var(--lightOrange);
  }
  
  :nth-child(5n + 5) {
    background-color: var(--purple);
  }
  
  :hover:nth-child(5n + 1) {
    box-shadow: 0 0 0 4px var(--yellow);
  }
  
  :hover:nth-child(5n + 2) {
    box-shadow: 0 0 0 4px var(--green);
  }
  
  :hover:nth-child(5n + 3) {
    box-shadow: 0 0 0 4px var(--cyan);
  }
  
  :hover:nth-child(5n + 4) {
    box-shadow: 0 0 0 4px var(--lightOrange);
  }
  
  :hover:nth-child(5n + 5) {
    box-shadow: 0 0 0 4px var(--purple);
  }
`;

export const TrendingSearches__listLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
