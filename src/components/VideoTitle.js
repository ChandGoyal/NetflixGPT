import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black md:py-2 px-6 mr-2 mb-2 text-lg rounded-md font-semibold hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} />
          {" Play"}
        </button>
        <button className="hidden md:inline-block mr-2 mb-2 bg-[#6d6d6e] text-white font-semibold py-2 px-6 text-lg bg-opacity-70 rounded-md hover:bg-opacity-100">
          <FontAwesomeIcon icon={faCircleInfo} />
          {" More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
