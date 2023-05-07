import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieContext from "../../context/MovieContext";
import SearchInput from "../SearchInput";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";

function Nav() {
  const { setNavSearch, navSearch } = useContext(MovieContext);
  const { pathname } = useLocation();

  return (
    <nav className="shadow-lg py-4 px-2">
      <div className="navbar w-[95%] mx-auto flex justify-between items-center">
        <h1>
          <Link to="/">Star Movie</Link>
        </h1>
        <div>
          <SearchIcon className="text-xl"/>
        </div>
      </div>
      {/* 
      {navSearch && !pathname.includes("movie-search") && (
        <div className="search">
          <SearchInput />
        </div>
      )} */}
    </nav>
  );
}

export default Nav;
