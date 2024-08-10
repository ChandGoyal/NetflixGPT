import React, { useRef, useEffect } from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = (props) => {
  const { title, movies } = props;
  const scrollContainerRef = useRef(null);

  // Function to handle horizontal scroll
  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault(); // Prevent default vertical scroll behavior
      scrollContainerRef.current.scrollLeft += event.deltaY * 0.6; // Scroll horizontally based on vertical scroll
    }
  };

  // Disable page scroll when mouse is over the div
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const disablePageScroll = (event) => {
      event.preventDefault();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      scrollContainer.addEventListener("wheel", disablePageScroll, {
        passive: false,
      });
    }

    // Clean up event listeners on unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
        scrollContainer.removeEventListener("wheel", disablePageScroll);
      }
    };
  }, []);

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl py-4 font-medium text-white">
        {title}
      </h1>
      <div
        className="flex overflow-x-scroll"
        onWheel={handleScroll}
        ref={scrollContainerRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar on Windows
      >
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
