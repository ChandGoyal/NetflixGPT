import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-[#141414]">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MoviesList title={"Most Popular"} movies={movies?.mostPopularMovies} />
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
