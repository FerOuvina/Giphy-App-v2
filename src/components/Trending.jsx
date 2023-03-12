import React from "react";
import { Link } from "wouter";
import "../stylesheets/Trending.css";

export default function Trending({ name, options = [] }) {
  return (
    <div className="trendingSearches">
      <div className="trendingSearches__titleContainer">
        <h1 className="trendingSearches__titleContainer--title">{name}</h1>
      </div>
      <div className="trendingSearches__listContainer">
        <ul className="trendingSearches__list">
          {options.map((eachOption) => (
            <li key={eachOption} className="trendingSearches__list--li">
              <Link
                to={`/Giphy-App-v2/search/${eachOption}`}
                className="trendingSearches__list--li-link"
              >
                {eachOption}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
