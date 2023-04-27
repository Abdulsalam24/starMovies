import axios from 'axios'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import tmbd from '../api/tmbd';
const MovieContext = createContext()


export const MovieContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [navSearch, setNavSearch] = useState(false);

  const navigate = useNavigate()
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //search
  const [movieSearched, setMovieSearched] = useState([]);
  const [searchedFiltered, setSearchedFiltered] = useState([]);

  //single movie
  const [singleMovie, setSingleMovie] = useState({});

  const [cat, setCat] = useState('');

  const fetchMovies = async (cat) => {
    setCat(cat)
    try {
      // const { data } = await axios.get(
      //   `https://api.themoviedb.org/3/${cat}/popular?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
      // );
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


  const fetchMovie = async (id, media) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US`
      );
      setSingleMovie(data)
      navigate(`/singleMovie/${id}/${media}`)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  };

  return (
    <MovieContext.Provider value={{
      fetchMovie,
      fetchMovies,
      setFiltered,
      setPopular,
      searchHandle,
      setSearchedFiltered,
      setCat,
      setNavSearch,
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