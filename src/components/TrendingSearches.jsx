import React, { useEffect, useState } from "react";
import getTrendingSearches from "../services/getTrendingSearches";
import Trending from "./Trending";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(function () {
    getTrendingSearches().then(setTrends);
  }, []);
  return <Trending name="Trending Searches" options={trends} />;
}
