import React, { useContext, useEffect } from 'react'
import MovieContext from '../context/MovieContext';
import movieDefault from '../assets/img/default-movie.png'
import { ReactComponent as StarIcon } from '../assets/icons/starIcon.svg';

const Movie = ({ movie }) => {


    let cat
    useEffect(() => {
        cat = movie.title === undefined ? "tv" : "movie"
    })

    const { fetchMovie } = useContext(MovieContext);

    const { name, id, title, release_date, first_air_date, vote_average, backdrop_path } = movie

    return (
        <div className="max-w-sm break-words" onClick={() => fetchMovie(id, cat)}>
            <div className="h-[300px] w-[250px]">
                <img className='object-cover h-full w-full' src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={title || name}
                    onError={(error) => {
                        error.target.src = this.movieDefault;
                    }}
                />
            </div>

            <div className="flex flex-col gap-4 py-4">
                <div className="stars flex gap-2 text-xl">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <h4 className='break-all font-bold'>{title || name}</h4>
                <p className="text-[12px]"> {release_date || first_air_date}</p>
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