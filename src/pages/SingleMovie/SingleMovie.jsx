import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieContext from "../../context/MovieContext";

import "../../assets/styles/singleMovie.scss";
import Spinner from "../../components/Loader";
import BackButton from "../../components/BackButton";
import { ReactComponent as StarIcon } from "../../assets/icons/starIcon.svg";
import DetailsButton from "../../components/DetailsButton";
import Reviews from "../../components/Reviews";
import Cast from "../../components/Cast";
import SimilarMovies from "../../components/SimilarMovies";

function SingleMovie() {
  const {
    singleMovie,
    fetchMovie,
    fetchCasts,
    isLoading,
    reviews,
    isError,
    fetchSimilar,
    similarMovies,
  } = useContext(MovieContext);

  const { id, type } = useParams();

  const movieUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  useEffect(() => {
    fetchMovie(id, type);
    fetchCasts(id, type);
    fetchSimilar(id, type);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>There are no movies that matched your query.</h1>;
  }

  const duration = Math.floor(similarMovies?.runtime / 60);

  return (
    <div className="single-movie relative break-words">
      <div className="absolute z-40 left-5 top-10">
        <BackButton url={"/"} />
      </div>

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
            <h4>{singleMovie.runtime}</h4>
            <div className="genre flex gap-2">
              {singleMovie.genres?.map((name) => (
                <h3 key={name.id}>{name.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
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
          {reviews && (
            <p className="text-center text-lg text-[#878D95]">
              {reviews.length} Reviews
            </p>
          )}
        </div>
        {reviews ? (
          <Reviews />
        ) : (
          <>
            <DetailsButton id={id} type={type} />
            <div className="flex flex-col gap-4 sm:gap-10">
              <div className="max-w-sm mx-auto">
                <h4 className="text-lg mb-4">Synopsis</h4>
                <p className="text-[#575F6B]">{singleMovie.overview}</p>
              </div>
              <div className="flex flex-col gap-5 my-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg">Cast & Crew</h4>
                  <h4 className="text-[#47CFFF]">
                    <Link to={`/singleMovie/${"Cast & Crew"}/${id}/${type}`}>
                      show more
                    </Link>
                  </h4>
                </div>
                <Cast />
              </div>
                
              <div>
                <h4 className="text-lg">Similar Movie</h4>
                <div className="flex items-start overflow-x-scroll gap-5 my-5 mx-auto">
                  {similarMovies?.map((movie) => (
                    <SimilarMovies id={id} key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleMovie;
