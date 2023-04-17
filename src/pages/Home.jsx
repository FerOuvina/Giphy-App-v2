import React from "react";
import ListOfTrendingGifs from "../components/ListOfTrendingGifs";
import Spinner from "../components/LoadingSpinner";
import LazyTrending from "../components/TrendingLazy";
import useTrendingGifs from "../hooks/useTrendingGifs";
import { Helmet } from "react-helmet";
import {
  FlexContainer,
  HomeWrapper,
  HomeWrapper__TitleContainer,
} from "../styled components/Home";

export default function Home() {
  const { Loading } = useTrendingGifs();

  if (Loading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );

  return (
    <HomeWrapper>
      <Helmet>
        <title>Giphy | Awesome Gifs</title>
        <meta name="rating" content="General" />
        <meta name="description" content="Gif searcher" />
      </Helmet>
      <HomeWrapper__TitleContainer>
        <h1>Trending Gifs</h1>
      </HomeWrapper__TitleContainer>
      <FlexContainer>
        <ListOfTrendingGifs />
        <LazyTrending />
      </FlexContainer>
    </HomeWrapper>
  );
}
