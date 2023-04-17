import styled from "@emotion/styled";
import { Link } from "wouter";
import { Mobile, Tablet } from "../stylesheets/MediaQuerys";

export const TrendingSearchesContainer = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 3rem;
  height: 100%;
  bottom: 1rem;
  width: 40%;
  max-width: 300px;

  ${Mobile.max480} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }

  ${Mobile.max568} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }

  ${Mobile.max640} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }

  ${Mobile.max736} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }

  ${Mobile.max812} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }

  ${Tablet.max834} {
    position: static;
    width: 100%;
    max-width: fit-content;
  }
`;

export const TrendingSearches = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  ${Mobile.max480} {
    align-items: center;
  }

  ${Mobile.max568} {
    align-items: center;
  }

  ${Mobile.max640} {
    align-items: center;
  }

  ${Mobile.max736} {
    align-items: center;
  }

  ${Mobile.max812} {
    align-items: center;
  }

  ${Tablet.max834} {
    align-items: center;
  }
`;

export const TrendingSearches__titleContainer = styled.div`
  padding: 0.8rem;
  color: white;
  text-align: right;

  ${Mobile.max480} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${Mobile.max568} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${Mobile.max640} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${Mobile.max736} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${Mobile.max812} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  
  ${Tablet.max834} {
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
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

  ${Mobile.max480} {
    text-align: center;
    justify-content: center;
    font-size: 1rem;
  }

  ${Mobile.max568} {
    text-align: center;
    justify-content: center;
  }

  ${Mobile.max640} {
    text-align: center;
    justify-content: center;
  }

  ${Mobile.max736} {
    text-align: center;
    justify-content: center;
  }

  ${Mobile.max812} {
    text-align: center;
    justify-content: center;
  }

  ${Tablet.max834} {
    text-align: center;
    justify-content: center;
  }
`;

export const TrendingSearches__listItem = styled.li`
  list-style: none;
  margin: 0.2rem;
  padding: 0.2rem;

  :nth-of-type(5n + 1) {
    background-color: var(--yellow);
  }

  :nth-of-type(5n + 2) {
    background-color: var(--green);
  }

  :nth-of-type(5n + 3) {
    background-color: var(--cyan);
  }

  :nth-of-type(5n + 4) {
    background-color: var(--lightOrange);
  }

  :nth-of-type(5n + 5) {
    background-color: var(--purple);
  }

  :hover:nth-of-type(5n + 1) {
    box-shadow: 0 0 0 4px var(--yellow);
  }

  :hover:nth-of-type(5n + 2) {
    box-shadow: 0 0 0 4px var(--green);
  }

  :hover:nth-of-type(5n + 3) {
    box-shadow: 0 0 0 4px var(--cyan);
  }

  :hover:nth-of-type(5n + 4) {
    box-shadow: 0 0 0 4px var(--lightOrange);
  }

  :hover:nth-of-type(5n + 5) {
    box-shadow: 0 0 0 4px var(--purple);
  }
`;

export const TrendingSearches__listLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
