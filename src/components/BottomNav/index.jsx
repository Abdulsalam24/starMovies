import React from "react";
import { ReactComponent as MoviesIcon } from "../../assets/icons/moviesIcon.svg";
import { RiUserSearchLine, RiMovie2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bottomNav sticky bottom-0 left-0 right-0">
      <div className="flex justify-between items-center bg-white py-4 px-10">
        <Link to="/">
          <RiMovie2Line fill={pathname === "/" ? "#47CFFF" : "#999999"} />
        </Link>
        <Link to={`/movie-search/:search`}>
          <RiUserSearchLine
            fill={pathname.includes("movie-search") ? "#47CFFF" : "#999999"}
          />
        </Link>
        <BsPeople />
      </div>
    </div>
  );
};

export default BottomNav;
