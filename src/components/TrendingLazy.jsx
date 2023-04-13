import React, { Suspense } from "react";
import useObserver from "../hooks/useObserver";
import Spinner from "./LoadingSpinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useObserver({ distance: "250px" });

  return (
    <Suspense fallback={<Spinner />}>
      <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
    </Suspense>
  );
}
