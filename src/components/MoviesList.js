import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = (props) => {
  const { title, movies } = props;
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl py-4 font-medium text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
