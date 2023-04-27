import React, { useContext, useEffect } from "react";
import Movie from "../Movie";
import Button from "../Button";
import MovieContext from "../../context/MovieContext";
import { ReactComponent as PlayIcon } from "../../assets/icons/playIcon.svg";

function Popular() {
  const { filtered } = useContext(MovieContext);

  return (
    <div className="container">
      <div className="flex items-center justify-between text-white max-w-sm mx-auto border border-[#CFD1D5] w-full  rounded-3xl p-[4px] ">
        <button className="flex items-center justify-center gap-2 p-2 bg-[#E51937] rounded-2xl w-[50%]">
          <PlayIcon /> <span>Now Showing</span>
        </button>
        <button className="w-[50%]  p-2 text-[#878D95]">Coming Soon</button>
      </div>

      <div className="my-4">
        <div className="flex flex-wrap gap-5 justify-center">
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
