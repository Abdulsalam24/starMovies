import React, { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";

const DetailsButton = ({ id, type }) => {

  const { fetchReviews, setReviews , reviews } = useContext(MovieContext);

  const handleReviews = () => {
    fetchReviews(id, type);
  };
  
  const handleDetails = () => {
    setReviews("");
  };

  return (
    <div className="flex mt-10 mb-8 items-center justify-between text-[#878D95] max-w-sm mx-auto border border-[#CFD1D5] w-full  rounded-3xl p-[4px]">
      <button
        className={`flex items-center justify-center gap-2 p-2 ${
          reviews === "" && "bg-[#E51937] text-white"
        } rounded-2xl w-[50%]`}
        onClick={handleDetails}
      >
        Detail
      </button>
      <button
        className={`w-[50%] p-2 text-[#878D95] rounded-2xl ${
          reviews !== "" && "bg-[#E51937] text-white"
        }`}
        onClick={handleReviews}
      >
        Reviews
      </button>
      <button className="w-[50%]  p-2 text-[#878D95]">Showtime</button>
    </div>
  );
};

export default DetailsButton;
