import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useMostPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-[#141414]">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MainContainer
        - Video Background
        - Video Title
      SecondaryContainer
        - Movies List * n
          - Cards * n
       */}
    </div>
  );
};

export default Browse;
