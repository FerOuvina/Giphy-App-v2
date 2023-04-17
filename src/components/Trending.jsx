import React from "react";
import {
  TrendingSearches,
  TrendingSearches__list,
  TrendingSearches__listContainer,
  TrendingSearches__listItem,
  TrendingSearches__listLink,
  TrendingSearches__titleContainer,
} from "../styled components/Trending";

export default function Trending({ name, options = [] }) {
  return (
    <TrendingSearches>
      <TrendingSearches__titleContainer>
        <h1>{name}</h1>
      </TrendingSearches__titleContainer>
      <TrendingSearches__listContainer>
        <TrendingSearches__list>
          {options.map((eachOption) => (
            <TrendingSearches__listItem
              key={eachOption}
              className="trendingSearches__list--li"
            >
              <TrendingSearches__listLink
                to={`/Giphy-App-v2/search/${eachOption}`}
                className="trendingSearches__list--li-link"
              >
                {eachOption}
              </TrendingSearches__listLink>
            </TrendingSearches__listItem>
          ))}
        </TrendingSearches__list>
      </TrendingSearches__listContainer>
    </TrendingSearches>
  );
}
