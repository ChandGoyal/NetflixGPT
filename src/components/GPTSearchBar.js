import { genAI } from "../utils/genAI";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      if (!json.results || json.results.length === 0) {
        throw new Error("No results found for " + movie);
      }

      return json.results;
    } catch (error) {
      console.error("Error searching TMDB for movie:", movie, error);
      throw error;
    }
  };

  const handleGptSearchClick = async () => {
    setErrorMessage(""); // Reset any previous error messages

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of top matching movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text().split(",");
      //   console.log(text);

      const promiseArray = text.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      //   console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: text, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error in GPT search or TMDB search:", error);
      setErrorMessage(
        "Failed to retrieve movie recommendations. Please try again."
      );
    }
  };

  return (
    <div className="absolute top-[150px] w-full flex flex-col items-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 h-12 px-3 text-white bg-[#050504] bg-opacity-85 border border-gray-500 rounded-lg focus:outline-none focus:border-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 h-12 mx-2 bg-[#C11119] text-white rounded-lg hover:bg-red-800 transition-all"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      {/* Display error message if there's an error */}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default GPTSearchBar;
