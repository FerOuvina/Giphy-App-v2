import React, { Suspense } from "react";
import useObserver from "../hooks/useObserver";
import Spinner from "./LoadingSpinner";
import { TrendingSearchesContainer } from "../styled components/Trending";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useObserver({ distance: "250px" });

  return (
    <Suspense fallback={<Spinner />}>
      <TrendingSearchesContainer ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</TrendingSearchesContainer>
    </Suspense>
  );
}
