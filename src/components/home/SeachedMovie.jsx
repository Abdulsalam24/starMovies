import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../context/MovieContext";

function SeachedMovie({ movie }) {
  const {
    id,
    overview,
    name,
    title,
    release_date,
    first_air_date,
    backdrop_path,
    media_type,
  } = movie;

  const { fetchMovie } = useContext(MovieContext);


  return (
    <div className="seached-movie">
      <div className="img-div" onClick={() => fetchMovie(id,media_type)}>
        <div className="img">
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
        </div>
      </div>
      
      <div className="movie-info">
        <h4>{title || name}</h4>
        <span>{release_date || first_air_date}</span>
        <p>
          {overview}
        </p>
      </div>
    </div>
  );
}

export default SeachedMovie;
