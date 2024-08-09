import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MoviesCard = (props) => {
  const { posterPath } = props;

  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-56 pr-4 rounded-md hover:cursor-pointer hover:scale-110 hover:opacity-80">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
  );
};

export default MoviesCard;
