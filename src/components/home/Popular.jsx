import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import Button from "../BackButton";
import MovieContext from "../../context/MovieContext";
import { ReactComponent as PlayIcon } from "../../assets/icons/playIcon.svg";

function Popular() {
  const { filtered, setCat, cat, fetchMovies } =
    useContext(MovieContext);

  return (
    <div className="container">
      <div className="flex items-center justify-between text-gray-500 max-w-sm mx-auto border border-[#CFD1D5] w-full  rounded-3xl p-[4px] ">
        <button
          className={`flex items-center justify-center gap-2 p-2 ${
            cat === "movie" && "bg-[#E51937] text-white"
          } rounded-2xl w-[50%]`}
          onClick={() => {
            fetchMovies("movie");
            setCat("movie");
          }}
        >
          <PlayIcon /> <span>Movies</span>
        </button>
        <button
          className={`flex items-center justify-center gap-2 p-2 ${
            cat === "tv" && "bg-[#E51937]  text-white"
          } rounded-2xl w-[50%]`}
          onClick={() => {
            fetchMovies("tv");
            setCat("tv");
          }}
        >
          Tv
        </button>
      </div>

      

      <div className="my-4">
        <div className="grid  grid-cols-new4 gap-4 items-center justify-center">
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
