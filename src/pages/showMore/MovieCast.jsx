import { useContext, useEffect, useState } from "react";
import Cast from "../../components/Cast";
import MovieContext from "../../context/MovieContext";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { fetchCasts } = useContext(MovieContext);

  const [itemsToShow, setItemsToShow] = useState(6);

  const { id, type } = useParams();
  const showMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  const showLess = () => {
    setItemsToShow(6);
  };

  useEffect(() => {
    fetchCasts(id, type);
    setItemsToShow(12);
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <Cast itemsToShow={itemsToShow} />
      <div className="cursor-pointer">
        {itemsToShow > 20 ? (
          <p
            onClick={showLess}
            className="text-[#47CFFF] text-sm text-right my-5"
          >
            Show less ...
          </p>
        ) : (
          <p
            onClick={showMore}
            className="text-[#47CFFF] text-sm text-right my-5"
          >
            Show more ...
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCast;
