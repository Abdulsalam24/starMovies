import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";

import "../assets/styles/singleMovie.scss";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { ReactComponent as StarIcon } from "../assets/icons/starIcon.svg";
import { ReactComponent as BackArrowIcon } from "../assets/icons/backArrowIcon.svg";

function SingleMovie() {
  const { singleMovie, fetchMovie, isLoading, isError } =
    useContext(MovieContext);

  const { id, type } = useParams();

  const movieUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  useEffect(() => {
    fetchMovie(id, type);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>There are no movies that matched your query.</h1>;
  }

  return (
    <div className="single-movie relative">
      <BackButton url={"/"} />

      <div
        className="relative hero h-[50vh] mb-40 bg"
        style={{
          backgroundImage: `url(${movieUrl}${singleMovie.backdrop_path}`,
        }}
      >
        <div className="img w-[167px] h-[250px] mx-auto pt-[25vh] sm:pt-[37vh] md:sm:pt-[26vh] md:w-[250px] md:h-[250px]">
          <img
            src={`${movieUrl}/${singleMovie.poster_path}`}
            alt={singleMovie.name || singleMovie.title}
          />
        </div>
        <div className="thumnail"></div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1>
            {singleMovie.title || singleMovie.name} {""}
          </h1>
          <div className="movie-genre text-[#969BA2]">
            <h4>{singleMovie.release_date || singleMovie.first_air_date}</h4>
            <div className="genre flex gap-2">
              {singleMovie.genres?.map((name) => (
                <h4 key={name.id}>{name.name}</h4>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-[30px]">
            {singleMovie.vote_average?.toString().slice(0, 3).split(".")}%
          </p>
          <div className="stars flex gap-2 text-xl">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>

        <div className="flex mt-10 mb-8 items-center justify-between text-white max-w-sm mx-auto border border-[#CFD1D5] w-full  rounded-3xl p-[4px] ">
          <button className="flex items-center justify-center gap-2 p-2 bg-[#E51937] rounded-2xl w-[50%]">
            Detail
          </button>
          <button className="w-[50%]  p-2 text-[#878D95]">Reviews</button>
          <button className="w-[50%]  p-2 text-[#878D95]">Showtime</button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-lg mb-4">Synopsis</h4>
            <p className="text-[#575F6B]">{singleMovie.overview}</p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Cast & Crew</h4>
            {/* <p className="text-[#575F6B]">{singleMovie.overview}</p> */}
          </div>
        </div>
        {/* <div className="creator">
          {singleMovie.created_by?.map((creator, index) => (
            <div key={index}>
              <h4>{creator.name}</h4>
              <p>creator</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default SingleMovie;
