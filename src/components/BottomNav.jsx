import React from "react";
import { ReactComponent as MoviesIcon } from "../../src/assets/icons/moviesIcon.svg";

const BottomNav = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0">
      <div className="flex justify-between bg-white py-4 px-10">
        <MoviesIcon />
        <MoviesIcon />
        <MoviesIcon />
        <MoviesIcon />
      </div>
    </div>
  );
};

export default BottomNav;
