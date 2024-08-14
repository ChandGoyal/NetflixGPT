import { BG_URL } from "../utils/Constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="relative w-full flex justify-center">
        <GPTSearchBar />
      </div>
      <GPTMovieSuggestions />
    </>
  );
};

export default GPTSearch;
