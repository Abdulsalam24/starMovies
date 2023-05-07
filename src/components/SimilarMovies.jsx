import React, { useContext, useEffect } from "react";
import { movieUrl } from "../App";
import MovieContext from "../context/MovieContext";

const SimilarMovies = ({ movie, id }) => {
  const { fetchMovie } = useContext(MovieContext);

  let cat;

  useEffect(() => {
    cat = movie.title === undefined ? "tv" : "movie";
  });

  const handleFetch = () => {
    fetchMovie(movie.id, cat);
    // window.location.reload();
  };

  return (
    <div className="min-w-[50%] min-h-[100%] text-sm" onClick={handleFetch}>
      <img
        className="rounded-md mb-3"
        src={`${movieUrl}/${movie.poster_path}`}
        alt={movie.name || movie.title}
      />
      <p>{movie.name || movie.title}</p>
    </div>
  );
};

export default SimilarMovies;
