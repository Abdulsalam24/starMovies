import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../../context/MovieContext";

function SearchResults() {
  const { movieSearched, setSearchedFiltered, setCat } =
    useContext(MovieContext);

  const [active, setActive] = useState("");

  const movies = movieSearched.filter((e) => {
    return e.media_type === "movie";
  });
  const tv = movieSearched.filter((e) => {
    return e.media_type === "tv";
  });

  const changeMedia = (media) => {
    const filtered = movieSearched.filter(
      (movie) => movie.media_type === media
    );
    setSearchedFiltered(filtered);
    setActive(media);
    setCat(media);
  };

  return (
    <div className="search-results">
      <div className="result-head">
        <p>Search Results</p>
      </div>

      <ul>
        <li
          className={active === "" ? "active" : ""}
          onClick={() => {
            setSearchedFiltered(movieSearched);
            setActive("");
          }}
        >
          <span>All</span>
          <i>({movieSearched.length})</i>
        </li>

        <li
          className={active === "movie" ? "active" : ""}
          onClick={() => changeMedia("movie")}
        >
          <span>Movies</span>
          <i>({movies.length})</i>
        </li>

        <li
          className={active === "tv" ? "active" : ""}
          onClick={() => changeMedia("tv")}
        >
          <span>Tv Shows</span>
          <i>({tv.length})</i>
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
