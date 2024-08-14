import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useMostPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="bg-[#141414]">
      <Header />
      {showGptSearch ? (
        <>
          <GPTSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
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
