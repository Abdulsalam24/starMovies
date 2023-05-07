import axios from 'axios'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import tmbd from '../api/tmbd';

const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [navSearch, setNavSearch] = useState(false);
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate()

  //search
  const [movieSearched, setMovieSearched] = useState([]);

  const [searchedFiltered, setSearchedFiltered] = useState([]);

  //single movie
  const [singleMovie, setSingleMovie] = useState({});

  const [cat, setCat] = useState('');

  //Reviews Movie
  const [reviews, setReviews] = useState('');

  const [movieDetails, setMovieDetails] = useState('');

  const [casts, setCasts] = useState(null);

  const [similarMovies, setSimilarMovies] = useState(null);

  // https://api.themoviedb.org/3/movie/447365/credits?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US

  const searchHandle = async (text) => {
    setIsLoading(true)
    try {
      if (text === "") {
        setIsError(true)
        setIsLoading(false)
      } else {
        const { data } = await tmbd.get(
          `https://api.themoviedb.org/3/search/multi?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1&include_adult=false&query=${text}`
        );
        setSearchedFiltered(data.results)
        setMovieSearched(data.results)
        setIsLoading(false)
        setNavSearch(false)
        setIsError(false)
        navigate(`/movie-search/${text}`)
      }

    } catch (error) {
      setIsError(true)
    }
  };

  const fetchMovies = async (cat) => {
    setCat(cat)
    try {
      const { data } = await tmbd.get(
        `${cat}/popular`
      );
      setPopular(data.results);
      setFiltered(data.results);
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  };

  const fetchMovie = async (id, type) => {

    console.log(id, type, 'movieee')

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US`
      );
      console.log(data, 'datadatadata')
      setSingleMovie(data)
      fetchCasts(id, type)
      navigate(`/singleMovie/${id}/${type}`)

      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  };

  const fetchReviews = async (id, type) => {
    const { data } = await tmbd.get(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
    );
    setReviews(data.results)
  }

  const fetchCasts = async (id, type) => {
    const { data } = await tmbd.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US`
    );
    setCasts(data.cast)
  }

  const fetchSimilar = async (id, type) => {
    const { data } = await tmbd.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
    );
    setSimilarMovies(data.results)
  }



  return (
    <MovieContext.Provider value={{
      fetchMovie,
      fetchMovies,
      fetchReviews,
      setFiltered,
      setPopular,
      searchHandle,
      setSearchedFiltered,
      setCat,
      setNavSearch,
      setMovieDetails,
      setReviews,
      fetchCasts,
      fetchSimilar,
      similarMovies,
      casts,
      movieDetails,
      reviews,
      navSearch,
      isError,
      isLoading,
      searchedFiltered,
      cat,
      popular,
      filtered,
      movieSearched,
      singleMovie,
    }}>
      {
        children
      }
    </MovieContext.Provider>
  )
}

export default MovieContext