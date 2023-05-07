import React, { useContext, useEffect } from 'react'
import MovieContext from '../../context/MovieContext';
import movieDefault from '../../assets/img/default-movie.png'
import { ReactComponent as StarIcon } from '../../assets/icons/starIcon.svg';

const Movie = ({ movie }) => {
    let cat
    useEffect(() => {
        cat = movie.title === undefined ? "tv" : "movie"
    })
    const { fetchMovie } = useContext(MovieContext);

    const { name, id, title, release_date, first_air_date, backdrop_path, poster_path } = movie

    return (
        <div className="cursor-pointer" onClick={() => fetchMovie(id, cat)}>
            <div className="h-[300px] w-full rounded-lg">
                <img className='object-cover h-full w-full' src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={title || name}
                    onError={(error) => {
                        error.target.src = this.movieDefault;
                    }}
                />
            </div>

            <div className="flex flex-col gap-2 py-4">
                <div className="stars flex gap-2 text-sm">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <h4>{title || name}</h4>
                <h4 className="text-xs"> {release_date || first_air_date}</h4>
            </div>
            {/* <div className="rate">
                <div className="score">
                    <p>
                        <span>
                            {vote_average
                                ?.toString()
                                .slice(0, 3)
                                .split(".")}
                            %
                        </span>
                    </p>
                </div>
            </div> */}
        </div>
    )
}


export default Movie