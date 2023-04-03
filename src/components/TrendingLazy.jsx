import React, { Suspense } from "react";
import useObserver from "../hooks/useObserver";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useObserver({ distance: "250px" });

  return (
    <Suspense fallback={"Loading..."}>
      <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
    </Suspense>
  );
}
