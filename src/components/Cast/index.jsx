import React, { useContext, useState } from "react";
import MovieContext from "../../context/MovieContext";
import { ReactComponent as MenuIcon } from "../../assets/icons/menuIcon.svg";
import { movieUrl } from "../../App";

const Cast = ({ itemsToShow }) => {
  const { casts } = useContext(MovieContext);

  return (
    <div className="flex flex-col overflow-x-scroll gap-7 sm:flex-row sm:gap-0">
      {casts?.slice(0, itemsToShow || 6).map((cast) => (
        <div
          key={cast.id}
          className="flex gap-5 items-center justify-between sm:flex-col sm:min-w-[25%] md:min-w-[16%]"
        >
          <div>
            <img
              className="object-cover w-[60px] h-[60px] rounded-full"
              src={`${movieUrl}/${cast.profile_path}`}
              alt=""
            />
          </div>
          <p className="flex-1 text-base text-[#0F1B2B] font-bold">
            {cast.name}
          </p>
          <MenuIcon className="sm:hidden"/>
          <p className="flex-1 text-xs text-right">{cast.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
