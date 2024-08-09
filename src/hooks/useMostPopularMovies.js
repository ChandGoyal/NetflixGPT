import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMostPopularMovies } from "../utils/moviesSlice";

const useMostPopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const mostPopularMovies = useSelector(
    (store) => store.movies.mostPopularMovies
  );

  const getMostPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addMostPopularMovies(json.results));
  };

  useEffect(() => {
    !mostPopularMovies && getMostPopularMovies();
  }, []);
};

export default useMostPopularMovies;
