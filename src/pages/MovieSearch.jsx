import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeachedMovie from "../components/home/SeachedMovie";
import SearchInput from "../components/SearchInput";
import MovieContext from "../context/MovieContext";
import "../assets/styles/movieSearch.scss";
import Spinner from "../components/Loader";
import SearchResults from "../components/home/SearchResults";
import BackButton from "../components/BackButton";
import BottomNav from "../components/BottomNav";

function MovieSearch() {
  const { searchedFiltered, searchHandle, isLoading, isError } =
    useContext(MovieContext);
  const { search } = useParams();

  useEffect(() => {
    searchHandle(search);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <div className="movie-search container">
      <BackButton url="/"/>
      <SearchInput />
      <div className="flex">
        <SearchResults />
        {isError ? (
          <h1>There are no movies that matched your query.</h1>
        ) : (
          <div className="seached-movies">
            {searchedFiltered.map((movie) => (
              <SeachedMovie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <BottomNav/>
    </div>
  );
}

export default MovieSearch;
