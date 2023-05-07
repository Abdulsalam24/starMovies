import React, { useContext } from "react";
import BackButton from "../../components/BackButton";

import { useParams } from "react-router-dom";
import MovieContext from "../../context/MovieContext";

const ShowMore = ({ children }) => {

  const { viewMore, id, type } = useParams();

  return (
    <div className="relative">
      <div className="flex py-5 px-4 items-center justify-between shadow-lg w-full">
        <div>
          <BackButton url={`/singleMovie/${id}/${type}`} />
        </div>
        <h3 className="text-center flex-1">{viewMore}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default ShowMore;
