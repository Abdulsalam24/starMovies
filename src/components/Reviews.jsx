import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { ReactComponent as StarIcon } from "../assets/icons/starIcon.svg";
import Spinner from "./Loader";
import DetailsButton from "./DetailsButton";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { singleMovie, isLoading, reviews, isError } = useContext(MovieContext);

  const movieUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
  const { id, type } = useParams();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }



  return (
    <>
      <DetailsButton id={id} type={type} />
      <div className="flex flex-col gap-7 w-[95%] my-10 mx-auto ">
        {reviews.map((reviews) => (
          <div
            key={reviews.id}
            className="relative flex flex-col gap-4 items-start"
          >
            <div className="shadow-lg px-5 py-5">
              <div className="flex flex-col items-start">
                <div className="stars flex gap-2 text-xl">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="line-clamp-4 ">{reviews.content}</p>
              </div>
            </div>

            {/* <div className="h-[18px] w-[18px] bg-red-600">
                  <PolygonIcon className="absolute bottom-2 outline outline-red-600" />
                </div> */}

            <div className="flex gap-3 pl-4">
              <div className="">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src={`${movieUrl}/${reviews.author_details.avatar_path}`}
                  alt=""
                />
              </div>
              <div className="text-sm">
                <p>{reviews.author}</p>
                <p>{reviews.created_at}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
