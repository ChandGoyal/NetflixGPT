import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MoviesCard = (props) => {
  const { posterPath } = props;

  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-2 hover:cursor-pointer">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
  );
};

export default MoviesCard;
