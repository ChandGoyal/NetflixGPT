import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div>
      <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MoviesList title={"Most Popular"} movies={movies?.mostPopularMovies} />
      <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
